<<<<<<<< HEAD:public/build/assets/create-EiCmejyM.js
import{a as b,f as y,e as g,h,i as x,c as d,o as m,b as t,p as u,q as c,d as p,w as a,v as n,G as w}from"./app-DfN-0Zj9.js";import{_ as C}from"./Plane_origin-DMaQ2OAv.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const A={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},k={class:"ps-3"},B={"aria-label":"breadcrumb"},N={class:"breadcrumb mb-0 p-0"},S={class:"breadcrumb-item"},T={class:"breadcrumb-item"},V={class:"breadcrumb-item"},E={class:"card"},L={id:"addAirlinesform"},P={class:"card-body"},U={class:"row"},D={class:"col-md-4"},F={class:"col-md-4"},I={class:"col-md-4"},M={class:"col-md-4 mt-2"},R={class:"col-md-4 mt-2"},j={class:"col-md-4 mt-2"},q={class:"mb-3 pt-0 mx-auto"},z=["src"],G={key:1,src:C,height:"60",width:"60",class:"border border-1 rounded rounded-2",alt:"Profile Picture"},H={class:"card-footer"},X={__name:"create",setup(W){const f=b(),s=y({name:"",airline_picture:"",code:"",country:"",airlines_business_type:"",useEmail:f.email}),l=g(""),_=i=>{s.airline_picture=i.target.files[0];const e=new FileReader;e.readAsDataURL(s.airline_picture),e.onload=r=>{l.value=r.target.result}};h(()=>{});async function v(){try{const i=b(),e=i.decryptWithAES(i.token),r=await axios.post("/api/Airlines/save",s,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+e,Accept:"application/json"}});l.value="",document.getElementById("addAirlinesform").reset(),Notification.showToast("s",r.data.message)}catch(i){ErrorCatch.CatchError(i)}}return(i,e)=>{const r=x("router-link");return m(),d(w,null,[t("div",A,[e[9]||(e[9]=t("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),t("div",k,[t("nav",B,[t("ol",N,[t("li",S,[u(r,{to:{name:"Home"}},{default:c(()=>e[5]||(e[5]=[p("Dashboard")])),_:1})]),t("li",T,[u(r,{to:{name:"airlinesList"}},{default:c(()=>e[6]||(e[6]=[p("Settings")])),_:1})]),t("li",V,[u(r,{to:{name:"airlinesList"}},{default:c(()=>e[7]||(e[7]=[p("Airlines List")])),_:1})]),e[8]||(e[8]=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New Airlines",-1))])])])]),t("div",E,[e[17]||(e[17]=t("div",{class:"card-header"},[t("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Create New Airlines")],-1)),t("form",L,[t("div",P,[t("div",U,[t("div",D,[e[10]||(e[10]=t("label",{for:"input1",class:"form-label"},"Airlines Name",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.name=o),class:"form-control",id:"name",name:"name",placeholder:"Airlines Name"},null,512),[[n,s.name]])]),t("div",F,[e[11]||(e[11]=t("label",{for:"input1",class:"form-label"},"Code",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.code=o),class:"form-control",id:"code",name:"code",placeholder:"Code"},null,512),[[n,s.code]])]),t("div",I,[e[12]||(e[12]=t("label",{for:"input1",class:"form-label"},"Country",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>s.country=o),class:"form-control",id:"country",name:"country",placeholder:"Country"},null,512),[[n,s.country]])]),t("div",M,[e[13]||(e[13]=t("label",{for:"input1",class:"form-label"},"Business Type",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>s.airlines_business_type=o),class:"form-control",id:"airlines_business_type",name:"airlines_business_type",placeholder:"Business Type"},null,512),[[n,s.airlines_business_type]])]),t("div",R,[e[14]||(e[14]=t("label",{for:"input1",class:"form-label"},"Logo Upload",-1)),t("input",{type:"file",id:"profile-picture",ref:"profilePicture",class:"w-1/2",onChange:_,accept:"image/*"},null,544)]),t("div",j,[e[15]||(e[15]=t("label",{for:"input1",class:"form-label"},"Preview Logo",-1)),t("div",q,[l.value?(m(),d("img",{key:0,src:l.value,height:"60",width:"60",class:"border border-1 rounded rounded-2",alt:"Profile Picture"},null,8,z)):(m(),d("img",G))])])])]),t("div",H,[t("button",{type:"button",onClick:e[4]||(e[4]=o=>v()),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),e[16]||(e[16]=t("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{X as default};
========
import{a as b,f as y,e as g,h,i as x,c as d,o as m,b as t,p as u,q as c,d as p,w as a,v as n,G as w}from"./app-DxLH5EeE.js";import{_ as C}from"./Plane_origin-DMaQ2OAv.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const A={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},k={class:"ps-3"},B={"aria-label":"breadcrumb"},N={class:"breadcrumb mb-0 p-0"},S={class:"breadcrumb-item"},T={class:"breadcrumb-item"},V={class:"breadcrumb-item"},E={class:"card"},L={id:"addAirlinesform"},P={class:"card-body"},U={class:"row"},D={class:"col-md-4"},F={class:"col-md-4"},I={class:"col-md-4"},M={class:"col-md-4 mt-2"},R={class:"col-md-4 mt-2"},j={class:"col-md-4 mt-2"},q={class:"mb-3 pt-0 mx-auto"},z=["src"],G={key:1,src:C,height:"60",width:"60",class:"border border-1 rounded rounded-2",alt:"Profile Picture"},H={class:"card-footer"},X={__name:"create",setup(W){const f=b(),s=y({name:"",airline_picture:"",code:"",country:"",airlines_business_type:"",useEmail:f.email}),l=g(""),_=i=>{s.airline_picture=i.target.files[0];const e=new FileReader;e.readAsDataURL(s.airline_picture),e.onload=r=>{l.value=r.target.result}};h(()=>{});async function v(){try{const i=b(),e=i.decryptWithAES(i.token),r=await axios.post("/api/Airlines/save",s,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+e,Accept:"application/json"}});l.value="",document.getElementById("addAirlinesform").reset(),Notification.showToast("s",r.data.message)}catch(i){ErrorCatch.CatchError(i)}}return(i,e)=>{const r=x("router-link");return m(),d(w,null,[t("div",A,[e[9]||(e[9]=t("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),t("div",k,[t("nav",B,[t("ol",N,[t("li",S,[u(r,{to:{name:"Home"}},{default:c(()=>e[5]||(e[5]=[p("Dashboard")])),_:1})]),t("li",T,[u(r,{to:{name:"airlinesList"}},{default:c(()=>e[6]||(e[6]=[p("Settings")])),_:1})]),t("li",V,[u(r,{to:{name:"airlinesList"}},{default:c(()=>e[7]||(e[7]=[p("Airlines List")])),_:1})]),e[8]||(e[8]=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New Airlines",-1))])])])]),t("div",E,[e[17]||(e[17]=t("div",{class:"card-header"},[t("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Create New Airlines")],-1)),t("form",L,[t("div",P,[t("div",U,[t("div",D,[e[10]||(e[10]=t("label",{for:"input1",class:"form-label"},"Airlines Name",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.name=o),class:"form-control",id:"name",name:"name",placeholder:"Airlines Name"},null,512),[[n,s.name]])]),t("div",F,[e[11]||(e[11]=t("label",{for:"input1",class:"form-label"},"Code",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.code=o),class:"form-control",id:"code",name:"code",placeholder:"Code"},null,512),[[n,s.code]])]),t("div",I,[e[12]||(e[12]=t("label",{for:"input1",class:"form-label"},"Country",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>s.country=o),class:"form-control",id:"country",name:"country",placeholder:"Country"},null,512),[[n,s.country]])]),t("div",M,[e[13]||(e[13]=t("label",{for:"input1",class:"form-label"},"Business Type",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>s.airlines_business_type=o),class:"form-control",id:"airlines_business_type",name:"airlines_business_type",placeholder:"Business Type"},null,512),[[n,s.airlines_business_type]])]),t("div",R,[e[14]||(e[14]=t("label",{for:"input1",class:"form-label"},"Logo Upload",-1)),t("input",{type:"file",id:"profile-picture",ref:"profilePicture",class:"w-1/2",onChange:_,accept:"image/*"},null,544)]),t("div",j,[e[15]||(e[15]=t("label",{for:"input1",class:"form-label"},"Preview Logo",-1)),t("div",q,[l.value?(m(),d("img",{key:0,src:l.value,height:"60",width:"60",class:"border border-1 rounded rounded-2",alt:"Profile Picture"},null,8,z)):(m(),d("img",G))])])])]),t("div",H,[t("button",{type:"button",onClick:e[4]||(e[4]=o=>v()),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),e[16]||(e[16]=t("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{X as default};
>>>>>>>> d41cb144cfbd09063886f40a7f1b4c83ac61921b:public/build/assets/create-Nhr6Z8I6.js
