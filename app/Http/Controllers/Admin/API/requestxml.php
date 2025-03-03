<?php

namespace App\Http\Controllers\Admin\API;

class RequestXML {
    // Class constants
    private const TARGET_BRANCH = 'P7186658';
    private const PROVIDER_CODE = '1G';
    private const CABIN_TYPE = 'Economy';

    private function getEnvelopeHeader() {
        return '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
                <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema">
                <LowFareSearchReq xmlns="http://www.travelport.com/schema/air_v52_0"
                TraceId="c8f38268-3b70-4141-869d-010611bc23e5"
                TargetBranch="'.self::TARGET_BRANCH.'"
                SolutionResult="true"
                ReturnUpsellFare="true">
                <BillingPointOfSaleInfo xmlns="http://www.travelport.com/schema/common_v52_0"
                OriginApplication="UAPI"/>';
    }

    private function buildSearchAirLeg( $request ) {
        $searchAirLegs = '';
        if ( $request->Way > 1 ) {
            $searchAirLegs .= '<SearchAirLeg>
                <SearchOrigin>
                    <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0"
                    Code="'.$request->from.'" PreferCity="true"/>
                </SearchOrigin>
                <SearchDestination>
                    <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0"
                    Code="'.$request->to.'" PreferCity="true"/>
                </SearchDestination>
                <SearchDepTime PreferredTime="'.$request->dep_date.'"/>
            </SearchAirLeg>
            <SearchAirLeg>
                <SearchOrigin>
                    <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0"
                    Code="'.$request->to.'" PreferCity="true"/>
                </SearchOrigin>
                <SearchDestination>
                    <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0"
                    Code="'.$request->from.'" PreferCity="true"/>
                </SearchDestination>
                <SearchDepTime PreferredTime="'.$request->arrival_date.'"/>
            </SearchAirLeg>';
        } else {
            $searchAirLegs .= '<SearchAirLeg>
                <SearchOrigin>
                    <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0"
                    Code="'.$request->from.'" PreferCity="true"/>
                </SearchOrigin>
                <SearchDestination>
                    <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0"
                    Code="'.$request->to.'" PreferCity="true"/>
                </SearchDestination>
                <SearchDepTime PreferredTime="'.$request->dep_date.'"/>
            </SearchAirLeg>';
        }
        return $searchAirLegs;
    }

    private function buildSearchPassengers( $request ) {
        $passengers = '';

        if ( $request->ADT > 0 ) {
            $passengers .= '<SearchPassenger xmlns="http://www.travelport.com/schema/common_v52_0"
                Code="ADT" BookingTravelerRef="ADT_0"/>';
        }

        if ( ( $request->CNN && $request->CNN > 0 ) || ( $request->KID && $request->KID > 0 ) ) {
            $passengers .= '<SearchPassenger xmlns="http://www.travelport.com/schema/common_v52_0"
                Code="CNN" Age="8" BookingTravelerRef="CNN_0"/>';
        }

        if ( $request->INF > 0 ) {
            $passengers .= '<SearchPassenger xmlns="http://www.travelport.com/schema/common_v52_0"
                Code="INF" Age="1" BookingTravelerRef="INF_0"/>';
        }

        return $passengers;
    }

    private function getCommonElements( $request ) {
        return '<AirSearchModifiers>
                    <PreferredProviders>
                        <Provider xmlns="http://www.travelport.com/schema/common_v52_0" Code="'.self::PROVIDER_CODE.'"/>
                    </PreferredProviders>
                    <PreferredCabins>
                        <CabinClass xmlns="http://www.travelport.com/schema/common_v52_0" Type="'.self::CABIN_TYPE.'"/>
                    </PreferredCabins>
                </AirSearchModifiers>'
        . $this->buildSearchPassengers( $request ) .
        '<AirPricingModifiers FaresIndicator="PublicAndPrivateFares"/>';
    }

    private function getEnvelopeFooter() {
        return '</LowFareSearchReq></s:Body></s:Envelope>';
    }

    public function generateLowFareSearchXML( $request ) {
        $xml = $this->getEnvelopeHeader();
        $xml .= $this->buildSearchAirLeg( $request );
        $xml .= $this->getCommonElements( $request );
        $xml .= $this->getEnvelopeFooter();

        return $xml;
    }
}
