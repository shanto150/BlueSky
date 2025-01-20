import{a as b,f as _,h,D as n,i as g,o as x,c as w,b as e,p as d,q as l,d as c,w as y,v as C,j as N,F as k}from"./app-D0QR6YqT.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const S={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},D={class:"ps-3"},E={"aria-label":"breadcrumb"},A={class:"breadcrumb mb-0 p-0"},B={class:"breadcrumb-item"},V={class:"breadcrumb-item"},F={class:"card"},M={id:"addZoneform"},R={class:"card-body"},j={class:"row"},T={class:"col-md-6"},z={class:"card-footer"},U={__name:"create",setup(I){const m=b(),r=_({area_name:"",division_id:"",district_id:"",status_val:"",useEmail:m.email});h(()=>{$(".division_name").on("change",function(){r.division_id=$(this).val(),$(".district_name").empty(),u($(this).val()),$("#district_id").prepend('<option selected=""></option>')}),$(".district_name").on("change",function(){r.district_id=$(this).val()}),$("#district_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50"})});async function p(){try{const a=await n.post("/zone/save",r);document.getElementById("addZoneform").reset(),$("#division_id option:first").prop("selected",!0).trigger("change"),$("#district_id option:first").prop("selected",!0).trigger("change"),$("#status option:first").prop("selected",!0).trigger("change"),Notification.showToast("s",a.data.message)}catch(a){ErrorCatch.CatchError(a)}}v();async function v(){try{const t=await n.get("divisions");var a=[];$.each(t.data,function(s,i){var o={id:i.id,text:i.name,bn:i.bn_name,clr:MF.getRandomColor()};a.push(o)}),$("#division_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:a,tags:!0,templateResult:function(s){if(!s.id)return s.text;var i=$('<div class="clearfix"><div class="float-start"><i class="fa-solid fa-circle" style="color: '+s.clr+'"></i> '+s.text+'</div><div class="float-end">'+s.bn+"</div></div>");return i}}),$("#division_id").prepend('<option selected=""></option>')}catch{}}async function u(a){try{const s=await n.post("districts",{id:a});var t=[];$.each(s.data,function(i,o){var f={id:o.id,text:o.name,bn:o.bn_name,clr:MF.getRandomColor()};t.push(f)}),$("#district_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,tags:!0,height:"50",data:t,templateResult:function(i){if(!i.id)return i.text;var o=$('<div class="clearfix"><div class="float-start"><i class="fa-solid fa-circle m-1" style="color: '+i.clr+'"></i> '+i.text+'</div><div class="float-end">'+i.bn+"</div></div>");return o}})}catch{}}return(a,t)=>{const s=g("router-link");return x(),w(k,null,[e("div",S,[t[5]||(t[5]=e("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),e("div",D,[e("nav",E,[e("ol",A,[e("li",B,[d(s,{to:{name:"Home"}},{default:l(()=>t[2]||(t[2]=[c("Dashboard")])),_:1})]),e("li",V,[d(s,{to:{name:"zoneList"}},{default:l(()=>t[3]||(t[3]=[c("Area List")])),_:1})]),t[4]||(t[4]=e("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New Area",-1))])])])]),e("div",F,[t[9]||(t[9]=e("div",{class:"card-header"},[e("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea","border-radius":"10px"}},"   Create New Area")],-1)),e("form",M,[e("div",R,[e("div",j,[e("div",T,[t[6]||(t[6]=e("label",{for:"input1",class:"form-label"},"Area Name",-1)),y(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=i=>r.area_name=i),class:"form-control",id:"area_name",name:"area_name",placeholder:"Enter Name"},null,512),[[C,r.area_name]])]),t[7]||(t[7]=N('<div class="col-md-6"><label for="division_id" class="form-label">Division</label><select id="division_id" name="division_name" class="form-control form-control division_name"></select></div><div class="col-md-6 mt-2"><label for="district_id" class="form-label">District</label><select id="district_id" name="district_name" class="form-control form-control district_name"></select></div>',2))])]),e("div",z,[e("button",{type:"button",onClick:t[1]||(t[1]=i=>p()),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),t[8]||(t[8]=e("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{U as default};