<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import { useAuthStore } from '../../stores/authStore';
const authStore = useAuthStore();


</script>
<template>
    <div class="d-flex justify-content-center align-items-center w100">
        <div class="fw-bolder fs-4">
            <!-- Home -->
        </div>
        <div>
            <button v-wave type="button" class="btn btn-outline-success btn-lg">Home tes</button>
        </div>
    </div>
</template>

<style scoped>
.w100 {
    height: 50vh;
    margin: 0;
}
</style>
