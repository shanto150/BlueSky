<<<<<<<< HEAD:public/build/assets/forgetPassMail-BPoO6X-Z.js
import{_ as u,a as v,u as _,e as l,i as f,o as n,c as r,j as g,b as t,w as b,v as h,l as d,t as w,x,p as y,q as k,d as N}from"./app-DUUlOh7T.js";import{a as S,b as B,_ as V}from"./blueskymainlogo-DOJdMQmh.js";import{_ as j}from"./passwordreset-D-gaEwL9.js";import{_ as C}from"./pp-BjwrYq3-.js";import{_ as T}from"./bottomfullimage-B_CF8iOt.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const M="/build/assets/email-CxaQWAl0.svg",P={class:"container-fluid vh-100 p-0 m-0"},E={class:"container mt-1"},L={class:"row justify-content-center"},q={class:"col-md-4"},A={class:"position-relative"},D={class:"row justify-content-center mt-4"},R={class:"clearfix w-100 pl-1 pr-1"},F=["disabled"],I={key:0,src:C,height:"20",width:"20",alt:""},Q={role:"status"},U={class:"text-center mt-4"},W={__name:"forgetPassMail",setup(Y){const i=v();_(),l(""),l();const o=l(!1),a=l("");a.value="Send";function c(){if(!i.email){Notification.showToast("e","Please enter your email address.");return}o.value=!0,a.value="Sending..",axios.post("/api/sendResetLinkEmail",{email:i.email}).then(e=>{o.value=!1,a.value="Send",console.log(e.data),Notification.showToast("s",e.data.message)}).catch(e=>{o.value=!1,a.value="Send",console.log(e),Notification.showToast("e",e.response.data.message)})}return(e,s)=>{const m=f("router-link");return n(),r("div",P,[s[6]||(s[6]=g('<div class="d-flex justify-content-between" data-v-75bc7585><div class="d-flex justify-content-start mt-3 ml-4" data-v-75bc7585><div class="p-2 align-content-center" data-v-75bc7585><img src="'+S+'" width="35" height="35" alt="rbird" data-v-75bc7585></div><div class="p-1 align-content-center" data-v-75bc7585><img src="'+B+'" height="35" alt="rlogo" data-v-75bc7585></div></div><img src="'+V+'" class="buble" alt="rlogo" data-v-75bc7585></div>',1)),t("div",E,[t("div",L,[t("div",q,[s[3]||(s[3]=t("div",{class:"text-center"},[t("img",{src:j,height:"100",width:"100",alt:""})],-1)),s[4]||(s[4]=t("p",{class:"p1"},"Forgot Your Password?",-1)),s[5]||(s[5]=t("p",{class:"p2"},"Enter a valid email address, a reset password link will sent to your email",-1)),t("div",A,[s[1]||(s[1]=t("img",{class:"position-absolute p-2",src:M,height:"40",width:"40",alt:"leftmap"},null,-1)),b(t("input",{"onUpdate:modelValue":s[0]||(s[0]=p=>d(i).email=p),class:"form-control form-control-lg pl-5",type:"email",required:"",placeholder:"Enter your email"},null,512),[[h,d(i).email]])]),t("div",D,[t("div",R,[t("button",{disabled:o.value,onClick:c,class:"btn btn-primary rounded-2 w-100"},[o.value?(n(),r("img",I)):w("",!0),t("span",Q,x(a.value),1)],8,F)])]),t("div",U,[y(m,{class:"p3",to:{name:"Login"}},{default:k(()=>s[2]||(s[2]=[t("i",{class:"fas fa-angle-left"},null,-1),N(" Back to Login")])),_:1})])])])]),s[7]||(s[7]=t("footer",{class:"footer fixed-bottom"},[t("img",{src:T,class:"img-fluid w-100",alt:"leftcityBottom"})],-1))])}}},$=u(W,[["__scopeId","data-v-75bc7585"]]);export{$ as default};
========
import{_ as u,a as v,u as _,e as l,i as f,c as n,o as r,j as g,b as t,w as b,v as h,l as d,s as w,x,p as y,q as k,d as N}from"./app-Cf8-PM9S.js";import{a as S,b as B,_ as V}from"./blueskymainlogo-DOJdMQmh.js";import{_ as j}from"./passwordreset-D-gaEwL9.js";import{_ as C}from"./pp-BjwrYq3-.js";import{_ as T}from"./bottomfullimage-B_CF8iOt.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const M="/build/assets/email-CxaQWAl0.svg",P={class:"container-fluid vh-100 p-0 m-0"},E={class:"container mt-1"},L={class:"row justify-content-center"},q={class:"col-md-4"},A={class:"position-relative"},D={class:"row justify-content-center mt-4"},R={class:"clearfix w-100 pl-1 pr-1"},F=["disabled"],I={key:0,src:C,height:"20",width:"20",alt:""},Q={role:"status"},U={class:"text-center mt-4"},W={__name:"forgetPassMail",setup(Y){const i=v();_(),l(""),l();const o=l(!1),a=l("");a.value="Send";function c(){if(!i.email){Notification.showToast("e","Please enter your email address.");return}o.value=!0,a.value="Sending..",axios.post("/api/sendResetLinkEmail",{email:i.email}).then(e=>{o.value=!1,a.value="Send",console.log(e.data),Notification.showToast("s",e.data.message)}).catch(e=>{o.value=!1,a.value="Send",console.log(e),Notification.showToast("e",e.response.data.message)})}return(e,s)=>{const m=f("router-link");return r(),n("div",P,[s[6]||(s[6]=g('<div class="d-flex justify-content-between" data-v-75bc7585><div class="d-flex justify-content-start mt-3 ml-4" data-v-75bc7585><div class="p-2 align-content-center" data-v-75bc7585><img src="'+S+'" width="35" height="35" alt="rbird" data-v-75bc7585></div><div class="p-1 align-content-center" data-v-75bc7585><img src="'+B+'" height="35" alt="rlogo" data-v-75bc7585></div></div><img src="'+V+'" class="buble" alt="rlogo" data-v-75bc7585></div>',1)),t("div",E,[t("div",L,[t("div",q,[s[3]||(s[3]=t("div",{class:"text-center"},[t("img",{src:j,height:"100",width:"100",alt:""})],-1)),s[4]||(s[4]=t("p",{class:"p1"},"Forgot Your Password?",-1)),s[5]||(s[5]=t("p",{class:"p2"},"Enter a valid email address, a reset password link will sent to your email",-1)),t("div",A,[s[1]||(s[1]=t("img",{class:"position-absolute p-2",src:M,height:"40",width:"40",alt:"leftmap"},null,-1)),b(t("input",{"onUpdate:modelValue":s[0]||(s[0]=p=>d(i).email=p),class:"form-control form-control-lg pl-5",type:"email",required:"",placeholder:"Enter your email"},null,512),[[h,d(i).email]])]),t("div",D,[t("div",R,[t("button",{disabled:o.value,onClick:c,class:"btn btn-primary rounded-2 w-100"},[o.value?(r(),n("img",I)):w("",!0),t("span",Q,x(a.value),1)],8,F)])]),t("div",U,[y(m,{class:"p3",to:{name:"Login"}},{default:k(()=>s[2]||(s[2]=[t("i",{class:"fas fa-angle-left"},null,-1),N(" Back to Login")])),_:1})])])])]),s[7]||(s[7]=t("footer",{class:"footer fixed-bottom"},[t("img",{src:T,class:"img-fluid w-100",alt:"leftcityBottom"})],-1))])}}},$=u(W,[["__scopeId","data-v-75bc7585"]]);export{$ as default};
>>>>>>>> 3c4df69c4a43b2f2dd325f59b87175036b8a1bea:public/build/assets/forgetPassMail-CKbtN1x6.js
