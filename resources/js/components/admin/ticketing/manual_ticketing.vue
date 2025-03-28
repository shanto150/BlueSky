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

function flightDetails() {
    $("#flightDetails").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Flight Details_active.svg');
    $("#travellerInfos").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Traveler_info_Inactive.svg');
    $("#fare_info").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Fare_Info_Inactive.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Review&Confirm_Inactive.svg');


    $("#traveller-details").removeClass("d-none");
    $("#addones-sevice-details").addClass("d-none");
    $("#coupon-offer-details").addClass("d-none");
    $("#review-payment-details").addClass("d-none");

}
function travelerInfo() {
    $("#flightDetails").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Flight Details_Inactive.svg');
    $("#travellerInfos").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Traveler_info_active.svg');
    $("#fare_info").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Fare_Info_Inactive.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Review&Confirm_Inactive.svg');


    $("#addones-sevice-details").removeClass("d-none");
    $("#traveller-details").addClass("d-none");
    $("#coupon-offer-details").addClass("d-none");
    $("#review-payment-details").addClass("d-none");

}

function couponOffers() {
    $("#flightDetails").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Flight Details_Inactive.svg');
    $("#travellerInfos").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Traveler_info_Inactive.svg');
    $("#fare_info").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Fare_Info_active.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Review&Confirm_Inactive.svg');


    $("#coupon-offer-details").removeClass("d-none");
    $("#addones-sevice-details").addClass("d-none");
    $("#traveller-details").addClass("d-none");
    $("#review-payment-details").addClass("d-none");

}

function reviewPayment() {
    $("#flightDetails").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Flight Details_Inactive.svg');
    $("#travellerInfos").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Traveler_info_Inactive.svg');
    $("#fare_info").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Fare_Info_Inactive.svg');
    $("#review-payment").attr('src', 'http://[::1]:5173/public/theme/Manual_Ticketing/Review&Confirm_active.svg');

    $("#review-payment-details").removeClass("d-none");
    $("#coupon-offer-details").addClass("d-none");
    $("#addones-sevice-details").addClass("d-none");
    $("#traveller-details").addClass("d-none");
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
                    <!-- <li class="breadcrumb-item" aria-current="page">
                        <router-link :to="{ name: 'bookingList' }">Flight Management</router-link>
                    </li> -->
                    <li class="breadcrumb-item active" aria-current="page">

                        <router-link :to="{ name: 'bookingList' }">Booking & Ticketing List</router-link>

                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Manual Ticketing
                    </li>

                </ol>
            </nav>
        </div>
        <div class="ms-auto">
            <div class="btn-group">
                <router-link :to="{ name: 'CreateAgency' }" class="btn btn-outline-primary btn-sm pt-2">
                    <i class="fa fa-file-import"></i> Import PNR
                </router-link>
                &nbsp;
                <router-link :to="{ name: 'manualticketing' }" class="btn btn-primary btn-sm">
                    <i class="fa fa-circle-plus"></i> Manual Ticketing
                </router-link>
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
                                        <img style="cursor:pointer" @click="flightDetails" id="flightDetails"
                                            src="../../../../../public/theme/Manual_Ticketing/Flight Details_active.svg" alt="">
                                    </div>
                                    <div @click="travelerInfo" class="bd-highlight">
                                        <img style="cursor:pointer" class="travellerInfos-inactive"
                                            id="travellerInfos"
                                            src="../../../../../public/theme/Manual_Ticketing/Traveler_info_Inactive.svg"
                                            alt="">
                                    </div>
                                    <div @click="couponOffers" class="bd-highlight">
                                        <img style="cursor:pointer" class="fare_info-inactive" id="fare_info"
                                            src="../../../../../public/theme/Manual_Ticketing/Fare_Info_Inactive.svg"
                                            alt="">
                                    </div>
                                    <div @click="reviewPayment" class="bd-highlight">
                                        <img style="cursor:pointer" class="review-payment-inactive" id="review-payment"
                                            src="../../../../../public/theme/Manual_Ticketing/Review&Confirm_Inactive.svg"
                                            alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <!-- flight details -->
                                <div class="card fadeIn" id="traveller-details">
                                    <div class="card-body">
                                        Flight details
                                    </div>
                                    <div class="card-footer">
                                        <div class="d-block">
                                            <!-- <button @click="addAddOnServices()" class="w3-button w3-dark-gray w3-round w3-medium float-left">Back</button> -->
                                            <button type="button" @click="travelerInfo"
                                                class="w3-button w3-blue-sky-purple w3-round w3-medium float-end">Continue</button>
                                        </div>
                                    </div>
                                </div>
                                <!-- end of flight details -->


                                <!-- traveler informations -->
                                <div class="card d-none fadeIn" id="addones-sevice-details">
                                    <div class="card-body">
                                        traveler info
                                    </div>
                                    <div class="card-footer">
                                        <div class="d-block">
                                            <button @click="flightDetails" class="w3-button w3-dark-gray w3-round w3-medium float-left">Back</button>
                                            <button type="button" @click="couponOffers"
                                                class="w3-button w3-blue-sky-purple w3-round w3-medium float-end">Continue</button>
                                        </div>
                                    </div>
                                </div>
                                <!-- end of traveler informations -->

                                <!-- coupon offers -->
                                <div class="card d-none fadeIn" id="coupon-offer-details">
                                    <div class="card-header">
                                        <span style="font-size: 16px;">
                                            Fare & payment
                                        </span>
                                    </div>
                                    <div class="card-body" style="min-height: 280px;">
                                        <div class="row">
                                            Fare & payment
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <div class="d-block">
                                            <button @click="couponOffers" class="w3-button w3-dark-gray w3-round w3-medium float-left">Back</button>
                                            <button type="button" @click="reviewPayment" class="w3-button w3-blue-sky-purple w3-round w3-medium float-end">Continue</button>
                                        </div>
                                    </div>
                                </div>
                                <!-- end coupon offers -->

                                <!--review payment details -->
                                <div class="card d-none fadeIn" id="review-payment-details">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <span style="font-size: 16px;">
                                                        <i class="fa-solid fa-ticket-perforated"
                                                            style="color: #7239ea;"></i>
                                                        Review
                                                    </span>
                                                </div>
                                                <div class="card-body">
                                                    review and confirm
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-footer">
                                        <div class="d-block">
                                            <button @click="couponOffers" class="w3-button w3-dark-gray w3-round w3-medium float-left">Back</button>
                                            <button type="button"
                                                class="w3-button w3-blue-sky-purple w3-round w3-medium float-end">Confirm Booking</button>
                                        </div>
                                    </div>
                                </div>
                                <!-- end review payment details -->
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.booking-top-card-text {
    color: rgba(94, 104, 120, 1);
}

.travellerInfos-inactive {
    position: absolute;
    left: 210px;
    top: 16px;
    z-index: 16;
}

.fare_info-inactive {
    position: absolute;
    left: 430px;
    top: 16px;
    z-index: 16;
}

.review-payment-inactive {
    position: absolute;
    left: 648px;
    top: 16px;
    z-index: 16;
}
.w3-blue-sky-purple {
    color: #fff !important;
    background-color: #7239ea;
}

</style>
