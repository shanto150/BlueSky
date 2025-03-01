<?php

namespace App\Http\Controllers\Admin\API;

use SimpleXMLElement;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Admin\API\requestxml;
use App\Http\Controllers\Admin\API\singlewayjson;

class APIController extends BaseController {

    public function Lowfaresearch( Request $request ) {

        // dd( $request->all() );
        $request->validate( [
            'from' => 'required',
            'to' => 'required',
        ] );


        $start_time = microtime(true);
        $requestXML = new RequestXML();
        $xmlpayload = $requestXML->generateLowFareSearchXML($request);
        // dd($xmlpayload);
        $execution_time = microtime(true) - $start_time;
        custom_debug('xHeader XML Generation Time', number_format($execution_time, 2) . ' seconds');

        $start_time = microtime(true);
        $array = $this->performCurlRequest( $xmlpayload );
        $execution_time = microtime(true) - $start_time;
        custom_debug('xAPI Response Time', number_format($execution_time, 2) . ' seconds');

        $start_time = microtime(true);
        $sRjson= new Singlewayjson();
        $json = $sRjson->checkJson( $array, $request );
        $execution_time = microtime(true) - $start_time;
        custom_debug('xJson Generation Time', number_format($execution_time, 2) . ' seconds');


        return  $json;

    }

    public function performCurlRequest($xmlpayload) {

        $username = env( 'API_USERNAME' );
        $password = env( 'API_PASSWORD' );

        $start_time = microtime(true);
        $ch = curl_init();
        // Set cURL options
        curl_setopt_array( $ch, [
            CURLOPT_URL => 'https://apac.universal-api.pp.travelport.com/B2BGateway/connect/uAPI/AirService',
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $xmlpayload,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => [
                'Content-Type: text/xml;charset=UTF-8',
            ],
            CURLOPT_USERPWD => "$username:$password",
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
            CURLOPT_RETURNTRANSFER => true,
        ] );

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
        //return $boday as simaple json not array
        // $jsonData = json_encode( $body );
        // dd( $jsonData );
        $array = json_decode( json_encode( ( array )$body ), TRUE );
        //End good ******

        return  $array;
    }

}
