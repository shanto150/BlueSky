import{_ as N,a as T,b as j,c as A,d as q,e as D,f as M,g as V,h as F,i as L,j as R,k as z,l as G,m as O,n as W,o as Y,p as E,q as H,r as K,s as U,t as $,u as J,v as Q,w as Z,x as X,y as aa,z as sa,A as ta,B as ea,C as ia,D as oa,E as la,F as da,G as na,H as pa,I as ra,J as _a,K as ga,L as ma,M as ca,N as va,O as ba,P as ua,Q as fa}from"./world-CIgBYj8q.js";import{_ as ha,u as wa,a as ya,e as l,f as xa,g as Pa,h as Ia,i as ka,o as w,c as y,b as s,j as x,k as Ca,w as u,v as Sa,l as o,m as Ba,n as Na,p as Ta,q as ja,d,s as Aa,t as qa,x as n,y as Da,z as f}from"./app-BvHCGkAb.js";import{_ as Ma,a as Va,b as P}from"./blueskymainlogo-DOJdMQmh.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const Fa="/build/assets/la-cSMpcCoo.mp4",La="/build/assets/sh3-L5wL44qk.jpg",Ra="/build/assets/Subtract-BFwsbQcn.svg",za="/build/assets/planedowa1-CNqOGG3o.png",Ga="/build/assets/map-B9IMYkFr.svg",Oa="/build/assets/bil-WBZR8aoK.svg",Wa="/build/assets/bird-B0eYdarP.png",Ya="/build/assets/Admin-Cu7GDvKI.svg",Ea="/build/assets/Password-x1lF_rPm.svg",Ha="/build/assets/BottomrImage-DgKPG1G8.svg",Ka={class:"container-fluid vh-100 d-flex flex-column"},Ua={class:"row vh-100 content"},$a={class:"col-lg-6 col-md-12 col-sm-12 p-0 position-relative"},Ja={class:"h-100 d-flex flex-column"},Qa={class:"container-fluid mx-auto"},Za={class:"row justify-content-center"},Xa={class:"col-lg-6 col-md-6 col-sm-10"},as={class:"mt-3"},ss={class:"position-relative"},ts={class:"position-relative"},es=["type"],is=["src"],os=["src"],ls={class:"d-flex justify-content-between align-items-center mt-3"},ds={class:"mt-3 mb-1 w-100"},ns=["disabled"],ps={key:0,class:"center-body position-absolute",style:{"margin-top":"-40px"}},rs={role:"status"},_s={class:"clientDetails"},gs={__name:"Login",setup(ms){const h=wa(),e=ya(),_=l(!1),m=l(!1),c=l(g("HidePassword.svg")),I=l(g("Cross.svg")),i=xa({email:"",password:""}),p=l(!1),r=l("");r.value="login";function k(){if(e.email){if(!i.password||i.password.length<4){Notification.showToast("e","Please enter your valid password.");return}}else{Notification.showToast("e","Please enter your email address.");return}p.value=!0,r.value="Loading..",Da.post("/api/login",{email:e.email,password:i.password,IPinfo:e.sInfo}).then(t=>{p.value=!1,r.value="Login",e.token=e.encryptWithAES(t.data.data.access_token),e.email=t.data.data.email,e.name=t.data.data.name,e.ExpireInSec=t.data.data.expires_in_sec,e.getRequire_2fa=t.data.data.require_2fa,e.getotp_regisered=t.data.data.registered_2fa,e.getgoogle2fa_secret=t.data.data.google2fa_secret,e.getgoogle2fa_qr=t.data.data.google2fa_qr,t.data.data.registered_2fa==1&&(e.getgoogle2fa_secret="",e.getgoogle2fa_qr=""),t.data.data.require_2fa==0&&(e.getotp_regisered=1,e.getotpChecked=1,e.isLogged=e.encryptWithAES("1")),t.data.message=="Your password must be change."&&(e.forcePassChange=e.encryptWithAES("1"),Notification.showToast("i",t.data.message)),e.runTaskWithTimer(t.data.data.expires_in_sec),h.push({name:"register2fa"})}).catch(t=>{if(p.value=!1,r.value="Login",t.response.status=="404"||t.response.status=="422"){const a=t.response.data.data.RA,v=t.response.data.data.PE;if(a){Notification.showToast("e",t.response.data.message+" Attamps "+a+" of 3"),e.loginAttapms=t.response.data.data.RA;return}else if(v)Notification.showToast("e",t.response.data.message),h.push({name:"ForcePassChange"});else{Notification.showToast("e",t.response.data.message);return}}Notification.showToast("e",t.response.data.data.error)})}function C(){_.value==!0?(_.value=!1,c.value=g("HidePassword.svg")):(_.value=!0,c.value=g("Viewpass.svg"))}function S(){i.password=""}function g(t){return new URL(Object.assign({"../../../../public/theme/appimages/1.png":N,"../../../../public/theme/appimages/2.png":T,"../../../../public/theme/appimages/3.png":j,"../../../../public/theme/appimages/Admin.svg":A,"../../../../public/theme/appimages/BottomrImage.svg":q,"../../../../public/theme/appimages/Cross.svg":D,"../../../../public/theme/appimages/HidePassword.svg":M,"../../../../public/theme/appimages/Key-Pass.svg":V,"../../../../public/theme/appimages/Overlay.svg":F,"../../../../public/theme/appimages/Password.svg":L,"../../../../public/theme/appimages/Plane.svg":R,"../../../../public/theme/appimages/Plane_des.svg":z,"../../../../public/theme/appimages/Search.svg":G,"../../../../public/theme/appimages/Subtract.svg":O,"../../../../public/theme/appimages/Viewpass.svg":W,"../../../../public/theme/appimages/bil.svg":Y,"../../../../public/theme/appimages/bird-unscreen.gif":E,"../../../../public/theme/appimages/bird.gif":H,"../../../../public/theme/appimages/bird.jpg":K,"../../../../public/theme/appimages/bird.png":U,"../../../../public/theme/appimages/bluesky.svg":$,"../../../../public/theme/appimages/blueskymainlogo.svg":J,"../../../../public/theme/appimages/blueskywings.png":Q,"../../../../public/theme/appimages/bottomfullimage.svg":Z,"../../../../public/theme/appimages/bubble.svg":X,"../../../../public/theme/appimages/carbontime.svg":aa,"../../../../public/theme/appimages/email.svg":sa,"../../../../public/theme/appimages/forcePassword.svg":ta,"../../../../public/theme/appimages/la.mp4":ea,"../../../../public/theme/appimages/map.svg":ia,"../../../../public/theme/appimages/mlogo.png":oa,"../../../../public/theme/appimages/oldpassword.svg":la,"../../../../public/theme/appimages/otptop.svg":da,"../../../../public/theme/appimages/passwordreset.svg":na,"../../../../public/theme/appimages/planedowa.png":pa,"../../../../public/theme/appimages/planedowa1.png":ra,"../../../../public/theme/appimages/pp.gif":_a,"../../../../public/theme/appimages/qr.svg":ga,"../../../../public/theme/appimages/rqf.png":ma,"../../../../public/theme/appimages/s_Hover_State.jpg":ca,"../../../../public/theme/appimages/s_With_Icon.jpg":va,"../../../../public/theme/appimages/sh3.jpg":ba,"../../../../public/theme/appimages/w200.gif":ua,"../../../../public/theme/appimages/world.gif":fa})[`../../../../public/theme/appimages/${t}`],import.meta.url).href}Pa(i,(t,a)=>{t.password.length>0?m.value=!0:m.value=!1});function B(){fetch("https://geolocation-db.com/json/").then(t=>t.text()).then(function(t){const a=JSON.parse(t);a.devicetype=MF.initCap(f.deviceType()),a.os=f.osName()+" "+f.osVersion(),e.sInfo=a})}return Ia(()=>{B()}),(t,a)=>{const v=ka("router-link");return w(),y("div",Ka,[s("div",Ua,[a[18]||(a[18]=x('<div class="d-none d-lg-flex col-lg-6 flex-column p-0 position-relative" data-v-b270349d><video style="z-index:1;" class="vid" src="'+Fa+'" autoplay loop muted data-v-b270349d></video><img style="z-index:2;" class="mixbl shadow-lg" src="'+La+'" alt="" data-v-b270349d><img class="mixbl2" style="z-index:3;" src="'+Ra+'" alt="" data-v-b270349d><img src="'+za+'" style="height:190px;margin-top:330px;margin-left:-425px;z-index:2;" class="img-fluid position-absolute" alt="lesstmap" data-v-b270349d><img src="'+Ga+'" style="height:180px;margin-top:410px;margin-left:100px;z-index:5;" class="img-fluid position-absolute" alt="leftmap" data-v-b270349d><img src="'+Oa+'" style="z-index:6;" class="img-fluid imgBottom" alt="leftcityBottom" data-v-b270349d><div style="z-index:7;" class="position-absolute" data-v-b270349d><div class="h-100 d-flex flex-column p-4 position-relative" data-v-b270349d><div class="mt-2 leftfirstpara" data-v-b270349d> Unlocking The Future Of Travel Management <br data-v-b270349d> With <span class="leftfirstparaspan" data-v-b270349d>BlueSky NDC Platform</span></div><div class="mt-3 leftsecpara" data-v-b270349d> The perfect way to manage your B2B Agents. Automate the Sales process,<br data-v-b270349d> Reduce response time and Increase growth to your business </div><div class="mt-4" data-v-b270349d><div class="d-flex justify-content-center leftboletpoint" data-v-b270349d><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Dynamic Pricing </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Inventory Management </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Inventory Management </div></div><div class="d-flex justify-content-center leftboletpoint" data-v-b270349d><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Real-time Feed</div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Integrated Analytics </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> CRM</div></div></div></div></div></div>',1)),s("div",$a,[a[16]||(a[16]=s("img",{src:Ma,class:"buble",alt:"rlogo"},null,-1)),s("div",Ja,[a[15]||(a[15]=x('<div class="d-none d-lg-flex d-xl-flex justify-content-start mt-3" data-v-b270349d><div class="p-2 align-content-center" data-v-b270349d><img src="'+Va+'" width="35" height="35" alt="rbird" data-v-b270349d></div><div class="p-1 align-content-center" style="margin-left:-7px;" data-v-b270349d><img src="'+P+'" height="35" alt="rlogo" data-v-b270349d></div></div><div class="d-flex justify-content-center mt-5" data-v-b270349d><div class="d-none d-lg-block d-xl-block" data-v-b270349d><p class="well p-0 m-0" data-v-b270349d>Nice To See You !</p><p class="wellbellow p-0 m-0" data-v-b270349d>Bluesky NDC Travel Platform</p></div><div class="d-lg-none d-xl-none d-sm-block mt-5" data-v-b270349d><p class="well p-0 m-0" data-v-b270349d>Nice To See You !</p><div class="d-flex justify-content-center justify-content-lg-start" data-v-b270349d><div class="p-2" data-v-b270349d><img src="'+Wa+'" width="40" height="30" alt="rbird" data-v-b270349d></div><div class="p-1 align-content-center" style="margin-left:-7px;" data-v-b270349d><img src="'+P+'" height="35" alt="rlogo" data-v-b270349d></div></div></div></div>',2)),s("div",Qa,[s("form",{onSubmit:Ca(k,["prevent"])},[s("div",Za,[s("div",Xa,[s("div",as,[a[4]||(a[4]=s("label",{for:"exampleFormControlInput1",class:"form-label"},"Email or Phone",-1)),s("div",ss,[a[2]||(a[2]=s("img",{class:"position-absolute p-2",src:Ya,height:"40",width:"40",alt:"leftmap"},null,-1)),u(s("input",{"onUpdate:modelValue":a[0]||(a[0]=b=>o(e).email=b),class:"form-control form-control-lg",type:"email",required:"",placeholder:"Enter your email or phone"},null,512),[[Sa,o(e).email]])]),a[5]||(a[5]=s("label",{for:"exampleFormControlInput1",class:"form-label mt-3"},"Password",-1)),s("div",ts,[a[3]||(a[3]=s("img",{class:"position-absolute p-2",src:Ea,height:"40",width:"40",alt:"leftmap"},null,-1)),u(s("input",{class:"form-control form-control-lg pl-5","onUpdate:modelValue":a[1]||(a[1]=b=>i.password=b),placeholder:"Enter Your Password",name:"password",id:"password",type:_.value?"text":"password"},null,8,es),[[Ba,i.password]]),s("img",{onClick:C,class:"position-absolute p-2",src:c.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,is),u(s("img",{onClick:S,class:"position-absolute p-2",src:I.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,os),[[Na,m.value]])])]),s("div",ls,[a[7]||(a[7]=s("div",{class:"custom-control custom-checkbox"},null,-1)),Ta(v,{class:"forgetpassword fw-bold",to:{name:"sendResetLinkEmail"}},{default:ja(()=>a[6]||(a[6]=[d("Forgot Password?")])),_:1})]),s("div",ds,[s("button",{disabled:p.value,type:"submit",class:"btn btn-primary w-100 rounded-2 position-relative"},[p.value?(w(),y("div",ps,a[8]||(a[8]=[s("div",{class:"loader-circle-57"},[s("img",{class:"position-absolute",src:Aa,height:"16",width:"16",alt:""})],-1)]))):qa("",!0),s("span",rs,n(r.value),1)],8,ns)]),s("p",_s,[a[9]||(a[9]=d("IP : ")),s("b",null,n(o(e).sInfo.IPv4),1),a[10]||(a[10]=d(" City : ")),s("b",null,n(o(e).sInfo.city),1),a[11]||(a[11]=d(" Contry : ")),s("b",null,n(o(e).sInfo.country_code),1),a[12]||(a[12]=d(" Device : ")),s("b",null,n(o(e).sInfo.devicetype),1),a[13]||(a[13]=d(" OS : ")),s("b",null,n(o(e).sInfo.os),1)]),a[14]||(a[14]=s("div",{class:"mt-5 text-center w-100"},[s("p",{class:"it"},"Information Technology | Galaxy Bangladesh")],-1))])])],32)])]),a[17]||(a[17]=s("img",{src:Ha,class:"w-100 img-fluid imgBottom",alt:"leftcityBottom"},null,-1))])])])}}},ws=ha(gs,[["__scopeId","data-v-b270349d"]]);export{ws as default};
