<?php
namespace App\Http\Controllers\Admin\API;

use Illuminate\Support\Facades\DB;
use Barryvdh\Debugbar\Facades\Debugbar;

class Singlewayjson
{

    private $airports;
    private $airlineNames;
    private $airlineLogos;
    private $aircraftModels;
    private $cachedLogoExistence = [];

    public function __construct()
    {

        $this->airports       = DB::table('airports')->select('code', 'Airport_Name', 'City_name')->get()->keyBy('code')->toArray();
        $this->airlineNames   = DB::table('airline_logos')->pluck('name', 'code')->toArray();
        $this->airlineLogos   = DB::table('airline_logos')->pluck('logo_path', 'code')->toArray();
        $this->aircraftModels = DB::table('aircraft_type_designators')->pluck('model', 'iata_code')->toArray();
    }

    private function getLogoPath($carrier)
    {
        // Check if we've already verified this carrier's logo
        $path = '/uploads/airlines/' . $carrier . '.svg';
        if (! isset($this->cachedLogoExistence[$carrier])) {
            $air_lo = $this->airlineLogos[$carrier] ?? '';
            $path                                = $air_lo;
            $this->cachedLogoExistence[$carrier] = file_exists($path);

        }

        // Return default image if logo doesn't exist
        if (! $this->cachedLogoExistence[$carrier]) {
            $path = '/uploads/airlines/default.svg';
        }

        return $path;
    }

