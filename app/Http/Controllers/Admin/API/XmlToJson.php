<?php

namespace App\Http\Controllers\Admin\API;

use Exception;
use SimpleXMLElement;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class XmlToJson {
    private $xml;
    private $segments = [];
    private $fareInfoCache = [];
    private $flightDetailsCache = [];
    private $currency;

    public function __construct( $xmlContent ) {
        $this->xml = new SimpleXMLElement( $xmlContent );
        $this->xml->registerXPathNamespace( 'air', 'http://www.travelport.com/schema/air_v52_0' );
        $this->currency = ( string )$this->xml->xpath( '//air:LowFareSearchRsp/@CurrencyType' )[ 0 ] ?? 'USD';
        $this->initializeCache();
    }

    private function initializeCache() {
        $fareInfos = $this->xml->xpath('//air:FareInfo');
        $flightDetails = $this->xml->xpath('//air:FlightDetailsList/air:FlightDetails');
        $segments = $this->xml->xpath('//air:AirSegment');

        // Cache all data in one pass
        foreach ($fareInfos as $fareInfo) {
            $this->cacheFareInfo($fareInfo);
        }
        foreach ($flightDetails as $detail) {
            $this->cacheFlightDetail($detail);
        }
        foreach ($segments as $segment) {
            $this->cacheSegment($segment);
        }
    }

    private function cacheFareInfo( $fareInfo ) {
        $key = ( string )$fareInfo[ 'Key' ];
        $fareRuleKey = $fareInfo->xpath( './/air:FareRuleKey' )[ 0 ] ?? null;

        $this->fareInfoCache[ $key ] = [
            'fareBasis' => ( string )$fareInfo[ 'FareBasis' ],
            'passengerType' => ( string )$fareInfo[ 'PassengerTypeCode' ] ?? 'ADT',
            'baggage' => $this->parseBaggageInfo( $fareInfo ),
            'fareRuleKey' => [
                'fareinforef' => ( string )( $fareRuleKey[ 'FareInfoRef' ] ?? null ),
                'providerCode' => ( string )( $fareRuleKey[ 'ProviderCode' ] ?? '1G' ),
                'content' => ( string )$fareRuleKey
            ]
        ];
    }

    private function parseBaggageInfo( $fareInfo ) {
        return [
            'pieces' => ( int )( $fareInfo->xpath( './/air:NumberOfPieces' )[ 0 ] ?? 0 ),
            'maxWeight' => ( string )( $fareInfo->xpath( './/air:MaxWeight' )[ 0 ] ?? '' )
        ];
    }

    private function cacheFlightDetail( $detail ) {
        $key = ( string )$detail[ 'Key' ];
        $this->flightDetailsCache[ $key ] = [
            'originTerminal' => ( string )$detail[ 'OriginTerminal' ],
            'destinationTerminal' => ( string )$detail[ 'DestinationTerminal' ]
        ];
    }

    private function cacheSegment( $segment ) {
        $key = ( string )$segment[ 'Key' ];
        $flightDetailsKey = ( string )( $segment->xpath( './air:FlightDetailsRef/@Key' )[ 0 ] ?? '' );
        $flightDetails = $this->flightDetailsCache[ $flightDetailsKey ] ?? [];

        $this->segments[ $key ] = $this->parseSegment( $segment, $flightDetails );
    }

    private function parseSegment( $segment, $flightDetails ) {
        // Helper function to format datetime
        $formatTime = function($datetime) {
            return date('h:i A', strtotime($datetime));
        };

        $departureTime = strtotime((string)$segment['DepartureTime']);
        $arrivalTime = strtotime((string)$segment['ArrivalTime']);

        return [
            'carrier_code' => (string)$segment['Carrier'],
            'flightNumber' => (string)$segment['FlightNumber'],
            'flight' => (string)$segment['Carrier'] . (string)$segment['FlightNumber'],
            'departure_code' => (string)$segment['Origin'],
            'arrival_code' => (string)$segment['Destination'],
            'departure_time' => $formatTime((string)$segment['DepartureTime']),
            'arrival_time' => $formatTime((string)$segment['ArrivalTime']),
            'departure_date' => date('Y-m-d', $departureTime),
            'arrival_date' => date('Y-m-d', $arrivalTime),
            'flightTime' => (int)$segment['FlightTime'],
            'flightTime1' => $this->formatDuration((int)$segment['FlightTime']),
            'layover_time' => null,  // Will be calculated when segments are processed
            'originTerminal' => $flightDetails['originTerminal'] ?? '',
            'destinationTerminal' => $flightDetails['destinationTerminal'] ?? '',
            'booking_code' => '',
            'booking_count' => 0,
            'cabin_class' => '',
            'segmentKey' => '',
            'equipment' => (string)$segment['Equipment']
        ];
    }

    private function processPricingSolution( $solution ) {
        $commonInfo = $this->processCommonInfo( $solution );
        $segmentOrganizer = $this->processSegments( $solution );

        return $this->buildJourney(
            $segmentOrganizer[ 'outbound' ],
            $segmentOrganizer[ 'inbound' ],
            $commonInfo,
            $segmentOrganizer[ 'isReturn' ]
        );
    }

    private function processCommonInfo( $solution ) {
        $commonInfo = [
            'key' => ( string )$solution[ 'Key' ],
            'totalPrice' => 0,
            'currency' => $this->currency,
            'refundable' => ( string )( $solution->xpath( './/air:AirPricingInfo/@Refundable' )[ 0 ] ?? 'false' ) === 'true',
            'pricingMethod' => ( string )( $solution->xpath( './/air:AirPricingInfo/@PricingMethod' )[ 0 ] ) ?? 'Not Found',
            'priceBreakdown' => $this->calculatePriceBreakdown( $solution ),
            'penalties' => $this->getPenalties( $solution ),
            'farerulekey' => $this->getFareRuleKeys( $solution )
        ];

        // Calculate total price
        $commonInfo[ 'totalPrice' ] = array_sum( array_column( $commonInfo[ 'priceBreakdown' ], 'totalPrice' ) );

        return $commonInfo;
    }

    private function calculatePriceBreakdown( $solution ) {
        $priceBreakdown = [];

        foreach ($solution->xpath('.//air:AirPricingInfo') as $pricingInfo) {
            $fareInfoRef = (string)($pricingInfo->xpath('./air:FareInfoRef/@Key')[0] ?? '');
            $passengerType = $this->mapPassengerType($this->fareInfoCache[$fareInfoRef]['passengerType'] ?? 'ADT');
            $passengerCount = (int)($pricingInfo['NumberOfPassengers'] ?? 1);

            $baseAmount = $this->extractNumericValue((string)$pricingInfo['ApproximateBasePrice']);
            $taxAmount = $this->extractNumericValue((string)$pricingInfo['ApproximateTaxes']);
            $totalPrice = $this->extractNumericValue((string)$pricingInfo['ApproximateTotalPrice']);

            if (!isset($priceBreakdown[$passengerType])) {
                $priceBreakdown[$passengerType] = [
                    'type' => $passengerType,
                    'baseFare' => $baseAmount * $passengerCount,
                    'taxes' => $taxAmount * $passengerCount,
                    'totalPrice' => $totalPrice * $passengerCount
                ];
                continue;
            }

            $priceBreakdown[$passengerType]['baseFare'] += $baseAmount * $passengerCount;
            $priceBreakdown[$passengerType]['taxes'] += $taxAmount * $passengerCount;
            $priceBreakdown[$passengerType]['totalPrice'] += $totalPrice * $passengerCount;
        }

        return array_values($priceBreakdown);
    }

    private function calculateFees( $pricingInfo ) {
        $fees = 0;
        foreach ( $pricingInfo->xpath( './/air:FareSurcharge/@Amount' ) as $fee ) {
            $fees += $this->extractNumericValue( ( string )$fee );
        }
        return $fees;
    }

    private function updatePriceBreakdown( &$breakdown, $type, $base, $tax, $fees, $total, $count ) {
        if ( !isset( $breakdown[ $type ] ) ) {
            $breakdown[ $type ] = [
                'type' => $type,
                'baseFare' => $base * $count,
                'taxes' => $tax * $count,
                'fees' => $fees * $count,
                'totalPrice' => $total * $count,
                'count' => $count
            ];
        } else {
            $breakdown[ $type ][ 'baseFare' ] += $base * $count;
            $breakdown[ $type ][ 'taxes' ] += $tax * $count;
            $breakdown[ $type ][ 'fees' ] += $fees * $count;
            $breakdown[ $type ][ 'totalPrice' ] += $total * $count;
            $breakdown[ $type ][ 'count' ] += $count;
        }
    }

    private function processSegments($solution) {
        $segmentRefs = $solution->xpath('.//air:AirSegmentRef');
        $segmentCount = count($segmentRefs);
        $midPoint = floor($segmentCount / 2);
        $isReturn = $this->isReturnJourney($segmentRefs);

        $outboundSegments = [];
        $inboundSegments = [];

        // First pass: collect all segments
        $allSegments = [];
        foreach ($segmentRefs as $index => $segmentRef) {
            $segmentKey = (string)$segmentRef['Key'];
            if (!isset($this->segments[$segmentKey])) continue;

            $segment = $this->segments[$segmentKey];
            $segment = $this->enrichSegment($segment, $segmentKey, $solution);
            $segment['route_group'] = $segment['departure_code'] . '-' . $segment['arrival_code'];
            $allSegments[] = $segment;
        }

        // Split segments into outbound and inbound
        $outboundSegments = [];
        $inboundSegments = [];
        foreach ($allSegments as $index => $segment) {
            if ($isReturn && $index >= $midPoint) {
                $inboundSegments[] = $segment;
            } else {
                $outboundSegments[] = $segment;
            }
        }

        // Process outbound segments
        for ($i = 0; $i < count($outboundSegments) - 1; $i++) {
            $currentSegment = $outboundSegments[$i];
            $nextSegment = $outboundSegments[$i + 1];

            $currentArrival = strtotime($currentSegment['arrival_date'] . ' ' . $currentSegment['arrival_time']);
            $nextDeparture = strtotime($nextSegment['departure_date'] . ' ' . $nextSegment['departure_time']);

            $layoverMinutes = ($nextDeparture - $currentArrival) / 60;
            if ($layoverMinutes > 0) {
                $outboundSegments[$i]['layover_time'] = $this->formatDuration($layoverMinutes);
            }
        }

        // Process inbound segments if it's a return journey
        if ($isReturn) {
            for ($i = 0; $i < count($inboundSegments) - 1; $i++) {
                $currentSegment = $inboundSegments[$i];
                $nextSegment = $inboundSegments[$i + 1];

                $currentArrival = strtotime($currentSegment['arrival_date'] . ' ' . $currentSegment['arrival_time']);
                $nextDeparture = strtotime($nextSegment['departure_date'] . ' ' . $nextSegment['departure_time']);

                $layoverMinutes = ($nextDeparture - $currentArrival) / 60;
                if ($layoverMinutes > 0) {
                    $inboundSegments[$i]['layover_time'] = $this->formatDuration($layoverMinutes);
                }
            }
        }

        // Set last items and congratulatory messages
        if (!empty($outboundSegments)) {
            $lastOutboundIndex = count($outboundSegments) - 1;
            $outboundSegments[$lastOutboundIndex]['lastitem'] = true;
            $outboundSegments[$lastOutboundIndex]['layover_time'] = "Congrats you have reached destination";
        }

        if (!empty($inboundSegments)) {
            $lastInboundIndex = count($inboundSegments) - 1;
            $inboundSegments[$lastInboundIndex]['lastitem'] = true;
            $inboundSegments[$lastInboundIndex]['layover_time'] = "Congrats you have reached destination";
        }

        return [
            'outbound' => array_values($outboundSegments),
            'inbound' => array_values($inboundSegments),
            'isReturn' => $isReturn
        ];
    }

    private function enrichSegment( $segment, $segmentKey, $solution ) {
        $bookingInfo = $this->findBookingInfo( $solution, $segmentKey );
        if ( $bookingInfo ) {
            $segment[ 'booking_code' ] = $bookingInfo[ 'BookingCode' ] ?? '';
            $segment[ 'booking_count' ] = ( int )( $bookingInfo[ 'BookingCount' ] ?? 0 );
            $segment[ 'cabin_class' ] = $bookingInfo[ 'CabinClass' ] ?? '';
            $segment[ 'segmentKey' ] = $segmentKey;
        }
        return $segment;
    }

    private function buildJourney( $outboundSegments, $inboundSegments, $commonInfo, $isReturn ) {
        $journey = [
            'outbound' => $this->buildJourneySection( $outboundSegments, $commonInfo )
        ];

        if ( $isReturn ) {
            $journey[ 'inbound' ] = $this->buildJourneySection( $inboundSegments, $commonInfo );
        }

        return $journey;
    }

    private function buildJourneySection($segments, $commonInfo) {
        if (empty($segments)) return null;

        $firstSegment = reset($segments);
        $lastSegment = end($segments);
        $totalSegments = count($segments);

        // Add lastitem flag to the last segment
        $segments[$totalSegments - 1]['lastitem'] = true;

        return array_merge([
            'origin' => $firstSegment['departure_code'],
            'destination' => $lastSegment['arrival_code'],
            'departure_date' => $firstSegment['departure_date'],
            'departure_time' => $firstSegment['departure_time'],
            'arrival_date' => $lastSegment['arrival_date'],
            'arrival_time' => $lastSegment['arrival_time'],
            'carrier_code' => $firstSegment['carrier_code'],
            'flightNumber' => $firstSegment['flightNumber'],
            'flight' => $firstSegment['flight'],
            'connections' => count($segments) - 1,
            'booking_code' => $firstSegment['booking_code'],
            'booking_count' => $firstSegment['booking_count'],
            'cabin_class' => $firstSegment['cabin_class'],
            'travelTime' => $this->calculateTotalTravelTime($segments),
            'travelTimeRaw' => $this->calculateRawTravelTime($segments),
            'segmentKey' => $firstSegment['segmentKey']
        ], $commonInfo, ['segments' => array_values($segments)]);
    }

    private function calculateTotalTravelTime($segments) {
        if (empty($segments)) return '0h 0m';

        $totalMinutes = 0;
        $prevArrivalTime = null;

        foreach ($segments as $segment) {
            $totalMinutes += $segment['flightTime'];

            if ($prevArrivalTime !== null) {
                $currentDeparture = strtotime($segment['departure_time']);
                $layoverMinutes = max(0, ($currentDeparture - $prevArrivalTime) / 60);
                $totalMinutes += $layoverMinutes;
            }

            $prevArrivalTime = strtotime($segment['arrival_time']);
        }

        return $this->formatDuration($totalMinutes);
    }

    private function formatDuration( $minutes ) {
        $hours = floor( $minutes / 60 );
        $remainingMinutes = $minutes % 60;
        return sprintf( '%dh %dm', $hours, $remainingMinutes );
    }

    private function calculateRawTravelTime( $segments ) {
        $totalMinutes = 0;
        $prevArrivalTime = null;

        foreach ( $segments as $segment ) {
            $totalMinutes += $segment[ 'flightTime' ];
            if ( $prevArrivalTime !== null ) {
                $currentDeparture = strtotime( $segment[ 'departure_date' ] . ' ' . $segment[ 'departure_time' ] );
                $layoverMinutes = ( $currentDeparture - $prevArrivalTime ) / 60;
                if ( $layoverMinutes > 0 ) {
                    $totalMinutes += $layoverMinutes;
                }
            }
            $prevArrivalTime = strtotime( $segment[ 'arrival_date' ] . ' ' . $segment[ 'arrival_time' ] );
        }

        return $totalMinutes;
    }

    //getPenalties
    private function getPenalties($solution) {
        $penalties = [
            'change' => ['applies' => 'Anytime', 'amount' => 0],
            'cancel' => ['applies' => 'Anytime', 'amount' => 0]
        ];

        $penaltyTypes = ['Change' => 'change', 'Cancel' => 'cancel'];
        foreach ($penaltyTypes as $type => $key) {
            $penalty = $solution->xpath(".//air:{$type}Penalty")[0] ?? null;
            if ($penalty) {
                $penalties[$key] = [
                    'applies' => (string)($penalty['PenaltyApplies'] ?? 'Anytime'),
                    'amount' => $this->extractNumericValue((string)($penalty->xpath('./air:Amount')[0] ?? 0))
                ];
            }
        }

        return $penalties;
    }

    private function extractNumericValue( $value ) {
        return ( float )preg_replace( '/[^0-9.]/', '', ( string )( $value ?? '0' ) );
    }

    private function mapPassengerType($code) {
        static $types = [
            'ADT' => 'Adult',
            'CHD' => 'Child',
            'INF' => 'Infant',
            'CNN' => 'Child',
            'INS' => 'Infant',
            'YTH' => 'Youth',
            'SNR' => 'Senior',
            'STU' => 'Student'
        ];
        return $types[strtoupper($code)] ?? $code;
    }

    private function isReturnJourney($segmentRefs) {
        if (count($segmentRefs) <= 1) return false;

        $firstSegmentKey = (string)$segmentRefs[0]['Key'];
        $lastSegmentKey = (string)$segmentRefs[count($segmentRefs)-1]['Key'];

        $firstSegment = $this->segments[$firstSegmentKey] ?? null;
        $lastSegment = $this->segments[$lastSegmentKey] ?? null;

        return $firstSegment && $lastSegment &&
            $firstSegment['departure_code'] === $lastSegment['arrival_code'];
    }

    private function findBookingInfo($solution, $segmentKey) {
        static $bookingInfoCache = [];

        if (!isset($bookingInfoCache[$segmentKey])) {
            foreach ($solution->xpath('.//air:AirPricingInfo/air:BookingInfo') as $bookingInfo) {
                if ((string)$bookingInfo['SegmentRef'] === $segmentKey) {
                    $bookingInfoCache[$segmentKey] = [
                        'BookingCode' => (string)$bookingInfo['BookingCode'],
                        'BookingCount' => (string)$bookingInfo['BookingCount'],
                        'CabinClass' => (string)$bookingInfo['CabinClass']
                    ];
                    break;
                }
            }
        }

        return $bookingInfoCache[$segmentKey] ?? null;
    }

    private function getFareRuleKeys( $solution ) {
        $fareRuleKeys = [];

        // Get all FareInfo elements associated with this pricing solution
        $fareInfoRefs = $solution->xpath( './/air:AirPricingInfo/air:FareInfoRef' );
        foreach ( $fareInfoRefs as $fareInfoRef ) {
            $fareInfoKey = ( string )$fareInfoRef[ 'Key' ];

            // Find the associated FareInfo element using the Key
            $fareInfo = $this->xml->xpath( "//air:FareInfo[@Key='$fareInfoKey']" )[ 0 ] ?? null;
            if ( $fareInfo ) {
                $origin = ( string )$fareInfo[ 'Origin' ];
                $destination = ( string )$fareInfo[ 'Destination' ];
                $routeKey = $origin . '-' . $destination;

                // Get FareRuleKey element
                $fareRuleKey = $fareInfo->xpath( './/air:FareRuleKey' )[ 0 ] ?? null;
                if ( $fareRuleKey ) {
                    $fareRuleKeys[ $routeKey ] = [
                        'FareInfoRef' => ( string )$fareRuleKey[ 'FareInfoRef' ],
                        'ProviderCode' => ( string )$fareRuleKey[ 'ProviderCode' ],
                        'content' => ( string )$fareRuleKey
                    ];
                }
            }
        }

        return $fareRuleKeys;
    }

    public function parse() {
        $results = [];
        foreach ( $this->xml->xpath( '//air:AirPricingSolution' ) as $solution ) {
            $results[] = $this->processPricingSolution( $solution );
        }
        return ['flights' => $results];
    }

}

