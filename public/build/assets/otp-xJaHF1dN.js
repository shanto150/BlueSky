import{_,a as h,u as b,e as d,o as u,c as p,j as C,b as e,p as y,l as x,A as w,s as k,t as N,d as T}from"./app-BCvmmt1d.js";import{a as A,b as B,_ as O}from"./blueskymainlogo-DOJdMQmh.js";import{_ as j}from"./pp-BjwrYq3-.js";import{_ as q}from"./bottomfullimage-B_CF8iOt.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";const L="/build/assets/otptop-DOvFnxUh.svg",S={class:"container-fluid vh-100 p-0 m-0"},V={class:"container mt-5"},U={class:"row justify-content-center"},z={class:"col-md-5"},P={class:"d-flex justify-content-center mt-3"},R={style:{display:"flex","flex-direction":"row"}},W={class:"row justify-content-center mt-4"},D={class:"clearfix w-100"},H=["disabled"],I={key:0,src:j,height:"20",width:"20",alt:""},E={role:"status"},F={__name:"otp",setup(G){const t=h(),r=b(),l=d(""),c=d(),s=d(!1),i=d("");i.value="Confirm";function f(){t.logout(),r.push({name:"Login"})}const g=n=>{c.value=n,v(c.value)},m=n=>{};function v(n){s.value=!0,i.value="Checking..";const o={headers:{Authorization:"Bearer "+t.decryptWithAES(t.token),Accept:"application/json"}};axios.post("/api/registerOTP",{otp:n},o).then(a=>{s.value=!1,i.value="Confirm",a.data.status?a.data.data.require_2fa==0?(t.getRequire_2fa=a.data.data.require_2fa,t.getotp_regisered=1,t.getotpChecked=1,t.getgoogle2fa_secret="",t.getgoogle2fa_qr="",t.isLogged=t.encryptWithAES("1"),r.push({name:"Home"}),Notification.showToast("s","Authorized User Login.")):(t.getRequire_2fa=a.data.data.require_2fa,t.getotp_regisered=a.data.data.registered_2fa,t.getotpChecked=1,t.getgoogle2fa_secret="",t.getgoogle2fa_qr="",t.isLogged=t.encryptWithAES("1"),r.push({name:"Home"}),Notification.showToast("s","Authorized User Login.")):t.getotpChecked=0}).catch(a=>{if(s.value=!1,i.value="Confirm",t.getotpChecked=0,a.response.status=="422"){Notification.showToast("e",a.response.data.message);return}if(a.response.status=="404"){Notification.showToast("e",a.response.data.message);return}Notification.showToast("e",a.response.data.data.error)})}return(n,o)=>(u(),p("div",S,[o[5]||(o[5]=C('<div class="d-flex justify-content-between" data-v-bdeadde5><div class="d-flex justify-content-start mt-3 ml-4" data-v-bdeadde5><div class="p-2 align-content-center" data-v-bdeadde5><img src="'+A+'" width="35" height="35" alt="rbird" data-v-bdeadde5></div><div class="p-1 align-content-center" data-v-bdeadde5><img src="'+B+'" height="35" alt="rlogo" data-v-bdeadde5></div></div><img src="'+O+'" class="buble" alt="rlogo" data-v-bdeadde5></div>',1)),e("div",V,[e("div",U,[e("div",z,[o[2]||(o[2]=e("div",{class:"text-center"},[e("img",{src:L,alt:""})],-1)),o[3]||(o[3]=e("p",{class:"p1"},"OTP Confirmation",-1)),o[4]||(o[4]=e("p",{class:"p2"},"Check your Google authenticator app and Enter the OTP code",-1)),e("div",P,[e("div",R,[y(x(w),{ref:"otpInput","input-classes":"otp-input",conditionalClass:["one","two","three","four","five","six"],separator:"",inputType:"numeric","num-inputs":6,value:l.value,"onUpdate:value":o[0]||(o[0]=a=>l.value=a),"should-auto-focus":!0,"should-focus-order":!0,onOnChange:m,onOnComplete:g,placeholder:["*","*","*","*","*","*"]},null,8,["value"])])]),e("div",W,[e("div",D,[e("button",{disabled:s.value,type:"submit",class:"btn btn-primary rounded-2 w-100"},[s.value?(u(),p("img",I)):k("",!0),e("span",E,N(i.value),1)],8,H)])]),e("div",{class:"text-center mt-4"},[e("p",{class:"p3",onClick:f},o[1]||(o[1]=[e("i",{class:"fas fa-angle-left"},null,-1),T(" Back to Login")]))])])])]),o[6]||(o[6]=e("footer",{class:"footer fixed-bottom"},[e("img",{src:q,class:"img-fluid w-100",alt:"leftcityBottom"})],-1))]))}},Y=_(F,[["__scopeId","data-v-bdeadde5"]]);export{Y as default};