    public function checkJson($jsonData, $request)
    {

        if (! $jsonData) {
            die(json_encode(['error' => 'Unable to load JSON file.']));
        }

        // dd( $jsonData );

        // Extract necessary data
        $segments         = isset($jsonData['airLowFareSearchRsp']['airAirSegmentList']['airAirSegment']) ? $jsonData['airLowFareSearchRsp']['airAirSegmentList']['airAirSegment'] : [];
        $pricingSolutions = isset($jsonData['airLowFareSearchRsp']['airAirPricingSolution']) ? $jsonData['airLowFareSearchRsp']['airAirPricingSolution'] : [];

        // Get filters from input
        $filterOrigin      = isset($request->from) ? $request->from : 'DAC';
        $filterDestination = isset($request->to) ? $request->to : 'DFW';
        $filterAirline     = isset($request->airline) ? $request->airline : '';

        //function for 7283 miniutes to 23h : 23m

        function convertToDuration($minutes)
        {
            if ($minutes == 'Not found') {
                return '0h : 0m';
            }
            $hours = floor($minutes / 60);
            $mints   = $minutes - ($hours * 60);

            return $hours . 'h : ' . $mints . 'm';

        }

        // Find all connections

        function findConnections($segments, $origin, $destination, $filterAirline = '')
        {
            $connections = [];
            foreach ($segments as $segment) {
                $segOrigin      = $segment['@attributes']['Origin'];
                $segDestination = $segment['@attributes']['Destination'];
                $segCarrier     = $segment['@attributes']['Carrier'];

                if ($segOrigin == $origin && ($filterAirline == '' || $segCarrier == $filterAirline)) {
                    $remainingConnections = findConnections($segments, $segDestination, $destination, $filterAirline);
                    if ($segDestination == $destination || $remainingConnections) {
                        $connections[] = [
                            'segment'     => $segment,
                            'connections' => $remainingConnections,
                        ];
                    }
                }
            }
            return $connections;
        }

        // Flatten connections into combinations

        function flattenConnections($connections, $currentPath = [])
        {
            $combinations = [];
            foreach ($connections as $connection) {
                $path = array_merge($currentPath, [$connection['segment']]);
                if (empty($connection['connections'])) {
                    $combinations[] = $path;
                } else {
                    $combinations = array_merge($combinations, flattenConnections($connection['connections'], $path));
                }
            }
            return $combinations;
        }

        // Find pricing for a segment

        function findPricing($pricingSolutions, $segmentKey)
        {
            foreach ($pricingSolutions as $solution) {
                if (isset($solution['airJourney']['airAirSegmentRef'])) {
                    $segmentRefs = $solution['airJourney']['airAirSegmentRef'];

                    // Check for single segment
                    if (isset($segmentRefs['@attributes'])) {
                        if ($segmentRefs['@attributes']['Key'] === $segmentKey['@attributes']['Key']) {
                            return $solution['@attributes']['TotalPrice'];
                        }
                    }
                    // Check for multiple segments
                    else {
                        foreach ($segmentRefs as $ref) {
                            if ($ref['@attributes']['Key'] === $segmentKey['@attributes']['Key']) {
                                return $solution['@attributes']['TotalPrice'];
                            }
                        }
                    }
                }
            }
            return 'Price not found';
            // Default return if no price found
        }

        // Format duration in hours and minutes

        function formatDuration($totalMinutes)
        {
            $hours   = floor($totalMinutes / 60);
            $minutes = $totalMinutes % 60;
            return sprintf('%dh %dm', $hours, $minutes);
        }

        // Format currency

        function format_currency($code_value)
        {
            // Extract the value ( digits )
            $value = preg_replace('/[ ^a-zA-Z ]/', '', $code_value);


            // Extract the currency code ( letters )
            $code = preg_replace('/[ ^0-9 ]/', '', $code_value);

            // Format the value with commas
            $formatted_value = number_format($value);

            // Concatenate the code and formatted value
            return $code . ' ' . $formatted_value;
        }

        //find booking info

        function findBookingInfo($pricingSolutions, $segmentKey)
        {
            foreach ($pricingSolutions as $solution) {
                if (isset($solution['airAirPricingInfo']['airBookingInfo'])) {
                    $bookingInfos = $solution['airAirPricingInfo']['airBookingInfo'];

                    // Handle single booking info case
                    if (isset($bookingInfos['@attributes'])) {
                        if ($bookingInfos['@attributes']['SegmentRef'] === $segmentKey['@attributes']['Key']) {
                            return [
                                'booking_code'  => $bookingInfos['@attributes']['BookingCode'] ?? 'Not found',
                                'booking_count' => $bookingInfos['@attributes']['BookingCount'] ?? 'Not found',
                                'cabin_class'   => $bookingInfos['@attributes']['CabinClass'] ?? 'Not found',
                                'fare_info_ref' => $bookingInfos['@attributes']['FareInfoRef'] ?? 'Not found', // Added this line
                            ];
                        }
                    }
                    // Handle multiple booking infos case
                    else {
                        foreach ($bookingInfos as $bookingInfo) {
                            if ($bookingInfo['@attributes']['SegmentRef'] === $segmentKey['@attributes']['Key']) {
                                return [
                                    'booking_code'  => $bookingInfo['@attributes']['BookingCode'] ?? 'Not found',
                                    'booking_count' => $bookingInfo['@attributes']['BookingCount'] ?? 'Not found',
                                    'cabin_class'   => $bookingInfo['@attributes']['CabinClass'] ?? 'Not found',
                                    'fare_info_ref' => $bookingInfo['@attributes']['FareInfoRef'] ?? 'Not found', // Added this line
                                ];
                            }
                        }
                    }
                }
            }
            return [
                'booking_code'  => 'Not found',
                'booking_count' => 'Not found',
                'cabin_class'   => 'Not found',
                'fare_info_ref' => 'Not found',
            ];
        }

        // Get origin and destination terminals

        function airFlightDetails($jsonData, $segmentKey)
        {
            if (isset($jsonData['airLowFareSearchRsp']['airFlightDetailsList']['airFlightDetails'])) {
                $flightDetails = $jsonData['airLowFareSearchRsp']['airFlightDetailsList']['airFlightDetails'];

                // Get FlightDetailsRef key from segment
                if (isset($segmentKey['airFlightDetailsRef']['@attributes']['Key'])) {
                    $flightDetailsRefKey = $segmentKey['airFlightDetailsRef']['@attributes']['Key'];

                    // Handle single flight details case
                    if (isset($flightDetails['@attributes'])) {
                        if ($flightDetails['@attributes']['Key'] === $flightDetailsRefKey) {
                            return [
                                'origin_terminal'      => $flightDetails['@attributes']['OriginTerminal'] ?? 'Not found',
                                'destination_terminal' => $flightDetails['@attributes']['DestinationTerminal'] ?? 'Not found',
                                'TravelTime'           => $flightDetails['@attributes']['TravelTime'] ?? 'Not found',
                                'FlightTime'           => $flightDetails['@attributes']['FlightTime'] ?? 'Not found',
                            ];
                        }
                    }
                    // Handle multiple flight details case
                    else {
                        foreach ($flightDetails as $detail) {
                            if ($detail['@attributes']['Key'] === $flightDetailsRefKey) {
                                return [
                                    'origin_terminal'      => $detail['@attributes']['OriginTerminal'] ?? 'Not found',
                                    'destination_terminal' => $detail['@attributes']['DestinationTerminal'] ?? 'Not found',
                                    'TravelTime'           => $detail['@attributes']['TravelTime'] ?? 'Not found',
                                    'FlightTime'           => $detail['@attributes']['FlightTime'] ?? 'Not found',
                                ];
                            }
                        }
                    }
                }
            }

            return [
                'origin_terminal'      => 'Not found',
                'destination_terminal' => 'Not found',
                'TravelTime'           => 'Not found',
                'FlightTime'           => 'Not found',
            ];
        }

        // get fare Basis Code

        function findFareBasis($jsonData, $fareInfoRef)
        {
            // First check if airFareInfoList exists
            if (! isset($jsonData['airLowFareSearchRsp']['airFareInfoList']['airFareInfo'])) {
                return 'Not found';
            }

            $fareInfoList = $jsonData['airLowFareSearchRsp']['airFareInfoList']['airFareInfo'];

            // Handle single fare info case
            if (isset($fareInfoList['@attributes'])) {
                if ($fareInfoList['@attributes']['Key'] === $fareInfoRef) {
                    return $fareInfoList['@attributes']['FareBasis'] ?? 'Not found';
                }
            }
            // Handle multiple fare infos case
            elseif (is_array($fareInfoList)) {
                foreach ($fareInfoList as $fareInfo) {
                    if (
                        isset($fareInfo['@attributes']['Key']) &&
                        $fareInfo['@attributes']['Key'] === $fareInfoRef
                    ) {
                        return $fareInfo['@attributes']['FareBasis'] ?? 'Not found';
                    }
                }
            }

            return 'Not found';
        }

        function findAirPricingInfo($pricingSolutions, $segmentKey)
        {
            foreach ($pricingSolutions as $solution) {
                if (! isset($solution['airAirPricingInfo'])) {
                    continue;
                }

                $pricingInfo  = $solution['airAirPricingInfo'];
                $bookingInfos = $pricingInfo['airBookingInfo'] ?? [];

                // Handle single booking info case
                if (isset($bookingInfos['@attributes'])) {
                    if ($bookingInfos['@attributes']['SegmentRef'] === $segmentKey) {
                        return [
                            'Refundable'    => $pricingInfo['@attributes']['Refundable'] ?? 'Not found',
                            'PricingMethod' => $pricingInfo['@attributes']['PricingMethod'] ?? 'Not found',
                        ];
                    }
                }
                // Handle multiple booking infos case
                else {
                    foreach ($bookingInfos as $bookingInfo) {
                        if ($bookingInfo['@attributes']['SegmentRef'] === $segmentKey) {
                            return [
                                'Refundable'    => $pricingInfo['@attributes']['Refundable'] ?? 'Not found',
                                'PricingMethod' => $pricingInfo['@attributes']['PricingMethod'] ?? 'Not found',
                            ];
                        }
                    }
                }
            }

            return [
                'Refundable'    => 'Not found',
                'PricingMethod' => 'Not found',
            ];
        }

        // Generate connections and combinations
        $connections  = findConnections($segments, $filterOrigin, $filterDestination, $filterAirline);
        $combinations = flattenConnections($connections);

        // Prepare JSON output
        $response = [];
        foreach ($combinations as $combo) {

            $firstSegment     = $combo[0]['@attributes'];
            $lastSegment      = $combo[count($combo) - 1]['@attributes'];
            $totalDuration    = 0;
            $totalFlightTime  = 0;
            $connectionCount  = count($combo) - 1;
            $detailedSegments = [];
            //$logopath = '/uploads/airlines/' . $firstSegment[ 'Carrier' ] . '.gif';
            $logopath              = $this->getLogoPath($firstSegment['Carrier']);
            $bookingInfo           = findBookingInfo($pricingSolutions, $combo[0]);
            $firstairFlightDetails = airFlightDetails($jsonData, $combo[0]);
            $lastairFlightDetails  = airFlightDetails($jsonData, $combo[count($combo) - 1]);

            //    dd( $combo );

            foreach ($combo as $segment) {
                // dd( $segment );
                $segmentAttributes = $segment['@attributes'];
                $bookingInfo       = findBookingInfo($pricingSolutions, $segment);
                $airFlightDetails  = airFlightDetails($jsonData, $segment);
                $totalFlightTime += intval($airFlightDetails['FlightTime']);

                $originCode = $segmentAttributes['Origin'];
                $destinationCode = $segmentAttributes['Destination'];

                // Store full segment details
                // dd( $segmentAttributes );
                $detailedSegments[] = [
                    'SegmentKey'               => $segmentAttributes['Key'],
                    'origin'                   => $segmentAttributes['Origin'],
                    'destination'              => $segmentAttributes['Destination'],
                    'departure_date'           => substr($segmentAttributes['DepartureTime'], 0, 10),
                    'departure_time'           => substr($segmentAttributes['DepartureTime'], 11, 5),
                    'arrival_date'             => substr($segmentAttributes['ArrivalTime'], 0, 10),
                    'arrival_time'             => substr($segmentAttributes['ArrivalTime'], 11, 5),
                    'carrier'                  => $segmentAttributes['Carrier'],
                    'flight_number'            => $segmentAttributes['FlightNumber'],
                    'Equipment'                => $this->aircraftModels[$segmentAttributes['Equipment']] ?? '',
                    'origin_airport_name'      => $this->airports[$originCode]->Airport_Name ?? '',
                    'destination_airport_name' => $this->airports[$destinationCode]->Airport_Name ?? '',
                    'airports_city'            => $this->airports[$destinationCode]->City_name ?? '',
                    'airline_name'             => $this->airlineNames[$segmentAttributes['Carrier']] ?? '',
                    'logopath'                 => $logopath,
                    'FlightTime'               => convertToDuration($airFlightDetails['FlightTime']),
                    'FlightTime1'              => $airFlightDetails['FlightTime'],
                    'booking_code'             => $bookingInfo['booking_code'],
                    'booking_count'            => $bookingInfo['booking_count'],
                    'origin_terminal'          => $airFlightDetails['origin_terminal'],
                    'destination_terminal'     => $airFlightDetails['destination_terminal'],
                    'cabin_class'              => $bookingInfo['cabin_class'],
                    'fare_info_ref'            => $bookingInfo['fare_info_ref'],
                    'fare_basis'               => findFareBasis($jsonData, $bookingInfo['fare_info_ref']),
                ];
            }

            $response[] = [
                'Key'                  => $firstSegment['Key'],
                'origin'               => $firstSegment['Origin'],
                'refundable'           => findAirPricingInfo($pricingSolutions, $firstSegment['Key'])['Refundable'],
                'PricingMethod'        => findAirPricingInfo($pricingSolutions, $firstSegment['Key'])['PricingMethod'],
                'destination'          => $lastSegment['Destination'],
                'departure_date'       => substr($firstSegment['DepartureTime'], 0, 10),
                'departure_time'       => substr($firstSegment['DepartureTime'], 11, 5),
                'arrival_date'         => substr($lastSegment['ArrivalTime'], 0, 10),
                'arrival_time'         => substr($lastSegment['ArrivalTime'], 11, 5),
                'carrier_code'         => $firstSegment['Carrier'],
                'logopath'             => $logopath,
                'airline_name'         => $this->airlineNames[$firstSegment['Carrier']] ?? '',
                'flight_numbers'       => $firstSegment['FlightNumber'] . '-' . $lastSegment['FlightNumber'],
                'TravelTime'           => convertToDuration($firstairFlightDetails['TravelTime']),
                'connections'          => $connectionCount,
                'total_price_ADT'      => format_currency(findPricing($pricingSolutions, $combo[0])),
                'booking_code'         => $bookingInfo['booking_code'],
                'booking_count'        => $bookingInfo['booking_count'],
                'cabin_class'          => $bookingInfo['cabin_class'],
                'origin_terminal'      => $firstairFlightDetails['origin_terminal'],
                'destination_terminal' => $lastairFlightDetails['destination_terminal'],

                'TravelTime1'          => $firstairFlightDetails['TravelTime'],
                'Layover'              => convertToDuration((int) $firstairFlightDetails['TravelTime'] - (int) $totalFlightTime),

                'details'              => $detailedSegments,
            ];
        }

        // dd($response);
        header('Content-Type: application/json');
        // echo json_encode( [ 'flights' => $response ], JSON_PRETTY_PRINT );

        echo json_encode(['flights' => $response], JSON_PRETTY_PRINT);
    }
}
