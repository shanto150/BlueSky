<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\Admin\API\XmlToJson;
use App\Http\Controllers\Admin\API\requestxml;

class APIController extends BaseController {

    public function Lowfaresearch( Request $request ) {

        // dd( $request->all() );
        $request->validate( [
            'from' => 'required',
            'to' => 'required',
        ] );

        $requestXML = new RequestXML();
        $xmlpayload = $requestXML->generateLowFareSearchXML( $request );

        // dd( $xmlpayload );

        $array = $this->performCurlRequest( $xmlpayload );

        header( 'Content-Type: application/json' );
        echo json_encode( $array, JSON_PRETTY_PRINT );

    }

    public function performCurlRequest( $xmlpayload ) {

        $username = env( 'API_USERNAME' );
        $password = env( 'API_PASSWORD' );

        $start_time = microtime( true );
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

        $converter = new XmlToJson($response);
        $result = $converter->parse();
        return $result;

    }

}
