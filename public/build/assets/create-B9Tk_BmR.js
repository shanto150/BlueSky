import{a as c,f as b,i as u,c as p,o as _,b as t,p as n,q as r,d as i,w as f,v,G as g,F as x}from"./app-BBiFSL0s.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const w={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},D={class:"ps-3"},N={"aria-label":"breadcrumb"},h={class:"breadcrumb mb-0 p-0"},y={class:"breadcrumb-item"},C={class:"breadcrumb-item"},k={class:"breadcrumb-item"},E={class:"card"},B={id:"addDeptform"},S={class:"card-body"},V={class:"row"},L={class:"col-md-12"},T={class:"card-footer"},H={__name:"create",setup(F){const l=c(),o=b({des_name:"",useEmail:l.email});async function m(){try{const s=await x.post("/Designation/save",o);document.getElementById("addDeptform").reset(),Notification.showToast("s",s.data.message)}catch(s){ErrorCatch.CatchError(s)}}return(s,e)=>{const a=u("router-link");return _(),p(g,null,[t("div",w,[e[6]||(e[6]=t("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),t("div",D,[t("nav",N,[t("ol",h,[t("li",y,[n(a,{to:{name:"Home"}},{default:r(()=>e[2]||(e[2]=[i("Dashboard")])),_:1})]),t("li",C,[n(a,{to:{name:"designationList"}},{default:r(()=>e[3]||(e[3]=[i("Setings")])),_:1})]),t("li",k,[n(a,{to:{name:"designationList"}},{default:r(()=>e[4]||(e[4]=[i("Designation List")])),_:1})]),e[5]||(e[5]=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New Designation",-1))])])])]),t("div",E,[e[9]||(e[9]=t("div",{class:"card-header"},[t("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Create New Designation")],-1)),t("form",B,[t("div",S,[t("div",V,[t("div",L,[e[7]||(e[7]=t("label",{for:"input1",class:"form-label"},"Name",-1)),f(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=d=>o.des_name=d),class:"form-control form-control-sm",id:"des_name",name:"des_name",placeholder:"Enter Name"},null,512),[[v,o.des_name]])])])]),t("div",T,[t("button",{type:"button",onClick:e[1]||(e[1]=d=>m()),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),e[8]||(e[8]=t("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{H as default};
