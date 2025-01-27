<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from "vue";
import axiosInstance from "../../axiosInstance"
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import SimpleBar from 'simplebar-vue';
import 'simplebar-vue/dist/simplebar.min.css';


const airports = ref([]); // All airports
const initialLoadLimit = 20; // Limit for init
const showOriginList = ref(false);
const showDestinationList = ref(false);
const filteredOriginAirports = ref([]);
const filteredDestinationAirports = ref([]);

const fdate = ref();
const format = (fdate) => {
    const day = fdate.getDate();
    const month = fdate.getMonth() + 1;
    const year = fdate.getFullYear();

    const date = `${year}-${month}-${day}`;
    form.dep_date = date;
    return date;
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


function validateSelections() {
    if (!form.from) {
        alert('Please select a valid departure city or airport.');
        return false;
    }
    if (!form.to) {
        alert('Please select a valid arrival city or airport.');
        return false;
    }
    return true;
}

async function Lowfaresearch() {
    if (!validateSelections()) {
        return;
    }
    try {
        const response = await axiosInstance.post("Lowfaresearch", form);
        Notification.showToast('s', response.data.message);
        console.log(response);

    } catch (error) {
        console.log(error);
    }

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
    getAirports();
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});


async function getAirports() {
    try {
        const response = await axiosInstance.get('airports');
        airports.value = response.data.map(value => ({
            id: value.code,
            text: value.Airport_Name,
            city: value.City_name
        }));
    } catch (error) {
        console.error('Error fetching airports:', error);
    }
}

function handleClickOutside(event) {
    const originInput = document.getElementById('origin_id');
    const originResults = document.getElementById('origin_results');
    const destinationInput = document.getElementById('destination_id');
    const destinationResults = document.getElementById('destination_results');

    if (!originInput?.contains(event.target) && !originResults?.contains(event.target)) {
        showOriginList.value = false;
    }

    if (!destinationInput?.contains(event.target) && !destinationResults?.contains(event.target)) {
        showDestinationList.value = false;
    }
}

// Update filter functions
function filterOriginAirports(searchText) {
    if (!searchText) {
        filteredOriginAirports.value = airports.value.slice(0, initialLoadLimit);
        return;
    }
    const search = searchText.toLowerCase();
    filteredOriginAirports.value = airports.value.filter(airport =>
        airport.id.toLowerCase().includes(search) ||
        airport.text.toLowerCase().includes(search) ||
        airport.city.toLowerCase().includes(search)
    );
}

function filterDestinationAirports(searchText) {
    if (!searchText) {
        filteredDestinationAirports.value = airports.value.slice(0, initialLoadLimit);
        return;
    }
    const search = searchText.toLowerCase();
    filteredDestinationAirports.value = airports.value.filter(airport =>
        airport.id.toLowerCase().includes(search) ||
        airport.text.toLowerCase().includes(search) ||
        airport.city.toLowerCase().includes(search)
    );
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
    form.from = '';
    showOriginList.value = false;
}

