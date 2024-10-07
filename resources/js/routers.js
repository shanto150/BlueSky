import { createRouter, createWebHistory } from 'vue-router'


const Home = () => import('./components/pages/Home.vue')
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

// agent
const AgentList = () => import('./components/admin/agent/index.vue')
const agentDetails = () => import('./components/admin/agent/agentDetails.vue')
const agentApprove = () => import('./components/admin/agent/agentApprove.vue')
const agentRecomanded = () => import('./components/admin/agent/agentRecomanded.vue')
const agentView = () => import('./components/admin/agent/agentView.vue')
const CreateAgency = () => import('./components/admin/agent/create.vue')

// deposit management
const depositList = () => import('./components/admin/deposite/index.vue')
const depoDetails = () => import('./components/admin/deposite/depoDetails.vue')

const routes = [
    { path: '/', component: Login, name: 'Login', meta: { guest: true } },
    { path: '/sendResetLinkEmail', component: sendResetLinkEmail, name: 'sendResetLinkEmail', meta: { guest: true } },
    { path: '/PassReset/:token/:email', component: PassReset, name: 'PassReset', meta: { guest: true } },

    { path: '/Reg2Fa', component: Reg2Fa, name: 'register2fa', meta: { RE: true } },
    { path: '/otp', component: otp, name: 'otp', meta: { OTP: true } },
    { path: '/ForcePassChange', component: ForcePassChange, name: 'ForcePassChange', meta: { FPC: true } },

    { path: '/home', component: Home, name: 'Home', meta: { auth: true } },
    { path: '/Agent', component: Agent, name: 'Agent', meta: { auth: true } },
    { path: '/Settings', component: Settings, name: 'Settings', meta: { auth: true } },
    { path: '/Logout', component: Logout, name: 'Logout', meta: { auth: true } },
    { path: '/:any(.*)*', component: NF, name: 'NF', meta: { auth: true } },


    // agent
    { path: '/agent-list', component: AgentList, name: 'AgentList', meta: { auth: true } },
    { path: '/agent-details', component: agentDetails, name: 'agentDetails', meta: { auth: true } },
    { path: '/agent-approve', component: agentApprove, name: 'agentApprove', meta: { auth: true } },
    { path: '/agent-recmoanded', component: agentRecomanded, name: 'agentRecomanded', meta: { auth: true } },
    { path: '/agent-view', component: agentView, name: 'agentView', meta: { auth: true } },
    { path: '/agent-create', component: CreateAgency, name: 'CreateAgency', meta: { auth: true } },

    //deposit
    { path: '/agent-deposit-list', component: depositList, name: 'depositList', meta: { auth: true } },
    { path: '/agent-deposit-details', component: depoDetails, name: 'depoDetails', meta: { auth: true } },


]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
