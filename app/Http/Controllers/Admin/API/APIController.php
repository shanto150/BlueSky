<?php

namespace App\Http\Controllers\Admin\API;

use DateTime;
use Exception;
use DOMDocument;
use SimpleXMLElement;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;

class APIController extends BaseController {

    public function Lowfaresearch( Request $request ) {

        $validator = validator( $request->all(), [
            'from' => 'required',
            'to' => 'required',
        ] );

        $url = 'https://apac.universal-api.pp.travelport.com/B2BGateway/connect/uAPI/AirService';
        $xmlpayload = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><LowFareSearchReq xmlns="http://www.travelport.com/schema/air_v52_0" TraceId="c8f38268-3b70-4141-869d-010611bc23e5" TargetBranch="P7186658" SolutionResult="true" ReturnUpsellFare="true"><BillingPointOfSaleInfo xmlns="http://www.travelport.com/schema/common_v52_0" OriginApplication="UAPI"/>';
        if ( $request->Way == 1 ) {
            $xmlpayload .= '<SearchAirLeg><SearchOrigin>
                        <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="DAC" PreferCity="true"/>
                        </SearchOrigin><SearchDestination>
                        <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="DXB" PreferCity="true"/>
                        </SearchDestination><SearchDepTime PreferredTime="2025-01-18"/></SearchAirLeg>';
        } else {
            $xmlpayload .= '<SearchAirLeg><SearchOrigin>
                        <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="'.$request->from.'" PreferCity="true"/>
                        </SearchOrigin><SearchDestination>
                        <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="'.$request->to.'" PreferCity="true"/>
                        </SearchDestination><SearchDepTime PreferredTime="'.$request->dep_date.'"/></SearchAirLeg>';
            $xmlpayload .= '<SearchAirLeg><SearchOrigin>
                        <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="'.$request->to.'" PreferCity="true"/>
                        </SearchOrigin><SearchDestination>
                        <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="'.$request->from.'" PreferCity="true"/>
                        </SearchDestination><SearchDepTime PreferredTime="'.$request->dep_date.'"/></SearchAirLeg>';
        }

        $xmlpayload .= '<AirSearchModifiers><PreferredProviders><Provider xmlns="http://www.travelport.com/schema/common_v52_0" Code="1G"/>
                    </PreferredProviders><PreferredCabins><CabinClass xmlns="http://www.travelport.com/schema/common_v52_0" Type="Economy"/></PreferredCabins></AirSearchModifiers>';

        $xmlpayload .= '<SearchPassenger xmlns="http://www.travelport.com/schema/common_v52_0" Code="ADT" BookingTravelerRef="ADT_0"/>';
        $xmlpayload .= '<AirPricingModifiers FaresIndicator="PublicAndPrivateFares"/>';
        $xmlpayload .= '</LowFareSearchReq></s:Body></s:Envelope>';

        $username = env( 'API_USERNAME' );
        $password = env( 'API_PASSWORD' );

        $ch = curl_init();

        // Set cURL options
        curl_setopt( $ch, CURLOPT_URL, $url );
        curl_setopt( $ch, CURLOPT_POST, true );
        curl_setopt( $ch, CURLOPT_POSTFIELDS, $xmlpayload );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch, CURLOPT_HTTPHEADER, [
            'Content-Type: text/xml;charset=UTF-8',
        ] );
        curl_setopt( $ch, CURLOPT_USERPWD, "$username:$password" );

        // Execute and fetch the response
        $response = curl_exec( $ch );

        // Check for errors
        if ( curl_errno( $ch ) ) {
            $error = curl_error( $ch );
            curl_close( $ch );
            return response()->json( [ 'error' => $error ] );
        }

        curl_close( $ch );

        // dd( $response );

        //good format****
        $response = preg_replace( '/(<\/?)(\w+):([^>]*>)/', "$1$2$3", $response );
        $xml = new SimpleXMLElement( $response );
        $body = $xml->xpath( '//SOAPBody' )[ 0 ];
        $array = json_decode( json_encode( ( array )$body ), TRUE );
        //End good ******

