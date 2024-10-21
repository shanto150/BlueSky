import{a as b,e as f,h as v,i as _,o as a,c as l,b as e,p as r,q as d,d as c,F as m,D as h,t as g,j as x}from"./app-BuqyZV8I.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const A={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},S={class:"ps-3"},w={"aria-label":"breadcrumb"},C={class:"breadcrumb mb-0 p-0"},N={class:"breadcrumb-item"},k={class:"breadcrumb-item"},y={class:"card"},B={class:"card-body"},D={class:"row"},E={class:"col-md-6"},V={id:"division_id",name:"division_id",class:"form-control form-control-sm single-select-field"},L=["value"],I={__name:"create",setup(T){const i=b(),p=f("");u();function u(){const o={headers:{Authorization:"Bearer "+i.decryptWithAES(i.token),Accept:"application/json"}};axios.get("/api/divisions",o).then(t=>{console.log(t.data.data)}).catch(t=>{})}return v(()=>{$(".single-select-field").select2({placeholder:"Select",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50"})}),(o,t)=>{const n=_("router-link");return a(),l(m,null,[e("div",A,[t[3]||(t[3]=e("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),e("div",S,[e("nav",w,[e("ol",C,[e("li",N,[r(n,{to:{name:"Home"}},{default:d(()=>t[0]||(t[0]=[c("Dashboard")])),_:1})]),e("li",k,[r(n,{to:{name:"zoneList"}},{default:d(()=>t[1]||(t[1]=[c("Area List")])),_:1})]),t[2]||(t[2]=e("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New Area",-1))])])])]),e("div",y,[t[8]||(t[8]=e("div",{class:"card-header"},[e("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Create New Area")],-1)),e("div",B,[e("form",null,[e("div",D,[t[6]||(t[6]=e("div",{class:"col-md-6"},[e("label",{for:"input1",class:"form-label"},"Area Name"),e("input",{type:"text",class:"form-control form-control-sm",id:"area_name",name:"area_name",placeholder:"Enter Name"})],-1)),e("div",E,[t[5]||(t[5]=e("label",{for:"input1",class:"form-label"},"Division",-1)),e("select",V,[t[4]||(t[4]=e("option",{selected:"",value:""},"Choose...",-1)),(a(!0),l(m,null,h(p.value,s=>(a(),l("option",{value:s.id,key:s.id},g(s.name)+"a",9,L))),128))])]),t[7]||(t[7]=x('<div class="col-md-6 mt-2"><label for="input1" class="form-label">District</label><select id="district_id" name="district_id" class="form-control form-control-sm single-select-field"><option selected value="">Choose...</option><option>One</option><option>Two</option><option>Three</option></select></div><div class="col-md-6 mt-2"><label for="input1" class="form-label">Status</label><select id="status" name="status" class="form-control form-control-sm"><option selected value="">Choose...</option><option value="Active">Active</option><option value="Inactive">Inactive</option></select></div>',2))])])]),t[9]||(t[9]=e("div",{class:"card-footer"},[e("button",{class:"btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),e("button",{class:"btn btn-sm btn-danger px-4 ms-2 float-end"},"Back")],-1))])],64)}}};export{I as default};