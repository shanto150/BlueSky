<script setup>
import { useAuthStore } from "../../../stores/authStore";
import axiosInstance from "../../../axiosInstance"
import { ref, onMounted, reactive } from "vue";

const authStore = useAuthStore();
const props = defineProps(['id'])

getAreaData(props);

async function getAreaData(props) {

    try {
        const response = await axiosInstance.post('editArea', { 'id': props });

        const name = response.data[0].name;
        const division_id = response.data[0].division_id;
        const district_id = response.data[0].district_id;
        const status = response.data[0].status;

    } catch (error) {
        // console.log(error);

    }
}

</script>
<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Setting</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>

                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'zoneList' }">Area List</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Edit Area</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Edit Area</h5>
        </div>

        <form id="addZoneform">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <label for="input1" class="form-label">Area Name</label>
                        <input type="text" v-model="name" class="form-control form-control-sm" id="area_name" name="area_name"
                            placeholder="Enter Name">
                    </div>

                    <div class="col-md-6">
                        <label for="input1" class="form-label">Division</label>
                        <select id="division_id" name="division_name"
                            class="form-control form-control-sm single-select-fields division_name">
                        </select>
                    </div>

                    <div class="col-md-6 mt-2">
                        <label for="input1" class="form-label ">District</label>
                        <select id="district_id" name="district_name"
                            class="form-control form-control-sm single-select-field district_name">

                        </select>
                    </div>

                    <div class="col-md-6 mt-2">
                        <label for="input1" class="form-label">Status</label>
                        <select id="status" name="status" class="form-control form-control-sm">
                            <option selected value="">Choose...</option>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white">Save</button>
                <button class="m-2 btn btn-sm btn-danger px-4 ms-2  float-end">Back</button>
            </div>
        </form>
    </div>
</template>
