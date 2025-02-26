<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from "vue";
import axiosInstance from "../../axiosInstance";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import SimpleBar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

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

    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    form.dep_date = date;
    return date;
};

const tdate = ref();

const form = reactive({
    Way: "",
    from: "",
    to: "",
    dep_date: "",
    ADT: "",
    CNN: "",
    INF: "",
});

form.Way = 1;

function validateSelections() {
    if (!form.from) {
        Notification.showToast('E', 'Please select a valid origin.');
        return false;
    }
    if (!form.to) {
        Notification.showToast('E', 'Please select a valid destination.');
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
        Notification.showToast("s", response.data.message);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

function changeType(type) {
    if (type == 1) {
        $(".one-way").addClass("bg-checkbox-active");
        $(".round-way").removeClass("bg-checkbox-active");
        $(".multi-city").removeClass("bg-checkbox-active");
        $(".one-way").removeClass("bg-checkbox");
        $(".round-way").addClass("bg-checkbox");
        $(".multi-city").addClass("bg-checkbox");
    } else if (type == 2) {
        $(".one-way").removeClass("bg-checkbox-active");
        $(".round-way").addClass("bg-checkbox-active");
        $(".multi-city").removeClass("bg-checkbox-active");
        $(".round-way").removeClass("bg-checkbox");
        $(".one-way").addClass("bg-checkbox");
        $(".multi-city").addClass("bg-checkbox");
    } else {
        $(".one-way").removeClass("bg-checkbox-active");
        $(".round-way").removeClass("bg-checkbox-active");
        $(".multi-city").addClass("bg-checkbox-active");
        $(".multi-city").removeClass("bg-checkbox");
        $(".one-way").addClass("bg-checkbox");
        $(".round-way").addClass("bg-checkbox");
    }
}

onMounted(() => {
    getAirports();
    document.addEventListener("click", handleClickOutside);
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
    $("#img").attr("src", "");
}

function offHover() {
    $("#img").attr("src", "");
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
            <div class="card border border-1 border-primary- bluesky-border-primary">
                <div class="card-body">

                    <div class="main-container">
                        <div class="wrapper">
                            <div class="section">
                                <div class="wrapper-2">
                                    <div class="section-2">
                                        <div class="section-3">
                                            <input class="form-check-input" type="radio"
                                                name="flexRadioDefault" id="flexRadioDefault1">
                                            <label class="form-check-label-box" for="flexRadioDefault1">
                                                <span class="text">One Way</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="wrapper-3">
                                        <div class="section-4">

                                            <input class="form-check-input" type="radio"
                                                name="flexRadioDefault" checked id="flexRadioDefault1">

                                            <label class="form-check-label-box" for="flexRadioDefault1">
                                                <span class="text-2">Round Way</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="box">
                                        <div class="section-5">


                                            <input class="form-check-input" type="radio"
                                                name="flexRadioDefault" id="flexRadioDefault1">

                                            <label class="form-check-label-box" for="flexRadioDefault1">
                                                <span class="text-3">Multi City</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="wrapper-4">
                                    <div class="group">
                                        <div class="box-2"></div>
                                        <div class="pic-4"></div>
                                        <span class="text-4">5 Passengers</span>
                                    </div>
                                    <div class="group-2">
                                        <div class="wrapper-5"></div>
                                        <div class="img"></div>
                                        <span class="text-5">Economy</span>
                                    </div>
                                    <div class="group-3">
                                        <div class="section-6"></div>
                                        <div class="img-2"></div>
                                        <span class="text-6">Preferred Airlines</span>
                                    </div>
                                </div>
                            </div>
                            <div class="wrapper-6">
                                <div class="box-3">
                                    <div class="section-7">
                                        <div class="section-8">
                                            <span class="text-7">DAC</span>
                                            <div class="pic-5"></div>
                                            <div class="section-9">
                                                <span class="text-8">Dhaka</span><span class="text-9">Hazrat Shahjalal
                                                    Int.
                                                    Airport</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="img-3"></div>
                                    <div class="box-4">
                                        <div class="wrapper-7">
                                            <span class="text-a">DXB</span>
                                            <div class="img-4"></div>
                                            <div class="section-a">
                                                <span class="text-b">Dubai</span><span class="text-c">Dubai
                                                    International Airport</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="section-b">
                                    <div class="wrapper-8">
                                        <div class="pic-6"></div>
                                    </div>
                                    <div class="section-c">
                                        <div class="section-d">
                                            <span class="text-d">19 Dec,2024</span><span class="text-e">Tuesday</span>
                                            <div class="wrapper-9"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="wrapper-a">
                                    <div class="wrapper-b">
                                        <div class="img-5"></div>
                                    </div>
                                    <div class="wrapper-c">
                                        <div class="group-4">
                                            <span class="text-f">23 Dec,2024</span><span class="text-10">Monday</span>
                                            <div class="box-5"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="section-e">
                                    <div class="img-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- <div class="d-flex align-items-center gap-3">
                        <div class="bg-checkbox-active one-way rounded rounded-1 p-2">
                            <input @click="changeType(1)" class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1" />

                            <label class="form-check-label-box" for="flexRadioDefault1">
                                &nbsp;One Way
                            </label>
                        </div>
                        <div class="bg-checkbox round-way rounded rounded-1 p-2">
                            <input @click="changeType(2)" class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2" />
                            <label class="form-check-label-box" for="flexRadioDefault2">
                                &nbsp;Round Trip
                            </label>
                        </div>
                        <div class="bg-checkbox rounded multi-city rounded-1 p-2">
                            <input @click="changeType(3)" class="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault3" />
                            <label class="form-check-label-box" for="flexRadioDefault3">
                                &nbsp; Multi City
                            </label>
                        </div>

                        <div class="ms-auto">
                            <div class="row">
                                <div class="col-md-4 pr-0">
                                    <div class="input-group mb-3">
                                        <button class="btn btn-outline-primary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            2 Passangers
                                        </button>
                                        <ul class="dropdown-menu p-1" style="width: 300px">
                                            <table class="table table-sm">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <small>
                                                                Adult <br />
                                                                <span style="font-size: 9px">Above 12
                                                                    Years</span></small>
                                                        </td>
                                                        <td style="width: 150px">
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
                                                                    value="1" />
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
                                                        <td>
                                                            <small>Children <br /><span style="font-size: 9px">02 to
                                                                    Under 12 Years
                                                                </span></small>
                                                        </td>
                                                        <td style="width: 150px">
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
                                                                    value="1" />
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
                                                        <td>
                                                            <small>Infant <br /><span style="font-size: 9px">Under 02
                                                                    Years</span></small>
                                                        </td>
                                                        <td style="width: 150px">
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
                                                                    value="1" />
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
                                        <option value="">Qatar</option>
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
                                class="form-control form-control-lg origin_name placeholder-font-size"
                                @input="filterOriginAirports($event.target.value)" @focus="onOriginFocus"
                                @click="onOriginFocus" placeholder="City,Airport" />
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
                            <input id="destination_id" v-model="form.to" name="destination_name"
                                class="form-control form-control-lg destination_name placeholder-font-size"
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

                        <div class="col-md-2">
                            <VueDatePicker v-model="fdate" placeholder="Select Date" :enable-time-picker="false"
                                :format="format" auto-apply></VueDatePicker>
                        </div>
                        <div class="col-md-2 hide-me">
                            <VueDatePicker v-model="tdate" placeholder="Select Date" :enable-time-picker="false"
                                :preview-format="format"></VueDatePicker>
                        </div>

                        <div class="col-md-1">

                            <button @click="Lowfaresearch()"
                                class="btn btn-sm btn-block btn-outline-primary text-center">
                                <i class="fa fa-search px-3"></i> Search
                            </button>

                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    overflow: hidden;
}

.main-container,
.main-container * {
    box-sizing: border-box;
}

input,
select,
textarea,
button {
    outline: 0;
}

.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    position: relative;
    width: 1170px;
    height: 177px;
    margin: 0 auto;
    padding: 25px 8px 25px 8px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 6px 8px 0 rgba(215, 208, 255, 0.25) inset;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 24px;
    position: relative;
    width: 1147px;
}

.section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    flex-wrap: nowrap;
    flex-shrink: 0;
    position: relative;
    min-width: 0;
    z-index: 1;
}

.wrapper-2 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 374px;
    z-index: 2;
}

