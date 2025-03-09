<script setup>
import { ref, onMounted, onUnmounted, reactive, watch } from "vue";
import axiosInstance from "../../axiosInstance"
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import CustomMinMaxSlider from "../../components/search/CustomMinMaxSlider.vue";
import SimpleBar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import { useAuthStore } from '../../stores/authStore';

import flightData from './dacjfk.json'; // Import the JSON file

const authStore = useAuthStore();



const airports = ref([]); // All airports
const initialLoadLimit = 20; // Limit for init
const showOriginList = ref(false);
const showDestinationList = ref(false);
const filteredOriginAirports = ref([]);
const filteredDestinationAirports = ref([]);

const totalFlights = ref(0);
const loadging = ref(false);
const fdate = ref();
const sliderMin = ref(150);
const sliderMax = ref(180);
const flights = ref([])
const ExecutionTime = ref([])

const isAutoApply = ref(true);
const isMultiCalendar = ref(false);
const isRanges = ref();

const isRounded = 'oneway';
const tdate = ref();

onMounted(() => {
    form.Way = 1;
    getAirports();
    document.addEventListener("click", handleClickOutside);
    //  loadging.value = true;
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

const format = (fdate) => {
    const day = fdate.getDate();
    const month = fdate.getMonth() + 1;
    const year = fdate.getFullYear();
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
        const date2 = `${year2}-${String(month2).padStart(2, "0")}-${String(day2).padStart(2, "0")}`;
        $("#todateVal input").val(date2);

        form.arrival_date = date2;
    }

    // return `${day}/${month}/${year}`;
    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    form.dep_date = date;
    return date;
}

const form = reactive({ Way: '', from: '', to: "", dep_date: '', arrival_date: '', ADT: 1, CNN: '', KID: '', INF: '' });

function tourTypeChange(type) {

    if (type == 1) {
        form.Way = 1;
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
        form.Way = 2;
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
        form.Way = 3;
        $('.one-way').removeClass('bg-checkbox-active');
        $('.round-way').removeClass('bg-checkbox-active');
        $('.multi-city').addClass('bg-checkbox-active');
        $('.multi-city').removeClass('bg-checkbox');
        $('.one-way').addClass('bg-checkbox');
        $('.round-way').addClass('bg-checkbox');
    }

}

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
    // First, check for matches in the id field
    const idMatches = airports.filter(airport =>
        airport.id.toLowerCase().includes(search)
    );

    // Then check for matches in other fields
    const otherMatches = airports.filter(airport =>
        !airport.id.toLowerCase().includes(search) && // Exclude id matches
        (airport.text.toLowerCase().includes(search) ||
            airport.city.toLowerCase().includes(search))
    );

    // Combine the results, with id matches first
    return [...idMatches, ...otherMatches];
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
    if (!filteredOriginAirports.value.length) {
        filteredOriginAirports.value = airports.value.slice(0, initialLoadLimit);
    }
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

    $("#s_image").attr('src', 'http://[::1]:5173/public/theme/appimages/s_Hover_State.jpg');
}

function offHover() {
    $("#s_image").attr('src', 'http://[::1]:5173/public/theme/appimages/s_With_Icon.jpg');
}

async function Lowfaresearch() {
    try {
        // Clear existing data
        flights.value = []; // Clear flights array
        totalFlights.value = 0; // Reset total flights count
        ExecutionTime.value = 0; // Reset execution time

        // Show loading
        authStore.GlobalLoading = true;
        loadging.value = true;

        // Start time measurement
        const startTime = performance.now();

        const response = await axiosInstance.post("Lowfaresearch", form);

        // flights.value = flightData.flights;
        // totalFlights.value = flightData.flights.length;

        // End time measurement
        const endTime = performance.now();

        // Calculate execution time in seconds
        ExecutionTime.value = ((endTime - startTime) / 1000).toFixed(2);

        flights.value = response.data.flights;
        totalFlights.value = response.data.flights.length;

    } catch (error) {
        console.log(error);
    } finally {
        // Hide loading after a minimum duration of 1 second for better UX
        setTimeout(() => {
            loadging.value = false;
            authStore.GlobalLoading = false;
        }, 1000);
    }
}

