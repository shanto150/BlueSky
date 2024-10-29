import{_ as G,a as Y,b as F,c as M,d as J,e as K,f as W,g as Z,h as Q,i as X,j as ss,k as es,l as ts,m as as,n as os,o as is,p as ls,q as rs,r as ns,s as ps,t as us,u as cs,v as ds,w as _s,x as ms,y as gs,z as vs,A as hs,B as bs,C as fs,D as ws,E as ys,F as Ps}from"./sh3-BFFVKawt.js";import{_ as $,o as B,c as T,b as e,B as xs,z as Cs,a as ks,u as Ns,e as i,f as Bs,g as Ts,r as Vs,j as Ds,d as V,w as p,p as $s,l as js,m as k,n as N,v as Ss,s as Is,t as Rs}from"./app-DXx8YYf3.js";import{a as As,b as Es,_ as Ls}from"./blueskymainlogo-DOJdMQmh.js";import{_ as D}from"./Key-Pass-BcV-q5mU.js";import{_ as zs}from"./pp-BjwrYq3-.js";import{_ as Hs}from"./bottomfullimage-B_CF8iOt.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const Us="/build/assets/forcePassword-CxS-C-oD.svg",qs="/build/assets/oldpassword-CnuGCqET.svg",Os="/build/assets/carbontime-Y3JOVi2L.svg",Gs={class:"progress"},Ys=["aria-valuenow","title"],Fs={name:"ProgressBar"},Ms=Object.assign(Fs,{props:{color:{default:"#17a2b8"},height:{default:16,type:Number},currentValue:{default:20,type:Number},animation:{default:!0,type:Boolean},strip:{default:!0,type:Boolean}},setup(n){return(c,b)=>(B(),T("div",Gs,[e("div",{style:xs(`--color: ${n.color}; --height: ${n.height}px; width:${n.currentValue}%`),class:Cs(["progress-bar progress-bar-striped progress-bar-animated",{"animated-bg":n.animation,"striped-bg":n.strip}]),role:"progressbar","aria-valuenow":n.currentValue,"aria-valuemin":"0","aria-valuemax":"100",title:`${n.currentValue}%`},null,14,Ys)]))}}),Js=$(Ms,[["__scopeId","data-v-44a96578"]]),Ks={class:"container-fluid vh-100 p-0 m-0"},Ws={class:"container mt-1"},Zs={class:"row justify-content-center"},Qs={class:"col-md-5"},Xs={class:"p2"},se={class:"info border rounded-circle p-1 fas fa-info-circle"},ee={class:"position-relative mt-3"},te=["type"],ae=["src"],oe=["src"],ie={class:"position-relative mt-1"},le=["type"],re=["src"],ne=["src"],pe={class:"position-relative mt-1"},ue=["type"],ce=["src"],de=["src"],_e={class:"d-flex justify-content-center mt-1"},me={class:"col-md-6 p-0"},ge={class:"position-relative"},ve={class:"col-md-6 p-0"},he={class:"d-flex justify-content-between h-100"},be={class:"d-flex justify-content-center mt-3"},fe={class:"clearfix w-100"},we=["disabled"],ye={key:0,src:zs,height:"20",width:"20",alt:""},Pe={role:"status"},xe={__name:"forcePasswordChange",setup(n){const c=ks(),b=Ns(),m=i(!1),f=i(!1),w=i(r("HidePassword.svg")),j=i(r("Cross.svg")),g=i(!1),y=i(!1),P=i(r("HidePassword.svg")),S=i(r("Cross.svg")),v=i(!1),x=i(!1),C=i(r("HidePassword.svg")),I=i(r("Cross.svg")),d=i(!1),_=i(""),l=i(0);_.value="Reset Password";const t=Bs({old_password:"",password:"",password_confirmation:"",eDays:""});function R(){m.value==!0?(m.value=!1,w.value=r("HidePassword.svg")):(m.value=!0,w.value=r("Viewpass.svg"))}function A(){g.value==!0?(g.value=!1,P.value=r("HidePassword.svg")):(g.value=!0,P.value=r("Viewpass.svg"))}function E(){v.value==!0?(v.value=!1,C.value=r("HidePassword.svg")):(v.value=!0,C.value=r("Viewpass.svg"))}function L(){t.password=""}function z(){t.password_confirmation=""}function H(){t.old_password=""}function r(a){return new URL(Object.assign({"../../../../public/theme/appimages/Admin.svg":G,"../../../../public/theme/appimages/BottomrImage.svg":Y,"../../../../public/theme/appimages/Cross.svg":F,"../../../../public/theme/appimages/HidePassword.svg":M,"../../../../public/theme/appimages/Key-Pass.svg":J,"../../../../public/theme/appimages/Overlay.svg":K,"../../../../public/theme/appimages/Password.svg":W,"../../../../public/theme/appimages/Subtract.svg":Z,"../../../../public/theme/appimages/Viewpass.svg":Q,"../../../../public/theme/appimages/bil.svg":X,"../../../../public/theme/appimages/bird.gif":ss,"../../../../public/theme/appimages/bird.jpg":es,"../../../../public/theme/appimages/bird.png":ts,"../../../../public/theme/appimages/bluesky.svg":as,"../../../../public/theme/appimages/blueskymainlogo.svg":os,"../../../../public/theme/appimages/blueskywings.png":is,"../../../../public/theme/appimages/bottomfullimage.svg":ls,"../../../../public/theme/appimages/bubble.svg":rs,"../../../../public/theme/appimages/carbontime.svg":ns,"../../../../public/theme/appimages/email.svg":ps,"../../../../public/theme/appimages/forcePassword.svg":us,"../../../../public/theme/appimages/la.mp4":cs,"../../../../public/theme/appimages/map.svg":ds,"../../../../public/theme/appimages/mlogo.png":_s,"../../../../public/theme/appimages/oldpassword.svg":ms,"../../../../public/theme/appimages/otptop.svg":gs,"../../../../public/theme/appimages/passwordreset.svg":vs,"../../../../public/theme/appimages/planedowa.png":hs,"../../../../public/theme/appimages/planedowa1.png":bs,"../../../../public/theme/appimages/pp.gif":fs,"../../../../public/theme/appimages/qr.svg":ws,"../../../../public/theme/appimages/rqf.png":ys,"../../../../public/theme/appimages/sh3.jpg":Ps})[`../../../../public/theme/appimages/${a}`],import.meta.url).href}function h(a){t.eDays=a,l.value=a}function U(){if(t.old_password)if(t.password)if(t.password.length<8){Notification.showToast("e","New Password minimum length is 8.");return}else if(t.password_confirmation)if(t.password_confirmation.length<8){Notification.showToast("e","Confirm password minimum length is 8.");return}else if(t.password_confirmation!==t.password){Notification.showToast("e","Both field password must be same.");return}else if(t.password==t.old_password){Notification.showToast("e","Current password can not be new password.");return}else if(l<100){Notification.showToast("e","Enter password as per policy.");return}else if(t.eDays){if(t.eDays<=0&&t.eDays>90){Notification.showToast("e","Expire days should be between 1-90.");return}}else{Notification.showToast("e","Enter expire days.");return}else{Notification.showToast("e","Please enter confirm password.");return}else{Notification.showToast("e","Please enter new password.");return}else{Notification.showToast("e","Please enter old password first.");return}d.value=!0,_.value="Reseting..";const a={headers:{Authorization:"Bearer "+c.decryptWithAES(c.token),Accept:"application/json"}};axios.post("/api/ForcePassReset",t,a).then(s=>{d.value=!1,_.value="Reset Password",console.log(s.data),Notification.showToast("s",s.data.message),c.logout(),b.push({name:"Login"})}).catch(s=>{d.value=!1,_.value="Reset Password",console.log(s),Notification.showToast("e",s.response.data.message)})}function q(){c.logout(),b.push({name:"Login"})}function O(a){var s=new Array;s.push("[A-Z]"),s.push("[a-z]"),s.push("[0-9]"),s.push("[$@$!%*#?&]");for(var u=0,o=0;o<s.length;o++)new RegExp(s[o]).test(a)&&u++;switch(u){case 1:l.value=20;break;case 2:l.value=40;break;case 3:l.value=60;break;case 4:l.value=80;break}}return Ts(t,(a,s)=>{let u=a.password.length>=8;O(a.password),console.log(l.value),u?l.value=l.value+20:l.value=l.value-20,a.password.length>0?f.value=!0:(f.value=!1,l.value=0),a.password_confirmation.length>0?y.value=!0:y.value=!1,a.old_password.length>0?x.value=!0:x.value=!1}),(a,s)=>{const u=Vs("tippy");return B(),T("div",Ks,[s[17]||(s[17]=Ds('<div class="d-flex justify-content-between" data-v-8c30a911><div class="d-flex justify-content-start mt-3 ml-4" data-v-8c30a911><div class="p-2 align-content-center" data-v-8c30a911><img src="'+As+'" width="35" height="35" alt="rbird" data-v-8c30a911></div><div class="p-1 align-content-center" data-v-8c30a911><img src="'+Es+'" height="35" alt="rlogo" data-v-8c30a911></div></div><img src="'+Ls+'" class="buble" alt="rlogo" data-v-8c30a911></div>',1)),e("div",Ws,[e("div",Zs,[e("div",Qs,[s[15]||(s[15]=e("div",{class:"text-center"},[e("img",{src:Us,alt:""})],-1)),s[16]||(s[16]=e("p",{class:"p1"},"Password Reset",-1)),e("p",Xs,[s[8]||(s[8]=V(" Your password has been expired, set a new password. You can select a password expire period limit of ")),s[9]||(s[9]=e("span",{class:"zero-ninty"},"0-90 days.",-1)),p(e("i",se,null,512),[[u,{content:"* Uppercase and Lowercase   * special character   * contain a number   * Eight characters",theme:"tomato"}]])]),$s(js(Js),{"current-value":l.value,height:"100",color:"#3eb750",strip:!0,animation:!0},null,8,["current-value"]),e("div",ee,[s[10]||(s[10]=e("img",{class:"position-absolute p-2",src:qs,height:"40",width:"40",alt:"leftmap"},null,-1)),p(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.old_password=o),class:"form-control form-control-lg pl-5",placeholder:"Old Password",name:"old_password",id:"old_password",type:v.value?"text":"password"},null,8,te),[[k,t.old_password]]),e("img",{onClick:E,class:"position-absolute p-2",src:C.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,ae),p(e("img",{onClick:H,class:"position-absolute p-2",src:I.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,oe),[[N,x.value]])]),e("div",ie,[s[11]||(s[11]=e("img",{class:"position-absolute p-2",src:D,height:"40",width:"40",alt:"leftmap"},null,-1)),p(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.password=o),class:"form-control form-control-lg pl-5",placeholder:"New Password",name:"password",id:"password",type:m.value?"text":"password"},null,8,le),[[k,t.password]]),e("img",{onClick:R,class:"position-absolute p-2",src:w.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,re),p(e("img",{onClick:L,class:"position-absolute p-2",src:j.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,ne),[[N,f.value]])]),e("div",pe,[s[12]||(s[12]=e("img",{class:"position-absolute p-2",src:D,height:"40",width:"40",alt:"leftmap"},null,-1)),p(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>t.password_confirmation=o),class:"form-control form-control-lg pl-5",type:g.value?"text":"password",required:"",placeholder:"Confirm Password"},null,8,ue),[[k,t.password_confirmation]]),e("img",{onClick:A,class:"position-absolute p-2",src:P.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,ce),p(e("img",{onClick:z,class:"position-absolute p-2",src:S.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,de),[[N,y.value]])]),e("div",_e,[e("div",me,[e("div",ge,[s[13]||(s[13]=e("img",{class:"position-absolute p-2",src:Os,height:"40",width:"40",alt:"leftmap"},null,-1)),p(e("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.eDays=o),class:"form-control form-control-lg pl-5",min:"1",max:"90",type:"number",required:"",placeholder:"Days Limit"},null,512),[[Ss,t.eDays]])])]),e("div",ve,[e("div",he,[e("button",{onClick:s[4]||(s[4]=o=>h(15)),class:"btn btn-outline-primary ml-2"}," 15 "),e("button",{onClick:s[5]||(s[5]=o=>h(30)),class:"btn btn-outline-primary ml-1"}," 30 "),e("button",{onClick:s[6]||(s[6]=o=>h(45)),class:"btn btn-outline-primary ml-1"}," 45 "),e("button",{onClick:s[7]||(s[7]=o=>h(90)),class:"btn btn-outline-primary ml-1"}," 90 ")])])]),e("div",be,[e("div",fe,[e("button",{disabled:d.value,onClick:U,class:"btn btn-primary rounded-2 w-100"},[d.value?(B(),T("img",ye)):Is("",!0),e("span",Pe,Rs(_.value),1)],8,we)])]),e("div",{class:"text-center mt-4"},[e("p",{class:"p3",onClick:q},s[14]||(s[14]=[e("i",{class:"fas fa-angle-left"},null,-1),V(" Back to Login ")]))])])])]),s[18]||(s[18]=e("footer",{class:"fixed-bottom"},[e("img",{src:Hs,class:"img-fluid w-100",alt:"leftcityBottom"})],-1))])}}},je=$(xe,[["__scopeId","data-v-8c30a911"]]);export{je as default};