.section-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 118px;
    height: 35px;
    padding: 8px 9px 8px 9px;
    background: #f5f7fa;
    z-index: 3;
    border-radius: 5px;
}

.section-3 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 84px;
    z-index: 4;
}

.pic {
    flex-shrink: 0;
    position: relative;
    width: 18px;
    height: 18px;
    background: url(./assets/images/5cadfaa8-a698-43fe-a8ed-a92a2f558592.png) no-repeat center;
    background-size: cover;
    z-index: 5;
    border-radius: 50%;
}

.text {
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    height: 15px;
    color: #3f4754;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 6;
}

.wrapper-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 118px;
    height: 35px;
    padding: 8px 8px 8px 8px;
    background: #ffffff;
    border: 0.8px solid #7239ea;
    z-index: 7;
    border-radius: 5px;
}

.section-4 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 7px;
    position: relative;
    width: 92px;
    z-index: 8;
}

.pic-2 {
    flex-shrink: 0;
    position: relative;
    width: 14px;
    height: 14px;
    background: url(./assets/images/457271ed-f1d6-48d0-9d3d-a34eb7ad63cb.png) no-repeat center;
    background-size: cover;
    z-index: 9;
}

.text-2 {
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    height: 15px;
    color: #7239ea;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 10;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 118px;
    height: 35px;
    padding: 8px 9px 8px 9px;
    background: #f5f7fa;
    z-index: 11;
    border-radius: 5px;
}

