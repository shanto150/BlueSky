import{_ as G,a as M,b as W,c as Y,d as F,e as J,f as K,g as Z,h as Q,i as X,j as ee,k as se,l as te,m as ae,n as oe,o as ie,p as le,q as re,r as pe,s as ne,t as _e,u as ge,v as ue,w as ce,x as me,y as de,z as ve,A as be,B as he,C as fe,D as we,E as ye,F as Pe,G as xe,H as Ce,I as ke,J as Ne,K as Be,L as Te,M as Ve,N as je,O as Se,P as $e,Q as De,R as Ie,S as Le,T as Re,U as Ae,V as He,W as Ee,X as Ue,Y as qe,Z as ze,$ as Oe,a0 as Ge,a1 as Me,a2 as We,a3 as Ye}from"./world-lN2OvOMn.js";import{_ as S,c as B,o as T,b as s,A as Fe,C as Je,a as Ke,u as Ze,e as i,f as Qe,g as Xe,r as es,j as ss,p as ts,d as V,w as n,l as as,m as k,n as N,v as os,s as is,x as ls}from"./app-txPc7O3c.js";import{a as rs,b as ps,_ as ns}from"./blueskymainlogo-DOJdMQmh.js";import{_ as j}from"./Key-Pass-BcV-q5mU.js";import{_ as _s}from"./pp-C5Rwb8zt.js";import{_ as gs}from"./bottomfullimage-B_CF8iOt.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const us="/build/assets/forcePassword-CxS-C-oD.svg",cs="/build/assets/oldpassword-CnuGCqET.svg",ms="/build/assets/carbontime-Y3JOVi2L.svg",ds={class:"progress"},vs=["aria-valuenow","title"],bs={name:"ProgressBar"},hs=Object.assign(bs,{props:{color:{default:"#17a2b8"},height:{default:16,type:Number},currentValue:{default:20,type:Number},animation:{default:!0,type:Boolean},strip:{default:!0,type:Boolean}},setup(p){return(g,h)=>(T(),B("div",ds,[s("div",{style:Je(`--color: ${p.color}; --height: ${p.height}px; width:${p.currentValue}%`),class:Fe(["progress-bar progress-bar-striped progress-bar-animated",{"animated-bg":p.animation,"striped-bg":p.strip}]),role:"progressbar","aria-valuenow":p.currentValue,"aria-valuemin":"0","aria-valuemax":"100",title:`${p.currentValue}%`},null,14,vs)]))}}),fs=S(hs,[["__scopeId","data-v-44a96578"]]),ws={class:"container-fluid vh-100 p-0 m-0"},ys={class:"container mt-1"},Ps={class:"row justify-content-center"},xs={class:"col-md-5"},Cs={class:"p2"},ks={class:"info border rounded-circle p-1 fas fa-info-circle"},Ns={class:"position-relative mt-3"},Bs=["type"],Ts=["src"],Vs=["src"],js={class:"position-relative mt-1"},Ss=["type"],$s=["src"],Ds=["src"],Is={class:"position-relative mt-1"},Ls=["type"],Rs=["src"],As=["src"],Hs={class:"d-flex justify-content-center mt-1"},Es={class:"col-md-6 p-0"},Us={class:"position-relative"},qs={class:"col-md-6 p-0"},zs={class:"d-flex justify-content-between h-100"},Os={class:"d-flex justify-content-center mt-3"},Gs={class:"clearfix w-100"},Ms=["disabled"],Ws={key:0,src:_s,height:"20",width:"20",alt:""},Ys={role:"status"},Fs={__name:"forcePasswordChange",setup(p){const g=Ke(),h=Ze(),m=i(!1),f=i(!1),w=i(r("HidePassword.svg")),$=i(r("Cross.svg")),d=i(!1),y=i(!1),P=i(r("HidePassword.svg")),D=i(r("Cross.svg")),v=i(!1),x=i(!1),C=i(r("HidePassword.svg")),I=i(r("Cross.svg")),u=i(!1),c=i(""),l=i(0);c.value="Reset Password";const t=Qe({old_password:"",password:"",password_confirmation:"",eDays:""});function L(){m.value==!0?(m.value=!1,w.value=r("HidePassword.svg")):(m.value=!0,w.value=r("Viewpass.svg"))}function R(){d.value==!0?(d.value=!1,P.value=r("HidePassword.svg")):(d.value=!0,P.value=r("Viewpass.svg"))}function A(){v.value==!0?(v.value=!1,C.value=r("HidePassword.svg")):(v.value=!0,C.value=r("Viewpass.svg"))}function H(){t.password=""}function E(){t.password_confirmation=""}function U(){t.old_password=""}function r(a){return new URL(Object.assign({"../../../../public/theme/appimages/1.png":Ye,"../../../../public/theme/appimages/2.png":We,"../../../../public/theme/appimages/3.png":Me,"../../../../public/theme/appimages/Admin.svg":Ge,"../../../../public/theme/appimages/BottomrImage.svg":Oe,"../../../../public/theme/appimages/Cross.svg":ze,"../../../../public/theme/appimages/HidePassword.svg":qe,"../../../../public/theme/appimages/Key-Pass.svg":Ue,"../../../../public/theme/appimages/Layover.svg":Ee,"../../../../public/theme/appimages/Left_Aligned Line.svg":He,"../../../../public/theme/appimages/Mobile_Button With_Icon.jpg":Ae,"../../../../public/theme/appimages/Overlay.svg":Re,"../../../../public/theme/appimages/Password.svg":Le,"../../../../public/theme/appimages/Plane-return.svg":Ie,"../../../../public/theme/appimages/Plane.svg":De,"../../../../public/theme/appimages/Plane_des.svg":$e,"../../../../public/theme/appimages/Plane_origin.svg":Se,"../../../../public/theme/appimages/Right_Aligned Line.svg":je,"../../../../public/theme/appimages/Route.svg":Ve,"../../../../public/theme/appimages/Search.svg":Te,"../../../../public/theme/appimages/Subtract.svg":Be,"../../../../public/theme/appimages/Viewpass.svg":Ne,"../../../../public/theme/appimages/bil.svg":ke,"../../../../public/theme/appimages/bird-unscreen.gif":Ce,"../../../../public/theme/appimages/bird.gif":xe,"../../../../public/theme/appimages/bird.jpg":Pe,"../../../../public/theme/appimages/bird.png":ye,"../../../../public/theme/appimages/bluesky.svg":we,"../../../../public/theme/appimages/blueskymainlogo.svg":fe,"../../../../public/theme/appimages/blueskywings.png":he,"../../../../public/theme/appimages/bottomfullimage.svg":be,"../../../../public/theme/appimages/bubble.svg":ve,"../../../../public/theme/appimages/carbontime.svg":de,"../../../../public/theme/appimages/email.svg":me,"../../../../public/theme/appimages/flight_management.svg":ce,"../../../../public/theme/appimages/fluent_arrow-swap-28-regular.png":ue,"../../../../public/theme/appimages/fluent_arrow-swap-28-regular.svg":ge,"../../../../public/theme/appimages/forcePassword.svg":_e,"../../../../public/theme/appimages/la.mp4":ne,"../../../../public/theme/appimages/location.svg":pe,"../../../../public/theme/appimages/map.svg":re,"../../../../public/theme/appimages/mlogo.png":le,"../../../../public/theme/appimages/oldpassword.svg":ie,"../../../../public/theme/appimages/otptop.svg":oe,"../../../../public/theme/appimages/passwordreset.svg":ae,"../../../../public/theme/appimages/ph_seat.svg":te,"../../../../public/theme/appimages/planedowa.png":se,"../../../../public/theme/appimages/planedowa1.png":ee,"../../../../public/theme/appimages/pp.gif":X,"../../../../public/theme/appimages/pp_old.gif":Q,"../../../../public/theme/appimages/profile_default_img.svg":Z,"../../../../public/theme/appimages/qr.svg":K,"../../../../public/theme/appimages/rqf.png":J,"../../../../public/theme/appimages/s_Hover_State.jpg":F,"../../../../public/theme/appimages/s_With_Icon.jpg":Y,"../../../../public/theme/appimages/sh3.jpg":W,"../../../../public/theme/appimages/w200.gif":M,"../../../../public/theme/appimages/world.gif":G})[`../../../../public/theme/appimages/${a}`],import.meta.url).href}function b(a){t.eDays=a,l.value=a}function q(){if(t.old_password)if(t.password)if(t.password.length<8){Notification.showToast("e","New Password minimum length is 8.");return}else if(t.password_confirmation)if(t.password_confirmation.length<8){Notification.showToast("e","Confirm password minimum length is 8.");return}else if(t.password_confirmation!==t.password){Notification.showToast("e","Both field password must be same.");return}else if(t.password==t.old_password){Notification.showToast("e","Current password can not be new password.");return}else if(l<100){Notification.showToast("e","Enter password as per policy.");return}else if(t.eDays){if(t.eDays<=0&&t.eDays>90){Notification.showToast("e","Expire days should be between 1-90.");return}}else{Notification.showToast("e","Enter expire days.");return}else{Notification.showToast("e","Please enter confirm password.");return}else{Notification.showToast("e","Please enter new password.");return}else{Notification.showToast("e","Please enter old password first.");return}u.value=!0,c.value="Reseting..";const a={headers:{Authorization:"Bearer "+g.decryptWithAES(g.token),Accept:"application/json"}};axios.post("/api/ForcePassReset",t,a).then(e=>{u.value=!1,c.value="Reset Password",console.log(e.data),Notification.showToast("s",e.data.message),g.logout(),h.push({name:"Login"})}).catch(e=>{u.value=!1,c.value="Reset Password",console.log(e),Notification.showToast("e",e.response.data.message)})}function z(){g.logout(),h.push({name:"Login"})}function O(a){var e=new Array;e.push("[A-Z]"),e.push("[a-z]"),e.push("[0-9]"),e.push("[$@$!%*#?&]");for(var _=0,o=0;o<e.length;o++)new RegExp(e[o]).test(a)&&_++;switch(_){case 1:l.value=20;break;case 2:l.value=40;break;case 3:l.value=60;break;case 4:l.value=80;break}}return Xe(t,(a,e)=>{let _=a.password.length>=8;O(a.password),console.log(l.value),_?l.value=l.value+20:l.value=l.value-20,a.password.length>0?f.value=!0:(f.value=!1,l.value=0),a.password_confirmation.length>0?y.value=!0:y.value=!1,a.old_password.length>0?x.value=!0:x.value=!1}),(a,e)=>{const _=es("tippy");return T(),B("div",ws,[e[17]||(e[17]=ss('<div class="d-flex justify-content-between" data-v-8c30a911><div class="d-flex justify-content-start mt-3 ml-4" data-v-8c30a911><div class="p-2 align-content-center" data-v-8c30a911><img src="'+rs+'" width="35" height="35" alt="rbird" data-v-8c30a911></div><div class="p-1 align-content-center" data-v-8c30a911><img src="'+ps+'" height="35" alt="rlogo" data-v-8c30a911></div></div><img src="'+ns+'" class="buble" alt="rlogo" data-v-8c30a911></div>',1)),s("div",ys,[s("div",Ps,[s("div",xs,[e[15]||(e[15]=s("div",{class:"text-center"},[s("img",{src:us,alt:""})],-1)),e[16]||(e[16]=s("p",{class:"p1"},"Password Reset",-1)),s("p",Cs,[e[8]||(e[8]=V(" Your password has been expired, set a new password. You can select a password expire period limit of ")),e[9]||(e[9]=s("span",{class:"zero-ninty"},"0-90 days.",-1)),n(s("i",ks,null,512),[[_,{content:"* Uppercase and Lowercase   * special character   * contain a number   * Eight characters",theme:"tomato"}]])]),ts(as(fs),{"current-value":l.value,height:"100",color:"#3eb750",strip:!0,animation:!0},null,8,["current-value"]),s("div",Ns,[e[10]||(e[10]=s("img",{class:"position-absolute p-2",src:cs,height:"40",width:"40",alt:"leftmap"},null,-1)),n(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.old_password=o),class:"form-control form-control-lg pl-5",placeholder:"Old Password",name:"old_password",id:"old_password",type:v.value?"text":"password"},null,8,Bs),[[k,t.old_password]]),s("img",{onClick:A,class:"position-absolute p-2",src:C.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,Ts),n(s("img",{onClick:U,class:"position-absolute p-2",src:I.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,Vs),[[N,x.value]])]),s("div",js,[e[11]||(e[11]=s("img",{class:"position-absolute p-2",src:j,height:"40",width:"40",alt:"leftmap"},null,-1)),n(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.password=o),class:"form-control form-control-lg pl-5",placeholder:"New Password",name:"password",id:"password",type:m.value?"text":"password"},null,8,Ss),[[k,t.password]]),s("img",{onClick:L,class:"position-absolute p-2",src:w.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,$s),n(s("img",{onClick:H,class:"position-absolute p-2",src:$.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,Ds),[[N,f.value]])]),s("div",Is,[e[12]||(e[12]=s("img",{class:"position-absolute p-2",src:j,height:"40",width:"40",alt:"leftmap"},null,-1)),n(s("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.password_confirmation=o),class:"form-control form-control-lg pl-5",type:d.value?"text":"password",required:"",placeholder:"Confirm Password"},null,8,Ls),[[k,t.password_confirmation]]),s("img",{onClick:R,class:"position-absolute p-2",src:P.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,Rs),n(s("img",{onClick:E,class:"position-absolute p-2",src:D.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,As),[[N,y.value]])]),s("div",Hs,[s("div",Es,[s("div",Us,[e[13]||(e[13]=s("img",{class:"position-absolute p-2",src:ms,height:"40",width:"40",alt:"leftmap"},null,-1)),n(s("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.eDays=o),class:"form-control form-control-lg pl-5",min:"1",max:"90",type:"number",required:"",placeholder:"Days Limit"},null,512),[[os,t.eDays]])])]),s("div",qs,[s("div",zs,[s("button",{onClick:e[4]||(e[4]=o=>b(15)),class:"btn btn-outline-primary ml-2"}," 15 "),s("button",{onClick:e[5]||(e[5]=o=>b(30)),class:"btn btn-outline-primary ml-1"}," 30 "),s("button",{onClick:e[6]||(e[6]=o=>b(45)),class:"btn btn-outline-primary ml-1"}," 45 "),s("button",{onClick:e[7]||(e[7]=o=>b(90)),class:"btn btn-outline-primary ml-1"}," 90 ")])])]),s("div",Os,[s("div",Gs,[s("button",{disabled:u.value,onClick:q,class:"btn btn-primary rounded-2 w-100"},[u.value?(T(),B("img",Ws)):is("",!0),s("span",Ys,ls(c.value),1)],8,Ms)])]),s("div",{class:"text-center mt-4"},[s("p",{class:"p3",onClick:z},e[14]||(e[14]=[s("i",{class:"fas fa-angle-left"},null,-1),V(" Back to Login ")]))])])])]),e[18]||(e[18]=s("footer",{class:"fixed-bottom"},[s("img",{src:gs,class:"img-fluid w-100",alt:"leftcityBottom"})],-1))])}}},ot=S(Fs,[["__scopeId","data-v-8c30a911"]]);export{ot as default};
