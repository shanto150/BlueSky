import{D as p,e as s,f as m,h as f,E as u,F as x,i as g,c as _,o as y,b as t,j as h,p as D,q as w,d as k,G as E,_ as B}from"./app-BiuUEKxK.js";/* empty css             *//* empty css                      */import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const C={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},N={class:"ps-3"},R={"aria-label":"breadcrumb"},A={class:"breadcrumb mb-0 p-0"},I={class:"breadcrumb-item"},S=p({__name:"flightSearch",setup(F){const c=s([]),l=s(!1),o=s(!1);s([]),s([]),s(),s();const r=m({Way:"",from:"",to:"",dep_date:"",ADT:"",CNN:"",INF:""});r.Way=1,f(()=>{n(),document.addEventListener("click",v)}),u(()=>{document.removeEventListener("click",v)});async function n(){try{const d=await x.get("airports");c.value=d.data.map(a=>({id:a.code,text:a.Airport_Name,city:a.City_name}))}catch(d){console.error("Error fetching airports:",d)}}function v(d){const a=document.getElementById("origin_id"),b=document.getElementById("origin_results"),i=document.getElementById("destination_id"),e=document.getElementById("destination_results");!(a!=null&&a.contains(d.target))&&!(b!=null&&b.contains(d.target))&&(l.value=!1),!(i!=null&&i.contains(d.target))&&!(e!=null&&e.contains(d.target))&&(o.value=!1)}return(d,a)=>{const b=g("router-link");return y(),_(E,null,[t("div",C,[a[2]||(a[2]=t("div",{class:"breadcrumb-title pe-3"},"Settings",-1)),t("div",N,[t("nav",R,[t("ol",A,[t("li",I,[D(b,{to:{name:"Home"}},{default:w(()=>a[0]||(a[0]=[k("Dashboard")])),_:1})]),a[1]||(a[1]=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Flight Search",-1))])])])]),a[3]||(a[3]=h('<div class="row" data-v-da03bbb8><div class="col-md-12" data-v-da03bbb8><div class="card border border-1 border-primary- bluesky-border-primary" data-v-da03bbb8><div class="card-body" data-v-da03bbb8><div class="main-container" data-v-da03bbb8><div class="wrapper" data-v-da03bbb8><div class="section" data-v-da03bbb8><div class="wrapper-2" data-v-da03bbb8><div class="section-2" data-v-da03bbb8><div class="section-3" data-v-da03bbb8><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" data-v-da03bbb8><label class="form-check-label-box" for="flexRadioDefault1" data-v-da03bbb8><span class="text" data-v-da03bbb8>One Way</span></label></div></div><div class="wrapper-3" data-v-da03bbb8><div class="section-4" data-v-da03bbb8><input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" data-v-da03bbb8><label class="form-check-label-box" for="flexRadioDefault1" data-v-da03bbb8><span class="text-2" data-v-da03bbb8>Round Way</span></label></div></div><div class="box" data-v-da03bbb8><div class="section-5" data-v-da03bbb8><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" data-v-da03bbb8><label class="form-check-label-box" for="flexRadioDefault1" data-v-da03bbb8><span class="text-3" data-v-da03bbb8>Multi City</span></label></div></div></div><div class="wrapper-4" data-v-da03bbb8><div class="group" data-v-da03bbb8><div class="box-2" data-v-da03bbb8></div><div class="pic-4" data-v-da03bbb8></div><span class="text-4" data-v-da03bbb8>5 Passengers</span></div><div class="group-2" data-v-da03bbb8><div class="wrapper-5" data-v-da03bbb8></div><div class="img" data-v-da03bbb8></div><span class="text-5" data-v-da03bbb8>Economy</span></div><div class="group-3" data-v-da03bbb8><div class="section-6" data-v-da03bbb8></div><div class="img-2" data-v-da03bbb8></div><span class="text-6" data-v-da03bbb8>Preferred Airlines</span></div></div></div><div class="wrapper-6" data-v-da03bbb8><div class="box-3" data-v-da03bbb8><div class="section-7" data-v-da03bbb8><div class="section-8" data-v-da03bbb8><span class="text-7" data-v-da03bbb8>DAC</span><div class="pic-5" data-v-da03bbb8></div><div class="section-9" data-v-da03bbb8><span class="text-8" data-v-da03bbb8>Dhaka</span><span class="text-9" data-v-da03bbb8>Hazrat Shahjalal Int. Airport</span></div></div></div><div class="img-3" data-v-da03bbb8></div><div class="box-4" data-v-da03bbb8><div class="wrapper-7" data-v-da03bbb8><span class="text-a" data-v-da03bbb8>DXB</span><div class="img-4" data-v-da03bbb8></div><div class="section-a" data-v-da03bbb8><span class="text-b" data-v-da03bbb8>Dubai</span><span class="text-c" data-v-da03bbb8>Dubai International Airport</span></div></div></div></div><div class="section-b" data-v-da03bbb8><div class="wrapper-8" data-v-da03bbb8><div class="pic-6" data-v-da03bbb8></div></div><div class="section-c" data-v-da03bbb8><div class="section-d" data-v-da03bbb8><span class="text-d" data-v-da03bbb8>19 Dec,2024</span><span class="text-e" data-v-da03bbb8>Tuesday</span><div class="wrapper-9" data-v-da03bbb8></div></div></div></div><div class="wrapper-a" data-v-da03bbb8><div class="wrapper-b" data-v-da03bbb8><div class="img-5" data-v-da03bbb8></div></div><div class="wrapper-c" data-v-da03bbb8><div class="group-4" data-v-da03bbb8><span class="text-f" data-v-da03bbb8>23 Dec,2024</span><span class="text-10" data-v-da03bbb8>Monday</span><div class="box-5" data-v-da03bbb8></div></div></div></div><div class="section-e" data-v-da03bbb8><div class="img-6" data-v-da03bbb8></div></div></div></div></div></div></div></div></div>',1))],64)}}}),j=B(S,[["__scopeId","data-v-da03bbb8"]]);export{j as default};
