import{_ as N,a as T,b as j,c as A,d as q,e as D,f as M,g as V,h as F,i as L,j as R,k as z,l as W,m as G,n as O,o as U,p as Y,q as E,r as H,s as K,t as $,u as J,v as Q,w as Z,x as X,y as aa,z as sa,A as ta,B as ea,C as ia,D as oa,E as la,F as da,G as pa,H as na,I as _a,J as ra,K as ga,L as ma,M as ca,N as va,O as ba,P as ua,Q as fa,R as ha,S as wa,T as ya,U as xa}from"./world-BauW_Sfr.js";import{_ as Pa,u as Ia,a as ka,e as l,f as Ca,g as Sa,h as Ba,i as Na,o as w,c as y,b as s,j as x,k as Ta,w as u,v as ja,l as o,m as Aa,n as qa,p as Da,q as Ma,d,s as Va,t as Fa,x as p,y as La,z as f}from"./app-DnFq9Ek8.js";import{_ as Ra,a as za,b as P}from"./blueskymainlogo-DOJdMQmh.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const Wa="/build/assets/la-cSMpcCoo.mp4",Ga="/build/assets/sh3-L5wL44qk.jpg",Oa="/build/assets/Subtract-BFwsbQcn.svg",Ua="/build/assets/planedowa1-CNqOGG3o.png",Ya="/build/assets/map-B9IMYkFr.svg",Ea="/build/assets/bil-WBZR8aoK.svg",Ha="/build/assets/bird-B0eYdarP.png",Ka="/build/assets/Admin-Cu7GDvKI.svg",$a="/build/assets/Password-x1lF_rPm.svg",Ja="/build/assets/BottomrImage-DgKPG1G8.svg",Qa={class:"container-fluid vh-100 d-flex flex-column"},Za={class:"row vh-100 content"},Xa={class:"col-lg-6 col-md-12 col-sm-12 p-0 position-relative"},as={class:"h-100 d-flex flex-column"},ss={class:"container-fluid mx-auto"},ts={class:"row justify-content-center"},es={class:"col-lg-6 col-md-6 col-sm-10"},is={class:"mt-3"},os={class:"position-relative"},ls={class:"position-relative"},ds=["type"],ps=["src"],ns=["src"],_s={class:"d-flex justify-content-between align-items-center mt-3"},rs={class:"mt-3 mb-1 w-100"},gs=["disabled"],ms={key:0,class:"center-body position-absolute",style:{"margin-top":"-40px"}},cs={role:"status"},vs={class:"clientDetails"},bs={__name:"Login",setup(us){const h=Ia(),e=ka(),r=l(!1),m=l(!1),c=l(g("HidePassword.svg")),I=l(g("Cross.svg")),i=Ca({email:"",password:""}),n=l(!1),_=l("");_.value="login";function k(){if(e.email){if(!i.password||i.password.length<4){Notification.showToast("e","Please enter your valid password.");return}}else{Notification.showToast("e","Please enter your email address.");return}n.value=!0,_.value="Loading..",La.post("/api/login",{email:e.email,password:i.password,IPinfo:e.sInfo}).then(t=>{n.value=!1,_.value="Login",e.token=e.encryptWithAES(t.data.data.access_token),e.email=t.data.data.email,e.name=t.data.data.name,e.ExpireInSec=t.data.data.expires_in_sec,e.getRequire_2fa=t.data.data.require_2fa,e.getotp_regisered=t.data.data.registered_2fa,e.getgoogle2fa_secret=t.data.data.google2fa_secret,e.getgoogle2fa_qr=t.data.data.google2fa_qr,t.data.data.registered_2fa==1&&(e.getgoogle2fa_secret="",e.getgoogle2fa_qr=""),t.data.data.require_2fa==0&&(e.getotp_regisered=1,e.getotpChecked=1,e.isLogged=e.encryptWithAES("1")),t.data.message=="Your password must be change."&&(e.forcePassChange=e.encryptWithAES("1"),Notification.showToast("i",t.data.message)),e.runTaskWithTimer(t.data.data.expires_in_sec),h.push({name:"register2fa"})}).catch(t=>{if(n.value=!1,_.value="Login",t.response.status=="404"||t.response.status=="422"){const a=t.response.data.data.RA,v=t.response.data.data.PE;if(a){Notification.showToast("e",t.response.data.message+" Attamps "+a+" of 3"),e.loginAttapms=t.response.data.data.RA;return}else if(v)Notification.showToast("e",t.response.data.message),h.push({name:"ForcePassChange"});else{Notification.showToast("e",t.response.data.message);return}}Notification.showToast("e",t.response.data.data.error)})}function C(){r.value==!0?(r.value=!1,c.value=g("HidePassword.svg")):(r.value=!0,c.value=g("Viewpass.svg"))}function S(){i.password=""}function g(t){return new URL(Object.assign({"../../../../public/theme/appimages/1.png":N,"../../../../public/theme/appimages/2.png":T,"../../../../public/theme/appimages/3.png":j,"../../../../public/theme/appimages/Admin.svg":A,"../../../../public/theme/appimages/BottomrImage.svg":q,"../../../../public/theme/appimages/Cross.svg":D,"../../../../public/theme/appimages/HidePassword.svg":M,"../../../../public/theme/appimages/Key-Pass.svg":V,"../../../../public/theme/appimages/Mobile_Button With_Icon.jpg":F,"../../../../public/theme/appimages/Overlay.svg":L,"../../../../public/theme/appimages/Password.svg":R,"../../../../public/theme/appimages/Plane.svg":z,"../../../../public/theme/appimages/Plane_des.svg":W,"../../../../public/theme/appimages/Search.svg":G,"../../../../public/theme/appimages/Subtract.svg":O,"../../../../public/theme/appimages/Viewpass.svg":U,"../../../../public/theme/appimages/bil.svg":Y,"../../../../public/theme/appimages/bird-unscreen.gif":E,"../../../../public/theme/appimages/bird.gif":H,"../../../../public/theme/appimages/bird.jpg":K,"../../../../public/theme/appimages/bird.png":$,"../../../../public/theme/appimages/bluesky.svg":J,"../../../../public/theme/appimages/blueskymainlogo.svg":Q,"../../../../public/theme/appimages/blueskywings.png":Z,"../../../../public/theme/appimages/bottomfullimage.svg":X,"../../../../public/theme/appimages/bubble.svg":aa,"../../../../public/theme/appimages/carbontime.svg":sa,"../../../../public/theme/appimages/email.svg":ta,"../../../../public/theme/appimages/fluent_arrow-swap-28-regular.png":ea,"../../../../public/theme/appimages/fluent_arrow-swap-28-regular.svg":ia,"../../../../public/theme/appimages/forcePassword.svg":oa,"../../../../public/theme/appimages/la.mp4":la,"../../../../public/theme/appimages/map.svg":da,"../../../../public/theme/appimages/mlogo.png":pa,"../../../../public/theme/appimages/oldpassword.svg":na,"../../../../public/theme/appimages/otptop.svg":_a,"../../../../public/theme/appimages/passwordreset.svg":ra,"../../../../public/theme/appimages/planedowa.png":ga,"../../../../public/theme/appimages/planedowa1.png":ma,"../../../../public/theme/appimages/pp.gif":ca,"../../../../public/theme/appimages/profile_default_img.svg":va,"../../../../public/theme/appimages/qr.svg":ba,"../../../../public/theme/appimages/rqf.png":ua,"../../../../public/theme/appimages/s_Hover_State.jpg":fa,"../../../../public/theme/appimages/s_With_Icon.jpg":ha,"../../../../public/theme/appimages/sh3.jpg":wa,"../../../../public/theme/appimages/w200.gif":ya,"../../../../public/theme/appimages/world.gif":xa})[`../../../../public/theme/appimages/${t}`],import.meta.url).href}Sa(i,(t,a)=>{t.password.length>0?m.value=!0:m.value=!1});function B(){fetch("https://geolocation-db.com/json/").then(t=>t.text()).then(function(t){const a=JSON.parse(t);a.devicetype=MF.initCap(f.deviceType()),a.os=f.osName()+" "+f.osVersion(),e.sInfo=a})}return Ba(()=>{B()}),(t,a)=>{const v=Na("router-link");return w(),y("div",Qa,[s("div",Za,[a[18]||(a[18]=x('<div class="d-none d-lg-flex col-lg-6 flex-column p-0 position-relative" data-v-b270349d><video style="z-index:1;" class="vid" src="'+Wa+'" autoplay loop muted data-v-b270349d></video><img style="z-index:2;" class="mixbl shadow-lg" src="'+Ga+'" alt="" data-v-b270349d><img class="mixbl2" style="z-index:3;" src="'+Oa+'" alt="" data-v-b270349d><img src="'+Ua+'" style="height:190px;margin-top:330px;margin-left:-425px;z-index:2;" class="img-fluid position-absolute" alt="lesstmap" data-v-b270349d><img src="'+Ya+'" style="height:180px;margin-top:410px;margin-left:100px;z-index:5;" class="img-fluid position-absolute" alt="leftmap" data-v-b270349d><img src="'+Ea+'" style="z-index:6;" class="img-fluid imgBottom" alt="leftcityBottom" data-v-b270349d><div style="z-index:7;" class="position-absolute" data-v-b270349d><div class="h-100 d-flex flex-column p-4 position-relative" data-v-b270349d><div class="mt-2 leftfirstpara" data-v-b270349d> Unlocking The Future Of Travel Management <br data-v-b270349d> With <span class="leftfirstparaspan" data-v-b270349d>BlueSky NDC Platform</span></div><div class="mt-3 leftsecpara" data-v-b270349d> The perfect way to manage your B2B Agents. Automate the Sales process,<br data-v-b270349d> Reduce response time and Increase growth to your business </div><div class="mt-4" data-v-b270349d><div class="d-flex justify-content-center leftboletpoint" data-v-b270349d><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Dynamic Pricing </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Inventory Management </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Inventory Management </div></div><div class="d-flex justify-content-center leftboletpoint" data-v-b270349d><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Real-time Feed</div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> Integrated Analytics </div><div class="w-100" data-v-b270349d><i class="fas fa-star fastar" data-v-b270349d></i> CRM</div></div></div></div></div></div>',1)),s("div",Xa,[a[16]||(a[16]=s("img",{src:Ra,class:"buble",alt:"rlogo"},null,-1)),s("div",as,[a[15]||(a[15]=x('<div class="d-none d-lg-flex d-xl-flex justify-content-start mt-3" data-v-b270349d><div class="p-2 align-content-center" data-v-b270349d><img src="'+za+'" width="35" height="35" alt="rbird" data-v-b270349d></div><div class="p-1 align-content-center" style="margin-left:-7px;" data-v-b270349d><img src="'+P+'" height="35" alt="rlogo" data-v-b270349d></div></div><div class="d-flex justify-content-center mt-5" data-v-b270349d><div class="d-none d-lg-block d-xl-block" data-v-b270349d><p class="well p-0 m-0" data-v-b270349d>Nice To See You !</p><p class="wellbellow p-0 m-0" data-v-b270349d>Bluesky NDC Travel Platform</p></div><div class="d-lg-none d-xl-none d-sm-block mt-5" data-v-b270349d><p class="well p-0 m-0" data-v-b270349d>Nice To See You !</p><div class="d-flex justify-content-center justify-content-lg-start" data-v-b270349d><div class="p-2" data-v-b270349d><img src="'+Ha+'" width="40" height="30" alt="rbird" data-v-b270349d></div><div class="p-1 align-content-center" style="margin-left:-7px;" data-v-b270349d><img src="'+P+'" height="35" alt="rlogo" data-v-b270349d></div></div></div></div>',2)),s("div",ss,[s("form",{onSubmit:Ta(k,["prevent"])},[s("div",ts,[s("div",es,[s("div",is,[a[4]||(a[4]=s("label",{for:"exampleFormControlInput1",class:"form-label"},"Email or Phone",-1)),s("div",os,[a[2]||(a[2]=s("img",{class:"position-absolute p-2",src:Ka,height:"40",width:"40",alt:"leftmap"},null,-1)),u(s("input",{"onUpdate:modelValue":a[0]||(a[0]=b=>o(e).email=b),class:"form-control form-control-lg",type:"email",required:"",placeholder:"Enter your email or phone"},null,512),[[ja,o(e).email]])]),a[5]||(a[5]=s("label",{for:"exampleFormControlInput1",class:"form-label mt-3"},"Password",-1)),s("div",ls,[a[3]||(a[3]=s("img",{class:"position-absolute p-2",src:$a,height:"40",width:"40",alt:"leftmap"},null,-1)),u(s("input",{class:"form-control form-control-lg pl-5","onUpdate:modelValue":a[1]||(a[1]=b=>i.password=b),placeholder:"Enter Your Password",name:"password",id:"password",type:r.value?"text":"password"},null,8,ds),[[Aa,i.password]]),s("img",{onClick:C,class:"position-absolute p-2",src:c.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px"}},null,8,ps),u(s("img",{onClick:S,class:"position-absolute p-2",src:I.value,height:"40",width:"40",id:"eye",alt:"leftmap",style:{cursor:"pointer",top:"2px",right:"0px","margin-right":"30px"}},null,8,ns),[[qa,m.value]])])]),s("div",_s,[a[7]||(a[7]=s("div",{class:"custom-control custom-checkbox"},null,-1)),Da(v,{class:"forgetpassword fw-bold",to:{name:"sendResetLinkEmail"}},{default:Ma(()=>a[6]||(a[6]=[d("Forgot Password?")])),_:1})]),s("div",rs,[s("button",{disabled:n.value,type:"submit",class:"btn btn-primary w-100 rounded-2 position-relative"},[n.value?(w(),y("div",ms,a[8]||(a[8]=[s("div",{class:"loader-circle-57"},[s("img",{class:"position-absolute",src:Va,height:"16",width:"16",alt:""})],-1)]))):Fa("",!0),s("span",cs,p(_.value),1)],8,gs)]),s("p",vs,[a[9]||(a[9]=d("IP : ")),s("b",null,p(o(e).sInfo.IPv4),1),a[10]||(a[10]=d(" City : ")),s("b",null,p(o(e).sInfo.city),1),a[11]||(a[11]=d(" Contry : ")),s("b",null,p(o(e).sInfo.country_code),1),a[12]||(a[12]=d(" Device : ")),s("b",null,p(o(e).sInfo.devicetype),1),a[13]||(a[13]=d(" OS : ")),s("b",null,p(o(e).sInfo.os),1)]),a[14]||(a[14]=s("div",{class:"mt-5 text-center w-100"},[s("p",{class:"it"},"Information Technology | Galaxy Bangladesh")],-1))])])],32)])]),a[17]||(a[17]=s("img",{src:Ja,class:"w-100 img-fluid imgBottom",alt:"leftcityBottom"},null,-1))])])])}}},Is=Pa(bs,[["__scopeId","data-v-b270349d"]]);export{Is as default};
