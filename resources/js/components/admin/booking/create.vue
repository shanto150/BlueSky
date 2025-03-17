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

function travelerDetails(){
    $("#addones-service").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Addons_Services_Inactive.svg');
    $("#travelerDetails").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Traveler_Details.svg');
    $("#coupon-offers").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Coupon_Offers_Inactive.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Review_Payment_Inactive.svg');

}
function addonesSevice() {
    $("#addones-service").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Addons_Service.svg');
    $("#travelerDetails").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Traveler_Details_Inactive.svg');
    $("#coupon-offers").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Coupon_Offers_Inactive.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Review_Payment_Inactive.svg');

}

function couponOffers() {
    $("#addones-service").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Addons_Services_Inactive.svg');
    $("#coupon-offers").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Coupon_Offers.svg');
    $("#travelerDetails").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Traveler_Details_Inactive.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Booking_Steps/Review_Payment_Inactive.svg');
}

function reviewPayment(){
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
                                <span><b>|</b></span>
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
                        <div class="d-flex flex-row bd-highlight ">
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
                                        <img @click="travelerDetails" id="travelerDetails" src="../../../../../public/theme/Booking_Steps/Traveler_Details.svg"
                                            alt="">
                                    </div>
                                    <div @click="addonesSevice" class="bd-highlight" >
                                        <img class="addones-service-inactive" id="addones-service"
                                            src="../../../../../public/theme/Booking_Steps/Addons_Services_Inactive.svg"
                                            alt="">
                                    </div>
                                    <div @click="couponOffers" class="bd-highlight">
                                        <img class="coupon-offers-inactive" id="coupon-offers"
                                            src="../../../../../public/theme/Booking_Steps/Coupon_Offers_Inactive.svg"
                                            alt="">
                                    </div>
                                    <div @click="reviewPayment" class="bd-highlight">
                                        <img class="review-payment-inactive" id="review-payment"
                                            src="../../../../../public/theme/Booking_Steps/Review_Payment_Inactive.svg"
                                            alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="card traveller-details">
                                    <div class="card-body">
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                        <i class="fa fa-user"></i> &nbsp; Traveller 1: Adult
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse"
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample"
                                                    style="">
                                                    <div class="accordion-body"> <strong>This is the first item's
                                                            accordion body.</strong> It is hidden by default, until the
                                                        collapse plugin adds the appropriate classes that we use to
                                                        style each element. These classes control the overall
                                                        appearance, as well as the showing and hiding via CSS
                                                        transitions. You can modify any of this with custom CSS or
                                                        overriding our default variables. It's also worth noting that
                                                        just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        <i class="fa fa-user"></i> &nbsp; Traveller 2: Adult
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse"
                                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body"> <strong>This is the second item's
                                                            accordion body.</strong> It is hidden by default, until the
                                                        collapse plugin adds the appropriate classes that we use to
                                                        style each element. These classes control the overall
                                                        appearance, as well as the showing and hiding via CSS
                                                        transitions. You can modify any of this with custom CSS or
                                                        overriding our default variables. It's also worth noting that
                                                        just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingThree">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        <i class="fa fa-user"></i> &nbsp; Traveller 3: Adult
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse"
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body"> <strong>This is the third item's
                                                            accordion body.</strong> It is hidden by default, until the
                                                        collapse plugin adds the appropriate classes that we use to
                                                        style each element. These classes control the overall
                                                        appearance, as well as the showing and hiding via CSS
                                                        transitions. You can modify any of this with custom CSS or
                                                        overriding our default variables. It's also worth noting that
                                                        just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3"></div>
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
    left: 210px;
    top: 16px;
    z-index: 16;
}

.coupon-offers-inactive {
    position: absolute;
    left: 421px;
    top: 16px;
    z-index: 16;
}

.review-payment-inactive {
    position: absolute;
    left: 631px;
    top: 16px;
    z-index: 16;
}
</style>
