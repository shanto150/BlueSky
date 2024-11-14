<script setup>
import { useAuthStore } from "../../../stores/authStore";
import axiosInstance from "../../../axiosInstance"
import { ref, onMounted, reactive } from "vue";

const authStore = useAuthStore();
//**** create function start
const form = reactive({ dept_name: "", useEmail: authStore.email });


async function save() {

    try {
        const response = await axiosInstance.post("/dept/save", form);
        document.getElementById("addDeptform").reset();
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
                        <router-link :to="{ name: 'departmentList' }">Setings</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'departmentList' }">Department List</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Create New Department</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Create New Department</h5>
        </div>

        <form id="addDeptform">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <label for="input1" class="form-label">Name</label>
                        <input type="text" v-model="form.dept_name" class="form-control form-control-sm" id="dept_name"
                            name="dept_name" placeholder="Enter Name">
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
