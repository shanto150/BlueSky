import{_ as N,a as T,b as j,c as A,d as q,e as D,f as M,g as V,h as F,i as L,j as R,k as z,l as W,m as G,n as O,o as Y,p as U,q as E,r as H,s as K,t as $,u as J,v as Q,w as Z,x as X,y as aa,z as sa,A as ea,B as ta,C as ia,D as oa,E as la,F as pa,G as da,H as na,I as _a,J as ra,K as ga,L as ma,M as ca,N as va,O as ba,P as ua,Q as fa,R as ha,S as wa,T as ya,U as xa,V as Pa,W as Ia,X as ka,Y as Ca,Z as Sa}from"./world-C9ChjuV7.js";import{_ as Ba,u as Na,a as Ta,e as l,f as ja,g as Aa,h as qa,i as Da,c as w,o as y,b as s,j as x,k as Ma,w as u,v as Va,l as o,m as Fa,n as La,p as Ra,q as za,d as p,s as Wa,t as Ga,x as d,y as f,z as Oa}from"./app-zXj3_NWA.js";import{_ as Ya,a as Ua,b as P}from"./blueskymainlogo-DOJdMQmh.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const Ea="/build/assets/la-cSMpcCoo.mp4",Ha="/build/assets/sh3-L5wL44qk.jpg",Ka="/build/assets/Subtract-BFwsbQcn.svg",$a="/build/assets/planedowa1-CNqOGG3o.png",Ja="/build/assets/map-B9IMYkFr.svg",Qa="/build/assets/bil-WBZR8aoK.svg",Za="/build/assets/bird-B0eYdarP.png",Xa="/build/assets/Admin-Cu7GDvKI.svg",as="/build/assets/Password-x1lF_rPm.svg",ss="/build/assets/BottomrImage-DgKPG1G8.svg",es={class:"container-fluid vh-100 d-flex flex-column"},ts={class:"row vh-100 content"},is={class:"col-lg-6 col-md-12 col-sm-12 p-0 position-relative"},os={class:"h-100 d-flex flex-column"},ls={class:"container-fluid mx-auto"},ps={class:"row justify-content-center"},ds={class:"col-lg-6 col-md-6 col-sm-10"},ns={class:"mt-3"},_s={class:"position-relative"},rs={class:"position-relative"},gs=["type"],ms=["src"],cs=["src"],vs={class:"d-flex justify-content-between align-items-center mt-3"},bs={class:"mt-3 mb-1 w-100"},us=["disabled"],fs={key:0,class:"center-body position-absolute",style:{"margin-top":"-40px"}},hs={role:"status"},ws={class:"clientDetails"},ys={__name:"Login",setup(xs){const h=Na(),t=Ta(),r=l(!1),m=l(!1),c=l(g("HidePassword.svg")),I=l(g("Cross.svg")),i=ja({email:"",password:""}),n=l(!1),_=l("");_.value="login";function k(){if(t.email){if(!i.password||i.password.length<4){Notification.showToast("e","Please enter your valid password.");return}}else{Notification.showToast("e","Please enter your email address.");return}n.value=!0,_.value="Loading..",Oa.post("/api/login",{email:t.email,password:i.password,IPinfo:t.sInfo}).then(e=>{n.value=!1,_.value="Login",t.token=t.encryptWithAES(e.data.data.access_token),t.email=e.data.data.email,t.name=e.data.data.name,t.ExpireInSec=e.data.data.expires_in_sec,t.getRequire_2fa=e.data.data.require_2fa,t.getotp_regisered=e.data.data.registered_2fa,t.getgoogle2fa_secret=e.data.data.google2fa_secret,t.getgoogle2fa_qr=e.data.data.google2fa_qr,e.data.data.registered_2fa==1&&(t.getgoogle2fa_secret="",t.getgoogle2fa_qr=""),e.data.data.require_2fa==0&&(t.getotp_regisered=1,t.getotpChecked=1,t.isLogged=t.encryptWithAES("1")),e.data.message=="Your password must be change."&&(t.forcePassChange=t.encryptWithAES("1"),Notification.showToast("i",e.data.message)),t.runTaskWithTimer(e.data.data.expires_in_sec),h.push({name:"register2fa"})}).catch(e=>{if(n.value=!1,_.value="Login",e.response.status=="404"||e.response.status=="422"){const a=e.response.data.data.RA,v=e.response.data.data.PE;if(a){Notification.showToast("e",e.response.data.message+" Attamps "+a+" of 3"),t.loginAttapms=e.response.data.data.RA;return}else if(v)Notification.showToast("e",e.response.data.message),h.push({name:"ForcePassChange"});else{Notification.showToast("e",e.response.data.message);return}}Notification.showToast("e",e.response.data.data.error)})}function C(){r.value==!0?(r.value=!1,c.value=g("HidePassword.svg")):(r.value=!0,c.value=g("Viewpass.svg"))}function S(){i.password=""}function g(e){return new URL(Object.assign({"../../../../public/theme/appimages/1.png":Sa,"../../../../public/theme/appimages/2.png":Ca,"../../../../public/theme/appimages/3.png":ka,"../../../../public/theme/appimages/Admin.svg":Ia,"../../../../public/theme/appimages/BottomrImage.svg":Pa,"../../../../public/theme/appimages/Cross.svg":xa,"../../../../public/theme/appimages/HidePassword.svg":ya,"../../../../public/theme/appimages/Key-Pass.svg":wa,"../../../../public/theme/appimages/Mobile_Button With_Icon.jpg":ha,"../../../../public/theme/appimages/Overlay.svg":fa,"../../../../public/theme/appimages/Password.svg":ua,"../../../../public/theme/appimages/Plane-return.svg":ba,"../../../../public/theme/appimages/Plane.svg":va,"../../../../public/theme/appimages/Plane_des.svg":ca,"../../../../public/theme/appimages/Plane_origin.svg":ma,"../../../../public/theme/appimages/Search.svg":ga,"../../../../public/theme/appimages/Subtract.svg":ra,"../../../../public/theme/appimages/Viewpass.svg":_a,"../../../../public/theme/appimages/bil.svg":na,"../../../../public/theme/appimages/bird-unscreen.gif":da,"../../../../public/theme/appimages/bird.gif":pa,"../../../../public/theme/appimages/bird.jpg":la,"../../../../public/theme/appimages/bird.png":oa,"../../../../public/theme/appimages/bluesky.svg":ia,"../../../../public/theme/appimages/blueskymainlogo.svg":ta,"../../../../public/theme/appimages/blueskywings.png":ea,"../../../../public/theme/appimages/bottomfullimage.svg":sa,"../../../../public/theme/appimages/bubble.svg":aa,"../../../../public/theme/appimages/carbontime.svg":X,"../../../../public/theme/appimages/email.svg":Z,"../../../../public/theme/appimages/flight_management.svg":Q,"../../../../public/theme/appimages/fluent_arrow-swap-28-regular.png":J,"../../../../public/theme/appimages/fluent_arrow-swap-28-regular.svg":$,"../../../../public/theme/appimages/forcePassword.svg":K,"../../../../public/theme/appimages/la.mp4":H,"../../../../public/theme/appimages/location.svg":E,"../../../../public/theme/appimages/map.svg":U,"../../../../public/theme/appimages/mlogo.png":Y,"../../../../public/theme/appimages/oldpassword.svg":O,"../../../../public/theme/appimages/otptop.svg":G,"../../../../public/theme/appimages/passwordreset.svg":W,"../../../../public/theme/appimages/ph_seat.svg":z,"../../../../public/theme/appimages/planedowa.png":R,"../../../../public/theme/appimages/planedowa1.png":L,"../../../../public/theme/appimages/pp.gif":F,"../../../../public/theme/appimages/profile_default_img.svg":V,"../../../../public/theme/appimages/qr.svg":M,"../../../../public/theme/appimages/rqf.png":D,"../../../../public/theme/appimages/s_Hover_State.jpg":q,"../../../../public/theme/appimages/s_With_Icon.jpg":A,"../../../../public/theme/appimages/sh3.jpg":j,"../../../../public/theme/appimages/w200.gif":T,"../../../../public/theme/appimages/world.gif":N})[`../../../../public/theme/appimages/${e}`],import.meta.url).href}Aa(i,(e,a)=>{e.password.length>0?m.value=!0:m.value=!1});function B(){fetch("https://geolocation-db.com/json/").then(e=>e.text()).then(function(e){const a=JSON.parse(e);a.devicetype=MF.initCap(f.deviceType()),a.os=f.osName()+" "+f.osVersion(),t.sInfo=a})}return qa(()=>{B()}),(e,a)=>{const v=Da("router-link");return y(),w("div",es,[s("div",ts,[a[18]||(a[18]=x('<div class="d-none d-lg-flex col-lg-6 flex-column p-0 position-relative" data-v-b270349d><video style="z-index:1;" class="vid" src="'+Ea+'" autoplay loop muted data-v-b270349d></video><img style="z-index:2;" class="mixbl shadow-lg" src="'+Ha+'" alt="" data-v-b270349d><img class="mixbl2" style="z-index:3;" src="'+Ka+'" alt="" data-v-b270349d><img src="'+$a+'" style="height:190px;margin-top:330px;margin-left:-425px;z-index:2;" class="img-fluid position-absolute" alt="lesstmap" data-v-b270349d><img src="'+Ja+'" style="height:180px;margin-top:410px;margin-left:100px;z-index:5;" class="img-fluid position-absolute" alt="leftmap" data-v-b270349d><img src="'+Qa+'" style="z-index:6;" class="img-fluid imgBottom" alt="leftcityBottom" data-v-b270349d><div style="z-index:7;" class="position-absolute" data-v-b270349d><div class="h-100 d-flex flex-column p-4 position-relative" data-v-b270349d><div class="mt-2 leftfirstpara" data-v-b270349d> Unlocking The Future Of Travel Management <br data-v-b270349d> With <span class="leftfirstparaspan" data-v-b270349d>BlueSky NDC Platform</span></div><div class="mt-3 leftsecpara" data-v-b270349d> The perfect way to manage your B2B Agents. Automate the Sales process,<br data-v-b270349d> Reduce response time and Increase growth to your business </div><div class="mt-4" data-v-b270349d><div class="d-flex justify-content-center leftboletpoint" data-v-b270349d><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Dynamic Pricing </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Inventory Management </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Inventory Management </div></div><div class="d-flex justify-content-center leftboletpoint" data-v-b270349d><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Real-time Feed</div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Integrated Analytics </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> CRM</div></div></div></div></div></div>',1)),s("div",is,[a[16]||(a[16]=s("img",{src:Ya,class:"buble",alt:"rlogo"},null,-1)),s("div",os,[a[15]||(a[15]=x('<div class="d-none d-lg-flex d-xl-flex justify-content-start mt-3" data-v-b270349d><div class="p-2 align-content-center" data-v-b270349d><img src="'+Ua+'" width="35" height="35" alt="rbird" data-v-b270349d></div><div class="p-1 align-content-center" style="margin-left:-7px;" data-v-b270349d><img src="'+P+'" height="35" alt="rlogo" data-v-b270349d></div></div><div class="d-flex justify-content-center mt-5" data-v-b270349d><div class="d-none d-lg-block d-xl-block" data-v-b270349d><p class="well p-0 m-0" data-v-b270349d>Nice To See You !</p><p class="wellbellow p-0 m-0" data-v-b270349d>Bluesky NDC Travel Platform</p></div><div class="d-lg-none d-xl-none d-sm-block mt-5" data-v-b270349d><p class="well p-0 m-0" data-v-b270349d>Nice To See You !</p><div class="d-flex justify-content-center justify-content-lg-start" data-v-b270349d><div class="p-2" data-v-b270349d><img src="'+Za+'" width="40" height="30" alt="rbird" data-v-b270349d></div><div class="p-1 align-content-center" style="margin-left:-7px;" data-v-b270349d><img src="'+P+'" height="35" alt="rlogo" data-v-b270349d></div></div></div></div>',2)),s("div",ls,[s("form",{onSubmit:Ma(k,["prevent"])},[s("div",ps,[s("div",ds,[s("div",ns,[a[4]||(a[4]=s("label",{for:"exampleFormControlInput1",class:"form-label"},"Email or Phone",-1)),s("div",_s,[a[2]||(a[2]=s("img",{class:"position-absolute p-2",src:Xa,height:"40",width:"40",alt:"leftmap"},null,-1)),u(s("input",{"onUpdate:modelValue":a[0]||(a[0]=b=>o(t).email=b),class:"form-control form-control-lg",type:"email",required:"",placeholder:"Enter your email or phone"},null,512),[[Va,o(t).email]])]),a[5]||(a[5]=s("label",{for:"exampleFormControlInput1",class:"form-label mt-3"},"Password",-1)),s("div",rs,[a[3]||(a[3]=s("img",{class:"position-absolute p-2",src:as,height:"40",width:"40",alt:"leftmap"},null,-1)),u(s("input",{class:"form-control form-control-lg pl-5","onUpdate:modelValue":a[1]||(a[1]=b=>i.password=b),placeholder:"Enter Your Password",name:"password",id:"password",type:r.value?"text":"password"},null,8,gs),[[Fa,i.password]]),s("img",{onClick:C,class:"position-absolute p-2",src:c.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,ms),u(s("img",{onClick:S,class:"position-absolute p-2",src:I.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,cs),[[La,m.value]])])]),s("div",vs,[a[7]||(a[7]=s("div",{class:"custom-control custom-checkbox"},null,-1)),Ra(v,{class:"forgetpassword fw-bold",to:{name:"sendResetLinkEmail"}},{default:za(()=>a[6]||(a[6]=[p("Forgot Password?")])),_:1})]),s("div",bs,[s("button",{disabled:n.value,type:"submit",class:"btn btn-primary w-100 rounded-2 position-relative"},[n.value?(y(),w("div",fs,a[8]||(a[8]=[s("div",{class:"loader-circle-57"},[s("img",{class:"position-absolute",src:Ga,height:"16",width:"16",alt:""})],-1)]))):Wa("",!0),s("span",hs,d(_.value),1)],8,us)]),s("p",ws,[a[9]||(a[9]=p("IP : ")),s("b",null,d(o(t).sInfo.IPv4),1),a[10]||(a[10]=p(" City : ")),s("b",null,d(o(t).sInfo.city),1),a[11]||(a[11]=p(" Contry : ")),s("b",null,d(o(t).sInfo.country_code),1),a[12]||(a[12]=p(" Device : ")),s("b",null,d(o(t).sInfo.devicetype),1),a[13]||(a[13]=p(" OS : ")),s("b",null,d(o(t).sInfo.os),1)]),a[14]||(a[14]=s("div",{class:"mt-5 text-center w-100"},[s("p",{class:"it"},"Information Technology | Galaxy Bangladesh")],-1))])])],32)])]),a[17]||(a[17]=s("img",{src:ss,class:"w-100 img-fluid imgBottom",alt:"leftcityBottom"},null,-1))])])])}}},Ns=Ba(ys,[["__scopeId","data-v-b270349d"]]);export{Ns as default};
