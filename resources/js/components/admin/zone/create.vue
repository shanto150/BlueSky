<script setup>
import { useAuthStore } from "../../../stores/authStore";
import { ref,onMounted } from "vue";
const authStore = useAuthStore();

const divisions=ref('');
handleSubmit();

function handleSubmit() {
    const config = {
        headers: { Authorization: 'Bearer ' + authStore.decryptWithAES(authStore.token), "Accept": "application/json", }
    };
    axios.get("/api/divisions", config)
        .then((res) => {


            // divisions = res.data.data;
            console.log(res.data.data);


        })
        .catch((eEes) => {

        });
};

onMounted(() => {

    let select = $(".single-select-field")
    select.select2({
        placeholder: 'Select',
        theme: 'bootstrap-5',
        width: '100%',
        allowClear: true,
        height: '50'
    });

})
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
                            class="form-control form-control-sm single-select-field">
                            <option selected value="">Choose...</option>
                            <option :value="division.id" v-for="division in divisions" :key="division.id">{{
                                division.name }}a</option>
                        </select>
                    </div>
                    <div class="col-md-6 mt-2">
                        <label for="input1" class="form-label">District</label>
                        <select id="district_id" name="district_id"
                            class="form-control form-control-sm single-select-field">
                            <option selected value="">Choose...</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
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
