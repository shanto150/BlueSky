import{_ as B,e as d,E as F,G as E,o as M,c as z,b as l,f as A,h as R,D as _,i as P,p as m,q as w,d as x,j as y,l as C,x as D,F as q}from"./app-MMm0_ayH.js";import{V as S}from"./main-BDkbx_Xd.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const N=["min","max","value","step"],T=["min","max","value","step"],j={__name:"CustomMinMaxSlider",props:{min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},minValue:{type:Number,default:50},maxValue:{type:Number,default:80}},emits:["update:minValue","update:maxValue"],setup(i,{emit:v}){const p=v,r=d(null),g=d(null),k=d(null),n=d(i.minValue),u=d(i.maxValue),b=(o,c,a)=>(o-c)/(a-c)*100;F(()=>Math.abs(u.value-n.value));const f=(o,c)=>{r.value.style.setProperty("--progressLeft",`${o}%`),r.value.style.setProperty("--progressRight",`${c}%`)};E(()=>{if(r.value){p("update:minValue",n.value),p("update:maxValue",u.value);const o=b(n.value,i.min,i.max),c=100-b(u.value,i.min,i.max);f(o,c)}});const h=({target:o})=>{o.name==="min"&&(o.value>u.value?o.value=u.value:n.value=parseFloat(o.value)),o.name==="max"&&(o.value<n.value?o.value=n.value:u.value=parseFloat(o.value))};return(o,c)=>(M(),z("div",{ref_key:"slider",ref:r,class:"custom-slider minmax"},[c[0]||(c[0]=l("div",{class:"minmax-indicator"},null,-1)),l("input",{ref_key:"inputMin",ref:g,type:"range",name:"min",id:"min",min:i.min,max:i.max,value:i.minValue,step:i.step,onInput:h},null,40,N),l("input",{ref_key:"inputMax",ref:k,type:"range",name:"max",id:"max",min:i.min,max:i.max,value:i.maxValue,step:i.step,onInput:h},null,40,T)],512))}},I=B(j,[["__scopeId","data-v-105e7a3f"]]),U={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},O={class:"ps-3"},Y={"aria-label":"breadcrumb"},Q={class:"breadcrumb mb-0 p-0"},H={class:"breadcrumb-item"},K={class:"row"},W={class:"col-md-12"},J={class:"card border border-1 border-primary"},L={class:"card-body"},G={class:"d-flex align-items-center gap-3"},X={class:"bg-checkbox-active one-way rounded rounded-1 p-2"},Z={class:"bg-checkbox round-way rounded rounded-1 p-2"},ee={class:"bg-checkbox rounded multi-city rounded-1 p-2"},le={class:"row mt-4"},te={class:"col-md-2"},ae={class:"col-md-2"},se={class:"col-md-1"},oe={class:"col-md-3"},ie={class:"row"},ce={class:"col-md-12"},ne={class:"accordion",id:"price-range"},de={class:"accordion-item"},re={id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#price-range"},ue={class:"accordion-body"},pe={class:"slider-cont"},be={class:"text-center mb-0"},ye={__name:"searchResult",setup(i){const v=d(),p=d(150),r=d(180),g=a=>{const e=a.getDate(),s=a.getMonth()+1,t=a.getFullYear();return`${e}/${s}/${t}`},k=a=>{const e=a.getDate(),s=a.getMonth()+1,t=a.getFullYear();return`${e}/${s}/${t}`},n=d(),u=A({Way:"",from:"",to:"",dep_date:"",ADT:"",CNN:"",INF:""});u.Way=1;function b(a){a==1?($(".one-way").addClass("bg-checkbox-active"),$(".round-way").removeClass("bg-checkbox-active"),$(".multi-city").removeClass("bg-checkbox-active"),$(".one-way").removeClass("bg-checkbox"),$(".round-way").addClass("bg-checkbox"),$(".multi-city").addClass("bg-checkbox")):a==2?($(".one-way").removeClass("bg-checkbox-active"),$(".round-way").addClass("bg-checkbox-active"),$(".multi-city").removeClass("bg-checkbox-active"),$(".round-way").removeClass("bg-checkbox"),$(".one-way").addClass("bg-checkbox"),$(".multi-city").addClass("bg-checkbox")):($(".one-way").removeClass("bg-checkbox-active"),$(".round-way").removeClass("bg-checkbox-active"),$(".multi-city").addClass("bg-checkbox-active"),$(".multi-city").removeClass("bg-checkbox"),$(".one-way").addClass("bg-checkbox"),$(".round-way").addClass("bg-checkbox"))}R(()=>{$("#origin_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50"}),$(".select2C").select2({theme:"bootstrap-5",width:"100%",height:"50",width:"element"})}),h();function f(a){if(!a.id)return a.text;var e=$('<div class="row"> <div class="col-md-2" style="border-right:1px solid #9e56ef"><b style="font-size:12px">'+a.id+'</b></div> <div class="col-md-8" style="font-size:13px; padding-top:3px">'+a.text+","+a.city+"</div></div>");return e}async function h(){try{const e=await _.get("airports");var a=[];$.each(e.data,function(s,t){var V={id:t.code,text:t.Airport_Name,city:t.City_name};a.push(V)}),$("#origin_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",tags:!0,height:"50",data:a,templateResult:function(s){if(!s.id)return s.text;var t=$('<div class="row"> <div class="col-md-2" style="border-right:1px solid #9e56ef"><b style="font-size:12px">'+s.id+'</b></div> <div class="col-md-8" style="font-size:13px;">'+s.text+","+s.city+"</div></div>");return t},templateSelection:f}).on("change",function(s){}),$("#origin_id").prepend('<option selected=""></option>'),$("#destination_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",tags:!0,height:"50",data:a,templateResult:function(s){if(!s.id)return s.text;var t=$('<div class="row"> <div class="col-md-2" style="border-right:1px solid #9e56ef"><b style="font-size:12px">'+s.id+'</b></div> <div class="col-md-8" style="font-size:13px;">'+s.text+","+s.city+"</div></div>");return t},templateSelection:f}),$("#destination_id").prepend('<option selected=""></option>')}catch{}}function o(){$("#img").attr("src","")}function c(){$("#img").attr("src","")}return(a,e)=>{const s=P("router-link");return M(),z(q,null,[l("div",U,[e[11]||(e[11]=l("div",{class:"breadcrumb-title pe-3"},"Settings",-1)),l("div",O,[l("nav",Y,[l("ol",Q,[l("li",H,[m(s,{to:{name:"Home"}},{default:w(()=>e[9]||(e[9]=[x("Dashboard")])),_:1})]),e[10]||(e[10]=l("li",{class:"breadcrumb-item active","aria-current":"page"},"Flight Search Result",-1))])])])]),l("div",K,[l("div",W,[l("div",J,[l("div",L,[l("div",G,[l("div",X,[l("input",{onClick:e[0]||(e[0]=t=>b(1)),class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),e[12]||(e[12]=l("label",{class:"form-check-label-box",for:"flexRadioDefault1"},"  One Way ",-1))]),l("div",Z,[l("input",{onClick:e[1]||(e[1]=t=>b(2)),class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2"}),e[13]||(e[13]=l("label",{class:"form-check-label-box",for:"flexRadioDefault2"},"  Round Trip ",-1))]),l("div",ee,[l("input",{onClick:e[2]||(e[2]=t=>b(3)),class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault3"}),e[14]||(e[14]=l("label",{class:"form-check-label-box",for:"flexRadioDefault3"},"   Multi City ",-1))]),e[15]||(e[15]=y('<div class="ms-auto"><div class="row"><div class="col-md-4 pr-0"><div class="input-group mb-3"><button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">2 Passangers</button><ul class="dropdown-menu p-1" style="width:300px;"><table class="table table-sm"><tbody><tr><td><small> Adult <br> <span style="font-size:8px;">Above 12 Years</span></small></td><td style="width:150px;"><div class="input-group product-qty"><button type="button" class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number" data-type="minus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></button><input type="text" name="quantity" class="form-control input-number quantity" value="1"><button type="button" class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number" data-type="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button></div></td></tr><tr><td><small>Children <br><span style="font-size:8px;">02 to Under 12 Years </span></small></td><td style="width:150px;"><div class="input-group product-qty"><button type="button" class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number" data-type="minus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></button><input type="text" name="quantity" class="form-control input-number quantity" value="1"><button type="button" class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number" data-type="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button></div></td></tr><tr><td><small>Infant <br><span style="font-size:8px;">Under 02 Years</span></small></td><td style="width:150px;"><div class="input-group product-qty"><button type="button" class="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number" data-type="minus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></button><input type="text" name="quantity" class="form-control input-number quantity" value="1"><button type="button" class="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number" data-type="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></button></div></td></tr></tbody></table></ul></div></div><div class="col-md-4 pr-0"><select name="" id="class_type" class="form-control select2C"><option value="" selected>Economy</option><option value="">Premium Economy</option><option value="">Business Class</option><option value="">First Class</option></select></div><div class="col-md-4 pr-0"><select name="" id="pre_airline" class="form-control select2C"><option value="" selected>Prefered Airlines</option><option value="">Qatar </option><option value="">Saudia</option><option value="">Emirates</option></select></div></div></div>',1))]),l("div",le,[e[16]||(e[16]=l("div",{class:"col-md-3"},[l("select",{id:"origin_id",name:"origin_name",class:"form-control form-control-lg origin_name"})],-1)),e[17]||(e[17]=l("div",{class:"col-md-3"},[l("select",{id:"destination_id",name:"destination_name",class:"form-control form-control destination_name"})],-1)),l("div",te,[m(C(S),{modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=t=>v.value=t),placeholder:"Select Date","enable-time-picker":!1,format:g},null,8,["modelValue"])]),l("div",ae,[m(C(S),{modelValue:n.value,"onUpdate:modelValue":e[4]||(e[4]=t=>n.value=t),placeholder:"Select Date","enable-time-picker":!1,format:k},null,8,["modelValue"])]),l("div",se,[m(s,{to:{name:"searchResult"}},{default:w(()=>[l("img",{src:"",alt:"",style:{width:"53px"},onMouseover:e[5]||(e[5]=t=>{o()}),onMouseout:e[6]||(e[6]=t=>{c()}),id:"img"},null,32)]),_:1})])])])])]),l("div",oe,[l("div",ie,[e[23]||(e[23]=y('<div class="col-md-12"><div class="card"><div class="card-body"><div class="d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock text-primary"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>    <span class="pt-1" style="font-size:13px;">Book Flight within</span>     <div class="dash-lable bg-light-primary text-primary rounded-1"><p class="text-black mb-0">30</p></div>   <div class="ml-1 mr-1">:</div>   <div class="dash-lable bg-light-primary text-primary rounded-1"><p class="text-black mb-0">00</p></div></div></div></div></div>',1)),l("div",ce,[l("div",ne,[l("div",de,[e[21]||(e[21]=l("p",{class:"accordion-header",id:"headingOne"},[l("button",{class:"accordion-button bg-body-secondary m-0 p-0 px-2 py-1",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," Price Range ")],-1)),l("div",re,[l("div",ue,[l("div",pe,[m(I,{min:65,max:368,"min-value":p.value,"onUpdate:minValue":e[7]||(e[7]=t=>p.value=t),"max-value":r.value,"onUpdate:maxValue":e[8]||(e[8]=t=>r.value=t)},null,8,["min-value","max-value"]),l("p",be,[e[18]||(e[18]=l("i",{class:"fa fa-bangladeshi-taka-sign"},null,-1)),x(" "+D(p.value)+" - ",1),e[19]||(e[19]=l("i",{class:"fa fa-bangladeshi-taka-sign"},null,-1)),x(" "+D(r.value),1)]),e[20]||(e[20]=l("div",{class:"text-center p-0"},[l("span",{class:"text-danger"},"*"),x(" Price may change based on policy ")],-1))])])])])]),e[22]||(e[22]=y('<div class="accordion" id="stop"><div class="accordion-item mt-3"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Stop </button></h2><div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Non-Stop </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> 1 Stop </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> 2 Stop </label></div></div></div></div></div><div class="accordion" id="refund"><div class="accordion-item mt-3"><h2 class="accordion-header" id="headingThree"><button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Refund Availability </button></h2><div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Refundable </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Partially Refundable </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Non Refundable </label></div></div></div></div></div><div class="accordion" id="arilines"><div class="accordion-item mt-3"><h6 class="accordion-header" id="headingfour"><button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Airlines </button></h6><div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingfour" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Emirates </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Qatar Airways </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Us-Bangla Airlines </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Biman Bangladesh </label></div></div></div></div></div><div class="accordion" id="class-type"><div class="accordion-item mt-3"><h6 class="accordion-header" id="headingFive"><button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> Class </button></h6><div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> First Class </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Business Class </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Premium Economy </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Economy </label></div></div></div></div></div><div class="accordion" id="class-type"><div class="accordion-item mt-3"><h6 class="accordion-header" id="headingSix"><button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"> Flight Schedule </button></h6><div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="row"><div class="col-md-12"><div class="d-flex gap-2"><button type="button" class="btn btn-outline-primary w-100">Departure</button><button type="button" class="btn btn-outline-secondary w-100">Arrival</button></div></div><div class="col-md-12 mt-2"><div class="d-flex gap-2"><div class="p-1 border border-1 text-center rounded rounded-1 bg-body-secondary cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise text-primary"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg><br><span style="font-size:8px;font-weight:bold;">00-06 AM</span></div><div class="p-1 border border-1 text-center rounded rounded-1 bg-body-secondary cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun text-primary"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><br><span style="font-size:8px;font-weight:bold;">06-12 PM</span></div><div class="p-1 border border-1 text-center rounded rounded-1 bg-body-secondary cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset text-primary"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg><br><span style="font-size:8px;font-weight:bold;">12-06 PM</span></div><div class="p-1 border border-1 text-center rounded rounded-1 bg-body-secondary cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon text-primary"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><br><span style="font-size:8px;font-weight:bold;">06-12 AM</span></div></div></div></div></div></div></div></div><div class="accordion" id="class-type"><div class="accordion-item mt-3"><h2 class="accordion-header" id="headingSeven"><button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven"> Baggage </button></h2><div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> 10 kg </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> 20 kg </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> 30 kg </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> 02 Piece </label></div></div></div></div></div><div class="accordion" id="class-type"><div class="accordion-item mt-3"><h6 class="accordion-header" id="headingEight"><button class="accordion-button bg-body-secondary m-0 p-0 px-2 py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"> Layover </button></h6><div id="collapseEight" class="accordion-collapse collapse show" aria-labelledby="headingEight" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Netaki Subhas Chandra Bose.. </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Kuwait International Airport </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Kunming Changshui Interna.. </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Kiala lumpur International Ai.. </label></div></div></div></div></div>',7))]),e[24]||(e[24]=l("div",{class:"col-md-12 mt-4"},[l("button",{class:"btn btn-block btn-sm btn-outline-primary w-100"}," Clear All Filters ")],-1))])]),e[25]||(e[25]=y('<div class="col-md-8"><div class="row"><p>Showing 10 of 20 Total Flights</p><div class="col-md-12"><div class="card"><div class="card-body"><div class="row"><div class="col-md-4 m-0 p-0"><div class="d-flex"><img src="https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Symbol.png" height="70"><div class="text-center mt-2"><p class="p-0 m-0"><b>DAC-DXB</b></p><small style="font-size:12px;color:#5e6878;">Qatar Airways</small><br><small style="font-size:12px;color:#5e6878;">Boeing 707</small></div></div></div><div class="col-md-4 border-start"><div class="d-flex gap-2"><div class="mt-2"><p class="p-0 m-0"><b>10:50 AM</b></p><small style="font-size:12px;color:#5e6878;">03 Jan, Fri</small><br><small style="font-size:12px;color:#5e6878;">Departure</small></div><div class="text-center mt-2"><small style="font-size:12px;color:#5e6878;">04 hr 15 Min</small><br><div class="d-flex"><div> .... </div><div><i class="fa fa-plane" style="font-size:28px;color:#1882ffb3;"></i></div><div> .... </div></div></div><div class="mt-2"><p class="p-0 m-0"><b>02:50 PM</b></p><small style="font-size:12px;color:#5e6878;">03 Jan, Fri</small><br><small style="font-size:12px;color:#5e6878;">Departure</small></div></div></div><div class="col-md-4 border-start"><div class="d-flex gap-2"><div class="mt-2"><p class="p-0 m-0"><b>01 Stop</b></p><small style="font-size:12px;color:#5e6878;">CCU</small><br><small style="font-size:12px;color:#5e6878;">1 hr 15 min</small></div><div class="d-flex gap-3 border-start"><div class="mt-2"><div class="text-right" style="padding-left:10px;"><p class="p-0 m-0"><b><i class="fa fa-bangladeshi-taka-sign"></i> 65000</b></p><small style="font-size:12px;color:#5e6878;"><i class="fa fa-bangladeshi-taka-sign"></i> 67000</small><br><small style="font-size:12px;color:#5e6878;">Economy Calss</small></div></div></div></div></div></div></div></div></div></div></div>',1))])],64)}}};export{ye as default};
