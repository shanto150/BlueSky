<script setup>
import { ref, onMounted, onUnmounted, reactive } from "vue";
import axiosInstance from "../../axiosInstance"
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import CustomMinMaxSlider from "../../components/search/CustomMinMaxSlider.vue";
import SimpleBar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

const airports = ref([]); // All airports
const initialLoadLimit = 20; // Limit for init
const showOriginList = ref(false);
const showDestinationList = ref(false);
const filteredOriginAirports = ref([]);
const filteredDestinationAirports = ref([]);

const fdate = ref();
const sliderMin = ref(150);
const sliderMax = ref(180);

const isAutoApply = ref(true);
const isMultiCalendar = ref(false);
const isRanges = ref();

const isRounded = 'oneway';
const tdate = ref();

const format = (fdate) => {

    const day = fdate.getDate();
    const month = fdate.getMonth() + 1;
    const year = fdate.getFullYear();

    // return `${day}/${month}/${year}`;
    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    form.dep_date = date;
    return date;
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
        const date2 = `${year2}-${String(month2).padStart(2, "0")}-${String(day2).padStart(2, "0")}`;

        form.arrival_date = date2;
    }

    // return `${day}/${month}/${year}`;
    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    form.dep_date = date;
    return date;
}




const form = reactive({ Way: '', from: '', to: "", dep_date: '', arrival_date: '', ADT: '', CNN: '', KID: '', INF: '' });
form.Way = 1;
async function Lowfaresearch() {
    try {
        const response = await axiosInstance.post("Lowfaresearch", form);
        Notification.showToast("s", response.data.message);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
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
    getAirports();
    document.addEventListener("click", handleClickOutside);

    const updateTotalPassengers = () => {
        const totalAdult = parseInt($(".adult").val());
        const totalChild = parseInt($(".child").val());
        const totalKids = parseInt($(".kids").val());
        const totalInfant = parseInt($(".infant").val());

        form.ADT = totalAdult;
        form.CNN = totalChild;
        form.KID = totalKids;
        form.INF = totalInfant;

        $(".total_pass").html(totalAdult + totalChild + totalKids + totalInfant);
    };

    const updatePassengerCount = (selector, increment, min, max) => {
        $(selector).on('click', function () {
            const input = $(this).siblings('input');
            let count = parseInt(input.val());
            count = increment ? Math.min(count + 1, max) : Math.max(count - 1, min);
            input.val(count);
            updateTotalPassengers();
        });
    };

    // Adult section
    updatePassengerCount('.adult-left-minus', false, 1, 9);
    updatePassengerCount('.adult-right-plus', true, 1, 9);

    // Child section
    updatePassengerCount('.child-left-minus', false, 0, 4);
    updatePassengerCount('.child-right-plus', true, 0, 4);

    // Kids section
    updatePassengerCount('.kids-left-minus', false, 0, 4);
    updatePassengerCount('.kids-right-plus', true, 0, 4);

    // Infant section
    updatePassengerCount('.infant-left-minus', false, 0, 4);
    updatePassengerCount('.infant-right-plus', true, 0, 4);
});

onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
});

async function getAirports() {
    try {
        const response = await axiosInstance.get("airports");
        airports.value = response.data.map((value) => ({
            id: value.code,
            text: value.Airport_Name,
            city: value.City_name,
        }));
    } catch (error) {
        console.error("Error fetching airports:", error);
    }
}

function handleClickOutside(event) {
    const originInput = document.getElementById("origin_id");
    const originResults = document.getElementById("origin_results");
    const destinationInput = document.getElementById("destination_id");
    const destinationResults = document.getElementById("destination_results");

    if (!originInput?.contains(event.target) && !originResults?.contains(event.target)) {
        showOriginList.value = false;
    }

    if (
        !destinationInput?.contains(event.target) &&
        !destinationResults?.contains(event.target)
    ) {
        showDestinationList.value = false;
    }
}

// Generalized filtering function
function filterAirports(searchText, airports) {
    if (!searchText) {
        return airports.slice(0, initialLoadLimit);
    }
    const search = searchText.toLowerCase();
    return airports.filter(
        (airport) =>
            airport.id.toLowerCase().includes(search) ||
            airport.text.toLowerCase().includes(search) ||
            airport.city.toLowerCase().includes(search)
    );
}

// Update filter functions
function filterOriginAirports(searchText) {
    filteredOriginAirports.value = filterAirports(searchText, airports.value);
}

function filterDestinationAirports(searchText) {
    filteredDestinationAirports.value = filterAirports(searchText, airports.value);
}

function onOriginFocus() {
    showOriginList.value = true;
    filteredOriginAirports.value = airports.value.slice(0, initialLoadLimit);
}

function onDestinationFocus() {
    showDestinationList.value = true;
    filteredDestinationAirports.value = airports.value.slice(0, initialLoadLimit);
}

function selectOrigin(airport) {
    form.from = airport.id;
    showOriginList.value = false;
}

function selectDestination(airport) {
    form.to = airport.id;
    showDestinationList.value = false;
}

function clearOrigin() {
    form.from = "";
    showOriginList.value = false;
}

