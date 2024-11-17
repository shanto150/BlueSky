import{a as y,f as w,H as r,h as x,i as C,o as E,c as k,b as e,p as u,q as p,d as v,w as A,v as N,j as S,F as D}from"./app-CTScua0f.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const V={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},B={class:"ps-3"},j={"aria-label":"breadcrumb"},T={class:"breadcrumb mb-0 p-0"},z={class:"breadcrumb-item"},F={class:"breadcrumb-item"},H={class:"card"},I={id:"addZoneform"},L={class:"card-body"},M={class:"row"},U={class:"col-md-6"},q={class:"card-footer"},K={__name:"edit",props:["id"],setup(b){const _=y(),c=b,a=w({area_name:"",area_id:"",division_id:"",district_id:"",status_val:"",useEmail:_.email});async function f(o){a.area_id=o.id;try{const t=await r.post("/zone/update",a);Notification.showToast("s",t.data.message)}catch(t){ErrorCatch.CatchError(t)}}h(c);async function h(o){try{const t=await r.post("editArea",{id:o}),s=t.data[0].name;$("#area_name").val(s);const i=t.data[0].division_id,d=t.data[0].district_id,n=t.data[0].status;g(i),m(d)}catch(t){console.log(t)}}x(()=>{$(".division_name").on("change",function(){a.division_id=$(this).val(),$(".district_name").empty(),m($(this).val())}),$(".district_name").on("change",function(){a.district_id=$(this).val()}),$("#status").on("change",function(){a.status_val=$(this).val()})});async function g(o){try{const s=await r.get("divisions");var t=[];$.each(s.data,function(d,n){var l={id:n.id,text:n.name};t.push(l)}),$("#division_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:t})}catch(s){ErrorCatch.CatchError(s)}}async function m(o){try{const s=await r.post("districts",{id:o});var t=[];$.each(s.data,function(d,n){var l={id:n.id,text:n.name};t.push(l)}),$("#district_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:t})}catch(s){ErrorCatch.CatchError(s)}}return(o,t)=>{const s=C("router-link");return E(),k(D,null,[e("div",V,[t[5]||(t[5]=e("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),e("div",B,[e("nav",j,[e("ol",T,[e("li",z,[u(s,{to:{name:"Home"}},{default:p(()=>t[2]||(t[2]=[v("Dashboard")])),_:1})]),e("li",F,[u(s,{to:{name:"zoneList"}},{default:p(()=>t[3]||(t[3]=[v("Area List")])),_:1})]),t[4]||(t[4]=e("li",{class:"breadcrumb-item active","aria-current":"page"},"Edit Area",-1))])])])]),e("div",H,[t[9]||(t[9]=e("div",{class:"card-header"},[e("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Edit Area")],-1)),e("form",I,[e("div",L,[e("div",M,[e("div",U,[t[6]||(t[6]=e("label",{for:"input1",class:"form-label"},"Area Name",-1)),A(e("input",{type:"text",class:"form-control form-control-sm",id:"area_name",name:"area_name",placeholder:"Enter Name","onUpdate:modelValue":t[0]||(t[0]=i=>a.area_name=i)},null,512),[[N,a.area_name]])]),t[7]||(t[7]=S('<div class="col-md-6"><label for="input1" class="form-label">Division</label><select id="division_id" name="division_name" class="form-control form-control-sm single-select-fields division_name"></select></div><div class="col-md-6 mt-2"><label for="input1" class="form-label">District</label><select id="district_id" name="district_name" class="form-control form-control-sm single-select-field district_name"></select></div><div class="col-md-6 mt-2"><label for="input1" class="form-label">Status</label><select id="status" name="status" class="form-control form-control-sm"><option selected value="">Choose...</option><option value="1">Active</option><option value="2">Inactive</option></select></div>',3))])]),e("div",q,[e("button",{type:"button",onClick:t[1]||(t[1]=i=>f(c)),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Update"),t[8]||(t[8]=e("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{K as default};
