<script setup>
import DataTable from "datatables.net-vue3";
import DataBS5 from "datatables.net-bs5";
import axiosInstance from "../../../axiosInstance";
import { data } from "jquery";
import { icons } from "lucide-vue-next";
import { useRouter } from 'vue-router';
const router = useRouter();
import { useAuthStore } from '../../../stores/authStore';
const authStore = useAuthStore();
import { ref, reactive, onMounted, render } from "vue";

function travelerDetails() {
    $("#addones-service").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Addons_Services_Inactive.svg');
    $("#travelerDetails").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Traveler_Details.svg');
    $("#coupon-offers").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Coupon_Offers_Inactive.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Review_Payment_Inactive.svg');

    $("#traveller-details").removeClass("d-none");
    $("#addones-sevice-details").addClass("d-none");

}
function addonesSevice() {
    $("#addones-service").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Addons_Service.svg');
    $("#travelerDetails").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Traveler_Details_Inactive.svg');
    $("#coupon-offers").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Coupon_Offers_Inactive.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Review_Payment_Inactive.svg');

    $("#addones-sevice-details").removeClass("d-none");
    $("#traveller-details").addClass("d-none");
}

function couponOffers() {
    $("#addones-service").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Addons_Services_Inactive.svg');
    $("#coupon-offers").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Coupon_Offers.svg');
    $("#travelerDetails").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Traveler_Details_Inactive.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Review_Payment_Inactive.svg');
}