        return $array;

        // Retrieve fares with all details
        // $classWiseFares = $this->getClassWiseFaresWithDetails( $array );

        // return $classWiseFares;

    }

    // Function to retrieve fares with all necessary details

    function getClassWiseFaresWithDetails( $jsonData ) {
        $fares = [];

        // Retrieve Fare Info
        if ( isset( $jsonData[ 'airLowFareSearchRsp' ][ 'airAirPricingSolution' ] ) ) {
            $pricingSolutions = $jsonData[ 'airLowFareSearchRsp' ][ 'airAirPricingSolution' ];

            foreach ( $pricingSolutions as $solution ) {

                if ( isset( $solution[ 'airAirPricingInfo' ][ 'airBookingInfo' ] ) ) {
                    foreach ( $solution[ 'airAirPricingInfo' ][ 'airBookingInfo' ] as $bookingInfo ) {
                        $segmentRef = isset( $bookingInfo[ '@attributes' ][ 'SegmentRef' ] ) ? $bookingInfo[ '@attributes' ][ 'SegmentRef' ] : 'N/A';
                        $fareInfoRef = isset( $bookingInfo[ '@attributes' ][ 'FareInfoRef' ] ) ? $bookingInfo[ '@attributes' ][ 'FareInfoRef' ] : 'N/A';

                        // Retrieve segment details
                        $segmentDetails = $this->getSegmentDetails( $jsonData, $segmentRef );
                        // Retrieve fare amount and basis
                        $fareDetails = $this->getFareDetails( $jsonData, $fareInfoRef );
                        // Retrieve airjurny details
                        $airJourney = $this->getairAirPricingSolution( $jsonData, $segmentRef );

                        // Add data to fares list
                        $fares[] = array_merge( $segmentDetails, $fareDetails, $airJourney, [
                            'CabinClass' => isset( $bookingInfo[ '@attributes' ][ 'CabinClass' ] ) ? $bookingInfo[ '@attributes' ][ 'CabinClass' ] : 'N/A',
                            'BookingCode' => isset( $bookingInfo[ '@attributes' ][ 'BookingCode' ] ) ? $bookingInfo[ '@attributes' ][ 'BookingCode' ] : 'N/A',
                            'Refundable' => $solution[ 'airAirPricingInfo' ][ '@attributes' ][ 'Refundable' ]
                        ] );
                    }
                }
            }
        }
        return $fares;
    }

    // Convert the given date-time string to the desired format

    function convertDateTime( $dateString ) {
        try {
            $dateTime = new DateTime( $dateString );
            return $dateTime->format( 'd-m-Y h:i a' );
        } catch ( Exception $e ) {
            return 'Invalid Date';
        }
    }

    // Function to extract only the number part from a string

    function extractNumbers( $string ) {
        preg_match_all( '/\d+/', $string, $matches );
        $number = implode( '', $matches[ 0 ] );
        $formattedNumber = number_format( $number );
        return $formattedNumber;
    }

    // Helper function to get segment details for a reference

    function getSegmentDetails( $jsonData, $segmentRef ) {
        if ( isset( $jsonData[ 'airLowFareSearchRsp' ][ 'airAirSegmentList' ][ 'airAirSegment' ] ) ) {
            foreach ( $jsonData[ 'airLowFareSearchRsp' ][ 'airAirSegmentList' ][ 'airAirSegment' ] as $segment ) {
                if ( $segment[ '@attributes' ][ 'Key' ] === $segmentRef ) {
                    return [
                        'Airline' => isset( $segment[ '@attributes' ][ 'Carrier' ] ) ? $segment[ '@attributes' ][ 'Carrier' ] : 'N/A',
                        'Flight' => isset( $segment[ '@attributes' ][ 'FlightNumber' ] ) ? $segment[ '@attributes' ][ 'FlightNumber' ] : 'N/A',
                        'Origin' => isset( $segment[ '@attributes' ][ 'Origin' ] ) ? $segment[ '@attributes' ][ 'Origin' ] : 'N/A',
                        'Destination' => isset( $segment[ '@attributes' ][ 'Destination' ] ) ? $segment[ '@attributes' ][ 'Destination' ] : 'N/A',
                        'DepartureTime' => isset( $segment[ '@attributes' ][ 'DepartureTime' ] ) ? $this->convertDateTime( $segment[ '@attributes' ][ 'DepartureTime' ] ) : 'N/A',
                        'ArrivalTime' => isset( $segment[ '@attributes' ][ 'ArrivalTime' ] ) ? $this->convertDateTime( $segment[ '@attributes' ][ 'ArrivalTime' ] ) : 'N/A',
                    ];
                }
            }
        }
        return [
            'Airline' => 'N/A',
            'Flight' => 'N/A',
            'Origin' => 'N/A',
            'Destination' => 'N/A',
            'DepartureTime' => 'N/A',
            'ArrivalTime' => 'N/A',
        ];
    }

    // Helper function to get fare details for a reference

    function getFareDetails( $jsonData, $fareInfoRef ) {
        if ( isset( $jsonData[ 'airLowFareSearchRsp' ][ 'airFareInfoList' ][ 'airFareInfo' ] ) ) {
            foreach ( $jsonData[ 'airLowFareSearchRsp' ][ 'airFareInfoList' ][ 'airFareInfo' ] as $fareInfo ) {
                if ( $fareInfo[ '@attributes' ][ 'Key' ] === $fareInfoRef ) {
                    return [
                        'FareAmount' => isset( $fareInfo[ '@attributes' ][ 'Amount' ] ) ? $this->extractNumbers( $fareInfo[ '@attributes' ][ 'Amount' ] ) : 'N/A',
                        'FareBasis' => isset( $fareInfo[ '@attributes' ][ 'FareBasis' ] ) ? $fareInfo[ '@attributes' ][ 'FareBasis' ] : 'N/A',
                        'pType' => isset( $fareInfo[ '@attributes' ][ 'PassengerTypeCode' ] ) ? $fareInfo[ '@attributes' ][ 'PassengerTypeCode' ] : 'N/A',
                        'airMaxWeight' => isset( $fareInfo[ 'airBaggageAllowance' ][ 'airMaxWeight' ][ '@attributes' ][ 'Value' ] ) ? $fareInfo[ 'airBaggageAllowance' ][ 'airMaxWeight' ][ '@attributes' ][ 'Value' ].' KG' : 'N/A',
                    ];
                }
            }
        }
        return [
            'FareAmount' => 'N/A',
            'FareBasis' => 'N/A',
        ];
    }

    // Helper function to get fare details for a reference

    function getairAirPricingSolution( $jsonData, $fareInfoRef ) {
        if ( isset( $jsonData[ 'airLowFareSearchRsp' ][ 'airAirPricingSolution' ] ) ) {

            foreach ( $jsonData[ 'airLowFareSearchRsp' ][ 'airAirPricingSolution' ] as $priceSolution ) {
                dd( $priceSolution[ 'airJourney' ] );

                if ( !isset( $priceSolution[ 'airJourney' ] ) ) {
                    foreach ( $priceSolution[ 'airJourney' ] as $airJourney ) {

                        if ( !isset( $airJourney[ 'airAirSegmentRef' ] ) ) {
                            foreach ( $airJourney[ 'airAirSegmentRef' ] as $airAirSegmentRef ) {

                                if ( $airAirSegmentRef[ 'Key' ] === $fareInfoRef ) {
                                    return [
                                        'TravelTime' => isset( $airJourney[ '@attributes' ][ 'TravelTime' ] )? $airJourney[ '@attributes' ][ 'TravelTime' ] : 'N/A',
                                    ];
                                }
                            }
                        }

                    }
                }

            }

        }
        return [
            'TravelTime' => 'N/A',
        ];
    }

}