.section-5 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 89px;
    z-index: 12;
}

.pic-3 {
    flex-shrink: 0;
    position: relative;
    width: 18px;
    height: 18px;
    background: url(./assets/images/54876cc0-9548-4e8b-8452-27c844d6fcec.png) no-repeat center;
    background-size: cover;
    z-index: 13;
    border-radius: 50%;
}

.text-3 {
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    height: 15px;
    color: #3f4754;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 14;
}

.wrapper-4 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 439px;
    z-index: 15;
}

.group {
    flex-shrink: 0;
    position: relative;
    width: 139px;
    height: 35px;
    z-index: 16;
}

.box-2 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(28, 2, 226, 0.05);
    z-index: 17;
    border-radius: 5px;
}

.pic-4 {
    position: absolute;
    width: 17.27%;
    height: 68.57%;
    top: 17.14%;
    left: 76.98%;
    background: url(./assets/images/2717b28b-059c-4fe3-87cd-1e86ffbf4652.png) no-repeat center;
    background-size: 100% 100%;
    z-index: 19;
    overflow: hidden;
}

.text-4 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    height: 45.71%;
    top: 28.57%;
    left: 7.19%;
    color: #7239ea;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 18;
}

.group-2 {
    flex-shrink: 0;
    position: relative;
    width: 111px;
    height: 35px;
    z-index: 20;
}

.wrapper-5 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(28, 2, 226, 0.05);
    z-index: 21;
    border-radius: 5px;
}

.img {
    position: absolute;
    width: 21.62%;
    height: 68.57%;
    top: 17.14%;
    left: 71.17%;
    background: url(./assets/images/03cee652-cb38-4cf4-8f78-9e7ec983da3c.png) no-repeat center;
    background-size: 100% 100%;
    z-index: 23;
    overflow: hidden;
}

.text-5 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    height: 45.71%;
    top: 28.57%;
    left: 9.01%;
    color: #7239ea;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 22;
}

.group-3 {
    flex-shrink: 0;
    position: relative;
    width: 169px;
    height: 35px;
    z-index: 24;
}

.section-6 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(28, 2, 226, 0.05);
    z-index: 25;
    border-radius: 5px;
}

.img-2 {
    position: absolute;
    width: 14.2%;
    height: 68.57%;
    top: 17.14%;
    left: 81.07%;
    background: url(./assets/images/6398af2c-746a-4110-818c-2093bf626995.png) no-repeat center;
    background-size: 100% 100%;
    z-index: 27;
    overflow: hidden;
}

.text-6 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    height: 45.71%;
    top: 28.57%;
    left: 5.92%;
    color: #7239ea;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 26;
}

.wrapper-6 {
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 7px;
    position: relative;
    min-width: 0;
    z-index: 28;
}

.box-3 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 6px;
    position: relative;
    width: 666px;
    z-index: 29;
}

.section-7 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 315px;
    height: 66px;
    padding: 9px 16px 9px 16px;
    border: 1px solid #f3f5f8;
    z-index: 30;
    border-radius: 7px;
}

.section-8 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 9px;
    position: relative;
    width: 230px;
    z-index: 31;
}

.text-7 {
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    height: 20px;
    color: #182332;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 32;
}

.pic-5 {
    flex-shrink: 0;
    position: relative;
    width: 0.5px;
    height: 48px;
    background: url(./assets/images/f18c76e0-058c-49ac-8243-2481647e725c.png) no-repeat center;
    background-size: cover;
    z-index: 33;
}

.section-9 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 5px;
    position: relative;
    width: 176px;
    z-index: 34;
}

.text-8 {
    align-self: stretch;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    min-width: 0;
    height: 18px;
    color: #182332;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 14px;
    font-weight: 500;
    line-height: 17.71px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 35;
}

.text-9 {
    align-self: stretch;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    min-width: 0;
    height: 15px;
    color: #5e6878;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 36;
}