function showRouteDetails(info) {
    const isActive = info === 2;
    $('.active-btn').toggleClass('bluesky-route-btn-primary', !isActive);
    $('.deactive-btn').toggleClass('bluesky-route-btn-primary', isActive);
    $('.active-btn').toggleClass('bluesky-route-btn-outline-primary', isActive);
    $('.deactive-btn').toggleClass('bluesky-route-btn-outline-primary', !isActive);
    $('.flight-tab-hide').toggleClass('d-none', !isActive);
    $('.flight-tab-active').toggleClass('d-none', isActive);
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

    <!-- search Panel start -->
    <div class="row">
        <div class="col-md-12">
            <div class="card border border-1 bluesky-border-primary" style="min-height: 150px;">

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
                                placeholder="City,Airport" autocomplete="off" />
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
                                alt="" style="width: 53px; cursor:pointer" @mouseover="onHover();"
                                @mouseout="offHover();" id="s_image" class="d-none d-md-block">
                            <!-- </router-link> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- search Panel end -->

    <div class="row">
        <!-- left filter panel start -->
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
        <!-- left filter panel end -->

        <!-- result panel start -->
        <div class="col-md-9">

            <div class="row">

                <span v-show="flights.length > 0">Showing {{ flights.length }} of {{ totalFlights }} Total Flights (In
                    {{ ExecutionTime }} seconds)</span>
                <div class="col-md-12 pb-2">
                    <hr>
                </div>

                <div v-for="(flight, index) in flights" :key="index" class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">

                                    <!-- outbound start-->
                                    <div class="row" v-show="flight.outbound">
                                        <div class="col-md-10 col-sm-12">
                                            <div class="row">
                                                <div class="col-md-4 col-sm-3 p-0">
                                                    <div class="d-flex flex-row">
                                                        <div class="p-1">
                                                            <img :src="flight.outbound.first_logo_path" height="50"
                                                                width="50">
                                                        </div>
                                                        <div class="pt-1 ps-2">
                                                            <div
                                                                class="d-flex justify-content-center align-items-center h-100 w-100">
                                                                <div>
                                                                    <div class="text-black"><b>{{ flight.outbound.origin
                                                                            }}-{{
                                                                                flight.outbound.destination }}</b>
                                                                    </div>
                                                                    <div style="font-size: 11px; color: #8327a4">
                                                                        {{ flight.outbound.first_carrier_code }} | {{
                                                                        flight.outbound.first_airline_name }}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col-md-8 col-12 border-start border-end">
                                                    <div class="row p-2">
                                                        <div class="col-md-4 col-4">
                                                            <div
                                                                class="d-block justify-content-center align-items-center h-100 w-100">
                                                                <div class="text-black"><b>{{
                                                                        flight.outbound.departure_time }}</b>
                                                                </div>
                                                                <div>
                                                                    <small style="font-size: 12px; color: #5e6878;">
                                                                        {{ new
                                                                            Date(flight.outbound.departure_date).toLocaleDateString('en-US',
                                                                                {
                                                                                    day:
                                                                                        'numeric', month: 'short', weekday: 'short'
                                                                        }) }}
                                                                    </small>
                                                                </div>
                                                                <div>
                                                                    <small
                                                                        style="font-size: 12px; color: #5e6878;">Departure</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 col-4">
                                                            <div class="d-block">
                                                                <div> <small class="ps-2"
                                                                        style="font-size: 11px; color: #5e6878;">{{
                                                                        flight.outbound.total_flight_time }}</small>
                                                                </div>


                                                                <div class="d-flex">
                                                                    <div class="text-black">
                                                                        <img src="../../../../public/theme/appimages/Left_Aligned Line.svg"
                                                                            alt="">
                                                                    </div>
                                                                    <div>
                                                                        <img style="transform: rotate(45deg)"
                                                                            src="../../../../public/theme/animation/Route_Aircraft.gif"
                                                                            alt="" height="23" width="23">
                                                                    </div>
                                                                    <div class="text-black">
                                                                        <img src="../../../../public/theme/appimages/Right_Aligned Line.svg"
                                                                            alt="">
                                                                    </div>


                                                                </div>

                                                                <div class="d-flex ps-2">
                                                                    <img title="Layover at Kolkata | 2H 25 Min"
                                                                        src="../../../../public/theme/appimages/Layover.svg"
                                                                        alt="">
                                                                    <div class="text-black"
                                                                        style="transform: skewY(5deg);">
                                                                        ....
                                                                    </div>
                                                                    <img src="../../../../public/theme/appimages/Layover.svg"
                                                                        alt="">
                                                                    <div class="text-black"
                                                                        style="transform: skewY(175deg);">
                                                                        ....
                                                                    </div>
                                                                    <img src="../../../../public/theme/appimages/Layover.svg"
                                                                        alt="">

                                                                </div>
                                                                <div class="d-flex ps-2">
                                                                    <span
                                                                        style="font-size: 7px; color: #5e6878;">CCU</span>
                                                                    &nbsp; &nbsp; &nbsp;
                                                                    <span
                                                                        style="font-size: 7px; color: #5e6878;">DEL</span>
                                                                    &nbsp; &nbsp;
                                                                    <span
                                                                        style="font-size: 7px; color: #5e6878;">DXB</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 col-4">
                                                            <div
                                                                class="d-block justify-content-center align-items-center h-100 w-100">
                                                                <div class="text-black"><b>{{
                                                                        flight.outbound.arrival_time }}</b>
                                                                </div>
                                                                <div>
                                                                    <small style="font-size: 12px; color: #5e6878;"> {{
                                                                        new
                                                                            Date(flight.outbound.arrival_date).toLocaleDateString('en-US',
                                                                                {
                                                                                    day:
                                                                                        'numeric', month: 'short', weekday: 'short'
                                                                        }) }}</small>
                                                                </div>
                                                                <div>
                                                                    <small
                                                                        style="font-size: 12px; color: #5e6878;">Arrival</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12 col-sm-12 col-md-2 d-none d-md-block">

                                            <div class="d-grid">
                                                <button class="btn btn-sm bluesky-btn-primary" data-bs-toggle="collapse"
                                                    data-bs-target="#flight-package-2" aria-controls="flight-package-2">

                                                    <div class="text-right">
                                                        <p class="p-0 m-0"><b> {{ flight.outbound.currency }} {{
                                                                flight.outbound.totalPrice }}</b></p>
                                                        <!-- <small style="color: #dbdbdb"><del>
                                                                    BDT 77000</del></small> -->
                                                        <small style="font-size: 10px;">Economy Class</small>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- outbound end -->

                                    <!-- inbound start -->
                                    <div class="row" v-show="flight.inbound">
                                        <div class="col-md-10 col-sm-12 border-top mt-3">
                                            <div class="row mt-3">
                                                <div class="col-md-4 col-sm-3 p-0">
                                                    <div class="d-flex flex-row">
                                                        <div class="p-1">
                                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/849px-Emirates_logo.svg.png?20190128215923"
                                                                height="50" width="50">
                                                        </div>
                                                        <div class="pt-1 ps-2">
                                                            <div
                                                                class="d-flex justify-content-center align-items-center h-100 w-100">
                                                                <div>
                                                                    <div class="text-black"><b>DXB-DAC</b>
                                                                    </div>
                                                                    <div style="font-size: 11px; color: #8327a4">
                                                                        BG
                                                                        | Bangladesh Airlines Limited
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col-md-8 col-12 border-start border-end">
                                                    <div class="row p-2">
                                                        <div class="col-md-4 col-4">
                                                            <div
                                                                class="d-block justify-content-center align-items-center h-100 w-100">
                                                                <div class="text-black"><b>10:50 AM</b>
                                                                </div>
                                                                <div>
                                                                    <small style="font-size: 12px; color: #5e6878;">03
                                                                        Jan,
                                                                        Fri</small>
                                                                </div>
                                                                <div>
                                                                    <small
                                                                        style="font-size: 12px; color: #5e6878;">Departure</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 col-4">
                                                            <div class="d-block">
                                                                <div> <small class="ps-2"
                                                                        style="font-size: 11px; color: #5e6878;">04
                                                                        hr 15 Min</small></div>


                                                                <div class="d-flex">
                                                                    <div class="text-black">
                                                                        <img src="../../../../public/theme/appimages/Left_Aligned Line.svg"
                                                                            alt="">
                                                                    </div>
                                                                    <div>
                                                                        <img style="transform: rotate(225deg)"
                                                                            src="../../../../public/theme/animation/Route_Aircraft.gif"
                                                                            alt="" height="23" width="23">
                                                                    </div>
                                                                    <div class="text-black">
                                                                        <img src="../../../../public/theme/appimages/Right_Aligned Line.svg"
                                                                            alt="">
                                                                    </div>


                                                                </div>

                                                                <div class="d-flex ps-2">
                                                                    <img title="Layover at Kolkata | 2H 25 Min"
                                                                        src="../../../../public/theme/appimages/Layover.svg"
                                                                        alt="">
                                                                    <div class="text-black"
                                                                        style="transform: skewY(5deg);">
                                                                        ....
                                                                    </div>
                                                                    <img src="../../../../public/theme/appimages/Layover.svg"
                                                                        alt="">
                                                                    <div class="text-black"
                                                                        style="transform: skewY(175deg);">
                                                                        ....
                                                                    </div>
                                                                    <img src="../../../../public/theme/appimages/Layover.svg"
                                                                        alt="">

                                                                </div>
                                                                <div class="d-flex ps-2">
                                                                    <span
                                                                        style="font-size: 7px; color: #5e6878;">CCU</span>
                                                                    &nbsp; &nbsp; &nbsp;
                                                                    <span
                                                                        style="font-size: 7px; color: #5e6878;">DEL</span>
                                                                    &nbsp; &nbsp;
                                                                    <span
                                                                        style="font-size: 7px; color: #5e6878;">DXB</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 col-4">
                                                            <div
                                                                class="d-block justify-content-center align-items-center h-100 w-100">
                                                                <div class="text-black"><b>10:50 AM</b>
                                                                </div>
                                                                <div>
                                                                    <small style="font-size: 12px; color: #5e6878;">03
                                                                        Jan,
                                                                        Fri</small>
                                                                </div>
                                                                <div>
                                                                    <small
                                                                        style="font-size: 12px; color: #5e6878;">Departure</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-12 col-sm-12 col-md-2 d-sm-block d-md-none">

                                            <div class="d-grid">
                                                <button class="btn btn-sm bluesky-btn-primary" data-bs-toggle="collapse"
                                                    data-bs-target="#flight-package-2" aria-controls="flight-package-2">

                                                    <div class="text-right">
                                                        <p class="p-0 m-0"><b>BDT
                                                                65000</b></p>
                                                        <small style="color: #dbdbdb"><del>
                                                                BDT 77000</del></small>
                                                        <br>
                                                        <small style="font-size: 10px;">Economy
                                                            Class</small>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- inbound end -->

                                </div>
                            </div>
                        </div>
                        <div class="card-footer p-0" style="background-color:#f1f4f7;">
                            <div class="float-start p-2">
                                <div class="d-flex gap-2">
                                    <div v-if="flight.outbound.refundable" class="border border-1 text-center p-1"
                                        style="background-color: #def1ec; color: #12ce69; font-size: 12px;">
                                        <img src="../../../../public/theme/appimages/refund-able.svg" alt="">
                                        Refundable
                                    </div>
                                    <div v-else class="border border-1 text-center p-1"
                                        style="background-color: #f1dede; color: #ce1212; font-size: 12px;">
                                        <img src="../../../../public/theme/appimages/Non-Refundable.svg" alt="">
                                        Non-refundable
                                    </div>

                                    <div class="border border-1 text-center p-1"
                                        style="background-color: #e4e3f6; color: #7944eb; font-size: 12px;">
                                        <i class="fa-regular fa-seat-airline"></i> Available Seats: 09
                                    </div>
                                </div>
                            </div>
                            <div class="float-end me-2">
                                <div class="d-flex gap-2">
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <a class="accordion-button custom-text-purple collapsed m-0 p-0 px-2 py-2"
                                                    :data-bs-target="'#flight-details-' + index"
                                                    :aria-controls="'flight-details-' + index" data-bs-toggle="collapse"
                                                    aria-expanded="false"
                                                    style=" font-size: 12px; background: #f1f4f7 !important;">
                                                    <b>Flight Details</b>
                                                </a>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- flight details2 -->
                    <div :id="`flight-details-${index}`" class="accordion-collapse collapse m-0"
                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style="">
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
                                                    <div class="d-flex d-flex-row mb-1">
                                                        <div class="p-1 bd-highlight">
                                                            <button @click="showRouteDetails(1)"
                                                                class="btn btn-sm bluesky-route-btn-primary active-btn px-2 py-1">DAC-DXB</button>
                                                        </div>
                                                        <div class="p-1 bd-highlight">
                                                            <button @click="showRouteDetails(2)"
                                                                class="btn btn-sm bluesky-route-btn-outline-primary deactive-btn px-2 py-1">DXB-DAC</button>
                                                        </div>
                                                    </div>

                                                    <div class="flight-tab-active fadeIn">
                                                        <div class="card">
                                                            <div
                                                                class="card-header accorion-item-title-color m-0 p-0 px-2 py-2">
                                                                <div class="d-flex">
                                                                    <div class="p-2 flex-grow-1">
                                                                        <b>
                                                                            <img src="../../../../public/theme/appimages/Plane.svg"
                                                                                alt="">
                                                                        </b>
                                                                        <small><b><span
                                                                                    class="bluesky-departure-text">Departure
                                                                                    From</span></b>
                                                                            <b><span
                                                                                    class="bluesky-departure-airport-text">
                                                                                    Hazrat Shahjalal
                                                                                    International Airport
                                                                                </span></b>
                                                                        </small>
                                                                    </div>

                                                                    <div class="p-2 bluesky-departure-text fw-bold">
                                                                        Flight Time: 01 hr 45 min
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-md-4 col-4">
                                                                        <div
                                                                            class="d-block justify-content-center align-items-center h-100 w-100">
                                                                            <div class="text-black-"
                                                                                style="color: #0fb3a6;">
                                                                                <b>DAC</b>
                                                                            </div>
                                                                            <div>
                                                                                <small style="font-size: 13px;"
                                                                                    class="text-black"><b>10:30
                                                                                        AM |</b></small>
                                                                                <span style="font-size: 11px;">19
                                                                                    Jan,2025</span>
                                                                            </div>
                                                                            <div>
                                                                                <small
                                                                                    style="font-size: 12px; color: #5e6878;">Terminal:
                                                                                    2</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 d-none d-sm-block">
                                                                        <img src="../../../../public/theme/appimages/Route.svg"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="col-md-4 col-4">
                                                                        <div
                                                                            class="d-block justify-content-center align-items-center h-100 w-100">
                                                                            <div class="text-black-"
                                                                                style="color: #0fb3a6;">
                                                                                <b>CCU</b>
                                                                            </div>
                                                                            <div>
                                                                                <small style="font-size: 13px;"
                                                                                    class="text-black"><b>10:30
                                                                                        AM |</b></small>
                                                                                <span style="font-size: 11px;">19
                                                                                    Jan,2025</span>
                                                                            </div>
                                                                            <div>
                                                                                <small
                                                                                    style="font-size: 12px; color: #5e6878;">Terminal:
                                                                                    3</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row border-top mt-3 d-flex justify-content-center align-items-center">
                                                                    <div class="col-md-6">
                                                                        <div class="d-flex gap-2 mt-2">

                                                                            <div class="border border-1 text-center p-1"
                                                                                style="background-color: rgb(228, 227, 246); color: rgb(121, 68, 235); font-size: 10px;">
                                                                                QR667- Boing787</div>
                                                                            <div class="border border-1 text-center p-1"
                                                                                style="background-color: rgb(222, 241, 236); color: rgb(18, 206, 105); font-size: 10px;">
                                                                                Class: Economy
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="float-end mt-2">
                                                                            <img height="35" width="60"
                                                                                src="../../../../public/uploads/airlines/EK.svg"
                                                                                alt="">
                                                                            <span class="pt-2 fw-bold"
                                                                                style="font-size: 11px;">Emirates</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row border-top mt-3 d-flex justify-content-center align-items-center">
                                                                    <div class="col-md-12">
                                                                        <div class="chip chip-sm mt-2 mb-0"
                                                                            style="font-size: 13px !important; color: #7944eb; background-color:#e4e3f6; border-radius:5px;">
                                                                            <img style="height: 20px; width: 20px; margin: 5px 3px 0px -10px;" src="../../../../public/theme/appimages/Layover_&_Destination.svg" alt="">

                                                                            <span class="bluesky-departure-text">Layover
                                                                                at <span
                                                                                    class="laover-city">Kolkata</span>
                                                                                |</span>
                                                                            <span
                                                                                class="bluesky-departure-airport-text">Netaji
                                                                                Subhas Chandra Bose
                                                                                Airport</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="card">
                                                            <div
                                                                class="card-header accorion-item-title-color m-0 p-0 px-2 py-2">
                                                                <div class="d-flex">
                                                                    <div class="p-2 flex-grow-1">
                                                                        <b>
                                                                            <img src="../../../../public/theme/appimages/Plane.svg"
                                                                                alt="">
                                                                        </b>
                                                                        <small><b><span
                                                                                    class="bluesky-departure-text">Departure
                                                                                    From</span></b>
                                                                            <b><span
                                                                                    class="bluesky-departure-airport-text">
                                                                                    Netaji Subhas Chandra
                                                                                    Bose Airport
                                                                                </span></b>
                                                                        </small>
                                                                    </div>

                                                                    <div class="p-2 bluesky-departure-text fw-bold">
                                                                        Flight Time: 01 hr 45 min
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-md-4 col-4">
                                                                        <div
                                                                            class="d-block justify-content-center align-items-center h-100 w-100">
                                                                            <div class="text-black-"
                                                                                style="color: #0fb3a6;">
                                                                                <b>CCU</b>
                                                                            </div>
                                                                            <div>
                                                                                <small style="font-size: 13px;"
                                                                                    class="text-black"><b>10:30
                                                                                        AM |</b></small>
                                                                                <span style="font-size: 11px;">19
                                                                                    Jan,2025</span>
                                                                            </div>
                                                                            <div>
                                                                                <small
                                                                                    style="font-size: 12px; color: #5e6878;">Terminal:
                                                                                    2</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 d-none d-sm-block">
                                                                        <img src="../../../../public/theme/appimages/Route.svg"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="col-md-4 col-4">
                                                                        <div
                                                                            class="d-block justify-content-center align-items-center h-100 w-100">
                                                                            <div class="text-black-"
                                                                                style="color: #0fb3a6;">
                                                                                <b>DXB</b>
                                                                            </div>
                                                                            <div>
                                                                                <small style="font-size: 13px;"
                                                                                    class="text-black"><b>10:30
                                                                                        AM |</b></small>
                                                                                <span style="font-size: 11px;">19
                                                                                    Jan,2025</span>
                                                                            </div>
                                                                            <div>
                                                                                <small
                                                                                    style="font-size: 12px; color: #5e6878;">Terminal:
                                                                                    3</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row border-top mt-3 d-flex justify-content-center align-items-center">
                                                                    <div class="col-md-6">
                                                                        <div class="d-flex gap-2 mt-2">

                                                                            <div class="border border-1 text-center p-1"
                                                                                style="background-color: rgb(228, 227, 246); color: rgb(121, 68, 235); font-size: 10px;">
                                                                                QR667- Boing787</div>
                                                                            <div class="border border-1 text-center p-1"
                                                                                style="background-color: rgb(222, 241, 236); color: rgb(18, 206, 105); font-size: 10px;">
                                                                                Class: Economy
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="float-end mt-2">
                                                                            <img height="35" width="60"
                                                                                src="../../../../public/uploads/airlines/EK.svg"
                                                                                alt="">
                                                                            <span class="pt-2 fw-bold"
                                                                                style="font-size: 11px;">Emirates</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row border-top mt-3 d-flex justify-content-center align-items-center">
                                                                    <div class="col-md-12">
                                                                        <div class="chip chip-sm mt-2 mb-0"
                                                                            style="font-size: 13px !important; color: #7944eb; background-color:#e4e3f6; border-radius:5px;">
                                                                            <img style="height: 20px; width: 20px; margin: 5px 3px 0px -10px;" src="../../../../public/theme/appimages/Layover_&_Destination.svg" alt="">

                                                                            <span class="bluesky-departure-text">Reached
                                                                                Destination at <span
                                                                                    class="desitnation-city">Dubai</span>
                                                                                |</span>
                                                                            <span
                                                                                class="bluesky-departure-airport-text">Dubai
                                                                                Internation
                                                                                Airport</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="flight-tab-hide d-none fadeIn">
                                                        <div class="card">
                                                            <div
                                                                class="card-header accorion-item-title-color m-0 p-0 px-2 py-2">
                                                                <div class="d-flex">
                                                                    <div class="p-2 flex-grow-1">
                                                                        <b>
                                                                            <img src="../../../../public/theme/appimages/Plane.svg"
                                                                                alt="">
                                                                        </b>
                                                                        <small><b><span
                                                                                    class="bluesky-departure-text">Departure
                                                                                    From</span></b>
                                                                            <b><span
                                                                                    class="bluesky-departure-airport-text">
                                                                                    Dubai Internation Airport
                                                                                </span></b>
                                                                        </small>
                                                                    </div>

                                                                    <div class="p-2 bluesky-departure-text fw-bold">
                                                                        Flight Time: 01 hr 45 min
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-md-4 col-4">
                                                                        <div
                                                                            class="d-block justify-content-center align-items-center h-100 w-100">
                                                                            <div class="text-black-"
                                                                                style="color: #0fb3a6;">
                                                                                <b>DXB</b>
                                                                            </div>
                                                                            <div>
                                                                                <small style="font-size: 13px;"
                                                                                    class="text-black"><b>10:30
                                                                                        AM |</b></small>
                                                                                <span style="font-size: 11px;">19
                                                                                    Jan,2025</span>
                                                                            </div>
                                                                            <div>
                                                                                <small
                                                                                    style="font-size: 12px; color: #5e6878;">Terminal:
                                                                                    2</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 d-none d-sm-block">
                                                                        <img src="../../../../public/theme/appimages/Route.svg"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="col-md-4 col-4">
                                                                        <div
                                                                            class="d-block justify-content-center align-items-center h-100 w-100">
                                                                            <div class="text-black-"
                                                                                style="color: #0fb3a6;">
                                                                                <b>CCU</b>
                                                                            </div>
                                                                            <div>
                                                                                <small style="font-size: 13px;"
                                                                                    class="text-black"><b>10:30
                                                                                        AM |</b></small>
                                                                                <span style="font-size: 11px;">19
                                                                                    Jan,2025</span>
                                                                            </div>
                                                                            <div>
                                                                                <small
                                                                                    style="font-size: 12px; color: #5e6878;">Terminal:
                                                                                    3</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row border-top mt-3 d-flex justify-content-center align-items-center">
                                                                    <div class="col-md-6">
                                                                        <div class="d-flex gap-2 mt-2">

                                                                            <div class="border border-1 text-center p-1"
                                                                                style="background-color: rgb(228, 227, 246); color: rgb(121, 68, 235); font-size: 10px;">
                                                                                QR667- Boing787</div>
                                                                            <div class="border border-1 text-center p-1"
                                                                                style="background-color: rgb(222, 241, 236); color: rgb(18, 206, 105); font-size: 10px;">
                                                                                Class: Economy
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="float-end mt-2">
                                                                            <img height="35" width="60"
                                                                                src="../../../../public/uploads/airlines/EK.svg"
                                                                                alt="">
                                                                            <span class="pt-2 fw-bold"
                                                                                style="font-size: 11px;">Emirates</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row border-top mt-3 d-flex justify-content-center align-items-center">
                                                                    <div class="col-md-12">
                                                                        <div class="chip chip-sm mt-2 mb-0"
                                                                            style="font-size: 13px !important; color: #7944eb; background-color:#e4e3f6; border-radius:5px;">
                                                                            <img style="height: 30px;width: 30px;padding-left: 10px;margin: 0px 0px 0px -16px;"
                                                                                src="../../../../public/theme/appimages/location.svg"
                                                                                alt="">

                                                                            <span class="bluesky-departure-text">Layover
                                                                                at <span
                                                                                    class="laover-city">Kolkata</span>
                                                                                |</span>
                                                                            <span
                                                                                class="bluesky-departure-airport-text">Netaji
                                                                                Subhas Chandra Bose
                                                                                Airport</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="card">
                                                            <div
                                                                class="card-header accorion-item-title-color m-0 p-0 px-2 py-2">
                                                                <div class="d-flex">
                                                                    <div class="p-2 flex-grow-1">
                                                                        <b>
                                                                            <img src="../../../../public/theme/appimages/Plane.svg"
                                                                                alt="">
                                                                        </b>
                                                                        <small><b><span
                                                                                    class="bluesky-departure-text">Departure
                                                                                    From</span></b>
                                                                            <b><span
                                                                                    class="bluesky-departure-airport-text">
                                                                                    Netaji Subhas Chandra
                                                                                    Bose Airport
                                                                                </span></b>
                                                                        </small>
                                                                    </div>

                                                                    <div class="p-2 bluesky-departure-text fw-bold">
                                                                        Flight Time: 01 hr 45 min
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-md-4 col-4">
                                                                        <div
                                                                            class="d-block justify-content-center align-items-center h-100 w-100">
                                                                            <div class="text-black-"
                                                                                style="color: #0fb3a6;">
                                                                                <b>CCU</b>
                                                                            </div>
                                                                            <div>
                                                                                <small style="font-size: 13px;"
                                                                                    class="text-black"><b>10:30
                                                                                        AM |</b></small>
                                                                                <span style="font-size: 11px;">19
                                                                                    Jan,2025</span>
                                                                            </div>
                                                                            <div>
                                                                                <small
                                                                                    style="font-size: 12px; color: #5e6878;">Terminal:
                                                                                    2</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 d-none d-sm-block">
                                                                        <img src="../../../../public/theme/appimages/Route.svg"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="col-md-4 col-4">
                                                                        <div
                                                                            class="d-block justify-content-center align-items-center h-100 w-100">
                                                                            <div class="text-black-"
                                                                                style="color: #0fb3a6;">
                                                                                <b>DAC</b>
                                                                            </div>
                                                                            <div>
                                                                                <small style="font-size: 13px;"
                                                                                    class="text-black"><b>10:30
                                                                                        AM |</b></small>
                                                                                <span style="font-size: 11px;">19
                                                                                    Jan,2025</span>
                                                                            </div>
                                                                            <div>
                                                                                <small
                                                                                    style="font-size: 12px; color: #5e6878;">Terminal:
                                                                                    1</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row border-top mt-3 d-flex justify-content-center align-items-center">
                                                                    <div class="col-md-6">
                                                                        <div class="d-flex gap-2 mt-2">

                                                                            <div class="border border-1 text-center p-1"
                                                                                style="background-color: rgb(228, 227, 246); color: rgb(121, 68, 235); font-size: 10px;">
                                                                                QR667- Boing787</div>
                                                                            <div class="border border-1 text-center p-1"
                                                                                style="background-color: rgb(222, 241, 236); color: rgb(18, 206, 105); font-size: 10px;">
                                                                                Class: Economy
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="float-end mt-2">
                                                                            <img height="35" width="60"
                                                                                src="../../../../public/uploads/airlines/EK.svg"
                                                                                alt="">
                                                                            <span class="pt-2 fw-bold"
                                                                                style="font-size: 11px;">Emirates</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="row border-top mt-3 d-flex justify-content-center align-items-center">
                                                                    <div class="col-md-12">
                                                                        <div class="chip chip-sm mt-2 mb-0"
                                                                            style="font-size: 13px !important; color: #7944eb; background-color:#e4e3f6; border-radius:5px;">
                                                                            <img style="height: 30px;width: 30px;padding-left: 10px;margin: 0px 0px 0px -16px;"
                                                                                src="../../../../public/theme/appimages/location.svg"
                                                                                alt="">

                                                                            <span class="bluesky-departure-text">Reached
                                                                                Destination at <span
                                                                                    class="desitnation-city">Dhaka</span>
                                                                                |</span>
                                                                            <span
                                                                                class="bluesky-departure-airport-text">Hazrat
                                                                                Shahjalal International Airport</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>
                                                <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                                                    <div class="row">
                                                        <div class="col-md-12">

                                                            <p class="text-start fw-bold">PENALTIES/GENERAL
                                                            </p>
                                                            <span>
                                                                1. Reissue/Refund minimum penalty amount
                                                                before
                                                                departure 0 BDT 2. Reissue/Refund maximum
                                                                penalty amount
                                                                before departure 5999 BDT
                                                                3. Reissue/Refund maximum penalty amount for

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
                                                            <p class="text-start fw-bold pt-0 mt-0">Layover
                                                            </p>
                                                            <span>Stopovers for economy unrestricted fares
                                                                unlimited
                                                                stopovers permitted.</span>
                                                        </div>
                                                        <div class="col-md-12 mt-2">
                                                            <p class="text-start fw-bold pt-0 mt-0">
                                                                Combinations
                                                            </p>
                                                            <span>
                                                                Permitted combinations fares may be combined
                                                                on
                                                                a half
                                                                round trip basis with any fare for any
                                                                carrier
                                                                in any

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
                                                                                    <td>Adults: 2x৳30000
                                                                                    </td>
                                                                                    <td>
                                                                                        ৳60000
                                                                                    </td>
                                                                                </tr>

                                                                                <tr>
                                                                                    <td>Childs: 2x৳20000
                                                                                    </td>
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
                                                                                        <small>2
                                                                                            Pieces</small>
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
                                                                                        <small>2
                                                                                            Pieces</small>
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
                    <!-- ./ end flight details2 -->
                </div>

            </div>

            <Transition name="fade">
                <div v-show="loadging" class="loading-container">
                    <div class="loading-plane"></div>
                </div>
            </Transition>

        </div>
        <!-- result panel end -->
    </div>

</template>

<style>
/* Leading */
@keyframes plane-loading {
    0% {
        transform: translateX(-100%) translateY(0) rotate(0deg);
        opacity: 0;
    }

    50% {
        transform: translateX(0) translateY(-30px) rotate(-5deg);
        opacity: 1;
    }

    100% {
        transform: translateX(100%) translateY(0) rotate(0deg);
        opacity: 0;
    }
}

.loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backdrop-filter: blur(10px);

}