function reviewPayment() {
    $("#travelerDetails").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Traveler_Details_Inactive.svg');
    $("#addones-service").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Addons_Services_Inactive.svg');
    $("#coupon-offers").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Coupon_Offers_Inactive.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Review_Payment.svg');
}
</script>
<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">

        <div class="breadcrumb-title pe-3"> Flight Management</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">Flight Management</li>
                    <li class="breadcrumb-item active" aria-current="page">Search</li>
                    <li class="breadcrumb-item active" aria-current="page">Traveller Info</li>
                </ol>
            </nav>
        </div>
        <!-- <div class="ms-auto">

        </div> -->
    </div>

    <div class="row">
        <div class="col-12 col-md-12 com-sm-12">
            <div class="card m-0">
                <div class="row shadow-none rounded rounded-2 p-3 pb-0">
                    <div class="col-md-7">
                        <div class="d-flex flex-column bd-highlight">
                            <!-- part 1 -->
                            <div class="d-flex flex-row bd-highlight mb-2">
                                <div class="bd-highlight pe-1">
                                    <b><span style="font-size: 15px;">DAC-DXB</span></b>
                                </div>
                                <span style="margin-top: 1px;"><b>|</b></span>
                                <div class="bd-highlight ps-1">
                                    <b><span style="font-size: 15px;">DXB-DAC</span></b>
                                </div>
                            </div>
                            <!-- end of part 1 -->

                            <!-- part 2 -->
                            <div class="d-flex flex-row bd-highlight">
                                <div class="bd-highlight pe-1">
                                    <i class="fa fa-calendar-alt" style="color: #bfc3c9;"></i>
                                    <span class="booking-top-card-text">

                                        Departure: 20 June,2025 - Arrival: 20 July,2025
                                    </span>
                                </div>

                                <span>|</span>

                                <div class="bd-highlight ps-1">
                                    <i class="fa-solid fa-plane-up" style="color: #bfc3c9;"></i>
                                    <span class="booking-top-card-text">
                                        Round Way
                                    </span>

                                </div>

                                <span>|</span>

                                <div class="bd-highlight ps-1">
                                    <i class="fa-solid fa-seat-airline" style="color: #bfc3c9;"></i>
                                    <span class="booking-top-card-text">
                                        Economy
                                    </span>
                                </div>

                                <span>|</span>
                                <div class="bd-highlight ps-1">
                                    <i class="fa fa-user" style="color: #bfc3c9;"></i>
                                    <span class="booking-top-card-text">
                                        4 Travellers
                                    </span>
                                </div>
                            </div>
                            <!-- end of part 2 -->
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="d-flex flex-row bd-highlight">
                            <div class="pe-1 bd-highlight w-100">
                                <div class="card">
                                    <div class="card-body" style="background-color: #f6f2ff;">
                                        <div
                                            class="d-flex flex-row bd-highlight justify-content-center align-items-center">
                                            <div class="pe-1">Time Remaining</div>
                                            <div class="ps-1 bluesky-departure-text"><b>30 : 00</b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-1 bd-highlight w-75">
                                <div class="card">
                                    <div class="card-body" style="background-color: #f0f7fe;">
                                        <div
                                            class="d-flex flex-row bd-highlight justify-content-center align-items-center">
                                            <div class="pe-1 text-primary">Flight Details</div>
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

    <div class="row position-relative mt-4">
        <div class="col-12 col-md-12 com-sm-12">
            <div class="card m-0">
                <div class="row shadow-none rounded rounded-2 p-3 pb-0">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="bd-highlight">
                                        <img style="cursor:pointer" @click="travelerDetails" id="travelerDetails"
                                            src="../../../../../public/theme/Booking_Steps/Traveler_Details.svg" alt="">
                                    </div>
                                    <div @click="addonesSevice" class="bd-highlight">
                                        <img style="cursor:pointer" class="addones-service-inactive"
                                            id="addones-service"
                                            src="../../../../../public/theme/Booking_Steps/Addons_Services_Inactive.svg"
                                            alt="">
                                    </div>
                                    <div @click="couponOffers" class="bd-highlight">
                                        <img style="cursor:pointer" class="coupon-offers-inactive" id="coupon-offers"
                                            src="../../../../../public/theme/Booking_Steps/Coupon_Offers_Inactive.svg"
                                            alt="">
                                    </div>
                                    <div @click="reviewPayment" class="bd-highlight">
                                        <img style="cursor:pointer" class="review-payment-inactive" id="review-payment"
                                            src="../../../../../public/theme/Booking_Steps/Review_Payment_Inactive.svg"
                                            alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <!-- traveller details -->
                                <div class="card fadeIn" id="traveller-details">
                                    <div class="card-body">
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                        aria-expanded="false" aria-controls="collapseOne">

                                                        <img src="../../../../../public/theme/Booking_Steps/traveller_icon.svg"
                                                            alt="">
                                                        <span class="pt-1 ps-1">Traveller 1: Adult</span>

                                                        <div style="margin-left: 20px;"
                                                            class="badge rounded-pill text-success bg-light-success p-1 px-4">
                                                            Primary Contact</div>
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse"
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample"
                                                    style="">
                                                    <div class="accordion-body">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="mt-2 mb-0 p-2"
                                                                    style="font-size: 13px !important; background-color: rgba(255, 250, 238, 1); border-radius: 5px;">
                                                                    <span
                                                                        class="bluesky-departure-text mobile-chips-text">
                                                                        <i style="color: rgba(240, 180, 27, 1);"
                                                                            class="fa fa-info-circle"></i>
                                                                        <span
                                                                            style="font-size: 12px; color: rgba(119, 95, 35, 1); ">
                                                                            Please fill-up all the information below as
                                                                            same as given in your passport, to avoid
                                                                            complications at immigration
                                                                            proccess.</span>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-lg-12 mt-3">
                                                                <label for="name" class="form-label">Existing
                                                                    Traveller</label>
                                                                <input type="text" class="form-control form-control-sm"
                                                                    id="name" name="name"
                                                                    placeholder="Search with name, phone, email, password">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        <img src="../../../../../public/theme/Booking_Steps/traveller_icon.svg"
                                                            alt="">
                                                        <span class="pt-1 ps-1">Traveller 2: Adult</span>


                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse"
                                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        test
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingThree">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        <img src="../../../../../public/theme/Booking_Steps/traveller_icon.svg"
                                                            alt="">
                                                        <span class="pt-1 ps-1">Traveller 3: Adult</span>
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse"
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body"> test
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end of traveller details -->


                                <!-- add on services -->
                                <div class="card d-none fadeIn" id="addones-sevice-details">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="card">
                                                    <div class="card-header p-0 m-0">
                                                        <h5 class="ps-2 pt-1">Hello</h5>
                                                    </div>
                                                    <div class="card-body">

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="card">
                                                    <div class="card-header p-0 m-0">
                                                        <h5 class="ps-2 pt-1">Hello</h5>
                                                    </div>
                                                    <div class="card-body">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- end of add on services -->


                            </div>
                        </div>
                    </div>
                    <div class="col-md-3" style="background-color: rgb(244, 244, 255);">
                        <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header rounded" id="flush-headingOne"><button
                                        class="accordion-button m-0 p-0 px-3 py-2 collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-fare-summary"
                                        aria-expanded="false" aria-controls="flush-fare-summary"> Fare Summary </button>
                                </h2>
                                <div id="flush-fare-summary" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="border fare-summary-bg p-1 rounded-1 mb-1"><span
                                                        class="custom-text-purple"> Base Fare </span></div>
                                                <div class="table-responsive">
                                                    <table class="table table-sm table-striped">
                                                        <tbody class="text-start">
                                                            <tr>
                                                                <td>Adults: 2x৳30000 </td>
                                                                <td> ৳60000 </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Childs: 2x৳20000 </td>
                                                                <td> ৳40000 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="border fare-summary-bg p-1 rounded-1 mb-1"><span
                                                        class="custom-text-purple"> TAX </span></div>
                                                <div class="table-responsive">
                                                    <table class="table table-sm table-striped">
                                                        <tbody class="text-start">
                                                            <tr>
                                                                <td>Adults: 2x৳5000</td>
                                                                <td> ৳10000 </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Childs: 2x৳2000</td>
                                                                <td> ৳4000 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="border fare-summary-bg p-1 rounded-1 mb-1"><span
                                                        class="custom-text-purple"> AIT </span></div>
                                                <div class="table-responsive">
                                                    <table class="table table-sm table-striped">
                                                        <tbody class="text-start">
                                                            <tr>
                                                                <td>Adults: 2x৳1275</td>
                                                                <td> ৳2550 </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Childs: 2x৳870</td>
                                                                <td> ৳1740 </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="border fare-summary-bg p-1 rounded-1 mb-1"><span
                                                        class="custom-text-purple"> Service Charge </span></div>
                                                <div class="table-responsive">
                                                    <table class="table table-sm table-striped">
                                                        <tbody class="text-start">
                                                            <tr>
                                                                <td>Adults: 2x৳1275</td>
                                                                <td> ৳2550 </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Childs: 2x৳870</td>
                                                                <td> ৳1740 </td>
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
                                <h2 class="accordion-header" id="flush-headingTwo"><button
                                        class="accordion-button m-0 p-0 px-3 py-2 collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false" aria-controls="flush-collapseTwo"> Baggadge Information
                                    </button></h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-sm">
                                                        <tbody class="text-start">
                                                            <tr>
                                                                <td style="font-size: 11px;">
                                                                    <b>DAC-BDX</b><br><small>Adult</small></td>
                                                                <td style="font-size: 11px;"><b>Economy</b><br><small>10
                                                                        Kg</small></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size: 11px;">
                                                                    <b>DAC-BDX</b><br><small>Child</small></td>
                                                                <td style="font-size: 11px;"><b>Economy</b><br><small>10
                                                                        Kg</small></td>
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

</template>

<style>
.booking-top-card-text {
    color: rgba(94, 104, 120, 1);
}

.addones-service-inactive {
    position: absolute;
    left: 208px;
    top: 16px;
    z-index: 16;
}

.coupon-offers-inactive {
    position: absolute;
    left: 422px;
    top: 16px;
    z-index: 16;
}

.review-payment-inactive {
    position: absolute;
    left: 633px;
    top: 16px;
    z-index: 16;
}
</style>
