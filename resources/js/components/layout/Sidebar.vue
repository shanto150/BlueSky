<script setup>
import { MetisMenu } from 'metismenujs';
import { onMounted } from 'vue';

function menuTaggle() {
    $(".wrapper").toggleClass("toggled");
}


onMounted(() => {
    new MetisMenu("#menu");
})
</script>
<template>
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
                <li class="menu-label">Menu</li>

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
                <li class="menu-label">UI Elements</li>

                <li>
                    <a v-wave href="#">
                        <div class="parent-icon"><i class="bx bx-layer"></i>
                        </div>
                        <div class="menu-title">Settings</div>
                    </a>
                </li>
                <li>
                    <a v-wave href="#" class="has-arrow">
                        <div class="parent-icon"><i class="bx bx-add-to-queue"></i>
                        </div>
                        <div class="menu-title">Pages</div>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li> <router-link v-wave :to="{ name: 'AgentList' }"><i
                                    class='bx bx-paper-plane'></i>Agents</router-link>
                        </li>
                        <li> <router-link v-wave :to="{ name: 'Agent' }"><i
                                    class='bx bx-paper-plane'></i>Menu</router-link>
                        </li>
                    </ul>
                </li>
                <li class="menu-label">Exit</li>
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
@import url('https://fonts.googleapis.com/css?family=Pirata+One|Rubik:900');

@font-face {
    font-family: "cart";
    src: url('../../../../public/fonts/cartagestenciljnl.ttf');
}

.tx {
    text-transform: Uppercase;
    font-family: 'cart', sans-serif;
    font-size: 6rem;
    color: #E4E5E6;
    background: linear-gradient(to right, #02b9af, #4E86F4, #9c54f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>
