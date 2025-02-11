<?php

namespace App\Http\Controllers\Admin\API;

use DateTime;
use SimpleXMLElement;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;

class APIController extends BaseController {

    public function Lowfaresearch( Request $request ) {

        // dd( $request->all() );
        $request->validate([
            'from' => 'required',
            'to' => 'required',
        ]);

        $url = 'https://apac.universal-api.pp.travelport.com/B2BGateway/connect/uAPI/AirService';
        $requestXML = new RequestXML();
        $xmlpayload = $requestXML->generateLowFareSearchXML( $request );

        // dd( $xmlpayload );

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
        $body = $xml->xpath( '//SOAPBody' )[0];
        $array = json_decode( json_encode( ( array )$body ), TRUE );
        //End good ******

        $jsonData = $array;

        // dd( $jsonData );

        if ( !$jsonData ) {
            die( json_encode( [ 'error' => 'Unable to load JSON file.' ] ) );
        }

        // Extract necessary data
        $segments = isset( $jsonData[ 'airLowFareSearchRsp' ][ 'airAirSegmentList' ][ 'airAirSegment' ] ) ? $jsonData[ 'airLowFareSearchRsp' ][ 'airAirSegmentList' ][ 'airAirSegment' ] : [];
        $pricingSolutions = isset( $jsonData[ 'airLowFareSearchRsp' ][ 'airPriceSolutionList' ][ 'airPriceSolution' ] ) ? $jsonData[ 'airLowFareSearchRsp' ][ 'airPriceSolutionList' ][ 'airPriceSolution' ] : [];

        // Get filters from input
        $filterOrigin = isset( $request->from ) ? $request->from : 'DAC';
        $filterDestination = isset( $request->to ) ? $request->to : 'DFW';
        $filterAirline = isset( $request->airline ) ? $request->airline : '';

        // dd( $filterOrigin, $filterDestination, $filterAirline );

        // Find all connections

        function findConnections( $segments, $origin, $destination, $filterAirline = '' ) {
            $connections = [];
            foreach ( $segments as $segment ) {
                $segOrigin = $segment[ '@attributes' ][ 'Origin' ];
                $segDestination = $segment[ '@attributes' ][ 'Destination' ];
                $segCarrier = $segment[ '@attributes' ][ 'Carrier' ];

                if ( $segOrigin == $origin && ( $filterAirline == '' || $segCarrier == $filterAirline ) ) {
                    $remainingConnections = findConnections( $segments, $segDestination, $destination, $filterAirline );
                    if ( $segDestination == $destination || $remainingConnections ) {
                        $connections[] = [
                            'segment' => $segment,
                            'connections' => $remainingConnections
                        ];
                    }
                }
            }
            return $connections;
        }

        // Flatten connections into combinations

        function flattenConnections( $connections, $currentPath = [] ) {
            $combinations = [];
            foreach ( $connections as $connection ) {
                $path = array_merge( $currentPath, [ $connection[ 'segment' ] ] );
                if ( empty( $connection[ 'connections' ] ) ) {
                    $combinations[] = $path;
                } else {
                    $combinations = array_merge( $combinations, flattenConnections( $connection[ 'connections' ], $path ) );
                }
            }
            return $combinations;
        }

        // Calculate flight duration

        function calculateFlightDuration( $departure, $arrival ) {
            $departureTime = new DateTime( $departure );
            $arrivalTime = new DateTime( $arrival );
            $interval = $departureTime->diff( $arrivalTime );
            return $interval->h * 60 + $interval->i;
            // Total minutes
        }

        // Format duration in hours and minutes

        function formatDuration( $totalMinutes ) {
            $hours = floor( $totalMinutes / 60 );
            $minutes = $totalMinutes % 60;
            return sprintf( '%dh %dm', $hours, $minutes );
        }

        // Find ADT pricing information

        function findPricing( $pricingSolutions ) {
            foreach ( $pricingSolutions as $solution ) {
                foreach ( isset( $solution[ 'airPricingInfo' ] ) ? $solution[ 'airPricingInfo' ] : [] as $info ) {
                    if ( isset( $info[ 'passengerType' ] ) && $info[ 'passengerType' ] === 'ADT' ) {
                        return isset( $info[ '@attributes' ][ 'TotalPrice' ] ) ? $info[ '@attributes' ][ 'TotalPrice' ] : 'N/A';
                    }
                }
            }
            return 'N/A';
        }

        // Generate connections and combinations
        $connections = findConnections( $segments, $filterOrigin, $filterDestination, $filterAirline );
        $combinations = flattenConnections( $connections );

        // Prepare JSON output
        $response = [];
        foreach ( $combinations as $combo ) {
            $firstSegment = $combo[ 0 ][ '@attributes' ];
            $lastSegment = $combo[ count( $combo ) - 1 ][ '@attributes' ];
            $totalDuration = 0;
            $connectionCount = count( $combo ) - 1;

            // dd( $combo );

            foreach ( $combo as $segment ) {
                $segmentAttributes = $segment[ '@attributes' ];
                $totalDuration += calculateFlightDuration( $segmentAttributes[ 'DepartureTime' ], $segmentAttributes[ 'ArrivalTime' ] );
            }

            $response[] = [
                'origin' => $firstSegment[ 'Origin' ],
                'destination' => $lastSegment[ 'Destination' ],
                'departure_date' => substr( $firstSegment[ 'DepartureTime' ], 0, 10 ),
                'departure_time' => substr( $firstSegment[ 'DepartureTime' ], 11, 5 ),
                'arrival_date' => substr( $lastSegment[ 'ArrivalTime' ], 0, 10 ),
                'arrival_time' => substr( $lastSegment[ 'ArrivalTime' ], 11, 5 ),
                'carrier_code' => $firstSegment[ 'Carrier' ],
                'flight_numbers' => $firstSegment[ 'FlightNumber' ] . '-' . $lastSegment[ 'FlightNumber' ],
                'total_flight_duration' => formatDuration( $totalDuration ),
                'connections' => $connectionCount,
                'total_price_ADT' => findPricing( $pricingSolutions ),
            ];
        }

        header( 'Content-Type: application/json' );
        // echo json_encode( [ 'flights' => $response ], JSON_PRETTY_PRINT );

        return response()->json( [ 'flights' => $response ], 200, [], JSON_PRETTY_PRINT );

    }

}
