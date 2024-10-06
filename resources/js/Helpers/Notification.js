class Notification {

    showToast(pType, pMess) {
        if (pType.toUpperCase() == 'S'.toUpperCase()) {
            iziToast.show({
                theme: 'light',
                color: 'green',
                titleColor: 'green',
                messageColor: 'green',
                iconColor: 'green',
                layout: 1,
                message: pMess,
                position: 'bottomRight',
                progressBarEasing: 'linear',
                icon: 'far fa-smile',
                transitionIn: 'fadeInDown',
                messageSize: 13,
                timeout: 2000
            })
        } else if (pType.toUpperCase() == 'E'.toUpperCase()) {
            iziToast.show({
                theme: 'light',
                color: '#A4193D',
                titleColor: 'red',
                messageColor: '#FFDFB9',
                iconColor: '#FFDFB9',
                layout: 1,
                message: pMess,
                position: 'bottomRight',
                progressBarEasing: 'linear',
                icon: 'fas fa-heart-broken',
                transitionIn: 'fadeInDown',
                messageSize: 13,
                timeout: 3000
            })
        }else if (pType.toUpperCase() == 'I'.toUpperCase()) {
            iziToast.show({
                theme: 'light',
                color: 'blue',
                titleColor: 'blue',
                messageColor: 'blue',
                iconColor: 'blue',
                layout: 1,
                message: pMess,
                position: 'bottomRight',
                progressBarEasing: 'linear',
                icon: 'fas fa-info-circle',
                transitionIn: 'fadeInDown',
                messageSize: 13,
                timeout: 2000
            })
        }else {
            iziToast.show({
                theme: 'light',
                color: 'yellow',
                titleColor: 'yellow',
                messageColor: '#1f2e2e',
                iconColor: '#1f2e2e',
                layout: 1,
                message: pMess,
                position: 'bottomRight',
                progressBarEasing: 'linear',
                icon: 'fas fa-gavel',
                transitionIn: 'fadeInDown',
                messageSize: 13,
                timeout: 2000
            })
        }

    }

}

export default Notification = new Notification()
