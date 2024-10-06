import { useAuthStore } from "../../stores/authStore";
const authStore = useAuthStore();
class ax {
    resHeader() {

        if (User.loggedIn()) {
            const config = {
                headers: { Authorization: 'Bearer ' + authStore.decryptWithAES(authStore.token), "Accept": "application/json", }
            };
            return config;
        }

    };

    CatchError (eEes) {
        if (eEes.response.status == 422) {
            Notification.showToast('e', eEes.response.data.message);
            return;
        } else if (eEes.response.status == 401) {
            Notification.showToast('e', eEes.response.statusText);
            return;
        } else if (eEes.response.status == 500) {
            Notification.showToast('e', eEes.response.data.message);
            return;
        }
        Notification.showToast('e', eEes.response.data.data.error);
    }

}
export default ax = new ax()
