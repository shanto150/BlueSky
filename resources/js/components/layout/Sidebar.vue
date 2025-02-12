<script setup>
import { MetisMenu } from "metismenujs";
import { onMounted } from "vue";

function menuTaggle() {
    $(".wrapper").toggleClass("toggled");
}
onMounted(() => {
    new MetisMenu("#menu");
});
</script>
<template>
    <!-- main script -->
    <div class="sidebar-wrapper">
        <div class="sidebar-header">
            <div>
                <img src="../../../../public/theme/appimages/blueskywings.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text tx">BlueSky</h4>
            </div>
            <div class="mobile-toggle-icon ms-auto" @click="menuTaggle"><i class='bx bx-x'></i>
            </div>
        </div>
        <!--navigation-->
        <Scrollbar height="100%">
            <ul class="metismenu" id="menu">
                <!-- <li class="menu-label">Menu</li> -->

                <li>
                    <a v-wave href="#" class="has-arrow">
                        <div class="parent-icon"><i class="bx bx-home-alt"></i>
                        </div>
                        <div class="menu-title">Dashboard</div>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li>
                            <a v-wave href="#" class="has-arrow"><i class='bx bx-paper-plane'></i>Vertical</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li> <a v-wave href="index.html"><i class='bx bx-paper-plane'></i>Infographic</a>
                                </li>
                                <li> <a v-wave href="index2.html"><i class='bx bx-paper-plane'></i>eCommerce</a>
                                </li>
                                <li> <a v-wave href="index3.html"><i class='bx bx-paper-plane'></i>Analytics</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a v-wave href="#" class="has-arrow"><i class='bx bx-paper-plane'></i>Horizontal</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a v-wave href="layouts-horizontal.html"><i
                                            class='bx bx-paper-plane'></i>Horizontal</a></li>
                                <li><a v-wave href="layouts-hori-topbar-dark.html"><i
                                            class='bx bx-paper-plane'></i>Topbar
                                        Dark</a></li>
                                <li><a v-wave href="layouts-hori-boxed-width.html"><i
                                            class='bx bx-paper-plane'></i>Boxed
                                        Width</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <a v-wave class="has-arrow" href="javascript:;">
                        <div class="parent-icon">

                            <img src="../../../../public/theme/appimages/flight_management.svg" alt="">
                        </div>
                        <div class="menu-title">Flight Management</div>
                    </a>
                    <ul>
                        <li>
                            <router-link v-wave :to="{ name: 'flightSearch' }">
                                <i class='bx bx-paper-plane'></i> Search
                            </router-link>
                        </li>
                        <li>
                            <router-link v-wave :to="{ name: 'searchResult' }">
                                <i class='bx bx-paper-plane'></i> Search Result
                            </router-link>
                        </li>

                        <li>
                            <router-link v-wave :to="{ name: 'flightSearch' }">

                                <i class='bx bx-paper-plane'></i> Booking & Ticketing
                            </router-link>
                        </li>
                        <li>
                            <router-link v-wave :to="{ name: 'flightSearch' }">
                                <i class='bx bx-paper-plane'></i> Flight PNR
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <router-link v-wave :to="{ name: 'AgentList' }">
                        <div class="parent-icon"><i class="bx bx-unite"></i>
                        </div>
                        <div class="menu-title">B2B Agents</div>
                    </router-link>
                </li>
                <li>
                    <router-link v-wave :to="{ name: 'depositList' }">
                        <div class="parent-icon"><i class="bx bx-cabinet"></i>
                        </div>
                        <div class="menu-title">Deposits
                        </div>
                    </router-link>
                </li>

                <li>
                    <router-link v-wave :to="{ name: 'UserList' }">
                        <div class="parent-icon"><i class="bx bx-user"></i>
                        </div>
                        <div class="menu-title">Users</div>
                    </router-link>
                </li>


                <li>
                    <a v-wave class="has-arrow" href="javascript:;">
                        <div class="parent-icon"><i class="bx bx-cog"></i>
                        </div>
                        <div class="menu-title">Settings</div>
                    </a>
                    <ul>
                        <li>
                            <router-link v-wave :to="{ name: 'roleList' }">
                                <i class='bx bx-paper-plane'></i> Roles Permission
                            </router-link>
                        </li>

                        <li>
                            <router-link v-wave :to="{ name: 'zoneList' }">
                                <i class='bx bx-paper-plane'></i> Area
                            </router-link>
                        </li>
                        <li>
                            <router-link v-wave :to="{ name: 'designationList' }">
                                <i class='bx bx-paper-plane'></i> Designation
                            </router-link>
                        </li>
                        <li>
                            <router-link v-wave :to="{ name: 'departmentList' }">
                                <i class='bx bx-paper-plane'></i> Department
                            </router-link>
                        </li>

                        <li>
                            <router-link v-wave :to="{ name: 'offLoc' }">
                                <i class='bx bx-paper-plane'></i> Office Location
                            </router-link>
                        </li>

                        <li> <a v-wave class="has-arrow" href="javascript:;"><i
                                    class='bx bx-paper-plane'></i>Flight Management</a>
                            <ul>
                                <router-link v-wave :to="{ name: 'aircraftList' }">
                                    <i class='bx bx-paper-plane'></i> Aircrafts
                                </router-link>
                                <router-link v-wave :to="{ name: 'airlinesList' }">
                                    <i class='bx bx-paper-plane'></i> Airlines
                                </router-link>
                            </ul>
                        </li>

                        <li> <a v-wave class="has-arrow" href="javascript:;"><i
                                    class='bx bx-paper-plane'></i>Deposit</a>
                            <ul>
                                <router-link v-wave :to="{ name: 'paymentacct' }">
                                    <i class='bx bx-paper-plane'></i> Payment Account
                                </router-link>

                                <router-link v-wave :to="{ name: 'issuedBankMFS' }">
                                    <i class='bx bx-paper-plane'></i> Issused Bank & MFS
                                </router-link>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <router-link v-wave :to="{ name: 'Logout' }">
                        <div class="parent-icon"><i class="bx bx-power-off link-danger"></i>
                        </div>
                        <div class="menu-title">Logout</div>
                    </router-link>
                </li>

            </ul>
        </Scrollbar>
    </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Pirata+One|Rubik:900");

@font-face {
    font-family: "cart";
    src: url("../../../../public/fonts/cartagestenciljnl.ttf");
}


.tx {
    text-transform: Uppercase;
    font-family: "cart", sans-serif;
    font-size: 6rem;
    color: #e4e5e6;
    background: linear-gradient(to right, #02b9af, #4e86f4, #9c54f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
