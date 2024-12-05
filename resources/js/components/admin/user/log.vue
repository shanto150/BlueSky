<script setup>
import { useAuthStore } from "../../../stores/authStore";
import axiosInstance from "../../../axiosInstance";
import { ref, onMounted, reactive } from "vue";
const props = defineProps(['id']);
const authStore = useAuthStore();
const previewImage = ref('');

getUserData(props);

async function getUserData(props) {
    try {
        const response = await axiosInstance.post('editUser', { 'id': props });
        previewImage.value = response.data[0].img_path;
        console.log(response.data[0].img_path);

        const designation_id = response.data[0].designation_id;
        $('#desg_id').val(designation_id);
        $('#desg_id').trigger('change');

        const name = response.data[0].name;
        $("#name").html(name);

        const emp_id = response.data[0].emp_id;
        $("#staff_id").html(emp_id);

        const phone = response.data[0].phone;
        $('#phone').val(phone);

    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">User Managemnet</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'UserList' }">User List</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Activity Log</li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Activity Log</h5>
        </div>


        <div class="card-body">
            <div class="row">
                <div class="col-md-2">
                    <div class="text-center">
                        <img class="border-top border-warning rounded" v-if="previewImage" height="140" width="140"
                            :src='previewImage' alt="profile_image">
                        <br>
                        <span id="name" class="fw-bold"></span>
                        <br>
                        <span id="staff_id" class="fw-bold"></span>

                    </div>
                </div>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row mb-3">
                                <div class="col-md-5 m-0 p-0">
                                    <hr>
                                    </hr>
                                </div>
                                <div class="col-md-2 m-0 p-0 btn btn-outline-primary btn-sm pt-1 px-4 radius-30">
                                    Today
                                </div>
                                <div class="col-md-5 m-0 p-0">
                                    <hr>
                                    </hr>
                                </div>
                            </div>

                            <div class="timeline">
                                <div class="tl-content">
                                    <div class="tl-header">
                                        <span class="tl-marker"></span>
                                        <small class="tl-title">
                                            Created new role permission <strong>Sales</strong></small>

                                        <p>
                                            <i class="fa fa-circle" style="font-size: 10px;color: #05cc61;"></i>
                                            <time class="tl-time" datetime="2023-06-20">
                                                June 20, 2024
                                                <i class="fa fa-map-marker" aria-hidden="true"
                                                    style="font-size: 10px;color: #763fe7;"></i> 128.0.0.0
                                            </time>

                                        </p>
                                    </div>

                                </div>
                                <div class="tl-content">
                                    <div class="tl-header">
                                        <span class="tl-marker"></span>
                                        <small class="tl-title">
                                            Created new user </small>

                                        <p>
                                            <i class="fa fa-circle" style="font-size: 10px;color: #05cc61;"></i>
                                            <time class="tl-time" datetime="2023-06-20">
                                                June 20, 2024
                                                <i class="fa fa-map-marker" aria-hidden="true"
                                                    style="font-size: 10px;color: #763fe7;"></i> 128.0.0.0
                                            </time>

                                        </p>
                                    </div>

                                </div>
                                <div class="tl-content">
                                    <div class="tl-header">
                                        <span class="tl-marker"></span>
                                        <small class="tl-title">
                                            Created new user </small>

                                        <p>
                                            <i class="fa fa-circle" style="font-size: 10px;color: #05cc61;"></i>
                                            <time class="tl-time" datetime="2023-06-20">
                                                June 20, 2024
                                                <i class="fa fa-map-marker" aria-hidden="true"
                                                    style="font-size: 10px;color: #763fe7;"></i> 128.0.0.0
                                            </time>

                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row mb-3">
                                <div class="col-md-5 m-0 p-0">
                                    <hr>
                                    </hr>
                                </div>
                                <div class="col-md-2 m-0 p-0 btn btn-outline-primary btn-sm pt-1 px-4 radius-30">
                                    Yesterday
                                </div>
                                <div class="col-md-5 m-0 p-0">
                                    <hr>
                                    </hr>
                                </div>
                            </div>

                            <div class="timeline">
                                <div class="tl-content">
                                    <div class="tl-header">
                                        <span class="tl-marker"></span>
                                        <small class="tl-title">
                                            Created new role permission <strong>Sales</strong></small>

                                        <p>
                                            <i class="fa fa-circle" style="font-size: 10px;color: #05cc61;"></i>
                                            <time class="tl-time" datetime="2023-06-20">
                                                June 20, 2024
                                                <i class="fa fa-map-marker" aria-hidden="true"
                                                    style="font-size: 10px;color: #763fe7;"></i> 128.0.0.0
                                            </time>

                                        </p>
                                    </div>

                                </div>
                                <div class="tl-content">
                                    <div class="tl-header">
                                        <span class="tl-marker"></span>
                                        <small class="tl-title">
                                            Created new user </small>

                                        <p>
                                            <i class="fa fa-circle" style="font-size: 10px;color: #05cc61;"></i>
                                            <time class="tl-time" datetime="2023-06-20">
                                                June 20, 2024
                                                <i class="fa fa-map-marker" aria-hidden="true"
                                                    style="font-size: 10px;color: #763fe7;"></i> 128.0.0.0
                                            </time>

                                        </p>
                                    </div>

                                </div>
                                <div class="tl-content">
                                    <div class="tl-header">
                                        <span class="tl-marker"></span>
                                        <small class="tl-title">
                                            Created new user </small>

                                        <p>
                                            <i class="fa fa-circle" style="font-size: 10px;color: #05cc61;"></i>
                                            <time class="tl-time" datetime="2023-06-20">
                                                June 20, 2024
                                                <i class="fa fa-map-marker" aria-hidden="true"
                                                    style="font-size: 10px;color: #763fe7;"></i> 128.0.0.0
                                            </time>

                                        </p>
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
.timeline {
    padding: 10px 0px 0px 10px;
}

.tl-content .tl-header,
.tl-content .tl-body {
    padding-left: 10.6px;
    border-left: 1px solid gainsboro;
}

.tl-body {
    padding-bottom: 1rem;
}

.tl-content:last-child .tl-body {
    border-left: 3px solid transparent;
}

.tl-header {
    position: relative;
    display: grid;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.tl-title {
    color: #008cff;
    font-weight: 300;
    font-size: 12px;
    margin-top: -24px;
}

.tl-time {
    font-size: 0.7em;
}

.tl-marker {
    content: "";
    background: url('https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png');
    /* background: gainsboro; */
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50% / 50%;
    left: -1rem;
    transform: translate(50%, -50%);
}
</style>