function clearDestination() {
    form.to = "";
    showDestinationList.value = false;
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
                    <li class="breadcrumb-item active" aria-current="page">Flight Search Result</li>
                </ol>
            </nav>
        </div>
    </div>

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
                                            data-bs-toggle="dropdown" aria-expanded="false"><span
                                                class="total_pass">1</span> Passangers</button>
                                        <ul class="dropdown-menu p-1" style="width: 300px;" @click.stop>
                                            <table class="table table-sm">
                                                <tbody>
                                                    <tr>
                                                        <td><small> Adult <br> <span style="font-size: 9px;">Above 12
                                                                    Years</span></small></td>
                                                        <td style="width: 150px;">
                                                            <div class="input-group product-qty">
                                                                <button type="button"
                                                                    class="adult-left-minus btn btn-light rounded-0 rounded-start btn-number"
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
                                                                <input type="text" name="adult"
                                                                    class="form-control input-number adult" value="1">
                                                                <button type="button"
                                                                    class="adult-right-plus btn btn-light rounded-0 rounded-end btn-number"
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
                                                                    class="child-left-minus btn btn-light rounded-0 rounded-start btn-number"
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
                                                                <input type="text" name="child"
                                                                    class="form-control input-number child" value="0">
                                                                <button type="button"
                                                                    class="child-right-plus btn btn-light rounded-0 rounded-end btn-number"
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
                                                        <td><small>Kids <br><span style="font-size: 9px;">02 to
                                                                    Under 5 Years
                                                                </span></small></td>
                                                        <td style="width: 150px;">
                                                            <div class="input-group product-qty">
                                                                <button type="button"
                                                                    class="kids-left-minus btn btn-light rounded-0 rounded-start btn-number"
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
                                                                <input type="text" name="kids"
                                                                    class="form-control input-number kids" value="0">
                                                                <button type="button"
                                                                    class="kids-right-plus btn btn-light rounded-0 rounded-end btn-number"
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
                                                                    class="infant-left-minus btn btn-light rounded-0 rounded-start btn-number"
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
                                                                <input type="text" name="infant"
                                                                    class="form-control input-number infant" value="0">
                                                                <button type="button"
                                                                    class="infant-right-plus btn btn-light rounded-0 rounded-end btn-number"
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

                        <div class="col-md-3 position-relative">
                            <input id="origin_id" v-model="form.from" name="origin_name"
                                class="form-control origin_name placeholder-font-size"
                                @input="filterOriginAirports($event.target.value)" @focus="onOriginFocus"
                                @click="onOriginFocus" placeholder="City,Airport" autocomplete="off" />
                            <span v-if="form.from" @click="clearOrigin" class="clear-icon">✖</span>
                            <div v-if="showOriginList" id="origin_results"
                                class="position-absolute w-100 mt-2 bg-white border rounded shadow-sm"
                                style="z-index: 1000; animation: fadeIn 0.5s ease-in-out">
                                <div class="arrow"></div>
                                <SimpleBar style="max-height: 300px" class="search-results-simplebar">
                                    <div v-for="airport in filteredOriginAirports" :key="airport.id"
                                        class="p-2 cursor-pointer hover:bg-gray-100" @click="selectOrigin(airport)">
                                        <div class="hstack align-items-center gap-1">
                                            <div style="width: 50px"
                                                class="d-flex align-items-center justify-content-center">
                                                <h6 class="fw-bolder">{{ airport.id }}</h6>
                                            </div>
                                            <div class="flex-grow-1 border-start p-2">
                                                <div class="font-12">{{ airport.text }}</div>
                                                <div class="small text-muted">{{ airport.city }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="filteredOriginAirports.length === 0" class="p-2 text-center text-muted">
                                        No matching airports found
                                    </div>
                                </SimpleBar>
                            </div>
                        </div>

                        <div class="col-md-3 position-relative">
                            <input autocomplete="off" id="destination_id" v-model="form.to" name="destination_name"
                                class="form-control  destination_name placeholder-font-size"
                                @input="filterDestinationAirports($event.target.value)" @click="onDestinationFocus"
                                @focus="onDestinationFocus" placeholder="City,Airport" />
                            <span v-if="form.to" @click="clearDestination" class="clear-icon">✖</span>
                            <div v-if="showDestinationList" id="destination_results"
                                class="position-absolute w-100 mt-2 bg-white border border-info bg-info rounded shadow-sm"
                                style="z-index: 1000; animation: fadeIn 0.5s ease-in-out">
                                <div class="arrow"></div>
                                <SimpleBar style="max-height: 300px" class="search-results-simplebar">
                                    <div v-for="airport in filteredDestinationAirports" :key="airport.id"
                                        class="p-2 cursor-pointer hover:bg-gray-100"
                                        @click="selectDestination(airport)">
                                        <div class="hstack align-items-center gap-1">
                                            <div style="width: 50px"
                                                class="d-flex align-items-center justify-content-center">
                                                <h6 class="fw-bolder">{{ airport.id }}</h6>
                                            </div>
                                            <div class="flex-grow-1 border-start p-2">
                                                <div class="font-12">{{ airport.text }}</div>
                                                <div class="small text-muted">{{ airport.city }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="filteredDestinationAirports.length === 0"
                                        class="p-2 text-center text-muted">
                                        No matching airports found
                                    </div>
                                </SimpleBar>
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
                            <!-- <router-link> -->
                            <img @click="Lowfaresearch()"
                                src="../../../../public/theme/appimages/Mobile_Button With_Icon.jpg" alt=""
                                class="d-sm-block d-md-none" style="width: 100%;" id="img">
                            <img @click="Lowfaresearch()" src="../../../../public/theme/appimages/s_With_Icon.jpg"
                                alt="" style="width: 53px;" @mouseover="onHover();" @mouseout="offHover();" id="img"
                                class="d-none d-md-block">
                            <!-- </router-link> -->
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
                                    stroke-linejoin="round" class="feather feather-clock custom-text-purple">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                &nbsp;&nbsp;
                                <span class="pt-1" style="font-size: 13px;">Book Flight within</span>
                                &nbsp; &nbsp;
                                <div class="dash-lable bg-light-primary custom-text-purple rounded-1">
                                    <p class="text-black mb-0">30</p>
                                </div>
                                &nbsp;
                                <div class="ml-1 mr-1">:</div>
                                &nbsp;
                                <div class="dash-lable bg-light-primary custom-text-purple rounded-1">
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
                                                    class="btn bluesky-btn-primary w-100">Departure</button>
                                                <button type="button"
                                                    class="btn bluesky-btn-outline-primary w-100">Arrival</button>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mt-2">
                                            <div class="d-flex gap-2">
                                                <div
                                                    class="p-1 border border-1 text-center rounded rounded-1 bg-body-secondary cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-sunrise custom-text-purple">
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
                                                        class="feather feather-sun custom-text-purple">
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
                                                        class="feather feather-sunset custom-text-purple">
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
                                                        class="feather feather-moon custom-text-purple">
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
                                            Netaji Subhas Chandra Bose..
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
                    <button class="btn btn-block btn-sm bluesky-btn-outline-primary w-100">
                        Clear All Filters
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-9">
            <div class="row">
                <p>Showing 10 of 20 Total Flights</p>
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 m-0 p-0">
                                    <div class="d-flex">
                                        <img src="https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Symbol.png"
                                            height="70">
                                        <div class="text-left mt-2">
                                            <p class="p-0 m-0"><b>DAC-DXB</b></p>
                                            <small style="font-size: 12px; color: #5e6878;">Qatar Airways</small>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 border-start">
                                    <div class="d-flex gap-5">
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
                                                <div>
                                                    <img src="../../../../public/theme/appimages/Plane_origin.svg"
                                                        alt="">
                                                </div>
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
                                            <p class="p-0 m-0"><b> Non-Stop</b></p>

                                        </div>
                                        <div class="d-flex gap-3 border-start">
                                            <div class="mt-2 ms-md-4">
                                                <button class="btn btn-sm btn-block bluesky-btn-primary"
                                                    style="margin-left: 30px;" data-bs-toggle="collapse"
                                                    data-bs-target="#flight-package" aria-controls="flight-package">

                                                    <div class="text-right" style="padding-left: 10px;">
                                                        <p class="p-0 m-0"><b><i
                                                                    class="fa fa-bangladeshi-taka-sign"></i>
                                                                65000</b></p>
                                                        <small style="color: #dbdbdb"><del>
                                                                ৳ 77000</del></small>
                                                        <br>
                                                        <small style="font-size: 12px;">Economy Class</small>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer" style="background-color:#f1f4f7;">
                            <div class="float-start">
                                <div class="d-flex gap-2">
                                    <div class="border border-1 text-center p-1"
                                        style="background-color: #def1ec; color: #12ce69;">
                                        <i class="fa fa-refresh"></i> Refundable
                                    </div>
                                    <div class="border border-1 text-center p-1"
                                        style="background-color: #d6dffa; color: #027de2;">
                                        <i class="fa fa-rug"></i> Fare Basis:AHGC001
                                    </div>
                                    <div class="border border-1 text-center p-1"
                                        style="background-color: #e4e3f6; color: #7944eb;">
                                        <i class="fa-regular fa-seat-airline"></i> Available Seats: 20
                                    </div>
                                </div>
                            </div>
                            <div class="float-end me-2">
                                <div class="d-flex gap-2">
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <a class="accordion-button custom-text-purple collapsed m-0 p-0 px-2 py-1"
                                                    data-bs-toggle="collapse" data-bs-target="#flight-details"
                                                    aria-expanded="false" aria-controls="flight-details"
                                                    style=" font-size: 14px; background: #f1f4f7 !important;">
                                                    <b>Flight Details</b>
                                                </a>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="flight-details" class="accordion-collapse collapse m-0" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample" style="">
                        <div class="accordion-body">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome"
                                                        role="tab" aria-selected="true">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i
                                                                    class="bx bx-comment-detail font-18 me-1"></i>
                                                            </div>
                                                            <div class="tab-title"> Flight Details</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile"
                                                        role="tab" aria-selected="false" tabindex="-1">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i
                                                                    class="bx bx-bookmark-alt font-18 me-1"></i>
                                                            </div>
                                                            <div class="tab-title">Fare Rules</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#primarycontact"
                                                        role="tab" aria-selected="false" tabindex="-1">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i
                                                                    class="bx bx-star font-18 me-1"></i>
                                                            </div>
                                                            <div class="tab-title">Refund Policy</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content pt-3">
                                                <div class="tab-pane fade active show" id="primaryhome" role="tabpanel">
                                                    <div class="card">
                                                        <div class="card-header bg-body-secondary m-0 p-0 px-2 py-1">
                                                            <div class="d-flex">
                                                                <div class="p-2 flex-grow-1">
                                                                    <b>
                                                                        <img src="../../../../public/theme/appimages/Plane.svg"
                                                                            alt="">
                                                                    </b>
                                                                    <small><b>Departure</b> from Hazrat Shahjalal
                                                                        International Airport</small>
                                                                </div>

                                                                <div class="p-2">Duration: 01 hr 45 min</div>
                                                            </div>

                                                        </div>
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col-md-5 border-end">
                                                                    <div class="d-flex border-right">
                                                                        <div class="text-start mt-2">
                                                                            <p class="p-0 m-0 custom-text-purple">
                                                                                <b>DAC</b>
                                                                            </p>
                                                                            <small
                                                                                style="font-size: 13px; color: #5e6878;"><b>10:50
                                                                                    AM | 19 Jan, Thu</b></small>
                                                                            <br>
                                                                            <small
                                                                                style="font-size: 12px; color: #5e6878;">Terminal:2</small>
                                                                            <br>
                                                                            <small
                                                                                style="font-size: 12px; color: #5e6878;">Flight
                                                                                No:78ER457</small>
                                                                            <br>
                                                                            <small
                                                                                style="font-size: 12px; color: #5e6878;">Class:Economy</small>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-7">
                                                                    <div class="row">
                                                                        <div class="col-md-7">
                                                                            <div class="d-flex border-right">
                                                                                <div class="text-start mt-2">
                                                                                    <p
                                                                                        class="p-0 m-0 custom-text-purple">
                                                                                        <b>DXB</b>
                                                                                    </p>
                                                                                    <small
                                                                                        style="font-size: 13px; color: #5e6878;"><b>11:55
                                                                                            AM | 19 Jan,
                                                                                            Thu</b></small>
                                                                                    <br>
                                                                                    <small
                                                                                        style="font-size: 11px; color: #5e6878;">Terminal:3</small>
                                                                                    <br>

                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-5 text-center">
                                                                            <img height="60" width="100"
                                                                                src="https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Symbol.png"
                                                                                alt="">
                                                                            <p class="mb-0 pb-0">Qatar Airways</p>
                                                                            <p class="mb-0 pb-0">Boeing 707</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-2 p-2 pb-0">
                                                                <!-- 8px -->
                                                                <div class="chip chip-sm"
                                                                    style="font-size: 13px !important; color: #7944eb; background-color:#e4e3f6; border-radius:8px;">
                                                                    <img style="height: 30px;width: 30px;padding-left: 10px;margin: 0px 0px 0px -16px;"
                                                                        src="../../../../public/theme/appimages/location.svg"
                                                                        alt="">

                                                                    Destination : Dubai Internation Airport
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                                                    <div class="row">
                                                        <div class="col-md-12">

                                                            <p class="text-start fw-bold">PENALTIES/GENERAL</p>
                                                            <span>
                                                                1. Reissue/Refund minimum penalty amount before
                                                                departure 0 BDT 2. Reissue/Refund maximum penalty amount
                                                                before departure 5999 BDT
                                                                3. Reissue/Refund maximum penalty amount for the ticket
                                                                before departure 9599 BDT
                                                                4. Revalidation minimum penalty amount before departure
                                                                0 BDT
                                                                5. Revalidation maximum penalty amount before departure
                                                                0 BDT
                                                                6. Revalidation maximum penalty amount for the ticket
                                                                before departure 0 BDT 7. Reissue/Refund minimum penalty
                                                                amount before departure no show 5999 BDT 8.
                                                                Reissue/Refund maximum penalty amount before departure
                                                                no show 5999 BDT 9. Reissue/Refund maximum penalty
                                                                amount for the ticket before departure no show 9599 BDT
                                                                10. Revalidation minimum penalty amount before departure
                                                                no show 0 BDT 11. Revalidation maximum penalty amount
                                                                before departure no show 0 BDT 12. Revalidation maximum
                                                                penalty amount for the ticket before departure no show 0
                                                                BDT 13. Reissue/Refund minimum penalty amount after
                                                                departure 0 BDT 14. Reissue/Refund maximum penalty
                                                                amount with sale currency 5999 BDT 15. Reissue/Refund
                                                                maximum penalty amount for the ticket after departure
                                                                9599 BDT 16. Revalidation minimum penalty amount after
                                                                departure 0 BDT 17. Revalidation maximum penalty amount
                                                                after departure 0 BDT 18. Revalidation maximum penalty
                                                                amount for the ticket after departure 0 BDT 19.
                                                                Reissue/Refund minimum penalty amount after departure no
                                                                show 5999 BDT 20. Reissue/Refund maximum penalty amount
                                                                after departure no show 5999 BDT 21. Reissue/Refund
                                                                maximum penalty amount for the ticket after departure no
                                                                show 9599 BDT 22. Revalidation minimum penalty amount
                                                                after departure no show 0 BDT 23. Revalidation maximum
                                                                penalty amount after departure no show 0 BDT 24.
                                                                Revalidation maximum penalty amount for the ticket after
                                                                departure no show 0 BDT 25. Part of rule is free form
                                                                text from Cat16? Not allowed 26. Reissue penalties can
                                                                be waived for passenger and family death/illness before
                                                                departure? Not allowed 27. Revalidation before departure
                                                                is allowed? Not allowed 28. Reissue/Refund before
                                                                departure allowed? Allowed with restrictions 29. Reissue
                                                                penalties can be waived for passenger and family
                                                                death/illness for before departure no show? Not allowed
                                                                30. Revalidation before departure when no show is
                                                                allowed? Not allowed 31. Reissue/Refund before departure
                                                                when no show allowed? Allowed with restrictions 32.
                                                                Reissue penalties can be waived for passenger and family
                                                                death/illness after departure? Not allowed 33.
                                                                Revalidation after departure is allowed? Not allowed 34.
                                                                Reissue/Refund after departure allowed? Allowed with
                                                                restrictions 35. Reissue penalties can be waived for
                                                                passenger and family death/illness after departure no
                                                                show? Not allowed 36. Revalidation after departure when
                                                                no show is allowed? Not allowed 37. Reissue/Refund after
                                                                departure when no show allowed? Allowed with
                                                                restrictions 38. Reissue/Refund minimum penalty amount
                                                                before departure 11998 BDT 39. Reissue/Refund maximum
                                                                penalty amount before departure 16798 BDT 40.
                                                                Reissue/Refund maximum penalty amount for the ticket
                                                                before departure 16798 BDT 41. Reissue/Refund minimum
                                                                penalty amount before departure no show 11998 BDT 42.
                                                                Reissue/Refund maximum penalty amount before departure
                                                                no show 16798 BDT 43. Reissue/Refund maximum penalty
                                                                amount for the ticket before departure no show 16798 BDT
                                                                44. Reissue/Refund minimum penalty amount after
                                                                departure 11998 BDT 45. Reissue/Refund maximum penalty
                                                                amount with sale currency 16798 BDT 46. Reissue/Refund
                                                                maximum penalty amount for the ticket after departure
                                                                16798 BDT 47. Reissue/Refund minimum penalty amount
                                                                after departure no show 11998 BDT 48. Reissue/Refund
                                                                maximum penalty amount after departure no show 16798 BDT
                                                                49. Reissue/Refund maximum penalty amount for the ticket
                                                                after departure no show 16798 BDT 50. Part of rule is
                                                                free form text from Cat16? Not allowed 51.
                                                                Reissue/Refund before departure allowed? Allowed with
                                                                restrictions 52. Reissue/Refund before departure when no
                                                                show allowed? Allowed with restrictions 53.
                                                                Reissue/Refund after departure allowed? Allowed with
                                                                restrictions 54. Reissue/Refund after departure when no
                                                                show allowed? Allowed with restrictions
                                                            </span>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <p class="text-start fw-bold">Max Stay</p>
                                                            <span>Maximum stay none for economy unrestricted
                                                                fares.</span>
                                                        </div>
                                                        <div class="col-md-12 mt-2">
                                                            <p class="text-start fw-bold pt-0 mt-0">Layover</p>
                                                            <span>Stopovers for economy unrestricted fares unlimited
                                                                stopovers permitted.</span>
                                                        </div>
                                                        <div class="col-md-12 mt-2">
                                                            <p class="text-start fw-bold pt-0 mt-0">Combinations</p>
                                                            <span>
                                                                Permitted combinations fares may be combined on a half
                                                                round trip basis with any fare for any carrier in any
                                                                rule and tariff to form round trips/circle trips.
                                                                End-one-end permitted. Validate all fare component.
                                                                Travel must be via construction point. Add-ons
                                                                permitted. Open jaws fares may be combined on a half
                                                                round trip basis with any fare for any carrier in any
                                                                rule and tariff to form single or double open jaws. A
                                                                maximum of 2 international fare components permitted.
                                                                Mileage of an international open segment must be equal
                                                                to/less than mileage of the shortest flown fare
                                                                component. No mileage restriction on an open segment
                                                                within one country.
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="background-color: #f4f4ff;">

                                            <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header rounded" id="flush-headingOne"
                                                        style="background-color: #7944eb !important;">
                                                        <button class="accordion-button m-0 p-0 px-3 py-2 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-fare-summary" aria-expanded="false"
                                                            aria-controls="flush-fare-summary">
                                                            Fare Summary
                                                        </button>
                                                    </h2>
                                                    <div id="flush-fare-summary" class="accordion-collapse collapse"
                                                        aria-labelledby="flush-headingOne"
                                                        data-bs-parent="#accordionFlushExample" style="">
                                                        <div class="accordion-body">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div
                                                                        class="border fare-summary-bg p-1 rounded-1 mb-1">
                                                                        <span class="custom-text-purple">
                                                                            Base Fare
                                                                        </span>
                                                                    </div>
                                                                    <div class="table-responsive">
                                                                        <table class="table table-sm table-striped">
                                                                            <tbody class="text-start">
                                                                                <tr>
                                                                                    <td>Adults: 2x৳30000</td>
                                                                                    <td>
                                                                                        ৳60000
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>Childs: 2x৳20000</td>
                                                                                    <td>
                                                                                        ৳40000
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>

                                                                    <div
                                                                        class="border fare-summary-bg p-1 rounded-1 mb-1">
                                                                        <span class="custom-text-purple">
                                                                            TAX
                                                                        </span>
                                                                    </div>
                                                                    <div class="table-responsive">
                                                                        <table class="table table-sm table-striped ">
                                                                            <tbody class="text-start">
                                                                                <tr>
                                                                                    <td>Adults: 2x৳5000</td>
                                                                                    <td>
                                                                                        ৳10000
                                                                                    </td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Childs: 2x৳2000</td>
                                                                                    <td>
                                                                                        ৳4000
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>

                                                                    <div
                                                                        class="border fare-summary-bg p-1 rounded-1 mb-1">
                                                                        <span class="custom-text-purple">
                                                                            AIT
                                                                        </span>
                                                                    </div>
                                                                    <div class="table-responsive">
                                                                        <table class="table table-sm table-striped ">
                                                                            <tbody class="text-start">
                                                                                <tr>
                                                                                    <td>Adults: 2x৳1275</td>
                                                                                    <td>
                                                                                        ৳2550
                                                                                    </td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Childs: 2x৳870</td>
                                                                                    <td>
                                                                                        ৳1740
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>

                                                                    <div
                                                                        class="border fare-summary-bg p-1 rounded-1 mb-1">
                                                                        <span class="custom-text-purple">
                                                                            Service Charge
                                                                        </span>
                                                                    </div>
                                                                    <div class="table-responsive">
                                                                        <table class="table table-sm table-striped ">
                                                                            <tbody class="text-start">
                                                                                <tr>
                                                                                    <td>Adults: 2x৳1275</td>
                                                                                    <td>
                                                                                        ৳2550
                                                                                    </td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Childs: 2x৳870</td>
                                                                                    <td>
                                                                                        ৳1740
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item mt-2">
                                                    <h2 class="accordion-header" id="flush-headingTwo">
                                                        <button class="accordion-button m-0 p-0 px-3 py-2 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                            aria-controls="flush-collapseTwo">
                                                            Baggadge Information
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="flush-headingTwo"
                                                        data-bs-parent="#accordionFlushExample" style="">
                                                        <div class="accordion-body">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div class="table-responsive">
                                                                        <table class="table table-sm ">
                                                                            <tbody class="text-start">
                                                                                <tr>
                                                                                    <td style="font-size: 11px;">
                                                                                        <b>DAC-CCU</b>
                                                                                        <br>
                                                                                        <small>Economy</small>
                                                                                    </td>

                                                                                    <td style="font-size: 11px;">
                                                                                        <b>Cabin</b>
                                                                                        <br>
                                                                                        <small>10 Kg</small>
                                                                                    </td>
                                                                                    <td style="font-size: 11px;">
                                                                                        <b>Check In</b>
                                                                                        <br>
                                                                                        <small>2 Pieces</small>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td style="font-size: 11px;">
                                                                                        <b>CCU-BDX</b>
                                                                                        <br>
                                                                                        <small>Economy</small>
                                                                                    </td>

                                                                                    <td style="font-size: 11px;">
                                                                                        <b>Cabin</b>
                                                                                        <br>
                                                                                        <small>10 Kg</small>
                                                                                    </td>
                                                                                    <td style="font-size: 11px;">
                                                                                        <b>Check In</b>
                                                                                        <br>
                                                                                        <small>2 Pieces</small>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
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
                    </div>

                    <div id="flight-package" class="accordion-collapse collapse m-0"
                        aria-labelledby="flush-headingpackage" data-bs-parent="#accordionFlushExample" style="">
                        <div class="accordion-body">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="card card-hober">
                                                <div class="card-header border-bottom-1">
                                                    <h5 class="card-title text-center">Economy</h5>
                                                    <h6 class="text-center"><i class="fa fa-bangladeshi-taka-sign"></i>
                                                        65000</h6>
                                                </div>
                                                <div class="card-body">
                                                    <ul style="list-style-type:none;" class="">
                                                        <li class="menu-item"> <i class="fa fa-refresh icon-color"></i>
                                                            Flexible to make 2 changes</li>
                                                        <li class="menu-item"> <i
                                                                class="fa-regular fa-circle-xmark icon-color"></i>
                                                            Cancellation within 24hrs of booking without fees</li>

                                                        <li class="menu-item">
                                                            <i class="fa-solid fa-suitcase-rolling icon-color"></i>
                                                            Checked Baggage: 2 pieces, 23 kg each
                                                        </li>
                                                        <li class="menu-item"> <i
                                                                class="fa-solid fa-suitcase-rolling icon-color"></i>
                                                            Checked
                                                            Baggage: 2 pieces, 7 kg</li>
                                                        <li class="menu-item">
                                                            <i class="fa-regular fa-seat-airline icon-color"></i>
                                                            Standard Seat selection included
                                                        </li>
                                                        <li class="menu-item"> <i
                                                                class="fa-regular fa-seat-airline icon-color"></i>
                                                            Preferred
                                                            Seat selection without fees</li>
                                                        <li class="menu-item"> <i class="fa fa-utensils icon-color"></i>
                                                            Free meal
                                                        </li>
                                                        <li class="menu-item"> <i
                                                                class="fa-brands fa-youtube icon-color"></i> Multimedia
                                                            Support</li>
                                                        <li class="menu-item"> <i
                                                                class="fa-solid fa-wifi icon-color"></i> Free Wi-Fi
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="card card-hober">
                                                <div class="card-header text-black border-bottom-1">
                                                    <h5 class="card-title text-center">Premium Economy</h5>
                                                    <h6 class="text-center text-black"><i
                                                            class="fa fa-bangladeshi-taka-sign"></i> 70500</h6>
                                                </div>
                                                <div class="card-body">
                                                    <ul style="list-style-type:none;" class="">
                                                        <li class="menu-item"> <i class="fa fa-refresh icon-color"></i>
                                                            Flexible to make 4 changes</li>
                                                        <li class="menu-item"> <i
                                                                class="fa-regular fa-circle-xmark icon-color"></i>
                                                            Cancellation within 24hrs of booking without fees</li>

                                                        <li class="menu-item">
                                                            <i class="fa-solid fa-suitcase-rolling icon-color"></i>
                                                            Checked Baggage: 2 pieces, 23 kg each
                                                        </li>
                                                        <li class="menu-item"> <i
                                                                class="fa-solid fa-suitcase-rolling icon-color"></i>
                                                            Checked
                                                            Baggage: 2 pieces, 7 kg</li>
                                                        <li class="menu-item">
                                                            <i class="fa-regular fa-seat-airline icon-color"></i>
                                                            Standard Seat selection included
                                                        </li>
                                                        <li class="menu-item"> <i
                                                                class="fa-regular fa-seat-airline icon-color"></i>
                                                            Preferred
                                                            Seat selection without fees</li>
                                                        <li class="menu-item"> <i class="fa fa-utensils icon-color"></i>
                                                            Free meal
                                                        </li>
                                                        <li class="menu-item"> <i
                                                                class="fa-brands fa-youtube icon-color"></i> Multimedia
                                                            Support</li>
                                                        <li class="menu-item"> <i
                                                                class="fa-solid fa-wifi icon-color"></i> Free Wi-Fi
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card card-hober">
                                                <div class="card-header text-black border-bottom-1">
                                                    <h5 class="card-title text-center">First Class</h5>
                                                    <h6 class="text-center text-black"><i
                                                            class="fa fa-bangladeshi-taka-sign"></i> 90500</h6>
                                                </div>
                                                <div class="card-body">
                                                    <ul style="list-style-type:none;" class="">
                                                        <li class="menu-item"> <i class="fa fa-refresh icon-color"></i>
                                                            Flexible to make 4 changes</li>
                                                        <li class="menu-item"> <i
                                                                class="fa-regular fa-circle-xmark icon-color"></i>

                                                            Cancellation within 24hrs of booking without fees
                                                        </li>

                                                        <li class="menu-item">
                                                            <i class="fa-solid fa-suitcase-rolling icon-color"></i>
                                                            Checked Baggage: 2 pieces, 23 kg each
                                                        </li>
                                                        <li class="menu-item"> <i
                                                                class="fa-solid fa-suitcase-rolling icon-color"></i>
                                                            Checked
                                                            Baggage: 2 pieces, 7 kg</li>
                                                        <li class="menu-item">
                                                            <i class="fa-regular fa-seat-airline icon-color"></i>
                                                            Standard Seat selection included
                                                        </li>
                                                        <li class="menu-item"> <i
                                                                class="fa-regular fa-seat-airline icon-color"></i>
                                                            Preferred
                                                            Seat selection without fees</li>
                                                        <li class="menu-item"> <i class="fa fa-utensils icon-color"></i>
                                                            Free meal
                                                        </li>
                                                        <li class="menu-item"> <i
                                                                class="fa-brands fa-youtube icon-color"></i> Multimedia
                                                            Support</li>
                                                        <li class="menu-item"> <i
                                                                class="fa-solid fa-wifi icon-color"></i> Free Wi-Fi
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 m-0 p-0">
                                    <div class="d-flex">
                                        <img style="margin: 0 40px 0 28px;"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/849px-Emirates_logo.svg.png?20190128215923"
                                            height="70">
                                        <div class="text-left mt-2">
                                            <p class="p-0 m-0"><b>DAC-DXB</b></p>
                                            <small style="font-size: 12px; color: #5e6878;">Emirates</small>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-5 border-start">
                                    <div class="d-flex gap-5">
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
                                                <div>
                                                    <img src="../../../../public/theme/appimages/Plane_origin.svg"
                                                        alt="">
                                                </div>
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
                                            <div class="mt-2 ms-md-4">
                                                <button class="btn btn-sm btn-block bluesky-btn-primary"
                                                    style="margin-left: 30px;" data-bs-toggle="collapse"
                                                    data-bs-target="#flight-package-2" aria-controls="flight-package-2">

                                                    <div class="text-right" style="padding-left: 10px;">
                                                        <p class="p-0 m-0"><b><i
                                                                    class="fa fa-bangladeshi-taka-sign"></i>
                                                                65000</b></p>
                                                        <small style="color: #dbdbdb"><del>
                                                                ৳ 77000</del></small>
                                                        <br>
                                                        <small style="font-size: 12px;">Economy Class</small>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <!-- return -->
                                <div class="col-md-3 m-0 p-0">
                                    <div class="d-flex">
                                        <img style="margin: 0 40px 0 28px;"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/849px-Emirates_logo.svg.png?20190128215923"
                                            height="70">
                                        <div class="text-left mt-2">
                                            <p class="p-0 m-0"><b>DXB-DAC</b></p>
                                            <small style="font-size: 12px; color: #5e6878;">Emirates</small>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-5 border-start">
                                    <div class="d-flex gap-5">
                                        <div class="mt-2">
                                            <p class="p-0 m-0"><b>01:00 AM
                                                </b></p>
                                            <small style="font-size: 12px; color: #5e6878;">18 Feb, Tue</small>
                                            <br>
                                            <small style="font-size: 12px; color: #5e6878;">Departure</small>
                                        </div>

                                        <div class="text-center mt-2">
                                            <small style="font-size: 12px; color: #5e6878;">05 hr 25 Min</small>
                                            <br>
                                            <div class="d-flex">
                                                <div>
                                                    ....
                                                </div>
                                                <div>
                                                    <img src="../../../../public/theme/appimages/Plane-return.svg"
                                                        alt="">
                                                </div>
                                                <div>
                                                    ....
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-2">
                                            <p class="p-0 m-0"><b>04:25 AM</b></p>
                                            <small style="font-size: 12px; color: #5e6878;">28 Feb, Fri</small>
                                            <br>
                                            <small style="font-size: 12px; color: #5e6878;">Departure</small>
                                        </div>

                                    </div>
                                </div>
                                <!-- ./return end -->
                            </div>
                        </div>
                        <div class="card-footer" style="background-color:#f1f4f7;">
                            <div class="float-start">
                                <div class="d-flex gap-2">
                                    <div class="border border-1 text-center p-1"
                                        style="background-color: #def1ec; color: #12ce69;">
                                        <i class="fa fa-refresh"></i> Refundable
                                    </div>
                                    <div class="border border-1 text-center p-1"
                                        style="background-color: #d6dffa; color: #027de2;">
                                        <i class="fa fa-rug"></i> Fare Basis:AHGC001
                                    </div>
                                    <div class="border border-1 text-center p-1"
                                        style="background-color: #e4e3f6; color: #7944eb;">
                                        <i class="fa-regular fa-seat-airline"></i> Available Seats: 20
                                    </div>
                                </div>

                            </div>
                            <div class="float-end me-2">
                                <div class="d-flex gap-2">

                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <a class="accordion-button custom-text-purple collapsed m-0 p-0 px-2 py-1"
                                                    data-bs-toggle="collapse" data-bs-target="#flight-details-2"
                                                    aria-expanded="false" aria-controls="flight-details-2"
                                                    style=" font-size: 14px; background: #f1f4f7 !important;">
                                                    <b>Flight Details</b>
                                                </a>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="flight-details-2" class="accordion-collapse collapse m-0"
                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample2" style="">
                        <div class="accordion-body">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome"
                                                        role="tab" aria-selected="true">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i
                                                                    class="bx bx-comment-detail font-18 me-1"></i>
                                                            </div>
                                                            <div class="tab-title"> Flight Details</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile"
                                                        role="tab" aria-selected="false" tabindex="-1">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i
                                                                    class="bx bx-bookmark-alt font-18 me-1"></i>
                                                            </div>
                                                            <div class="tab-title">Fare Rules</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" data-bs-toggle="tab" href="#primarycontact"
                                                        role="tab" aria-selected="false" tabindex="-1">
                                                        <div class="d-flex align-items-center">
                                                            <div class="tab-icon"><i
                                                                    class="bx bx-star font-18 me-1"></i>
                                                            </div>
                                                            <div class="tab-title">Refund Policy</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content pt-3">
                                                <div class="tab-pane fade active show" id="primaryhome" role="tabpanel">
                                                    <div class="row mb-2">
                                                        <div class="col-md-12">
                                                            <div class="d-flex gap-1">
                                                                <button
                                                                    class="btn btn-sm bluesky-btn-primary">DAC-DXB</button>
                                                                <button
                                                                    class="btn btn-sm bluesky-btn-outline-primary">DXB-DAC</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="card-header bg-body-secondary m-0 p-0 px-2 py-1">

                                                            <div class="d-flex">
                                                                <div class="p-2 flex-grow-1">
                                                                    <b>
                                                                        <img src="../../../../public/theme/appimages/Plane.svg"
                                                                            alt="">
                                                                        Departure
                                                                    </b>
                                                                </div>
                                                                <div class="p-2">Hazrat Shahjalal International Airport
                                                                </div>
                                                                <div class="p-2">Duration: 01 hr 45 min</div>
                                                            </div>

                                                        </div>
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col-md-5 border-end">
                                                                    <div class="d-flex border-right">
                                                                        <div class="text-start mt-2">
                                                                            <p class="p-0 m-0"><b>DAC</b></p>
                                                                            <small
                                                                                style="font-size: 13px; color: #5e6878;"><b>10:50
                                                                                    AM | 19 Jan, Thu</b></small>
                                                                            <br>
                                                                            <small
                                                                                style="font-size: 12px; color: #5e6878;">Terminal:2</small>
                                                                            <br>
                                                                            <small
                                                                                style="font-size: 12px; color: #5e6878;">Flight
                                                                                No:78ER457</small>
                                                                            <br>
                                                                            <small
                                                                                style="font-size: 12px; color: #5e6878;">Class:Economy</small>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-7">
                                                                    <div class="row">
                                                                        <div class="col-md-7">
                                                                            <div class="d-flex border-right">
                                                                                <div class="text-start mt-2">
                                                                                    <p class="p-0 m-0"><b>CCU</b></p>
                                                                                    <small
                                                                                        style="font-size: 13px; color: #5e6878;"><b>11:55
                                                                                            AM | 19 Jan,
                                                                                            Thu</b></small>
                                                                                    <br>
                                                                                    <small
                                                                                        style="font-size: 11px; color: #5e6878;">Terminal:3</small>
                                                                                    <br>

                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-5 text-center">
                                                                            <img height="50" width="50"
                                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/849px-Emirates_logo.svg.png?20190128215923"
                                                                                alt="">
                                                                            <p class="mb-0 pb-0">Emirates Airline</p>
                                                                            <p class="mb-0 pb-0">Boeing 707</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-2 p-2 pb-0">
                                                                <div class="chip chip-sm"
                                                                    style="font-size: 13px !important; color: #7944eb; background-color:#e4e3f6; border-radius:8px;">

                                                                    <img style="height: 30px;width: 30px;padding-left: 10px;margin: 0px 0px 0px -16px;"
                                                                        src="../../../../public/theme/appimages/location.svg"
                                                                        alt="">
                                                                    Layover:Netaji Subhash Chandra Bose... | 02 hr 30
                                                                    min
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="card ">
                                                        <div class="card-header bg-body-secondary m-0 p-0 px-2 py-1">
                                                            <div class="d-flex">
                                                                <div class="p-2 flex-grow-1">
                                                                    <b>
                                                                        <img src="../../../../public/theme/appimages/Plane_des.svg"
                                                                            alt="">
                                                                        Destination
                                                                    </b>
                                                                </div>
                                                                <div class="p-2">Dubai Internation Airport
                                                                </div>
                                                                <div class="p-2">Duration: 03 hr 25 min</div>
                                                            </div>

                                                        </div>
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col-md-5 border-end">
                                                                    <div class="d-flex border-right">
                                                                        <div class="text-start mt-2">
                                                                            <p class="p-0 m-0"><b>CCU</b></p>
                                                                            <small
                                                                                style="font-size: 11px; color: #5e6878;"><b>10:50
                                                                                    AM | 19 Jan, Thu</b></small>
                                                                            <br>
                                                                            <small
                                                                                style="font-size: 11px; color: #5e6878;">Terminal:2</small>
                                                                            <br>
                                                                            <small
                                                                                style="font-size: 11px; color: #5e6878;">Flight
                                                                                No:78ER457</small>
                                                                            <br>
                                                                            <small
                                                                                style="font-size: 11px; color: #5e6878;">Class:Economy</small>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-7">
                                                                    <div class="row">
                                                                        <div class="col-md-7">
                                                                            <div class="d-flex border-right">
                                                                                <div class="text-start mt-2">
                                                                                    <p class="p-0 m-0"><b>DXB</b></p>
                                                                                    <small
                                                                                        style="font-size: 11px; color: #5e6878;"><b>02:55
                                                                                            PM | 19 Jan,
                                                                                            Thu</b></small>
                                                                                    <br>
                                                                                    <small
                                                                                        style="font-size: 11px; color: #5e6878;">Terminal:3</small>
                                                                                    <br>

                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-5 text-center">
                                                                            <img height="50" width="50"
                                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/849px-Emirates_logo.svg.png?20190128215923"
                                                                                alt="">
                                                                            <p class="mb-0 pb-0">Emirates Airline</p>
                                                                            <p class="mb-0 pb-0">Boeing 777</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                                                    <p>part2</p>
                                                </div>
                                                <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                                                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                        sold out
                                                        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
                                                        readymade.
                                                        Messenger bag gentrify pitchfork tattooed craft beer, iphone
                                                        skateboard
                                                        locavore carles etsy salvia banksy hoodie helvetica. DIY synth
                                                        PBR
                                                        banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
                                                        Williamsburg
                                                        banh mi whatever gluten-free, carles pitchfork biodiesel fixie
                                                        etsy
                                                        retro mlkshk vice blog. Scenester cred you probably haven't
                                                        heard of
                                                        them, vinyl craft beer blog stumptown. Pitchfork sustainable
                                                        tofu synth
                                                        chambray yr.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4" style="background-color: #f4f4ff;">
                                            <!-- upcoming 2 -->
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
    /* background: #1882ff; */
    background: #875ae9;
}

.form-check-input:checked {
    background-color: #875ae9;
    border-color: #ffffff;
}

.form-check-input:focus {
    border-color: #e2d7fa;
    outline: 0;
    /* box-shadow: 0 0 0 .25rem rgba(13, 110, 253, .25); */
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

li.menu-item {
    margin: 0px 0px 10px -25px
}

.icon-color {
    color: #875ae9;
}

.accordion-button:after {
    margin-left: 3px !important;
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%237944eb'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
}

.fare-summary-bg {
    background: #faf8ff;
}


/* search bar design */
.placeholder-font-size::placeholder {
    font-size: 16px;
    /* Change the font size as needed */
}

.arrow {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #875ae9;
    /* Change color as needed */
    position: absolute;
    top: -10px;
    /* Adjust position as needed */
    left: 50%;
    /* Center the arrow */
    transform: translateX(-50%);
    /* Adjust for the width of the arrow */
}

.form-control:focus {
    border-color: #875ae9;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 2px #875ae9;
}

.search-results-simplebar {
    .simplebar-track.simplebar-vertical {
        width: 7px;
        background: #ffffff;
        border-radius: 4px;
    }

    .simplebar-scrollbar::before {
        background: linear-gradient(45deg, #1e0aca, #96048a);
        border-radius: 4px;
        opacity: 0.5;
    }

    .simplebar-scrollbar.simplebar-visible::before {
        opacity: 0.7;
    }
}

.simplebar-content {
    padding-right: 2px !important;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

#origin_results {
    animation: fadeIn 0.5s ease-in-out;
}

.clear-icon {
    position: absolute;
    right: 10px;
    top: 45%;
    transform: translateY(-50%);
    font-size: 16px;
    cursor: pointer;
    margin-right: 12px;
    color: #875ae9;
}
</style>
