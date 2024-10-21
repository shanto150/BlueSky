import { defineStore } from 'pinia'
import { ref } from "vue";
import CryptoJS from 'crypto-js';


export const useAuthStore = defineStore('piniaUserAuth', () => {

    const token = ref('')
    const getRequire_2fa = ref(1)
    const getotp_regisered = ref(0)
    const loginAttapms = ref(0)
    const getotpChecked = ref(0)
    const forcePassChange = ref('')
    const getgoogle2fa_secret = ref('')
    const getgoogle2fa_qr = ref('')
    const email = ref('')
    const name = ref('')

    const timer = ref();
    const ExpireInSec = ref();
    const showExpireWarrning = ref(false);
    const isDarkMode = ref(false);
    const isLogged = ref('0');
    let intervalId = 0;

    const sInfo = ref([]);



    const encryptWithAES = (text) => {
        const passphrase = "MySecPassBlueSky";
        return CryptoJS.AES.encrypt(text, passphrase).toString();
    };

    const decryptWithAES = (ciphertext) => {

        try {
            const passphrase = "MySecPassBlueSky";
            const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
            const originalText = bytes.toString(CryptoJS.enc.Utf8);
            return originalText;
        } catch (error) {
            return error
        }

    };

    function hasToken() {

        if (this.token !== '') {

            const dToken = decryptWithAES(this.token);

            const sToken = dToken.split('.')[1];
            const sURL = JSON.parse(atob(sToken)).iss;

            const isExpired = Date.now() >= JSON.parse(window.atob(sToken)).exp * 1000;
            const isFrmRealURL = sURL == 'http://127.0.0.1:8000/api/login' || 'http://127.0.0.1:8000/api/refresh' ? true : false;

            /********** Multi Verification of Token *************/
            if (isFrmRealURL && !isExpired) {
                return true
            }
            return false

        }

        /********** if Token Blank *************/
        return false
    }

    function logout() {
        clearInterval(intervalId);
        token.value = '';
        name.value = '';
        timer.value = 0;
        ExpireInSec.value = 0;
        getRequire_2fa.value=1;
        getotp_regisered.value=0;
        getotpChecked.value=0;
        getgoogle2fa_qr.value='';
        showExpireWarrning.value = false;
        isLogged.value =encryptWithAES('0');
        getgoogle2fa_secret.value='';
        forcePassChange.value='';
        loginAttapms.value=0;
    }

    function killRunningTask() {
        clearInterval(intervalId);
        timer.value = 0;
        showExpireWarrning.value = false;
    }

    function runTaskWithTimer(ProvideTimeSecends) {

        var afterDeduct = 10;

        intervalId = setInterval(() => {
            timer.value = ProvideTimeSecends--;

            if (ProvideTimeSecends < afterDeduct) {
                showExpireWarrning.value = true;
            }

            if (ProvideTimeSecends < 0) {
                token.value = '';
                name.value = '';
                timer.value = 0;
                ExpireInSec.value = 0;
                showExpireWarrning.value = false;
                isLogged.value = encryptWithAES('1');
                clearInterval(intervalId);
            }

        }, 1000);

    }

    function refreshToken() {
        const config = {
            headers: { Authorization: 'Bearer ' + decryptWithAES(token.value), "Accept": "application/json", }
        };
        axios.get('/api/refresh', config)
            .then(
                res => {
                    killRunningTask();
                    token.value = encryptWithAES(res.data.data.access_token);
                    ExpireInSec.value = res.data.data.expires_in_sec;
                    isLogged.value=encryptWithAES('1');
                    runTaskWithTimer(res.data.data.expires_in_sec);
                    console.log(res.data.data.access_token);
                }
            )
            .catch(eEes => {
                console.log(eEes);
            });
    };

    return { getRequire_2fa,getotp_regisered,getotpChecked,isLogged,
        refreshToken, killRunningTask,ExpireInSec,
        runTaskWithTimer,timer, showExpireWarrning,
        email, token, name, encryptWithAES, decryptWithAES, hasToken, logout,
        getgoogle2fa_secret,getgoogle2fa_qr,loginAttapms,forcePassChange,sInfo,isDarkMode }
}, { persist: true })
