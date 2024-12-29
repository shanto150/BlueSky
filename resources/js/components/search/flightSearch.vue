<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import axiosTravel from "../../axiosTravel";
import axiosInstance from "../../axiosInstance"


const form = reactive({ Way: '', from: '', to: "", dep_date: '', ADT: '', CNN: '', INF: '' });

form.Way = 1;


async function Lowfaresearch() {
    try {
        const response = await axiosInstance.post("Lowfaresearch", form);
        Notification.showToast('s', response.data.message);
    } catch (error) {
        console.log(error);
    }

}


</script>

<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">

        <div class="breadcrumb-title pe-3">Settings</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>
                    </li>

                    <li class="breadcrumb-item active" aria-current="page">Flight Search</li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 border border-1 border-primary m-2 pt-1">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" v-model="form.Way" checked type="radio"
                                    name="inlineRadioOptions" id="inlineRadio1" value="1">
                                <label class="form-check-label" for="inlineRadio1">One Way</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" v-model="form.Way" type="radio"
                                    name="inlineRadioOptions" id="inlineRadio2" value="2">
                                <label class="form-check-label" for="inlineRadio2">Round</label>
                            </div>

                        </div>
                    </div>
                    <div class="row">

                        <div class="col-md-2">
                            <label for="">From</label>
                            <input type="text" v-model="form.from" value="DAC" list="from_countries"
                                class="form-control mt-1 form-control-sm" name="from" placeholder="From">
                            <datalist id="from_countries">
                                <option>DAC</option>
                            </datalist>

                        </div>
                        <div class="col-md-2">
                            <label for="">To</label>
                            <input type="text" value="DXB" list="to_countries" v-model="form.to"
                                class="form-control mt-1 form-control-sm" name="to" placeholder="To">
                            <datalist id="to_countries">
                                <option>DXB</option>
                            </datalist>
                        </div>
                        <div class="col-md-2">
                            <label for="">Date</label>
                            <input type="date" value="2024-12-25" v-model="form.dep_date"
                                class="form-control form-control-sm" name="date" placeholder="Date">
                        </div>

                        <div class="col-md-1">
                            <label for="">Adult</label>
                            <input type="text" v-model="form.ADT" class="form-control form-control-sm" name="adult"
                                placeholder="Adult">
                        </div>
                        <div class="col-md-1">
                            <label for="">Child</label>
                            <input type="text" v-model="form.CNN" class="form-control form-control-sm" name="child"
                                placeholder="Child">
                        </div>
                        <div class="col-md-1">
                            <label for="">infent</label>
                            <input type="text" v-model="form.INF" class="form-control form-control-sm" name="infent"
                                placeholder="infent">
                        </div>

                        <div class="col-md-2 mt-3">
                            <button @click="Lowfaresearch()" class="btn btn-sm btn-danger w-100"><i
                                    class="fa fa-search"></i>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
