<script setup>
import { ref, onMounted, reactive } from "vue";
import axiosInstance from "../../axiosInstance"
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
const fdate = ref();
const isAutoApply = ref(true);
const isMultiCalendar = ref(false);
const isRanges = ref();

const isRounded = 'oneway';

const format = (fdate) => {

    const day = fdate.getDate();
    const month = fdate.getMonth() + 1;
    const year = fdate.getFullYear();

    return `${day}/${month}/${year}`;
}

const formats = (fdates) => {

    const day = fdates[0].getDate();
    const month = fdates[0].getMonth() + 1;
    const year = fdates[0].getFullYear();
    $("#fromdateVal input").val(`${day}/${month}/${year}`);

    if (fdates[1]) {

        const day2 = fdates[1].getDate();
        const month2 = fdates[1].getMonth() + 1;
        const year2 = fdates[1].getFullYear();
        $("#todateVal input").val(`${day2}/${month2}/${year2}`);
    }

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

function tourTypeChange(type) {

    if (type == 1) {
        $('.one-way').addClass('bg-checkbox-active');
        $('.round-way').removeClass('bg-checkbox-active');
        $('.multi-city').removeClass('bg-checkbox-active');
        $('.one-way').removeClass('bg-checkbox');
        $('.round-way').addClass('bg-checkbox');
        $('.multi-city').addClass('bg-checkbox');

        $('#toDateChange').addClass('d-none');
        this.isAutoApply = !this.isAutoApply;
        this.isMultiCalendar = !this.isMultiCalendar;
        this.isRanges = !this.isRanges;
        this.isRounded = 'oneway';


    } else if (type == 2) {
        $('.one-way').removeClass('bg-checkbox-active');
        $('.round-way').addClass('bg-checkbox-active');
        $('.multi-city').removeClass('bg-checkbox-active');
        $('.round-way').removeClass('bg-checkbox');
        $('.one-way').addClass('bg-checkbox');
        $('.multi-city').addClass('bg-checkbox');

        $('#toDateChange').removeClass('d-none');
        this.isAutoApply = !this.isAutoApply;
        this.isMultiCalendar = !this.isMultiCalendar;
        this.isRanges = !this.isRanges;
        this.isRounded = 'round';


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

    // $(".select2C").select2({
    //     theme: 'bootstrap-5',
    //     width: '100%',
    //     height: '50',
    //     // width: 'element'
    // });

    // $("#class_type").select2({
    //     theme: 'bootstrap-5',
    // });
    // $("#pre_airline").select2({
    //     theme: 'bootstrap-5',
    // });
});
getAirports();

function formatState(state) {
    if (!state.id) {
        return state.text;
    }
    var $state = $('<div class="row"> <div class="col-md-2" style="border-right:1px solid #9e56ef"><b style="font-size:10px">' + state.id + '</b></div> <div class="col-md-8" style="font-size:13px; padding-top:3px">' + state.text + ',' + state.city + '</div></div>');

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


        });

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

    $("#img").attr('src', 'http://[::1]:5173/public/theme/appimages/s_Hover_State.jpg');
}

