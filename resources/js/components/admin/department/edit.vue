<script setup>
import { useAuthStore } from "../../../stores/authStore";
import axiosInstance from "../../../axiosInstance"
import { ref, onMounted, reactive } from "vue";

const authStore = useAuthStore();
const props = defineProps(['id'])

const form = reactive({ dept_name: "", dept_id: '', status_val: "", useEmail: authStore.email });

async function update(props) {

    form.dept_id = props.id;

    try {
        const response = await axiosInstance.post("/dept/update", form);

            Notification.showToast('s', response.data.message);

    } catch (error) {
        ErrorCatch.CatchError(error);
    }
}

getDeptData(props);

async function getDeptData(props) {
    try {
        const response = await axiosInstance.post('editDept', { 'id': props });
        const name = response.data[0].name;
        $("#dept_name").val(name);
        const status = response.data[0].status;
        $('#status').val(status);
        $('#status').trigger('change');

    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {

    $("#status").on('change', function () {
        form.status_val = $(this).val();
    });
});

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
                    <li class="breadcrumb-item active" aria-current="page">Edit Department</li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h5 class="m-0 p-0" style="border-left:5px solid #7239ea;"> &nbsp; Edit Department</h5>
        </div>

        <form id="addZoneform">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <label for="input1" class="form-label">Name</label>
                        <input type="text" class="form-control form-control-sm" id="dept_name" name="dept_name"
                            placeholder="Enter Name" v-model="form.dept_name">
                    </div>

                    <div class="col-md-6">
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
                <button type="button" @click="update(props)"
                    class="m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white">Update</button>
                <button class="m-2 btn btn-sm btn-danger px-4 ms-2  float-end">Back</button>
            </div>
        </form>
    </div>
</template>
