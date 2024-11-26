<script setup>
import { useAuthStore } from "../../../stores/authStore";
import axiosInstance from "../../../axiosInstance"
import { ref, onMounted, reactive } from "vue";

const authStore = useAuthStore();
//**** create function start
const form = reactive({ area_name: "", division_id: "", district_id: "", status_val: "", useEmail: authStore.email });

onMounted(() => {
    $('.division_name').on("change", function () {

        form.division_id = $(this).val();
        $('.district_name').empty(); // empty previous data

        getDistrict($(this).val());
    });

    $('.district_name').on("change", function () {
        form.district_id = $(this).val();
    });
});

async function save() {

    try {

        const response = await axiosInstance.post("/zone/save", form);


        document.getElementById("addZoneform").reset();

        $('#division_id option:first').prop('selected', true).trigger(
            "change"); // reset dropdown value
        $('#district_id option:first').prop('selected', true).trigger(
            "change"); // reset dropdown value
        $('#status option:first').prop('selected', true).trigger(
            "change"); // reset dropdown value

        Notification.showToast('s', response.data.message);



    } catch (error) {
        ErrorCatch.CatchError(error);


    }
}

// it will load everytime page open
getDivision();

async function getDivision() {
    try {
        const response = await axiosInstance.get('divisions');

        var options = [];
        $.each(response.data, function (key, value) {
            var obj = { id: value.id, text: value.name }
            options.push(obj);

        });

        let select = $("#division_id")
        select.select2({
            placeholder: '=Select=',
            theme: 'bootstrap-5',
            width: '100%',
            allowClear: true,
            height: '50',
            data: options,
        });


    } catch (error) {
        // console.log(error);

    }
}

async function getDistrict(id) {

    try {
        const response = await axiosInstance.post('districts', { 'id': id });
        // console.log(response.data);

        var getDatas = [];
        $.each(response.data, function (key, value) {
            var obj = { id: value.id, text: value.name }
            getDatas.push(obj);

        });

        let select = $("#district_id")
        select.select2({
            placeholder: '=Select=',
            theme: 'bootstrap-5',
            width: '100%',
            allowClear: true,
            height: '50',
            data: getDatas,
        });


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
                    <li class="breadcrumb-item active" aria-current="page">Create New Area</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Create New Area</h5>
        </div>

        <form id="addZoneform">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <label for="input1" class="form-label">Area Name</label>
                        <input type="text" v-model="form.area_name" class="form-control form-control-sm" id="area_name"
                            name="area_name" placeholder="Enter Name">
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
                            <option value="">==Select==</option>
                        </select>
                    </div>

                    <!-- <div class="col-md-6 mt-2">
                        <label for="input1" class="form-label">Status</label>
                        <select id="status" v-model="form.status_val" name="status"
                            class="form-control form-control-sm">
                            <option value="1" selected>Active</option>
                            <option value="2">Inactive</option>
                        </select>
                    </div> -->
                </div>
            </div>
            <div class="card-footer">
                <button type="button" @click="save()"
                    class="m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white">Save</button>
                <button class="m-2 btn btn-sm btn-danger px-4 ms-2  float-end">Back</button>
            </div>
        </form>
    </div>
</template>