.loading-plane {
    width: 300px;
    height: 300px;
    background: url('/theme/appimages/pp.gif') no-repeat center;
    background-size: contain;
    /* animation: plane-loading 2s infinite ease-in-out; */
    border: 1px solid #8adfdb;
    border-radius: 50%;
}

.loading-track {
    width: 200px;
    height: 4px;
    background: #e2e8f0;
    border-radius: 2px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
}

.loading-progress {
    position: absolute;
    height: 100%;
    background: linear-gradient(to right, #02b9af, #4e86f4, #9c54f0);
    width: 50%;
    border-radius: 2px;
    animation: progress 2s infinite ease-in-out;
}

.loading-text {
    margin-top: 20px;
    color: #875ae9;
    font-size: 16px;
    font-weight: 500;
}

@keyframes progress {
    0% {
        left: -50%;
    }

    100% {
        left: 100%;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* end loading */

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

/* middle sping */
.center-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    width: 100px;
    height: 100px;
}

.loader-circle-57 {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader-circle-57:before {
    content: "";
    color: red;
    height: 50px;
    width: 50px;
    background: #0000;
    border-radius: 50%;
    border: 5px solid #027de2d5;
    animation: loader-circle-57-spin 1s infinite
}

@keyframes loader-circle-57-spin {
    50% {
        transform: rotatez(180deg);
        border-style: dashed;
        border-color: #9c54f0 #02b9af #4e86f4;
    }

    100% {
        transform: rotatez(360deg);
    }
}
</style>
