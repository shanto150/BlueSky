import{a as c,f as b,i as f,o as u,c as p,b as t,p as n,q as r,d as i,w as _,v,F as x,E as g}from"./app-DgYWpewg.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const w={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},L={class:"ps-3"},N={"aria-label":"breadcrumb"},h={class:"breadcrumb mb-0 p-0"},y={class:"breadcrumb-item"},C={class:"breadcrumb-item"},E={class:"breadcrumb-item"},k={class:"card"},B={id:"addLocationform"},S={class:"card-body"},V={class:"row"},O={class:"col-md-12"},T={class:"card-footer"},H={__name:"create",setup(D){const d=c(),s=b({loc_name:"",useEmail:d.email});async function m(){try{const o=await g.post("/loc/save",s);document.getElementById("addLocationform").reset(),Notification.showToast("s",o.data.message)}catch(o){ErrorCatch.CatchError(o)}}return(o,e)=>{const a=f("router-link");return u(),p(x,null,[t("div",w,[e[6]||(e[6]=t("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),t("div",L,[t("nav",N,[t("ol",h,[t("li",y,[n(a,{to:{name:"Home"}},{default:r(()=>e[2]||(e[2]=[i("Dashboard")])),_:1})]),t("li",C,[n(a,{to:{name:"offLoc"}},{default:r(()=>e[3]||(e[3]=[i("Setings")])),_:1})]),t("li",E,[n(a,{to:{name:"offLoc"}},{default:r(()=>e[4]||(e[4]=[i("Office Location List")])),_:1})]),e[5]||(e[5]=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New Office Location",-1))])])])]),t("div",k,[e[9]||(e[9]=t("div",{class:"card-header"},[t("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Create New Office Location")],-1)),t("form",B,[t("div",S,[t("div",V,[t("div",O,[e[7]||(e[7]=t("label",{for:"input1",class:"form-label"},"Name",-1)),_(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>s.loc_name=l),class:"form-control form-control-sm",id:"loc_name",name:"loc_name",placeholder:"Enter Name"},null,512),[[v,s.loc_name]])])])]),t("div",T,[t("button",{type:"button",onClick:e[1]||(e[1]=l=>m()),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),e[8]||(e[8]=t("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{H as default};