function clearDestination() {
    form.to = '';
    showDestinationList.value = false;
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

                    <li class="breadcrumb-item active" aria-current="page">Flight Search</li>
                </ol>
            </nav>
        </div>
    </div>

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

                    <div class="row mt-4 searchparameters">

                        <div class="col-md-3 position-relative">
                            <input id="origin_id" v-model="form.from" name="origin_name"
                                class="form-control form-control-lg origin_name"
                                @input="filterOriginAirports($event.target.value)" @focus="onOriginFocus"
                                placeholder="Enter departure city or airport">
                            <span v-if="form.from" @click="clearOrigin" class="clear-icon">✖</span>
                            <div v-if="showOriginList" id="origin_results"
                                class="position-absolute w-100 mt-1 bg-white border rounded shadow-sm"
                                style="z-index: 1000; animation: fadeIn 0.5s ease-in-out;">
                                <SimpleBar style="max-height: 300px;" class="search-results-simplebar">

                                    <div v-for="airport in filteredOriginAirports" :key="airport.id"
                                        class="p-2 cursor-pointer hover:bg-gray-100" @click="selectOrigin(airport)">

                                        <div class="hstack align-items-center gap-3">
										<div class="mb-0 widgets-icons bg-light-info text-info d-flex align-items-center justify-content-center">
											<h5>{{ airport.id }}</h5>
										</div>
										 <div class="flex-grow-1">
                                          <h6 class="mb-0 font-14">{{ airport.text }}</h6>
										  <p class="mb-0 d-flex align-items-center gap-2">{{ airport.city }} </p>
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
                            <input id="destination_id" v-model="form.to" name="destination_name"
                                class="form-control form-control-lg destination_name"
                                @input="filterDestinationAirports($event.target.value)" @focus="onDestinationFocus"
                                placeholder="Enter arrival city or airport">
                            <span v-if="form.to" @click="clearDestination" class="clear-icon">✖</span>
                            <div v-if="showDestinationList" id="destination_results"
                                class="position-absolute w-100 mt-1 bg-white border rounded shadow-sm"
                                style="z-index: 1000; animation: fadeIn 0.5s ease-in-out;">
                                <SimpleBar style="max-height: 300px;" class="search-results-simplebar">

                                    <div v-for="airport in filteredDestinationAirports" :key="airport.id"
                                        class="p-2 cursor-pointer hover:bg-gray-100"
                                        @click="selectDestination(airport)">
                                        <div class="fw-bold">{{ airport.text }}</div>
                                        <div class="small text-muted">{{ airport.city }} ({{ airport.id }})</div>
                                    </div>
                                    <div v-if="filteredDestinationAirports.length === 0"
                                        class="p-2 text-center text-muted">
                                        No matching airports found
                                    </div>
                                </SimpleBar>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <VueDatePicker v-model="fdate" placeholder="Select Date" :enable-time-picker="false"
                                :format="format"></VueDatePicker>
                        </div>
                        <div class="col-md-2 hide-me">
                            <VueDatePicker v-model="tdate" placeholder="Select Date" :enable-time-picker="false"
                                :format="tformat"></VueDatePicker>
                        </div>
                        <div class="col-md-1">
                            <!-- <router-link :to="{ name: 'searchResult' }"> -->
                            <button @click="Lowfaresearch()"
                                class="btn btn-sm btn-block btn-outline-primary text-center">
                                <i class="fa fa-search px-3"></i>
                            </button>

                            <!-- <img src="" alt="" style="width: 53px;" @mouseover="onHover();" @mouseout="offHover();" id="img"> -->
                            <!-- </router-link> -->
                            <!-- <img src="../../../../public/build/assets/s_Hover_State.jpg" alt="" style="width: 53px;"> -->
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style>

/* new */
.flight-search-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.route-selection {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 2;
}

.location-box {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.airport-code {
    font-size: 1.5rem;
    font-weight: bold;
}

.airport-details {
    display: flex;
    flex-direction: column;
}

.city {
    font-weight: 500;
}

.airport-name {
    font-size: 0.875rem;
}

.swap-button {
    display: flex;
    align-items: center;
}

.swap-icon {
    padding: 0.5rem;
    border-radius: 50%;
    background: #f5f5f5;
}

.date-selection {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    border-left: 1px solid #eee;
    padding-left: 2rem;
}

.date-box {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.date {
    font-size: 1.5rem;
    font-weight: bold;
}

.date-details {
    display: flex;
    flex-direction: column;
}

.month {
    font-weight: 500;
}

.day {
    font-size: 0.875rem;
}

.text-muted {
    color: #6c757d;
}
/* new */
.bg-checkbox-active {
    color: #fff;
    background: #1882ff;
}

.bg-checkbox {
    color: #616b7a;
    background: #ebf0f5;
}

.cursor-pointer {
    cursor: pointer;
}

.hover\:bg-gray-100:hover {
    background-color: #f3f4f6;
}

/* search bar */
#searchbar {
    margin-top: 15px;
}

#searchbar .bar {
    display: flex;
}


#searchbar .bar div.box {
    border: 2px solid #dbdde0;
    border-radius: 10px;
    cursor: pointer;
    /* padding: 2px 15px; */
    position: relative;
}

#searchbar .bar div.box .row .col-md-4 .short-code {
    padding: 16px 0px 0px 10px;
    font-size: 19px;
}

.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: calc(var(--bs-border-width)* -1);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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

/* Optional: Add some padding to prevent content from touching the scrollbar */
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
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    cursor: pointer;
    margin-right: 12px;
}
</style>
