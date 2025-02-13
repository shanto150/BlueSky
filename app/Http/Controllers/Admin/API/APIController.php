<?php

namespace App\Http\Controllers\Admin\API;

use DateTime;
use SimpleXMLElement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\BaseController;

class APIController extends BaseController {

    public function Lowfaresearch( Request $request ) {

        // dd( $request->all() );
        $request->validate( [
            'from' => 'required',
            'to' => 'required',
        ] );

        $requestXML = new RequestXML();
        $start_time = microtime(true);
        $xmlpayload = $requestXML->generateLowFareSearchXML($request);
        $execution_time = microtime(true) - $start_time;
        Log::info('XML Generation Time: ' . number_format($execution_time, 4) . ' seconds');



        // dd( $xmlpayload );
        $array = $this->performCurlRequest( $xmlpayload );
        // dd($array);
        $sRjson= new Singlewayjson();
        $json = $sRjson->checkJson( $array, $request );

        return  $json;

    }

    public function performCurlRequest($xmlpayload) {

        $username = env( 'API_USERNAME' );
        $password = env( 'API_PASSWORD' );

        $url = 'https://apac.universal-api.pp.travelport.com/B2BGateway/connect/uAPI/AirService';
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
        //return $boday as simaple json not array
        // $jsonData = json_encode( $body );
        // dd( $jsonData );
        $array = json_decode( json_encode( ( array )$body ), TRUE );
        //End good ******

        return  $array;
    }

}
