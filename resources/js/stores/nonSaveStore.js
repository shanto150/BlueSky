import { defineStore } from 'pinia'
import { ref } from "vue";


export const useNonSaveStore = defineStore('NonSave', () => {

    const timer = ref();
    const showExpireWarrning = ref(0);
    var lopfun='';

    function runTaskWithTimer(ProvideTimeSecends) {

        lopfun = setInterval(() => {
            timer.value=ProvideTimeSecends--;

            if (ProvideTimeSecends<55) {
                showExpireWarrning.value=1;
            }

            if (ProvideTimeSecends <= 0) {
                clearInterval(lopfun);
            }

        }, 1000);
    }

    function resetNonSaveStore() {
        timer.value=0;
        showExpireWarrning.value=0;
        clearInterval(lopfun);
    }


    return { showExpireWarrning,timer,runTaskWithTimer,resetNonSaveStore}
})