.img-3 {
    flex-shrink: 0;
    position: relative;
    width: 24px;
    height: 24px;
    background: url(./assets/images/4adae874-cfb1-4ccb-8da9-16837d9e6b08.png) no-repeat center;
    background-size: cover;
    z-index: 37;
    overflow: hidden;
}

.box-4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 315px;
    height: 66px;
    padding: 9px 16px 9px 16px;
    border: 1px solid #eff2f5;
    z-index: 38;
    border-radius: 7px;
}

.wrapper-7 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 9px;
    position: relative;
    width: 223px;
    z-index: 39;
}

.text-a {
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    height: 20px;
    color: #182332;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 40;
}

.img-4 {
    flex-shrink: 0;
    position: relative;
    width: 0.5px;
    height: 48px;
    background: url(./assets/images/65dd99d7-8c77-4ddc-a395-9e73af4bcf85.png) no-repeat center;
    background-size: cover;
    z-index: 41;
}

.section-a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 5px;
    position: relative;
    width: 170px;
    z-index: 42;
}

.text-b {
    align-self: stretch;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    min-width: 0;
    height: 18px;
    color: #182332;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 14px;
    font-weight: 500;
    line-height: 17.71px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 43;
}

.text-c {
    align-self: stretch;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    min-width: 0;
    height: 15px;
    color: #5e6878;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 44;
}

.section-b {
    flex-shrink: 0;
    position: relative;
    width: 186px;
    height: 66px;
    z-index: 45;
}

.wrapper-8 {
    position: relative;
    width: 24px;
    height: 24px;
    margin: 11px 0 0 149px;
    z-index: 51;
}

.pic-6 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(./assets/images/881fe542-1e06-4a4f-b125-80c13f699064.png) no-repeat center;
    background-size: 100% 100%;
    z-index: 52;
}

.section-c {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 46;
    border-radius: 7px;
}

.section-d {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-size: 0px;
    z-index: 47;
    border-radius: 7px;
}

.text-d {
    display: block;
    position: relative;
    height: 18px;
    margin: 14px 0 0 12px;
    color: #182332;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 14px;
    font-weight: 500;
    line-height: 17.71px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 50;
}

.text-e {
    display: block;
    position: relative;
    height: 15px;
    margin: 6px 0 0 12px;
    color: #5e6878;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 49;
}

.wrapper-9 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid #eff2f5;
    z-index: 48;
    border-radius: 7px;
}

.wrapper-a {
    flex-shrink: 0;
    position: relative;
    width: 186px;
    height: 66px;
    z-index: 53;
}

.wrapper-b {
    position: relative;
    width: 24px;
    height: 24px;
    margin: 11px 0 0 149px;
    z-index: 59;
}

.img-5 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(./assets/images/ef0adc35-3984-424e-b7ef-f34cce4ad790.png) no-repeat center;
    background-size: 100% 100%;
    z-index: 60;
}

.wrapper-c {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 54;
    border-radius: 7px;
}

.group-4 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-size: 0px;
    z-index: 55;
    border-radius: 7px;
}

.text-f {
    display: block;
    position: relative;
    height: 18px;
    margin: 14px 0 0 12px;
    color: #182332;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 14px;
    font-weight: 500;
    line-height: 17.71px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 58;
}

.text-10 {
    display: block;
    position: relative;
    height: 15px;
    margin: 6px 0 0 12px;
    color: #5e6878;
    font-family: Be Vietnam Pro, var(--default-font-family);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.5px;
    z-index: 57;
}

.box-5 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid #eff2f5;
    z-index: 56;
    border-radius: 7px;
}

.section-e {
    flex-shrink: 0;
    position: relative;
    width: 87px;
    height: 68px;
    z-index: 61;
}

.img-6 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(./assets/images/6f18d352-62cf-4ddb-bb75-0c2766e1f01c.png) no-repeat center;
    background-size: 100% 100%;
    z-index: 62;
    overflow: hidden;
}

.placeholder-font-size::placeholder {
    font-size: 16px;
    /* Change the font size as needed */
}

.arrow {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #0dcaf0;
    /* Change color as needed */
    position: absolute;
    top: -10px;
    /* Adjust position as needed */
    left: 50%;
    /* Center the arrow */
    transform: translateX(-50%);
    /* Adjust for the width of the arrow */
}
</style>

<style>
.form-control:focus {
    border-color: #be65a4;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 2px rgba(255, 100, 255, 0.5);
}

/* new */
.flight-search-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

.input-group> :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: calc(var(--bs-border-width) * -1);
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
