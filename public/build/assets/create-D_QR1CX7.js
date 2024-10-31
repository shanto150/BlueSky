import{a as g,f as w,h as y,H as r,i as x,o as N,c as S,b as e,p as c,q as m,d as u,w as d,v as k,S as p,F as C}from"./app-BKAod3sm.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const A={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},V={class:"ps-3"},D={"aria-label":"breadcrumb"},B={class:"breadcrumb mb-0 p-0"},T={class:"breadcrumb-item"},E={class:"breadcrumb-item"},M={class:"card"},U={class:"card-body"},j={class:"row"},z={class:"col-md-6"},F={class:"col-md-6 mt-2"},H={class:"col-md-6 mt-2"},I={class:"card-footer"},K={__name:"create",setup(L){const v=g(),a=w({area_name:"",division_id:"",district_id:"",status_val:"",useEmail:v.email});y(()=>{$(".division_name").on("change",function(){a.division_id=$(this).val(),_($(this).val())}),$(".district_name").on("change",function(){a.district_id=$(this).val()})});async function b(){try{const s=await r.post("/zone/save",a);(s.data.types=="s"||s.data.types=="e")&&Notification.showToast(s.data.types,s.data.message)}catch(s){console.log(s)}}f();async function f(){try{const t=await r.get("divisions");var s=[];$.each(t.data,function(o,l){var n={id:l.id,text:l.name};s.push(n)}),$("#division_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:s})}catch{}}async function _(s){try{const i=await r.post("districts",{id:s});var t=[];$.each(i.data,function(l,n){var h={id:n.id,text:n.name};t.push(h)}),$("#district_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:t})}catch{}}return(s,t)=>{const i=x("router-link");return N(),S(C,null,[e("div",A,[t[7]||(t[7]=e("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),e("div",V,[e("nav",D,[e("ol",B,[e("li",T,[c(i,{to:{name:"Home"}},{default:m(()=>t[4]||(t[4]=[u("Dashboard")])),_:1})]),e("li",E,[c(i,{to:{name:"zoneList"}},{default:m(()=>t[5]||(t[5]=[u("Area List")])),_:1})]),t[6]||(t[6]=e("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New Area",-1))])])])]),e("div",M,[t[14]||(t[14]=e("div",{class:"card-header"},[e("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Create New Area")],-1)),e("div",U,[e("div",j,[e("div",z,[t[8]||(t[8]=e("label",{for:"input1",class:"form-label"},"Area Name",-1)),d(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>a.area_name=o),class:"form-control form-control-sm",id:"area_name",name:"area_name",placeholder:"Enter Name"},null,512),[[k,a.area_name]])]),t[12]||(t[12]=e("div",{class:"col-md-6"},[e("label",{for:"input1",class:"form-label"},"Division"),e("select",{id:"division_id",name:"division_name",class:"form-control form-control-sm single-select-fields division_name"})],-1)),e("div",F,[t[9]||(t[9]=e("label",{for:"input1",class:"form-label"},"District",-1)),d(e("select",{id:"district_id","onUpdate:modelValue":t[1]||(t[1]=o=>a.district_name=o),name:"district_name",class:"form-control form-control-sm single-select-field district_name"},null,512),[[p,a.district_name]])]),e("div",H,[t[11]||(t[11]=e("label",{for:"input1",class:"form-label"},"Status",-1)),d(e("select",{id:"status","onUpdate:modelValue":t[2]||(t[2]=o=>a.status_val=o),name:"status",class:"form-control form-control-sm"},t[10]||(t[10]=[e("option",{selected:"",value:""},"Choose...",-1),e("option",{value:"1"},"Active",-1),e("option",{value:"2"},"Inactive",-1)]),512),[[p,a.status_val]])])])]),e("div",I,[e("button",{type:"button",onClick:t[3]||(t[3]=o=>b()),class:"btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),t[13]||(t[13]=e("button",{class:"btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])],64)}}};export{K as default};
