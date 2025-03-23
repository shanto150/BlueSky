<?php

namespace App\Http\Controllers\Admin\API;

class farerulsreq
{
    // Class constants
    private const TARGET_BRANCH = 'P7186658';

    private function getEnvelopeHeader()
    {
        return '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
                <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema">
                <AirFareRulesReq xmlns="http://www.travelport.com/schema/air_v52_0"
                TraceId="c8f38268-3b70-4141-869d-010611bc23e5"
                TargetBranch="' . self::TARGET_BRANCH . '">
                <BillingPointOfSaleInfo xmlns="http://www.travelport.com/schema/common_v52_0"
                OriginApplication="UAPI"/>';
    }

    private function buildFareRuleKeys($fareRules)
    {
        $fareRuleElements = '';
        foreach ($fareRules as $routeKey => $ruleData) {
            $fareRuleElements .= '<FareRuleKey FareInfoRef="' . $ruleData['FareInfoRef'] . '"
                ProviderCode="' . $ruleData['ProviderCode'] . '">' . $ruleData['content'] . '</FareRuleKey>';
        }
        return $fareRuleElements;
    }

    private function getEnvelopeFooter()
    {
        return '</AirFareRulesReq></s:Body></s:Envelope>';
    }

    public function generateAirFareRulesXML($request)
    {
        $xml = $this->getEnvelopeHeader();
        $xml .= $this->buildFareRuleKeys($request);
        $xml .= $this->getEnvelopeFooter();

        return $xml;
    }
}
