import{_ as N,a as T,b as j,c as A,d as q,e as D,f as M,g as V,h as F,i as L,j as R,k as z,l as W,m as G,n as O,o as Y,p as U,q as E,r as H,s as K,t as $,u as J,v as Q,w as X,x as Z,y as aa,z as sa,A as ea,B as ta,C as ia,D as oa,E as la,F as pa,G as da,H as na,I as _a,J as ra,K as ga,L as ma,M as ca,N as va,O as ba,P as ua,Q as fa,R as ha,S as wa,T as ya,U as xa,V as Pa,W as Ia,X as ka,Y as Ca}from"./world-A9rQjWgy.js";import{_ as Sa,u as Ba,a as Na,e as l,f as Ta,g as ja,h as Aa,i as qa,o as w,c as y,b as s,j as x,k as Da,w as u,v as Ma,l as o,m as Va,n as Fa,p as La,q as Ra,d as p,s as za,t as Wa,x as d,y as Ga,z as f}from"./app-BFB64HOy.js";import{_ as Oa,a as Ya,b as P}from"./blueskymainlogo-DOJdMQmh.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const Ua="/build/assets/la-cSMpcCoo.mp4",Ea="/build/assets/sh3-L5wL44qk.jpg",Ha="/build/assets/Subtract-BFwsbQcn.svg",Ka="/build/assets/planedowa1-CNqOGG3o.png",$a="/build/assets/map-B9IMYkFr.svg",Ja="/build/assets/bil-WBZR8aoK.svg",Qa="/build/assets/bird-B0eYdarP.png",Xa="/build/assets/Admin-Cu7GDvKI.svg",Za="/build/assets/Password-x1lF_rPm.svg",as="/build/assets/BottomrImage-DgKPG1G8.svg",ss={class:"container-fluid vh-100 d-flex flex-column"},es={class:"row vh-100 content"},ts={class:"col-lg-6 col-md-12 col-sm-12 p-0 position-relative"},is={class:"h-100 d-flex flex-column"},os={class:"container-fluid mx-auto"},ls={class:"row justify-content-center"},ps={class:"col-lg-6 col-md-6 col-sm-10"},ds={class:"mt-3"},ns={class:"position-relative"},_s={class:"position-relative"},rs=["type"],gs=["src"],ms=["src"],cs={class:"d-flex justify-content-between align-items-center mt-3"},vs={class:"mt-3 mb-1 w-100"},bs=["disabled"],us={key:0,class:"center-body position-absolute",style:{"margin-top":"-40px"}},fs={role:"status"},hs={class:"clientDetails"},ws={__name:"Login",setup(ys){const h=Ba(),t=Na(),r=l(!1),m=l(!1),c=l(g("HidePassword.svg")),I=l(g("Cross.svg")),i=Ta({email:"",password:""}),n=l(!1),_=l("");_.value="login";function k(){if(t.email){if(!i.password||i.password.length<4){Notification.showToast("e","Please enter your valid password.");return}}else{Notification.showToast("e","Please enter your email address.");return}n.value=!0,_.value="Loading..",Ga.post("/api/login",{email:t.email,password:i.password,IPinfo:t.sInfo}).then(e=>{n.value=!1,_.value="Login",t.token=t.encryptWithAES(e.data.data.access_token),t.email=e.data.data.email,t.name=e.data.data.name,t.ExpireInSec=e.data.data.expires_in_sec,t.getRequire_2fa=e.data.data.require_2fa,t.getotp_regisered=e.data.data.registered_2fa,t.getgoogle2fa_secret=e.data.data.google2fa_secret,t.getgoogle2fa_qr=e.data.data.google2fa_qr,e.data.data.registered_2fa==1&&(t.getgoogle2fa_secret="",t.getgoogle2fa_qr=""),e.data.data.require_2fa==0&&(t.getotp_regisered=1,t.getotpChecked=1,t.isLogged=t.encryptWithAES("1")),e.data.message=="Your password must be change."&&(t.forcePassChange=t.encryptWithAES("1"),Notification.showToast("i",e.data.message)),t.runTaskWithTimer(e.data.data.expires_in_sec),h.push({name:"register2fa"})}).catch(e=>{if(n.value=!1,_.value="Login",e.response.status=="404"||e.response.status=="422"){const a=e.response.data.data.RA,v=e.response.data.data.PE;if(a){Notification.showToast("e",e.response.data.message+" Attamps "+a+" of 3"),t.loginAttapms=e.response.data.data.RA;return}else if(v)Notification.showToast("e",e.response.data.message),h.push({name:"ForcePassChange"});else{Notification.showToast("e",e.response.data.message);return}}Notification.showToast("e",e.response.data.data.error)})}function C(){r.value==!0?(r.value=!1,c.value=g("HidePassword.svg")):(r.value=!0,c.value=g("Viewpass.svg"))}function S(){i.password=""}function g(e){return new URL(Object.assign({"../../../../public/theme/appimages/1.png":N,"../../../../public/theme/appimages/2.png":T,"../../../../public/theme/appimages/3.png":j,"../../../../public/theme/appimages/Admin.svg":A,"../../../../public/theme/appimages/BottomrImage.svg":q,"../../../../public/theme/appimages/Cross.svg":D,"../../../../public/theme/appimages/HidePassword.svg":M,"../../../../public/theme/appimages/Key-Pass.svg":V,"../../../../public/theme/appimages/Mobile_Button With_Icon.jpg":F,"../../../../public/theme/appimages/Overlay.svg":L,"../../../../public/theme/appimages/Password.svg":R,"../../../../public/theme/appimages/Plane-return.svg":z,"../../../../public/theme/appimages/Plane.svg":W,"../../../../public/theme/appimages/Plane_des.svg":G,"../../../../public/theme/appimages/Plane_origin.svg":O,"../../../../public/theme/appimages/Search.svg":Y,"../../../../public/theme/appimages/Subtract.svg":U,"../../../../public/theme/appimages/Viewpass.svg":E,"../../../../public/theme/appimages/bil.svg":H,"../../../../public/theme/appimages/bird-unscreen.gif":K,"../../../../public/theme/appimages/bird.gif":$,"../../../../public/theme/appimages/bird.jpg":J,"../../../../public/theme/appimages/bird.png":Q,"../../../../public/theme/appimages/bluesky.svg":X,"../../../../public/theme/appimages/blueskymainlogo.svg":Z,"../../../../public/theme/appimages/blueskywings.png":aa,"../../../../public/theme/appimages/bottomfullimage.svg":sa,"../../../../public/theme/appimages/bubble.svg":ea,"../../../../public/theme/appimages/carbontime.svg":ta,"../../../../public/theme/appimages/email.svg":ia,"../../../../public/theme/appimages/flight_management.svg":oa,"../../../../public/theme/appimages/fluent_arrow-swap-28-regular.png":la,"../../../../public/theme/appimages/fluent_arrow-swap-28-regular.svg":pa,"../../../../public/theme/appimages/forcePassword.svg":da,"../../../../public/theme/appimages/la.mp4":na,"../../../../public/theme/appimages/map.svg":_a,"../../../../public/theme/appimages/mlogo.png":ra,"../../../../public/theme/appimages/oldpassword.svg":ga,"../../../../public/theme/appimages/otptop.svg":ma,"../../../../public/theme/appimages/passwordreset.svg":ca,"../../../../public/theme/appimages/ph_seat.svg":va,"../../../../public/theme/appimages/planedowa.png":ba,"../../../../public/theme/appimages/planedowa1.png":ua,"../../../../public/theme/appimages/pp.gif":fa,"../../../../public/theme/appimages/profile_default_img.svg":ha,"../../../../public/theme/appimages/qr.svg":wa,"../../../../public/theme/appimages/rqf.png":ya,"../../../../public/theme/appimages/s_Hover_State.jpg":xa,"../../../../public/theme/appimages/s_With_Icon.jpg":Pa,"../../../../public/theme/appimages/sh3.jpg":Ia,"../../../../public/theme/appimages/w200.gif":ka,"../../../../public/theme/appimages/world.gif":Ca})[`../../../../public/theme/appimages/${e}`],import.meta.url).href}ja(i,(e,a)=>{e.password.length>0?m.value=!0:m.value=!1});function B(){fetch("https://geolocation-db.com/json/").then(e=>e.text()).then(function(e){const a=JSON.parse(e);a.devicetype=MF.initCap(f.deviceType()),a.os=f.osName()+" "+f.osVersion(),t.sInfo=a})}return Aa(()=>{B()}),(e,a)=>{const v=qa("router-link");return w(),y("div",ss,[s("div",es,[a[18]||(a[18]=x('<div class="d-none d-lg-flex col-lg-6 flex-column p-0 position-relative" data-v-b270349d><video style="z-index:1;" class="vid" src="'+Ua+'" autoplay loop muted data-v-b270349d></video><img style="z-index:2;" class="mixbl shadow-lg" src="'+Ea+'" alt="" data-v-b270349d><img class="mixbl2" style="z-index:3;" src="'+Ha+'" alt="" data-v-b270349d><img src="'+Ka+'" style="height:190px;margin-top:330px;margin-left:-425px;z-index:2;" class="img-fluid position-absolute" alt="lesstmap" data-v-b270349d><img src="'+$a+'" style="height:180px;margin-top:410px;margin-left:100px;z-index:5;" class="img-fluid position-absolute" alt="leftmap" data-v-b270349d><img src="'+Ja+'" style="z-index:6;" class="img-fluid imgBottom" alt="leftcityBottom" data-v-b270349d><div style="z-index:7;" class="position-absolute" data-v-b270349d><div class="h-100 d-flex flex-column p-4 position-relative" data-v-b270349d><div class="mt-2 leftfirstpara" data-v-b270349d> Unlocking The Future Of Travel Management <br data-v-b270349d> With <span class="leftfirstparaspan" data-v-b270349d>BlueSky NDC Platform</span></div><div class="mt-3 leftsecpara" data-v-b270349d> The perfect way to manage your B2B Agents. Automate the Sales process,<br data-v-b270349d> Reduce response time and Increase growth to your business </div><div class="mt-4" data-v-b270349d><div class="d-flex justify-content-center leftboletpoint" data-v-b270349d><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Dynamic Pricing </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Inventory Management </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Inventory Management </div></div><div class="d-flex justify-content-center leftboletpoint" data-v-b270349d><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Real-time Feed</div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Integrated Analytics </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> CRM</div></div></div></div></div></div>',1)),s("div",ts,[a[16]||(a[16]=s("img",{src:Oa,class:"buble",alt:"rlogo"},null,-1)),s("div",is,[a[15]||(a[15]=x('<div class="d-none d-lg-flex d-xl-flex justify-content-start mt-3" data-v-b270349d><div class="p-2 align-content-center" data-v-b270349d><img src="'+Ya+'" width="35" height="35" alt="rbird" data-v-b270349d></div><div class="p-1 align-content-center" style="margin-left:-7px;" data-v-b270349d><img src="'+P+'" height="35" alt="rlogo" data-v-b270349d></div></div><div class="d-flex justify-content-center mt-5" data-v-b270349d><div class="d-none d-lg-block d-xl-block" data-v-b270349d><p class="well p-0 m-0" data-v-b270349d>Nice To See You !</p><p class="wellbellow p-0 m-0" data-v-b270349d>Bluesky NDC Travel Platform</p></div><div class="d-lg-none d-xl-none d-sm-block mt-5" data-v-b270349d><p class="well p-0 m-0" data-v-b270349d>Nice To See You !</p><div class="d-flex justify-content-center justify-content-lg-start" data-v-b270349d><div class="p-2" data-v-b270349d><img src="'+Qa+'" width="40" height="30" alt="rbird" data-v-b270349d></div><div class="p-1 align-content-center" style="margin-left:-7px;" data-v-b270349d><img src="'+P+'" height="35" alt="rlogo" data-v-b270349d></div></div></div></div>',2)),s("div",os,[s("form",{onSubmit:Da(k,["prevent"])},[s("div",ls,[s("div",ps,[s("div",ds,[a[4]||(a[4]=s("label",{for:"exampleFormControlInput1",class:"form-label"},"Email or Phone",-1)),s("div",ns,[a[2]||(a[2]=s("img",{class:"position-absolute p-2",src:Xa,height:"40",width:"40",alt:"leftmap"},null,-1)),u(s("input",{"onUpdate:modelValue":a[0]||(a[0]=b=>o(t).email=b),class:"form-control form-control-lg",type:"email",required:"",placeholder:"Enter your email or phone"},null,512),[[Ma,o(t).email]])]),a[5]||(a[5]=s("label",{for:"exampleFormControlInput1",class:"form-label mt-3"},"Password",-1)),s("div",_s,[a[3]||(a[3]=s("img",{class:"position-absolute p-2",src:Za,height:"40",width:"40",alt:"leftmap"},null,-1)),u(s("input",{class:"form-control form-control-lg pl-5","onUpdate:modelValue":a[1]||(a[1]=b=>i.password=b),placeholder:"Enter Your Password",name:"password",id:"password",type:r.value?"text":"password"},null,8,rs),[[Va,i.password]]),s("img",{onClick:C,class:"position-absolute p-2",src:c.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,gs),u(s("img",{onClick:S,class:"position-absolute p-2",src:I.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,ms),[[Fa,m.value]])])]),s("div",cs,[a[7]||(a[7]=s("div",{class:"custom-control custom-checkbox"},null,-1)),La(v,{class:"forgetpassword fw-bold",to:{name:"sendResetLinkEmail"}},{default:Ra(()=>a[6]||(a[6]=[p("Forgot Password?")])),_:1})]),s("div",vs,[s("button",{disabled:n.value,type:"submit",class:"btn btn-primary w-100 rounded-2 position-relative"},[n.value?(w(),y("div",us,a[8]||(a[8]=[s("div",{class:"loader-circle-57"},[s("img",{class:"position-absolute",src:za,height:"16",width:"16",alt:""})],-1)]))):Wa("",!0),s("span",fs,d(_.value),1)],8,bs)]),s("p",hs,[a[9]||(a[9]=p("IP : ")),s("b",null,d(o(t).sInfo.IPv4),1),a[10]||(a[10]=p(" City : ")),s("b",null,d(o(t).sInfo.city),1),a[11]||(a[11]=p(" Contry : ")),s("b",null,d(o(t).sInfo.country_code),1),a[12]||(a[12]=p(" Device : ")),s("b",null,d(o(t).sInfo.devicetype),1),a[13]||(a[13]=p(" OS : ")),s("b",null,d(o(t).sInfo.os),1)]),a[14]||(a[14]=s("div",{class:"mt-5 text-center w-100"},[s("p",{class:"it"},"Information Technology | Galaxy Bangladesh")],-1))])])],32)])]),a[17]||(a[17]=s("img",{src:as,class:"w-100 img-fluid imgBottom",alt:"leftcityBottom"},null,-1))])])])}}},Bs=Sa(ws,[["__scopeId","data-v-b270349d"]]);export{Bs as default};
