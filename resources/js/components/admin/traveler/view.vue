<script setup>
import { useAuthStore } from "../../../stores/authStore";
import axiosInstance from "../../../axiosInstance";
import { ref, onMounted, reactive } from "vue";
import moment from "moment";


</script>
<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Traveller Management</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>

                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'TravelerList' }">Traveller Management</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">View Traveller</li>

                </ol>
            </nav>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                        <!-- <img v-if="previewImage" :src="previewImage" height="60" width="60"
                            class="border border-1 rounded rounded-2" alt="Profile Picture"> -->
                        <img src="../../../../../public/theme/appimages/Plane_origin.svg" height="60"
                            width="60" class="border border-1 rounded rounded-2" alt="Profile Picture">
                        <div class="mt-3">
                            <span><b>Mr. John Doe</b></span>
                            <br>
                            <small>12-Jan-1992</small>
                            <br>
                            <small class="text-blue">Male | Adult</small>
                        </div>
                    </div>
                    <!-- <hr class="my-3"> -->
                    <hr class="my-2">
                    <ul class="list-group list-group-flush">
                        <!-- <span id="traveler_images"></span> -->
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap"><h6 style="font-size: 14px;" class="mb-0">Passport </h6><span class="text-secondary"><img height="50" width="50" src="../../../themeassets/images/gallery/04.png" alt=""></span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="row">
                <div class="col-md-12">
                    <div class="card" style="">
                        <div class="card-header">
                            <h5 class="m-0 p-0"> &nbsp; Traveller Information</h5>
                        </div>
                        <div class="card-body" style="min-height: 480px;">
                            <table class="table table-bordered table-sm table-responsive">
                                <tbody>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Passport No:</b></label>
                                            <p class="m-0">BD455A7788</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Expiry Date:</b></label>
                                            <p class="m-0">12-Dec-2026</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Nationality:</b></label>
                                            <p class="m-0">Bangladeshi</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Email:</b></label>
                                            <p class="m-0">xyz@xyz.com</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Phone:</b></label>
                                            <p class="m-0">0181xxxxx</p>
                                        </td>
                                        <td class="m-0 pl-2" width="50%">
                                            <label for=""><b>Total Usage & Ticketed:</b></label>
                                            <p class="m-0">৳ 445670 | <i class="fa fa-ticket text-blue"></i> 40</p>
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
</template>
