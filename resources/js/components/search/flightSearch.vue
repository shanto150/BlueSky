<script setup>
import { ref, onMounted, reactive } from "vue";
const form = reactive({ Way: '', from: '', to: "", dep_date: '', ADT: '', CNN: '', INF: '' });

form.Way = 1;

async function GenerateXML() {

    var html = "";
    html += '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">';
    html += '<s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">';
    html += '<LowFareSearchReq xmlns="http://www.travelport.com/schema/air_v52_0" TraceId="c8f38268-3b70-4141-869d-010611bc23e5" TargetBranch="P7186658" SolutionResult="true" ReturnUpsellFare="true">';
    html += '<BillingPointOfSaleInfo xmlns="http://www.travelport.com/schema/common_v52_0" OriginApplication="UAPI"/>';
    if (form.Way == 1) {
        html += '<SearchAirLeg>';
        html += '<SearchOrigin>';
        html += '<CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="' + form.from + '" PreferCity="true"/>';
        html += '</SearchOrigin>';
        html += '<SearchDestination>';
        html += '<CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="' + form.to + '" PreferCity="true"/>';
        html += '</SearchDestination>';
        html += '<SearchDepTime PreferredTime="' + form.dep_date + '"/>';
        html += '</SearchAirLeg>';
    } else {
        html += '<SearchAirLeg>';
        html += '<SearchOrigin>';
        html += '<CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="DAC" PreferCity="true"/>';
        html += '</SearchOrigin>';
        html += '<SearchDestination>';
        html += '<CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="DAC" PreferCity="true"/>';
        html += '</SearchDestination>';
        html += '<SearchDepTime PreferredTime="2023-08-08"/>';
        html += '</SearchAirLeg>';

        html += '<SearchAirLeg>';
        html += '<SearchOrigin>';
        html += '<CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="DAC" PreferCity="true"/>';
        html += '</SearchOrigin>';
        html += '<SearchDestination>';
        html += '<CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="DAC" PreferCity="true"/>';
        html += '</SearchDestination>';
        html += '<SearchDepTime PreferredTime="2023-08-08"/>';
        html += '</SearchAirLeg>';
    }

    html += '<AirSearchModifiers>';
    html += '<PreferredProviders>';
    html += '<Provider xmlns="http://www.travelport.com/schema/common_v52_0" Code="1G"/>';
    html += '</PreferredProviders>';

    html += '<PreferredCabins>';
    html += '<CabinClass xmlns="http://www.travelport.com/schema/common_v52_0" Type="Economy"/>';
    html += '</PreferredCabins>';
    html += '</AirSearchModifiers>';

    html += '<SearchPassenger xmlns="http://www.travelport.com/schema/common_v52_0" Code="ADT" BookingTravelerRef="ADT_0"/>';
    html += '<AirPricingModifiers FaresIndicator="PublicAndPrivateFares"/>';

    html += '</LowFareSearchReq>';
    html += '</s:Body>';
    html += '</s:Envelope>';

    return html;
}

async function SendAPIRequest() {

    const reqxml = await GenerateXML();

    axios.post('http://apac.universal-api.pp.travelport.com/B2BGateway/connect/uAPI/AirService',
        reqxml,
        {
            headers:
                { 'Content-Type': 'text/xml' },
            auth: {
                'username': "Universal API/uAPI1974892322-0c5d2a63",
                'password': "Pi2-3$fB+j"
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => { console.log(err) });
}

</script>
<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">

        <div class="breadcrumb-title pe-3">Settings</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>
                    </li>

                    <li class="breadcrumb-item active" aria-current="page">Flight Search</li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 border border-1 border-primary m-2 pt-1">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" v-model="form.Way" checked type="radio"
                                    name="inlineRadioOptions" id="inlineRadio1" value="1">
                                <label class="form-check-label" for="inlineRadio1">One Way</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" v-model="form.Way" type="radio"
                                    name="inlineRadioOptions" id="inlineRadio2" value="2">
                                <label class="form-check-label" for="inlineRadio2">Round</label>
                            </div>

                        </div>
                    </div>
                    <div class="row">

                        <div class="col-md-2">
                            <label for="">From</label>
                            <input type="text" v-model="form.from" list="from_countries"
                                class="form-control mt-1 form-control-sm" name="from" placeholder="From">
                            <datalist id="from_countries">
                                <option>Russia</option>
                                <option>Germany</option>
                                <option>United Kingdom</option>
                            </datalist>

                        </div>
                        <div class="col-md-2">
                            <label for="">To</label>
                            <input type="text" list="to_countries" v-model="form.to"
                                class="form-control mt-1 form-control-sm" name="to" placeholder="To">
                            <datalist id="to_countries">
                                <option>Bangladesh-BD</option>
                                <option>Indio</option>
                                <option>USA</option>
                            </datalist>
                        </div>
                        <div class="col-md-2">
                            <label for="">Date</label>
                            <input type="date" v-model="form.dep_date" class="form-control form-control-sm" name="date"
                                placeholder="Date">
                        </div>

                        <div class="col-md-1">
                            <label for="">Adult</label>
                            <input type="text" v-model="form.ADT" class="form-control form-control-sm" name="adult"
                                placeholder="Adult">
                        </div>
                        <div class="col-md-1">
                            <label for="">Child</label>
                            <input type="text" v-model="form.CNN" class="form-control form-control-sm" name="child"
                                placeholder="Child">
                        </div>
                        <div class="col-md-1">
                            <label for="">infent</label>
                            <input type="text" v-model="form.INF" class="form-control form-control-sm" name="infent"
                                placeholder="infent">
                        </div>
                        <div class="col-md-2 mt-3">
                            <button @click="SendAPIRequest()" class="btn btn-sm btn-danger w-100"><i
                                    class="fa fa-search"></i>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
