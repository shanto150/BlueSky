<script setup>
import { ref, onMounted, reactive } from "vue";
import axiosInstance from "../../axiosInstance"
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import CustomMinMaxSlider from "../../components/search/CustomMinMaxSlider.vue";

const fdate = ref();
const sliderMin = ref(150);
const sliderMax = ref(180);

const format = (fdate) => {
    const day = fdate.getDate();
    const month = fdate.getMonth() + 1;
    const year = fdate.getFullYear();

    return `${day}/${month}/${year}`;
}
const tformat = (tdate) => {
    const day = tdate.getDate();
    const month = tdate.getMonth() + 1;
    const year = tdate.getFullYear();

    return `${day}/${month}/${year}`;
}
const tdate = ref();

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

    // 'Access-Control-Allow-Origin': 'http://127.0.0.1:8000',
    //'Access-Control-Allow-Methods': '*',
    //'Access-Control-Allow-Credentials': 'true',
    //'Access-Control-Allow-Headers': '*',
    //'Access-Control-Expose-Headers': '*',

    const reqxml = await GenerateXML();
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.post('http://apac.universal-api.pp.travelport.com/B2BGateway/connect/uAPI/AirService',
        reqxml,
        {
            headers: {
                'Content-Type': 'text/xml',
            },
            auth: {
                'username': "Universal API/uAPI1974892322-0c5d2a63",
                'password': "Pi2-3$fB+j"
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => { console.log(err) });
}

function changeType(type) {

    if (type == 1) {
        $('.one-way').addClass('bg-checkbox-active');
        $('.round-way').removeClass('bg-checkbox-active');
        $('.multi-city').removeClass('bg-checkbox-active');
        $('.one-way').removeClass('bg-checkbox');
        $('.round-way').addClass('bg-checkbox');
        $('.multi-city').addClass('bg-checkbox');
    } else if (type == 2) {
        $('.one-way').removeClass('bg-checkbox-active');
        $('.round-way').addClass('bg-checkbox-active');
        $('.multi-city').removeClass('bg-checkbox-active');
        $('.round-way').removeClass('bg-checkbox');
        $('.one-way').addClass('bg-checkbox');
        $('.multi-city').addClass('bg-checkbox');
    } else {
        $('.one-way').removeClass('bg-checkbox-active');
        $('.round-way').removeClass('bg-checkbox-active');
        $('.multi-city').addClass('bg-checkbox-active');
        $('.multi-city').removeClass('bg-checkbox');
        $('.one-way').addClass('bg-checkbox');
        $('.round-way').addClass('bg-checkbox');
    }


}

onMounted(() => {
    $("#origin_id").select2({
        placeholder: '=Select=',
        theme: 'bootstrap-5',
        width: '100%',
        allowClear: true,
        height: '50',
    });

    $(".select2C").select2({
        theme: 'bootstrap-5',
        width: '100%',
        height: '50',
        width: 'element'
    });
});
getAirports();

function formatState(state) {
    if (!state.id) {
        return state.text;
    }
    var $state = $('<div class="row"> <div class="col-md-2" style="border-right:1px solid #9e56ef"><b style="font-size:12px">' + state.id + '</b></div> <div class="col-md-8" style="font-size:13px; padding-top:3px">' + state.text + ',' + state.city + '</div></div>');

    return $state;
};

async function getAirports() {

    try {
        const response = await axiosInstance.get('airports');
        var getDatas = [];
        $.each(response.data, function (key, value) {
            var obj = { id: value.code, text: value.Airport_Name, city: value.City_name }
            getDatas.push(obj);

        });

        $("#origin_id").select2({
            placeholder: '=Select=',
            theme: 'bootstrap-5',
            width: '100%',
            // allowClear: true,
            tags: true,
            height: '50',
            data: getDatas,
            templateResult: function (state) {
                if (!state.id) {
                    return state.text;
                }
                var $state = $('<div class="row"> <div class="col-md-2" style="border-right:1px solid #9e56ef"><b style="font-size:12px">' + state.id + '</b></div> <div class="col-md-8" style="font-size:13px;">' + state.text + ',' + state.city + '</div></div>');

                return $state;
            },
            templateSelection: formatState,


        }).on('change', function (e) {

        });;

        $('#origin_id').prepend('<option selected=""></option>');

        $("#destination_id").select2({
            placeholder: '=Select=',
            theme: 'bootstrap-5',
            width: '100%',
            // allowClear: true,
            tags: true,
            height: '50',
            data: getDatas,
            templateResult: function (state) {
                if (!state.id) {
                    return state.text;
                }
                var $state = $('<div class="row"> <div class="col-md-2" style="border-right:1px solid #9e56ef"><b style="font-size:12px">' + state.id + '</b></div> <div class="col-md-8" style="font-size:13px;">' + state.text + ',' + state.city + '</div></div>');

                return $state;
            },
            templateSelection: formatState,
        });

        $('#destination_id').prepend('<option selected=""></option>');


    } catch (error) {
        // console.log(error);

    }
}

function onHover() {

    $("#img").attr('src', '');
}

function offHover() {
    $("#img").attr('src', '');
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

                    <li class="breadcrumb-item active" aria-current="page">Flight Search Result</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- <div class="row">
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
    </div> -->
    <div class="row">
        <div class="col-md-12">
            <div class="card border border-1 border-primary">

                <div class="card-body">
                    <div class="d-flex align-items-center gap-3">
                        <div class="bg-checkbox-active one-way rounded rounded-1 p-2">
                            <input @click="changeType(1)" class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1">

                            <label class="form-check-label-box" for="flexRadioDefault1">
                                &nbsp;One Way
                            </label>
                        </div>
                        <div class="bg-checkbox round-way rounded rounded-1 p-2">
                            <input @click="changeType(2)" class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2">
                            <label class="form-check-label-box" for="flexRadioDefault2">
                                &nbsp;Round Trip
                            </label>
                        </div>
                        <div class="bg-checkbox rounded multi-city rounded-1 p-2">
                            <input @click="changeType(3)" class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault3">
                            <label class="form-check-label-box" for="flexRadioDefault3">
                                &nbsp; Multi City
                            </label>
                        </div>

                        <div class="ms-auto">
                            <div class="row">
                                <div class="col-md-4 pr-0">
                                    <div class="input-group mb-3">
                                        <button class="btn btn-outline-primary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">2 Passangers</button>
                                        <ul class="dropdown-menu p-1" style="width: 300px;">
                                            <table class="table table-sm">
                                                <tbody>
                                                    <tr>
                                                        <td><small> Adult <br> <span style="font-size: 8px;">Above 12
                                                                    Years</span></small></td>
                                                        <td style="width: 150px;">
                                                            <div class="input-group product-qty">
                                                                <button type="button"
                                                                    class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number"
                                                                    data-type="minus">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="feather feather-minus-circle text-primary">
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                                <input type="text" name="quantity"
                                                                    class="form-control input-number quantity"
                                                                    value="1">
                                                                <button type="button"
                                                                    class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number"
                                                                    data-type="plus">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="feather feather-plus-circle text-primary">
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><small>Children <br><span style="font-size: 8px;">02 to
                                                                    Under 12 Years
                                                                </span></small></td>
                                                        <td style="width: 150px;">
                                                            <div class="input-group product-qty">
                                                                <button type="button"
                                                                    class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number"
                                                                    data-type="minus">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="feather feather-minus-circle text-primary">
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                                <input type="text" name="quantity"
                                                                    class="form-control input-number quantity"
                                                                    value="1">
                                                                <button type="button"
                                                                    class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number"
                                                                    data-type="plus">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="feather feather-plus-circle text-primary">
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><small>Infant <br><span style="font-size: 8px;">Under 02
                                                                    Years</span></small></td>
                                                        <td style="width: 150px;">
                                                            <div class="input-group product-qty">
                                                                <button type="button"
                                                                    class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number"
                                                                    data-type="minus">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="feather feather-minus-circle text-primary">
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                                <input type="text" name="quantity"
                                                                    class="form-control input-number quantity"
                                                                    value="1">
                                                                <button type="button"
                                                                    class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number"
                                                                    data-type="plus">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="feather feather-plus-circle text-primary">
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </ul>

                                    </div>
                                </div>

                                <div class="col-md-4 pr-0">
                                    <select name="" id="class_type" class="form-control select2C">
                                        <option value="" selected>Economy</option>
                                        <option value="">Premium Economy</option>
                                        <option value="">Business Class</option>
                                        <option value="">First Class</option>
                                    </select>
                                </div>

                                <div class="col-md-4 pr-0">
                                    <select name="" id="pre_airline" class="form-control select2C">
                                        <option value="" selected>Prefered Airlines</option>
                                        <option value="">Qatar </option>
                                        <option value="">Saudia</option>
                                        <option value="">Emirates</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-md-3">
                            <select id="origin_id" name="origin_name" class="form-control form-control-lg origin_name">
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select id="destination_id" name="destination_name"
                                class="form-control form-control destination_name">
                            </select>
                        </div>

                        <div class="col-md-2">
                            <VueDatePicker v-model="fdate" placeholder="Select Date" :enable-time-picker="false"
                                :format="format"></VueDatePicker>
                        </div>
                        <div class="col-md-2">
                            <VueDatePicker v-model="tdate" placeholder="Select Date" :enable-time-picker="false"
                                :format="tformat"></VueDatePicker>
                        </div>
                        <div class="col-md-1">
                            <router-link :to="{ name: 'searchResult' }">
                                <img src="" alt="" style="width: 53px;"
                                    @mouseover="onHover();" @mouseout="offHover();" id="img">
                            </router-link>
                            <!-- <img src="../../../../public/build/assets/s_Hover_State.jpg" alt="" style="width: 53px;"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-clock text-primary">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                &nbsp;&nbsp;
                                <span class="pt-1" style="font-size: 13px;">Book Flight within</span>
                                &nbsp; &nbsp;
                                <div class="dash-lable bg-light-primary text-primary rounded-1">
                                    <p class="text-black mb-0">30</p>
                                </div>
                                &nbsp;
                                <div class="ml-1 mr-1">:</div>
                                &nbsp;
                                <div class="dash-lable bg-light-primary text-primary rounded-1">
                                    <p class="text-black mb-0">00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <!-- price-range -->
                    <div class="accordion" id="price-range">
                        <div class="accordion-item">
                            <p class="accordion-header" id="headingOne">
                                <button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Price Range
                                </button>
                            </p>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#price-range">
                                <div class="accordion-body">
                                    <div class="slider-cont">
                                        <CustomMinMaxSlider :min="65" :max="368" v-model:min-value="sliderMin"
                                            v-model:max-value="sliderMax" />
                                        <p class="text-center mb-0"> <i class="fa fa-bangladeshi-taka-sign"></i> {{
                                            sliderMin }} - <i class="fa fa-bangladeshi-taka-sign"></i> {{ sliderMax }}
                                        </p>
                                        <div class="text-center p-0">
                                            <span class="text-danger">*</span> Price may change based on policy
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- stop -->
                    <div class="accordion" id="stop">
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    Stop
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Non-Stop
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            1 Stop
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            2 Stop
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Refund availability -->
                    <div class="accordion" id="refund">
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    Refund Availability
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse show"
                                aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Refundable
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Partially Refundable
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Non Refundable
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- airlines -->
                    <div class="accordion" id="arilines">
                        <div class="accordion-item mt-3">
                            <h6 class="accordion-header" id="headingfour">
                                <button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                    aria-controls="collapseFour">
                                    Airlines
                                </button>
                            </h6>
                            <div id="collapseFour" class="accordion-collapse collapse show"
                                aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Emirates
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Qatar Airways
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Us-Bangla Airlines
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Biman Bangladesh
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Class -->
                    <div class="accordion" id="class-type">
                        <div class="accordion-item mt-3">
                            <h6 class="accordion-header" id="headingFive">
                                <button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                    aria-controls="collapseFive">
                                    Class
                                </button>
                            </h6>
                            <div id="collapseFive" class="accordion-collapse collapse show"
                                aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            First Class
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Business Class
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Premium Economy
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Economy
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Flight Schedule -->
                    <div class="accordion" id="class-type">
                        <div class="accordion-item mt-3">
                            <h6 class="accordion-header" id="headingSix">
                                <button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                                    aria-controls="collapseSix">
                                    Flight Schedule
                                </button>
                            </h6>
                            <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="d-flex gap-2">
                                                <button type="button"
                                                    class="btn btn-outline-primary w-100">Departure</button>
                                                <button type="button"
                                                    class="btn btn-outline-secondary w-100">Arrival</button>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-2">
                                            <div class="d-flex gap-2">
                                                <div
                                                    class="p-1 border border-1 text-center rounded rounded-1 bg-body-secondary cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-sunrise text-primary">
                                                        <path d="M17 18a5 5 0 0 0-10 0"></path>
                                                        <line x1="12" y1="2" x2="12" y2="9"></line>
                                                        <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
                                                        <line x1="1" y1="18" x2="3" y2="18"></line>
                                                        <line x1="21" y1="18" x2="23" y2="18"></line>
                                                        <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
                                                        <line x1="23" y1="22" x2="1" y2="22"></line>
                                                        <polyline points="8 6 12 2 16 6"></polyline>
                                                    </svg>
                                                    <br>
                                                    <span style="font-size: 8px; font-weight: bold;">00-06 AM</span>
                                                </div>
                                                <div
                                                    class="p-1 border border-1 text-center rounded rounded-1 bg-body-secondary cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-sun text-primary">
                                                        <circle cx="12" cy="12" r="5"></circle>
                                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                                    </svg>
                                                    <br>
                                                    <span style="font-size: 8px; font-weight: bold;">06-12 PM</span>
                                                </div>

                                                <div
                                                    class="p-1 border border-1 text-center rounded rounded-1 bg-body-secondary cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-sunset text-primary">
                                                        <path d="M17 18a5 5 0 0 0-10 0"></path>
                                                        <line x1="12" y1="9" x2="12" y2="2"></line>
                                                        <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
                                                        <line x1="1" y1="18" x2="3" y2="18"></line>
                                                        <line x1="21" y1="18" x2="23" y2="18"></line>
                                                        <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
                                                        <line x1="23" y1="22" x2="1" y2="22"></line>
                                                        <polyline points="16 5 12 9 8 5"></polyline>
                                                    </svg>
                                                    <br>
                                                    <span style="font-size: 8px; font-weight: bold;">12-06 PM</span>
                                                </div>
                                                <div
                                                    class="p-1 border border-1 text-center rounded rounded-1 bg-body-secondary cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-moon text-primary">
                                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z">
                                                        </path>
                                                    </svg>
                                                    <br>
                                                    <span style="font-size: 8px; font-weight: bold;">06-12 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Baggage -->
                    <div class="accordion" id="class-type">
                        <div class="accordion-item mt-3">
                            <h2 class="accordion-header" id="headingSeven">
                                <button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                                    aria-controls="collapseSeven">
                                    Baggage
                                </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse show"
                                aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            10 kg
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            20 kg
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            30 kg
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            02 Piece
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Layover -->
                    <div class="accordion" id="class-type">
                        <div class="accordion-item mt-3">
                            <h6 class="accordion-header" id="headingEight">
                                <button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                                    aria-controls="collapseEight">
                                    Layover
                                </button>
                            </h6>
                            <div id="collapseEight" class="accordion-collapse collapse show"
                                aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Netaki Subhas Chandra Bose..
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Kuwait International Airport
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Kunming Changshui Interna..
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Kiala lumpur International Ai..
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 mt-4">
                    <button class="btn btn-block btn-sm btn-outline-primary w-100">
                        Clear All Filters
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="row">
                <p>Showing 10 of 20 Total Flights</p>
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 m-0 p-0">
                                    <div class="d-flex">
                                        <img src="https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Symbol.png"
                                            height="70">
                                        <div class="text-center mt-2">
                                            <p class="p-0 m-0"><b>DAC-DXB</b></p>
                                            <small style="font-size: 12px; color: #5e6878;">Qatar Airways</small>
                                            <br>
                                            <small style="font-size: 12px; color: #5e6878;">Boeing 707</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 border-start">
                                    <div class="d-flex gap-2">
                                        <div class="mt-2">
                                            <p class="p-0 m-0"><b>10:50 AM</b></p>
                                            <small style="font-size: 12px; color: #5e6878;">03 Jan, Fri</small>
                                            <br>
                                            <small style="font-size: 12px; color: #5e6878;">Departure</small>
                                        </div>

                                        <div class="text-center mt-2">
                                            <small style="font-size: 12px; color: #5e6878;">04 hr 15 Min</small>
                                            <br>
                                            <div class="d-flex">
                                                <div>
                                                    ....
                                                </div>
                                                <div><i class="fa fa-plane"
                                                        style="font-size: 28px;color: #1882ffb3;"></i></div>
                                                <div>
                                                    ....
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-2">
                                            <p class="p-0 m-0"><b>02:50 PM</b></p>
                                            <small style="font-size: 12px; color: #5e6878;">03 Jan, Fri</small>
                                            <br>
                                            <small style="font-size: 12px; color: #5e6878;">Departure</small>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 border-start">
                                    <div class="d-flex gap-2">
                                        <div class="mt-2">
                                            <p class="p-0 m-0"><b>01 Stop</b></p>
                                            <small style="font-size: 12px; color: #5e6878;">CCU</small><br>
                                            <small style="font-size: 12px; color: #5e6878;">1 hr 15 min</small>
                                        </div>
                                        <div class="d-flex gap-3 border-start">
                                            <div class="mt-2">
                                                <div class="text-right" style="padding-left: 10px;">
                                                    <p class="p-0 m-0"><b><i class="fa fa-bangladeshi-taka-sign"></i>
                                                            65000</b></p>
                                                    <small style="font-size: 12px; color: #5e6878;"><i
                                                            class="fa fa-bangladeshi-taka-sign"></i> 67000</small><br>
                                                    <small style="font-size: 12px; color: #5e6878;">Economy Calss</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bg-checkbox-active {
    color: #fff;
    background: #1882ff;
}

.bg-checkbox {
    color: #616b7a;
    background: #ebf0f5;
}

/* search bar */
#searchbar {
    margin-top: 15px;
}

#searchbar .bar {
    display: flex;
}

/* #searchbar .flight .flight-search div.location {
    flex-basis: calc(25% - 10px);
    margin-right: 10px;
    max-width: calc(25% - 10px);
} */

#searchbar .bar div.box {
    border: 1px solid #dbdde0;
    border-radius: 10px;
    cursor: pointer;
    /* padding: 2px 15px; */
    position: relative;
}

#searchbar .bar div.box .row .col-md-4 .short-code {
    padding: 16px 0px 0px 10px;
    font-size: 19px;
}

/* #searchbar .bar div.box .label {
    display: block;
    font-size: .8571428571rem;
    font-weight: 400;
    line-height: 14px;
}

#searchbar .box span.label {
    color: #00026e;
    margin-bottom: 4px;
    text-transform: uppercase;
} */
</style>
