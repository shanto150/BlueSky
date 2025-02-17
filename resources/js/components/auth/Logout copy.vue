<template>
    <div class="d-flex justify-content-center align-items-center w100">
        <span class="fw-bolder fs-4">Logout</span>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
import { useAuthStore } from '../../stores/authStore';
const authStore = useAuthStore();

LogOutLaravel();

function LogOutLaravel() {

    const tkn = authStore.decryptWithAES(authStore.token);

    authStore.logout();
    router.push({ name: 'Login' });

    const config = {
        headers: { Authorization: 'Bearer ' + tkn, "Accept": "application/json", }
    };

    axios.get('/api/logout', config
    ).then(
        res => {
            console.log(res.data);
            Notification.showToast("w", res.data.message);

        }
    ).catch((eEes) => {
        console.log(eEes.data);
        // ErrorCatch.CatchError(eEes);
    }
    );

}
</script>

<style scoped>
.w100 {
    height: 50vh;
    margin: 0;
}
</style>
