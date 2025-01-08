import{e as i,f as R,h as A,D as B,i as j,o as p,c as m,b as e,p as l,q as b,d as D,j as a,l as y,t as S,F as V}from"./app--XhK36tc.js";import{_ as z,V as v,a as M,b as N}from"./main-B4KjQk_t.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const E={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},F={class:"ps-3"},Y={"aria-label":"breadcrumb"},P={class:"breadcrumb mb-0 p-0"},U={class:"breadcrumb-item"},I={class:"row"},H={class:"col-md-12"},T={class:"card border border-1 border-primary"},W={class:"card-body"},Q={class:"d-flex align-items-center gap-2"},O={class:"bg-checkbox-active one-way rounded rounded-1 p-1"},G={class:"bg-checkbox round-way rounded rounded-1 p-1"},J={class:"bg-checkbox rounded multi-city rounded-1 p-1"},K={class:"row mt-2"},L={key:0,class:"col-md-2 mt-2 mt-md-0"},X={class:"col-md-2 d-none mt-2 mt-md-0",id:"toDateChange"},Z={class:"col-md-1 mt-2 mt-md-0"},lt={__name:"flightSearch",setup(tt){const d=i(),h=i(!0),g=i(!1),x=i(),f=n=>{const t=n.getDate(),s=n.getMonth()+1,o=n.getFullYear();return`${t}/${s}/${o}`},c=i(),w=R({Way:"",from:"",to:"",dep_date:"",ADT:"",CNN:"",INF:""});w.Way=1;function r(n){n==1?($(".one-way").addClass("bg-checkbox-active"),$(".round-way").removeClass("bg-checkbox-active"),$(".multi-city").removeClass("bg-checkbox-active"),$(".one-way").removeClass("bg-checkbox"),$(".round-way").addClass("bg-checkbox"),$(".multi-city").addClass("bg-checkbox"),$("#toDateChange").addClass("d-none"),this.isAutoApply=!this.isAutoApply,this.isMultiCalendar=!this.isMultiCalendar,this.isRanges=!this.isRanges,this.isRounded="oneway"):n==2?($(".one-way").removeClass("bg-checkbox-active"),$(".round-way").addClass("bg-checkbox-active"),$(".multi-city").removeClass("bg-checkbox-active"),$(".round-way").removeClass("bg-checkbox"),$(".one-way").addClass("bg-checkbox"),$(".multi-city").addClass("bg-checkbox"),$("#toDateChange").removeClass("d-none"),this.isAutoApply=!this.isAutoApply,this.isMultiCalendar=!this.isMultiCalendar,this.isRanges=!this.isRanges,this.isRounded="round"):($(".one-way").removeClass("bg-checkbox-active"),$(".round-way").removeClass("bg-checkbox-active"),$(".multi-city").addClass("bg-checkbox-active"),$(".multi-city").removeClass("bg-checkbox"),$(".one-way").addClass("bg-checkbox"),$(".round-way").addClass("bg-checkbox"))}A(()=>{$("#origin_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50"})}),k();function u(n){if(!n.id)return n.text;var t=$('<div class="row"> <div class="col-md-2" style="border-right:1px solid #9e56ef"><b style="font-size:10px">'+n.id+'</b></div> <div class="col-md-8" style="font-size:13px; padding-top:3px">'+n.text+","+n.city+"</div></div>");return t}async function k(){try{const t=await B.get("airports");var n=[];$.each(t.data,function(s,o){var q={id:o.code,text:o.Airport_Name,city:o.City_name};n.push(q)}),$("#origin_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",tags:!0,height:"50",data:n,templateResult:function(s){if(!s.id)return s.text;var o=$('<div class="row"> <div class="col-md-2" style="border-right:1px solid #9e56ef"><b style="font-size:12px">'+s.id+'</b></div> <div class="col-md-8" style="font-size:13px;">'+s.text+","+s.city+"</div></div>");return o},templateSelection:u}),$("#origin_id").prepend('<option selected=""></option>'),$("#destination_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",tags:!0,height:"50",data:n,templateResult:function(s){if(!s.id)return s.text;var o=$('<div class="row"> <div class="col-md-2" style="border-right:1px solid #9e56ef"><b style="font-size:12px">'+s.id+'</b></div> <div class="col-md-8" style="font-size:13px;">'+s.text+","+s.city+"</div></div>");return o},templateSelection:u}),$("#destination_id").prepend('<option selected=""></option>')}catch{}}function C(){$("#img").attr("src","http://[::1]:5173/public/theme/appimages/s_Hover_State.jpg")}function _(){$("#img").attr("src","http://[::1]:5173/public/theme/appimages/s_With_Icon.jpg")}return(n,t)=>{const s=j("router-link");return p(),m(V,null,[e("div",E,[t[10]||(t[10]=e("div",{class:"breadcrumb-title pe-3"},"Settings",-1)),e("div",F,[e("nav",Y,[e("ol",P,[e("li",U,[l(s,{to:{name:"Home"}},{default:b(()=>t[8]||(t[8]=[D("Dashboard")])),_:1})]),t[9]||(t[9]=e("li",{class:"breadcrumb-item active","aria-current":"page"},"Flight Search",-1))])])])]),e("div",I,[e("div",H,[e("div",T,[e("div",W,[e("div",Q,[e("div",O,[e("input",{onClick:t[0]||(t[0]=o=>r(1)),class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),t[11]||(t[11]=e("label",{class:"form-check-label-box",for:"flexRadioDefault1"},"  One Way ",-1))]),e("div",G,[e("input",{onClick:t[1]||(t[1]=o=>r(2)),class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2"}),t[12]||(t[12]=e("label",{class:"form-check-label-box",for:"flexRadioDefault2"},"  Round Trip ",-1))]),e("div",J,[e("input",{onClick:t[2]||(t[2]=o=>r(3)),class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault3"}),t[13]||(t[13]=e("label",{class:"form-check-label-box",for:"flexRadioDefault3"},"   Multi City ",-1))]),t[14]||(t[14]=a('<div class="ms-auto d-none d-md-block"><div class="row"><div class="col-md-4 pt-1 pr-0"><div class="input-group input-group-sm mb-3"><button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">2 Passangers</button><ul class="dropdown-menu p-1" style="width:300px;"><table class="table table-sm"><tbody><tr><td><small> Adult <br> <span style="font-size:9px;">Above 12 Years</span></small></td><td style="width:150px;"><div class="input-group product-qty"><button type="button" class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number" data-type="minus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></button><input type="text" name="quantity" class="form-control input-number quantity" value="1"><button type="button" class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number" data-type="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button></div></td></tr><tr><td><small>Children <br><span style="font-size:9px;">02 to Under 12 Years </span></small></td><td style="width:150px;"><div class="input-group product-qty"><button type="button" class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number" data-type="minus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></button><input type="text" name="quantity" class="form-control input-number quantity" value="1"><button type="button" class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number" data-type="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button></div></td></tr><tr><td><small>Infant <br><span style="font-size:9px;">Under 02 Years</span></small></td><td style="width:150px;"><div class="input-group product-qty"><button type="button" class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number" data-type="minus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></button><input type="text" name="quantity" class="form-control input-number quantity" value="1"><button type="button" class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number" data-type="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button></div></td></tr></tbody></table></ul></div></div><div class="col-md-4 p-1"><select name="" id="class_type" class="form-control form-control-sm select2"><option value="" selected>Economy</option><option value="">Premium Economy</option><option value="">Business Class</option><option value="">First Class</option></select></div><div class="col-md-4 p-1"><select name="" id="pre_airline" class="form-control form-control-sm select2"><option value="" selected>Prefered Airlines</option><option value="">Qatar </option><option value="">Saudia</option><option value="">Emirates</option></select></div></div></div>',1))]),t[17]||(t[17]=a('<div class="row d-sm-block d-md-none mt-2"><button class="col-md-12 btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">2 Passangers</button><ul class="dropdown-menu p-1" style="width:300px;"><table class="table table-sm"><tbody><tr><td><small> Adult <br> <span style="font-size:9px;">Above 12 Years</span></small></td><td style="width:150px;"><div class="input-group product-qty"><button type="button" class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number" data-type="minus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></button><input type="text" name="quantity" class="form-control input-number quantity" value="1"><button type="button" class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number" data-type="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button></div></td></tr><tr><td><small>Children <br><span style="font-size:9px;">02 to Under 12 Years </span></small></td><td style="width:150px;"><div class="input-group product-qty"><button type="button" class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number" data-type="minus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></button><input type="text" name="quantity" class="form-control input-number quantity" value="1"><button type="button" class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number" data-type="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button></div></td></tr><tr><td><small>Infant <br><span style="font-size:9px;">Under 02 Years</span></small></td><td style="width:150px;"><div class="input-group product-qty"><button type="button" class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number" data-type="minus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></button><input type="text" name="quantity" class="form-control input-number quantity" value="1"><button type="button" class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number" data-type="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button></div></td></tr></tbody></table></ul><div class="col-md-12 p-1 mt-2"><select name="" id="class_type" class="form-control form-control-sm"><option value="" selected>Economy</option><option value="">Premium Economy</option><option value="">Business Class</option><option value="">First Class</option></select></div><div class="col-md-12 p-1 mt-2"><select name="" id="pre_airline" class="form-control form-control-sm"><option value="" selected>Prefered Airlines</option><option value="">Qatar </option><option value="">Saudia</option><option value="">Emirates</option></select></div></div>',1)),e("div",K,[t[16]||(t[16]=a('<div class="col-md-6"><div class="d-flex"><div class="w-50"><select id="origin_id" name="origin_name" class="form-control form-control-lg origin_name"></select></div><div class="py-2" style="margin:0 5px 0 5px;"><img src="'+z+'" alt=""></div><div class="w-50"><select id="destination_id" name="destination_name" class="form-control form-control destination_name"></select></div></div></div>',1)),(p(),m("div",L,[l(y(v),{class:"dateChange",id:"fromdateVal",modelValue:d.value,"onUpdate:modelValue":t[3]||(t[3]=o=>d.value=o),placeholder:"Select Date","enable-time-picker":!1,format:f,"auto-apply":h.value,"multi-calendars":g.value,range:x.value},null,8,["modelValue","auto-apply","multi-calendars","range"])])),S("",!0),e("div",X,[l(y(v),{modelValue:c.value,"onUpdate:modelValue":t[5]||(t[5]=o=>c.value=o),id:"todateVal",placeholder:"Select Date","enable-time-picker":!1},null,8,["modelValue"])]),e("div",Z,[l(s,{to:{name:"searchResult"}},{default:b(()=>[t[15]||(t[15]=e("img",{src:M,alt:"",class:"d-sm-block d-md-none",style:{width:"100%"},id:"img"},null,-1)),e("img",{src:N,alt:"",style:{width:"53px"},onMouseover:t[6]||(t[6]=o=>{C()}),onMouseout:t[7]||(t[7]=o=>{_()}),id:"img",class:"d-none d-md-block"},null,32)]),_:1})])])])])])])],64)}}};export{lt as default};
