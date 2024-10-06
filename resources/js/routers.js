import { createRouter, createWebHistory } from 'vue-router'


const Home = () => import('./components/pages/Home.vue')
const User = () => import('./components/pages/User.vue')
const Agent = () => import('./components/pages/Agent.vue')
const Settings = () => import('./components/pages/Settings.vue')
const Logout = () => import('./components/auth/Logout.vue')
const Login = () => import('./components/auth/Login.vue')
const Reg2Fa = () => import('./components/auth/2faregister.vue')
const sendResetLinkEmail = () => import('./components/auth/forgetPassMail.vue')
const PassReset = () => import('./components/auth/reserPass.vue')
const otp = () => import('./components/auth/otp.vue')
const NF = () => import('./components/auth/NotFound.vue')
const ForcePassChange = () => import('./components/auth/forcePasswordChange.vue')

const routes = [
    { path: '/', component: Login, name: 'Login', meta: { guest: true } },
    { path: '/sendResetLinkEmail', component: sendResetLinkEmail, name: 'sendResetLinkEmail', meta: { guest: true } },
    { path: '/PassReset/:token/:email', component: PassReset, name: 'PassReset', meta: { guest: true } },

    { path: '/Reg2Fa', component: Reg2Fa, name: 'register2fa', meta: { RE: true } },
    { path: '/otp', component: otp, name: 'otp', meta: { OTP: true } },
    { path: '/ForcePassChange', component: ForcePassChange, name: 'ForcePassChange', meta: { FPC: true } },

    { path: '/home', component: Home, name: 'Home', meta: { auth: true } },
    { path: '/User', component: User, name: 'User', meta: { auth: true } },
    { path: '/Agent', component: Agent, name: 'Agent', meta: { auth: true } },
    { path: '/Settings', component: Settings, name: 'Settings', meta: { auth: true } },
    { path: '/Logout', component: Logout, name: 'Logout', meta: { auth: true } },
    { path: '/:any(.*)*', component: NF, name: 'NF', meta: { auth: true } },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
