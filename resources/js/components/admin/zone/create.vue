<script setup>
import { useAuthStore } from "../../../stores/authStore";
import axiosInstance from "../../../axiosInstance"
import { ref, onMounted } from "vue";
const authStore = useAuthStore();

// it will load everytime page open
getDivision();

async function getDivision() {
    try {
        const response = await axiosInstance.get('divisions');
        console.log(response.data);

        var makes = [];
        $.each(response.data, function (key, value) {
            var obj = { id: value.id, text: value.name }
            makes.push(obj);
        });

        let select = $("#division_id")
        select.select2({
            placeholder: 'Select',
            theme: 'bootstrap-5',
            width: '100%',
            data: makes,
            allowClear: true,
            height: '50',
        });

    } catch (error) {
        console.log(error);

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
                    <li class="breadcrumb-item active" aria-current="page">Create New Area</li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Create New Area</h5>
        </div>
        <div class="card-body">
            <form>
                <div class="row">
                    <div class="col-md-6">
                        <label for="input1" class="form-label">Area Name</label>
                        <input type="text" class="form-control form-control-sm" id="area_name" name="area_name"
                            placeholder="Enter Name">
                    </div>

                    <div class="col-md-6">
                        <label for="input1" class="form-label">Division</label>
                        <select id="division_id" name="division_id"
                            class="form-control form-control-sm single-select-fields">

                        </select>
                    </div>

                    <div class="col-md-6 mt-2">
                        <label for="input1" class="form-label">District</label>
                        <select id="district_id" name="district_id"
                            class="form-control form-control-sm single-select-field">

                        </select>
                    </div>

                    <div class="col-md-6 mt-2">
                        <label for="input1" class="form-label">Status</label>
                        <select id="status" name="status" class="form-control form-control-sm">
                            <option selected value="">Choose...</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
        <div class="card-footer">
            <button class="btn btn-sm btn-info px-4 ms-2 float-end text-white">Save</button>
            <button class="btn btn-sm btn-danger px-4 ms-2  float-end">Back</button>
        </div>
    </div>
</template>