function offHover() {
    $("#img").attr('src', 'http://[::1]:5173/public/theme/appimages/s_With_Icon.jpg');
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
            <div class="card border border-1 bluesky-border-primary">

                <div class="card-body">
                    <div class="d-flex align-items-center gap-2">

                        <div class="bg-checkbox-active one-way rounded rounded-1 p-1">
                            <input @click="tourTypeChange(1)" class="form-check-input" type="radio"
                                name="flexRadioDefault" id="flexRadioDefault1">

                            <label class="form-check-label-box" for="flexRadioDefault1">
                                &nbsp;One Way
                            </label>
                        </div>
                        <div class="bg-checkbox round-way rounded rounded-1 p-1">
                            <input @click="tourTypeChange(2)" class="form-check-input" type="radio"
                                name="flexRadioDefault" id="flexRadioDefault2">
                            <label class="form-check-label-box" for="flexRadioDefault2">
                                &nbsp;Round Trip
                            </label>
                        </div>
                        <div class="bg-checkbox rounded multi-city rounded-1 p-1">
                            <input @click="tourTypeChange(3)" class="form-check-input" type="radio"
                                name="flexRadioDefault" id="flexRadioDefault3">
                            <label class="form-check-label-box" for="flexRadioDefault3">
                                &nbsp; Multi City
                            </label>
                        </div>


                        <!-- in medium screen -->
                        <div class="ms-auto d-none d-md-block">
                            <div class="row">
                                <div class="col-md-4 pt-1 pr-0">
                                    <div class="input-group input-group-sm mb-3">
                                        <button class="btn bluesky-btn-outline-primary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">2 Passangers</button>
                                        <ul class="dropdown-menu p-1" style="width: 300px;">
                                            <table class="table table-sm">
                                                <tbody>
                                                    <tr>
                                                        <td><small> Adult <br> <span style="font-size: 9px;">Above 12
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
                                                                        class="feather feather-minus-circle custom-text-purple">
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
                                                                        class="feather feather-plus-circle custom-text-purple">
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><small>Children <br><span style="font-size: 9px;">02 to
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
                                                                        class="feather feather-minus-circle custom-text-purple">
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
                                                                        class="feather feather-plus-circle custom-text-purple">
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><small>Infant <br><span style="font-size: 9px;">Under 02
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
                                                                        class="feather feather-minus-circle custom-text-purple">
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
                                                                        class="feather feather-plus-circle custom-text-purple">
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

                                <div class="col-md-4 p-1">
                                    <select name="" id="class_type" class="form-control form-control-sm select2">
                                        <option value="" selected>Economy</option>
                                        <option value="">Premium Economy</option>
                                        <option value="">Business Class</option>
                                        <option value="">First Class</option>
                                    </select>
                                </div>

                                <div class="col-md-4 p-1">
                                    <select name="" id="pre_airline" class="form-control form-control-sm select2">
                                        <option value="" selected>Prefered Airlines</option>
                                        <option value="">Qatar </option>
                                        <option value="">Saudia</option>
                                        <option value="">Emirates</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- end in medium  screen -->
                    </div>

                    <!-- in small screen -->
                    <div class="row d-sm-block d-md-none mt-2">

                        <button class="col-md-12 btn bluesky-btn-outline-primary dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">2 Passangers</button>
                        <ul class="dropdown-menu p-1" style="width: 300px;">
                            <table class="table table-sm">
                                <tbody>
                                    <tr>
                                        <td><small> Adult <br> <span style="font-size: 9px;">Above 12
                                                    Years</span></small></td>
                                        <td style="width: 150px;">
                                            <div class="input-group product-qty">
                                                <button type="button"
                                                    class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number"
                                                    data-type="minus">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-minus-circle custom-text-purple">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                    </svg>
                                                </button>
                                                <input type="text" name="quantity"
                                                    class="form-control input-number quantity" value="1">
                                                <button type="button"
                                                    class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number"
                                                    data-type="plus">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-plus-circle custom-text-purple">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><small>Children <br><span style="font-size: 9px;">02 to
                                                    Under 12 Years
                                                </span></small></td>
                                        <td style="width: 150px;">
                                            <div class="input-group product-qty">
                                                <button type="button"
                                                    class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number"
                                                    data-type="minus">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-minus-circle custom-text-purple">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                    </svg>
                                                </button>
                                                <input type="text" name="quantity"
                                                    class="form-control input-number quantity" value="1">
                                                <button type="button"
                                                    class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number"
                                                    data-type="plus">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-plus-circle custom-text-purple">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><small>Infant <br><span style="font-size: 9px;">Under 02
                                                    Years</span></small></td>
                                        <td style="width: 150px;">
                                            <div class="input-group product-qty">
                                                <button type="button"
                                                    class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number"
                                                    data-type="minus">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-minus-circle custom-text-purple">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                                    </svg>
                                                </button>
                                                <input type="text" name="quantity"
                                                    class="form-control input-number quantity" value="1">
                                                <button type="button"
                                                    class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number"
                                                    data-type="plus">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-plus-circle custom-text-purple">
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

                        <div class="col-md-12 p-1 mt-2">
                            <select name="" id="class_type" class="form-control form-control-sm">
                                <option value="" selected>Economy</option>
                                <option value="">Premium Economy</option>
                                <option value="">Business Class</option>
                                <option value="">First Class</option>
                            </select>
                        </div>

                        <div class="col-md-12 p-1 mt-2">
                            <select name="" id="pre_airline" class="form-control form-control-sm">
                                <option value="" selected>Prefered Airlines</option>
                                <option value="">Qatar </option>
                                <option value="">Saudia</option>
                                <option value="">Emirates</option>
                            </select>
                        </div>
                    </div>
                    <!-- end in small screen -->


                    <div class="row mt-2">
                        <div class="col-md-6">
                            <div class="d-flex">
                                <div class="w-50">
                                    <select id="origin_id" name="origin_name"
                                        class="form-control form-control-lg origin_name">
                                    </select>
                                </div>
                                <div class="py-2" style="margin: 0 5px 0 5px;">
                                    <img src="../../../../public/theme/appimages/fluent_arrow-swap-28-regular.svg"
                                        alt="">
                                </div>
                                <div class="w-50">
                                    <select id="destination_id" name="destination_name"
                                        class="form-control form-control destination_name">
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2 mt-2 mt-md-0" v-if="isRounded == 'oneway'">
                            <VueDatePicker class="dateChange" id="fromdateVal" v-model="fdate" placeholder="Select Date"
                                :enable-time-picker="false" :format="format" :auto-apply="isAutoApply"
                                :multi-calendars="isMultiCalendar" :range="isRanges"></VueDatePicker>

                        </div>
                        <div class="col-md-2 mt-2 mt-md-0" v-if="isRounded == 'round'">
                            <VueDatePicker class="dateChange" id="fromdateVal" v-model="fdate" placeholder="Select Date"
                                :enable-time-picker="false" :format="formats" :auto-apply="isAutoApply"
                                :multi-calendars="isMultiCalendar" :range="isRanges"></VueDatePicker>

                        </div>


                        <div class="col-md-2 d-none mt-2 mt-md-0" id="toDateChange">
                            <VueDatePicker v-model="tdate" id="todateVal" placeholder="Select Date"
                                :enable-time-picker="false">
                            </VueDatePicker>
                        </div>

                        <div class="col-md-1 mt-2 mt-md-0">
                            <router-link :to="{ name: 'searchResult' }">
                                <img src="../../../../public/theme/appimages/Mobile_Button With_Icon.jpg" alt=""
                                    class="d-sm-block d-md-none" style="width: 100%;" id="img">
                                <img src="../../../../public/theme/appimages/s_With_Icon.jpg" alt=""
                                    style="width: 53px;" @mouseover="onHover();" @mouseout="offHover();" id="img"
                                    class="d-none d-md-block">
                            </router-link>
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

.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: calc(var(--bs-border-width)* -1);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.select2-selection__rendered {
    line-height: 22px !important;
}

.select2-container .select2-selection--single {
    height: 22px !important;
}

.select2-selection__arrow {
    height: 22px !important;
    top: 0px !important;
}
.bg-checkbox-active {
    color: #fff;
    /* background: #1882ff; */
    background: #875ae9;
}

.form-check-input:checked {
    background-color: #875ae9;
    border-color: #ffffff;
}

</style>
