import{_ as G,a as M,b as W,c as Y,d as F,e as J,f as K,g as Q,h as Z,i as X,j as ee,k as se,l as te,m as ae,n as oe,o as ie,p as le,q as re,r as pe,s as ne,t as _e,u as ue,v as ce,w as ge,x as me,y as de,z as ve,A as be,B as he,C as fe,D as we,E as ye,F as Pe,G as xe,H as Ce,I as ke,J as Ne,K as Be,L as Te,M as je,N as Ve,O as Se,P as De,Q as $e,R as Ie,S as Re,T as Ae,U as He}from"./world-BauW_Sfr.js";import{_ as S,o as B,c as T,b as s,C as Le,A as Ee,a as Ue,u as qe,e as i,f as ze,g as Oe,r as Ge,j as Me,d as j,w as n,p as We,l as Ye,m as k,n as N,v as Fe,t as Je,x as Ke}from"./app-DnFq9Ek8.js";import{a as Qe,b as Ze,_ as Xe}from"./blueskymainlogo-DOJdMQmh.js";import{_ as V}from"./Key-Pass-BcV-q5mU.js";import{_ as es}from"./pp-BjwrYq3-.js";import{_ as ss}from"./bottomfullimage-B_CF8iOt.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const ts="/build/assets/forcePassword-CxS-C-oD.svg",as="/build/assets/oldpassword-CnuGCqET.svg",os="/build/assets/carbontime-Y3JOVi2L.svg",is={class:"progress"},ls=["aria-valuenow","title"],rs={name:"ProgressBar"},ps=Object.assign(rs,{props:{color:{default:"#17a2b8"},height:{default:16,type:Number},currentValue:{default:20,type:Number},animation:{default:!0,type:Boolean},strip:{default:!0,type:Boolean}},setup(p){return(u,h)=>(B(),T("div",is,[s("div",{style:Le(`--color: ${p.color}; --height: ${p.height}px; width:${p.currentValue}%`),class:Ee(["progress-bar progress-bar-striped progress-bar-animated",{"animated-bg":p.animation,"striped-bg":p.strip}]),role:"progressbar","aria-valuenow":p.currentValue,"aria-valuemin":"0","aria-valuemax":"100",title:`${p.currentValue}%`},null,14,ls)]))}}),ns=S(ps,[["__scopeId","data-v-0f2a9e7b"]]),_s={class:"container-fluid vh-100 p-0 m-0"},us={class:"container mt-1"},cs={class:"row justify-content-center"},gs={class:"col-md-5"},ms={class:"p2"},ds={class:"info border rounded-circle p-1 fas fa-info-circle"},vs={class:"position-relative mt-3"},bs=["type"],hs=["src"],fs=["src"],ws={class:"position-relative mt-1"},ys=["type"],Ps=["src"],xs=["src"],Cs={class:"position-relative mt-1"},ks=["type"],Ns=["src"],Bs=["src"],Ts={class:"d-flex justify-content-center mt-1"},js={class:"col-md-6 p-0"},Vs={class:"position-relative"},Ss={class:"col-md-6 p-0"},Ds={class:"d-flex justify-content-between h-100"},$s={class:"d-flex justify-content-center mt-3"},Is={class:"clearfix w-100"},Rs=["disabled"],As={key:0,src:es,height:"20",width:"20",alt:""},Hs={role:"status"},Ls={__name:"forcePasswordChange",setup(p){const u=Ue(),h=qe(),m=i(!1),f=i(!1),w=i(r("HidePassword.svg")),D=i(r("Cross.svg")),d=i(!1),y=i(!1),P=i(r("HidePassword.svg")),$=i(r("Cross.svg")),v=i(!1),x=i(!1),C=i(r("HidePassword.svg")),I=i(r("Cross.svg")),c=i(!1),g=i(""),l=i(0);g.value="Reset Password";const t=ze({old_password:"",password:"",password_confirmation:"",eDays:""});function R(){m.value==!0?(m.value=!1,w.value=r("HidePassword.svg")):(m.value=!0,w.value=r("Viewpass.svg"))}function A(){d.value==!0?(d.value=!1,P.value=r("HidePassword.svg")):(d.value=!0,P.value=r("Viewpass.svg"))}function H(){v.value==!0?(v.value=!1,C.value=r("HidePassword.svg")):(v.value=!0,C.value=r("Viewpass.svg"))}function L(){t.password=""}function E(){t.password_confirmation=""}function U(){t.old_password=""}function r(a){return new URL(Object.assign({"../../../../public/theme/appimages/1.png":G,"../../../../public/theme/appimages/2.png":M,"../../../../public/theme/appimages/3.png":W,"../../../../public/theme/appimages/Admin.svg":Y,"../../../../public/theme/appimages/BottomrImage.svg":F,"../../../../public/theme/appimages/Cross.svg":J,"../../../../public/theme/appimages/HidePassword.svg":K,"../../../../public/theme/appimages/Key-Pass.svg":Q,"../../../../public/theme/appimages/Mobile_Button With_Icon.jpg":Z,"../../../../public/theme/appimages/Overlay.svg":X,"../../../../public/theme/appimages/Password.svg":ee,"../../../../public/theme/appimages/Plane.svg":se,"../../../../public/theme/appimages/Plane_des.svg":te,"../../../../public/theme/appimages/Search.svg":ae,"../../../../public/theme/appimages/Subtract.svg":oe,"../../../../public/theme/appimages/Viewpass.svg":ie,"../../../../public/theme/appimages/bil.svg":le,"../../../../public/theme/appimages/bird-unscreen.gif":re,"../../../../public/theme/appimages/bird.gif":pe,"../../../../public/theme/appimages/bird.jpg":ne,"../../../../public/theme/appimages/bird.png":_e,"../../../../public/theme/appimages/bluesky.svg":ue,"../../../../public/theme/appimages/blueskymainlogo.svg":ce,"../../../../public/theme/appimages/blueskywings.png":ge,"../../../../public/theme/appimages/bottomfullimage.svg":me,"../../../../public/theme/appimages/bubble.svg":de,"../../../../public/theme/appimages/carbontime.svg":ve,"../../../../public/theme/appimages/email.svg":be,"../../../../public/theme/appimages/fluent_arrow-swap-28-regular.png":he,"../../../../public/theme/appimages/fluent_arrow-swap-28-regular.svg":fe,"../../../../public/theme/appimages/forcePassword.svg":we,"../../../../public/theme/appimages/la.mp4":ye,"../../../../public/theme/appimages/map.svg":Pe,"../../../../public/theme/appimages/mlogo.png":xe,"../../../../public/theme/appimages/oldpassword.svg":Ce,"../../../../public/theme/appimages/otptop.svg":ke,"../../../../public/theme/appimages/passwordreset.svg":Ne,"../../../../public/theme/appimages/planedowa.png":Be,"../../../../public/theme/appimages/planedowa1.png":Te,"../../../../public/theme/appimages/pp.gif":je,"../../../../public/theme/appimages/profile_default_img.svg":Ve,"../../../../public/theme/appimages/qr.svg":Se,"../../../../public/theme/appimages/rqf.png":De,"../../../../public/theme/appimages/s_Hover_State.jpg":$e,"../../../../public/theme/appimages/s_With_Icon.jpg":Ie,"../../../../public/theme/appimages/sh3.jpg":Re,"../../../../public/theme/appimages/w200.gif":Ae,"../../../../public/theme/appimages/world.gif":He})[`../../../../public/theme/appimages/${a}`],import.meta.url).href}function b(a){t.eDays=a,l.value=a}function q(){if(t.old_password)if(t.password)if(t.password.length<8){Notification.showToast("e","New Password minimum length is 8.");return}else if(t.password_confirmation)if(t.password_confirmation.length<8){Notification.showToast("e","Confirm password minimum length is 8.");return}else if(t.password_confirmation!==t.password){Notification.showToast("e","Both field password must be same.");return}else if(t.password==t.old_password){Notification.showToast("e","Current password can not be new password.");return}else if(l<100){Notification.showToast("e","Enter password as per policy.");return}else if(t.eDays){if(t.eDays<=0&&t.eDays>90){Notification.showToast("e","Expire days should be between 1-90.");return}}else{Notification.showToast("e","Enter expire days.");return}else{Notification.showToast("e","Please enter confirm password.");return}else{Notification.showToast("e","Please enter new password.");return}else{Notification.showToast("e","Please enter old password first.");return}c.value=!0,g.value="Reseting..";const a={headers:{Authorization:"Bearer "+u.decryptWithAES(u.token),Accept:"application/json"}};axios.post("/api/ForcePassReset",t,a).then(e=>{c.value=!1,g.value="Reset Password",console.log(e.data),Notification.showToast("s",e.data.message),u.logout(),h.push({name:"Login"})}).catch(e=>{c.value=!1,g.value="Reset Password",console.log(e),Notification.showToast("e",e.response.data.message)})}function z(){u.logout(),h.push({name:"Login"})}function O(a){var e=new Array;e.push("[A-Z]"),e.push("[a-z]"),e.push("[0-9]"),e.push("[$@$!%*#?&]");for(var _=0,o=0;o<e.length;o++)new RegExp(e[o]).test(a)&&_++;switch(_){case 1:l.value=20;break;case 2:l.value=40;break;case 3:l.value=60;break;case 4:l.value=80;break}}return Oe(t,(a,e)=>{let _=a.password.length>=8;O(a.password),console.log(l.value),_?l.value=l.value+20:l.value=l.value-20,a.password.length>0?f.value=!0:(f.value=!1,l.value=0),a.password_confirmation.length>0?y.value=!0:y.value=!1,a.old_password.length>0?x.value=!0:x.value=!1}),(a,e)=>{const _=Ge("tippy");return B(),T("div",_s,[e[17]||(e[17]=Me('<div class="d-flex justify-content-between" data-v-8c30a911><div class="d-flex justify-content-start mt-3 ml-4" data-v-8c30a911><div class="p-2 align-content-center" data-v-8c30a911><img src="'+Qe+'" width="35" height="35" alt="rbird" data-v-8c30a911></div><div class="p-1 align-content-center" data-v-8c30a911><img src="'+Ze+'" height="35" alt="rlogo" data-v-8c30a911></div></div><img src="'+Xe+'" class="buble" alt="rlogo" data-v-8c30a911></div>',1)),s("div",us,[s("div",cs,[s("div",gs,[e[15]||(e[15]=s("div",{class:"text-center"},[s("img",{src:ts,alt:""})],-1)),e[16]||(e[16]=s("p",{class:"p1"},"Password Reset",-1)),s("p",ms,[e[8]||(e[8]=j(" Your password has been expired, set a new password. You can select a password expire period limit of ")),e[9]||(e[9]=s("span",{class:"zero-ninty"},"0-90 days.",-1)),n(s("i",ds,null,512),[[_,{content:"* Uppercase and Lowercase   * special character   * contain a number   * Eight characters",theme:"tomato"}]])]),We(Ye(ns),{"current-value":l.value,height:"100",color:"#3eb750",strip:!0,animation:!0},null,8,["current-value"]),s("div",vs,[e[10]||(e[10]=s("img",{class:"position-absolute p-2",src:as,height:"40",width:"40",alt:"leftmap"},null,-1)),n(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.old_password=o),class:"form-control form-control-lg pl-5",placeholder:"Old Password",name:"old_password",id:"old_password",type:v.value?"text":"password"},null,8,bs),[[k,t.old_password]]),s("img",{onClick:H,class:"position-absolute p-2",src:C.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,hs),n(s("img",{onClick:U,class:"position-absolute p-2",src:I.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,fs),[[N,x.value]])]),s("div",ws,[e[11]||(e[11]=s("img",{class:"position-absolute p-2",src:V,height:"40",width:"40",alt:"leftmap"},null,-1)),n(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.password=o),class:"form-control form-control-lg pl-5",placeholder:"New Password",name:"password",id:"password",type:m.value?"text":"password"},null,8,ys),[[k,t.password]]),s("img",{onClick:R,class:"position-absolute p-2",src:w.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,Ps),n(s("img",{onClick:L,class:"position-absolute p-2",src:D.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,xs),[[N,f.value]])]),s("div",Cs,[e[12]||(e[12]=s("img",{class:"position-absolute p-2",src:V,height:"40",width:"40",alt:"leftmap"},null,-1)),n(s("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.password_confirmation=o),class:"form-control form-control-lg pl-5",type:d.value?"text":"password",required:"",placeholder:"Confirm Password"},null,8,ks),[[k,t.password_confirmation]]),s("img",{onClick:A,class:"position-absolute p-2",src:P.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,Ns),n(s("img",{onClick:E,class:"position-absolute p-2",src:$.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,Bs),[[N,y.value]])]),s("div",Ts,[s("div",js,[s("div",Vs,[e[13]||(e[13]=s("img",{class:"position-absolute p-2",src:os,height:"40",width:"40",alt:"leftmap"},null,-1)),n(s("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.eDays=o),class:"form-control form-control-lg pl-5",min:"1",max:"90",type:"number",required:"",placeholder:"Days Limit"},null,512),[[Fe,t.eDays]])])]),s("div",Ss,[s("div",Ds,[s("button",{onClick:e[4]||(e[4]=o=>b(15)),class:"btn btn-outline-primary ml-2"}," 15 "),s("button",{onClick:e[5]||(e[5]=o=>b(30)),class:"btn btn-outline-primary ml-1"}," 30 "),s("button",{onClick:e[6]||(e[6]=o=>b(45)),class:"btn btn-outline-primary ml-1"}," 45 "),s("button",{onClick:e[7]||(e[7]=o=>b(90)),class:"btn btn-outline-primary ml-1"}," 90 ")])])]),s("div",$s,[s("div",Is,[s("button",{disabled:c.value,onClick:q,class:"btn btn-primary rounded-2 w-100"},[c.value?(B(),T("img",As)):Je("",!0),s("span",Hs,Ke(g.value),1)],8,Rs)])]),s("div",{class:"text-center mt-4"},[s("p",{class:"p3",onClick:z},e[14]||(e[14]=[s("i",{class:"fas fa-angle-left"},null,-1),j(" Back to Login ")]))])])])]),e[18]||(e[18]=s("footer",{class:"fixed-bottom"},[s("img",{src:ss,class:"img-fluid w-100",alt:"leftcityBottom"})],-1))])}}},Fs=S(Ls,[["__scopeId","data-v-8c30a911"]]);export{Fs as default};
