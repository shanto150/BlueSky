<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Http\Request;

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

    private function buildSearchAirLeg($from, $to, $depDate) {
        return '<SearchAirLeg>
                    <SearchOrigin>
                        <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0"
                        Code="'.$from.'" PreferCity="true"/>
                    </SearchOrigin>
                    <SearchDestination>
                        <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0"
                        Code="'.$to.'" PreferCity="true"/>
                    </SearchDestination>
                    <SearchDepTime PreferredTime="'.$depDate.'"/>
                </SearchAirLeg>';
    }

    private function buildSearchPassengers(Request $request) {
        $passengers = '';

        if ($request->ADT > 0) {
            $passengers .= '<SearchPassenger xmlns="http://www.travelport.com/schema/common_v52_0"
                Code="ADT" BookingTravelerRef="ADT_0"/>';
        }

        if (($request->CNN && $request->CNN > 0) || ($request->KID && $request->KID > 0)) {
            $passengers .= '<SearchPassenger xmlns="http://www.travelport.com/schema/common_v52_0"
                Code="CNN" Age="8" BookingTravelerRef="CNN_0"/>';
        }

        if ($request->INF > 0) {
            $passengers .= '<SearchPassenger xmlns="http://www.travelport.com/schema/common_v52_0"
                Code="INF" Age="1" BookingTravelerRef="INF_0"/>';
        }

        return $passengers;
    }

    private function getCommonElements(Request $request) {
        return '<AirSearchModifiers>
                    <PreferredProviders>
                        <Provider xmlns="http://www.travelport.com/schema/common_v52_0" Code="'.self::PROVIDER_CODE.'"/>
                    </PreferredProviders>
                    <PreferredCabins>
                        <CabinClass xmlns="http://www.travelport.com/schema/common_v52_0" Type="'.self::CABIN_TYPE.'"/>
                    </PreferredCabins>
                </AirSearchModifiers>'
                . $this->buildSearchPassengers($request) .
                '<AirPricingModifiers FaresIndicator="PublicAndPrivateFares"/>';
    }

    private function getEnvelopeFooter() {
        return '</LowFareSearchReq></s:Body></s:Envelope>';
    }

    public function generateLowFareSearchXML(Request $request) {
        $xml = $this->getEnvelopeHeader();
        $xml .= $this->buildSearchAirLeg($request->from, $request->to, $request->dep_date);

        if ($request->Way != 1) {
            $xml .= $this->buildSearchAirLeg($request->to, $request->from, $request->return_date);
        }

        $xml .= $this->getCommonElements($request);
        $xml .= $this->getEnvelopeFooter();

        return $xml;
    }
}
