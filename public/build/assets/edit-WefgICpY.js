<<<<<<<< HEAD:public/build/assets/edit-WefgICpY.js
import{a as f,f as _,F as m,h as v,i as k,c as g,o as x,b as s,p as i,q as r,d as l,j as h,w as S,v as B,G as w}from"./app-DfN-0Zj9.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const y={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},E={class:"ps-3"},M={"aria-label":"breadcrumb"},N={class:"breadcrumb mb-0 p-0"},C={class:"breadcrumb-item"},F={class:"breadcrumb-item"},D={class:"breadcrumb-item"},V={class:"card"},I={id:"addZoneform"},T={class:"card-body"},A={class:"row"},U={class:"col-md-6"},j={class:"card-footer"},z={__name:"edit",props:["id"],setup(c){const u=f(),d=c,a=_({bank_mfs_name:"",bank_mfs_id:"",status_val:"",useEmail:u.email});async function b(o){a.bank_mfs_id=o.id;try{const t=await m.post("/bankormfs/update",a);Notification.showToast("s",t.data.message)}catch(t){ErrorCatch.CatchError(t)}}p(d);async function p(o){try{const t=await m.post("editBankMfs",{id:o}),e=t.data[0].name;$("#bank_mfs_name").val(e);const n=t.data[0].status;$("#status").val(n),$("#status").trigger("change")}catch(t){console.log(t)}}return v(()=>{$("#status").on("change",function(){a.status_val=$(this).val()})}),(o,t)=>{const e=k("router-link");return x(),g(w,null,[s("div",y,[t[6]||(t[6]=s("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),s("div",E,[s("nav",M,[s("ol",N,[s("li",C,[i(e,{to:{name:"Home"}},{default:r(()=>t[2]||(t[2]=[l("Dashboard")])),_:1})]),s("li",F,[i(e,{to:{name:"issuedBankMFS"}},{default:r(()=>t[3]||(t[3]=[l("Setings")])),_:1})]),s("li",D,[i(e,{to:{name:"issuedBankMFS"}},{default:r(()=>t[4]||(t[4]=[l("Deposit")])),_:1})]),t[5]||(t[5]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"Edit Issued Bank MFS",-1))])])])]),s("div",V,[t[10]||(t[10]=s("div",{class:"card-header"},[s("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Edit Issued Bank MFS")],-1)),s("form",I,[s("div",T,[s("div",A,[s("div",U,[t[7]||(t[7]=s("label",{for:"input1",class:"form-label"},"Name",-1)),S(s("input",{type:"text",class:"form-control form-control-sm",id:"bank_mfs_name",name:"bank_mfs_name",placeholder:"Enter Name","onUpdate:modelValue":t[0]||(t[0]=n=>a.bank_mfs_name=n)},null,512),[[B,a.bank_mfs_name]])]),t[8]||(t[8]=h('<div class="col-md-6"><label for="input1" class="form-label">Status</label><select id="status" name="status" class="form-control form-control-sm"><option selected value="">Choose...</option><option value="1">Active</option><option value="2">Inactive</option></select></div>',1))])]),s("div",j,[s("button",{type:"button",onClick:t[1]||(t[1]=n=>b(d)),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Update"),t[9]||(t[9]=s("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{z as default};
========
import{a as f,f as _,F as m,h as v,i as k,c as g,o as x,b as s,p as i,q as r,d as l,j as h,w as S,v as B,G as w}from"./app-DxLH5EeE.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const y={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},E={class:"ps-3"},M={"aria-label":"breadcrumb"},N={class:"breadcrumb mb-0 p-0"},C={class:"breadcrumb-item"},F={class:"breadcrumb-item"},D={class:"breadcrumb-item"},V={class:"card"},I={id:"addZoneform"},T={class:"card-body"},A={class:"row"},U={class:"col-md-6"},j={class:"card-footer"},z={__name:"edit",props:["id"],setup(c){const u=f(),d=c,a=_({bank_mfs_name:"",bank_mfs_id:"",status_val:"",useEmail:u.email});async function b(o){a.bank_mfs_id=o.id;try{const t=await m.post("/bankormfs/update",a);Notification.showToast("s",t.data.message)}catch(t){ErrorCatch.CatchError(t)}}p(d);async function p(o){try{const t=await m.post("editBankMfs",{id:o}),e=t.data[0].name;$("#bank_mfs_name").val(e);const n=t.data[0].status;$("#status").val(n),$("#status").trigger("change")}catch(t){console.log(t)}}return v(()=>{$("#status").on("change",function(){a.status_val=$(this).val()})}),(o,t)=>{const e=k("router-link");return x(),g(w,null,[s("div",y,[t[6]||(t[6]=s("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),s("div",E,[s("nav",M,[s("ol",N,[s("li",C,[i(e,{to:{name:"Home"}},{default:r(()=>t[2]||(t[2]=[l("Dashboard")])),_:1})]),s("li",F,[i(e,{to:{name:"issuedBankMFS"}},{default:r(()=>t[3]||(t[3]=[l("Setings")])),_:1})]),s("li",D,[i(e,{to:{name:"issuedBankMFS"}},{default:r(()=>t[4]||(t[4]=[l("Deposit")])),_:1})]),t[5]||(t[5]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"Edit Issued Bank MFS",-1))])])])]),s("div",V,[t[10]||(t[10]=s("div",{class:"card-header"},[s("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Edit Issued Bank MFS")],-1)),s("form",I,[s("div",T,[s("div",A,[s("div",U,[t[7]||(t[7]=s("label",{for:"input1",class:"form-label"},"Name",-1)),S(s("input",{type:"text",class:"form-control form-control-sm",id:"bank_mfs_name",name:"bank_mfs_name",placeholder:"Enter Name","onUpdate:modelValue":t[0]||(t[0]=n=>a.bank_mfs_name=n)},null,512),[[B,a.bank_mfs_name]])]),t[8]||(t[8]=h('<div class="col-md-6"><label for="input1" class="form-label">Status</label><select id="status" name="status" class="form-control form-control-sm"><option selected value="">Choose...</option><option value="1">Active</option><option value="2">Inactive</option></select></div>',1))])]),s("div",j,[s("button",{type:"button",onClick:t[1]||(t[1]=n=>b(d)),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Update"),t[9]||(t[9]=s("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{z as default};
>>>>>>>> d41cb144cfbd09063886f40a7f1b4c83ac61921b:public/build/assets/edit-BYLw6OOl.js
