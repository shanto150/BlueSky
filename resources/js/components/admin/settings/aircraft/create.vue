<script setup>
import { useAuthStore } from "../../../../stores/authStore";
import axiosInstance from "../../../../axiosInstance"
import { ref, onMounted, reactive } from "vue";

const authStore = useAuthStore();
//**** create function start
const form = reactive({ iata_code: "", icao_code: "", model: "", useEmail: authStore.email });

onMounted(() => {

});

async function save() {

    try {

        const response = await axiosInstance.post("/AircraftType/save", form);
        document.getElementById("addAirCraftform").reset();

        Notification.showToast('s', response.data.message);

    } catch (error) {
        ErrorCatch.CatchError(error);
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
                        <router-link :to="{ name: 'aircraftList' }">Aircraft List</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Create New Aircraft</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Create New Aircraft</h5>
        </div>

        <form id="addAirCraftform">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <label for="input1" class="form-label">Aircraft Model</label>
                        <input type="text" v-model="form.model" class="form-control" id="model" name="model"
                            placeholder="Aircraft Model">
                    </div>
                    <div class="col-md-4">
                        <label for="input1" class="form-label">IATA Code</label>
                        <input type="text" v-model="form.iata_code" class="form-control" id="iata_code" name="iata_code"
                            placeholder="IATA Code">
                    </div>
                    <div class="col-md-4">
                        <label for="input1" class="form-label">ICAO Code</label>
                        <input type="text" v-model="form.icao_code" class="form-control" id="icao_code" name="icao_code"
                            placeholder="ICAO Code">
                    </div>

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

