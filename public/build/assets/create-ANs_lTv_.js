import{a as u,f as D,D as c,h as N,e as E,i as V,o as p,c as f,b as t,p as h,q as g,d as b,t as _,w as d,v as m,j as v,F as P}from"./app-zluK0h7K.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const j={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},B={class:"ps-3"},L={"aria-label":"breadcrumb"},R={class:"breadcrumb mb-0 p-0"},T={class:"breadcrumb-item"},I={class:"breadcrumb-item"},F={class:"card"},M={id:"addUserform"},O={class:"card-body"},q={class:"row"},z={class:"col-lg-2"},H={class:"mb-3 pt-0 text-center mx-auto"},W={key:0,src:"",height:"150",width:"150",class:"border border-1 rounded rounded-2",alt:"Profile Picture"},G=["src"],J={class:"col-lg-8",style:{"border-left":"2px solid #dfeffd"}},K={class:"row"},Q={class:"col-md-6"},X={class:"row"},Y={class:"col-md-12"},Z={class:"col-md-12 mt-2"},ee={class:"col-md-6"},te={class:"row"},oe={class:"col-md-12"},se={class:"col-md-12 mt-2"},le={class:"card-footer"},de={__name:"create",setup(re){const w=u(),s=D({useEmail:w.email,name:"",email:"",staff_id:"",profile_picture:"",phone:"",dept_name:"",desg:"",off_loct:"",report_to:"",role_id:""});y();async function y(){try{const e=await c.get("getAllDept");var o=[];$.each(e.data,function(r,l){var n={id:l.id,text:l.name};o.push(n)}),$("#deptment_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:o})}catch{}}x();async function x(){try{const e=await c.get("getAllDesign");var o=[];$.each(e.data,function(r,l){var n={id:l.id,text:l.name};o.push(n)}),$("#desg_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:o})}catch{}}C();async function C(){try{const e=await c.get("getAllOffLoc");var o=[];$.each(e.data,function(r,l){var n={id:l.id,text:l.name};o.push(n)}),$("#off_loc").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:o})}catch{}}k();async function k(){try{const e=await c.get("getAllRoles");var o=[];$.each(e.data,function(r,l){var n={id:l.id,text:l.name};o.push(n)}),$("#role_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:o})}catch{}}U();async function U(){try{const e=await c.get("getAllUsers");var o=[];$.each(e.data,function(r,l){var n={id:l.id,text:l.name};o.push(n)}),$("#report_to").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:o})}catch{}}N(()=>{$(".dept_name").on("change",function(){s.dept_name=$(this).val()}),$(".desg").on("change",function(){s.desg=$(this).val()}),$(".off_loc").on("change",function(){s.off_loct=$(this).val()}),$(".report_to").on("change",function(){s.report_to=$(this).val()}),$(".role").on("change",function(){s.role_id=$(this).val()})});async function S(){try{const o=u(),e=o.decryptWithAES(o.token),a=await axios.post("/api/external-user/save",s,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+e,Accept:"application/json"}});document.getElementById("addUserform").reset(),$(".dept_name option:first").prop("selected",!0).trigger("change"),$(".desg option:first").prop("selected",!0).trigger("change"),$(".off_loc option:first").prop("selected",!0).trigger("change"),$(".report_to option:first").prop("selected",!0).trigger("change"),$(".role option:first").prop("selected",!0).trigger("change"),i.value="",Notification.showToast("s",a.data.message)}catch(o){ErrorCatch.CatchError(o)}}const i=E(""),A=o=>{s.profile_picture=o.target.files[0];const e=new FileReader;e.readAsDataURL(s.profile_picture),e.onload=a=>{i.value=a.target.result}};return(o,e)=>{const a=V("router-link");return p(),f(P,null,[t("div",j,[e[8]||(e[8]=t("div",{class:"breadcrumb-title pe-3"},"User Managemnet",-1)),t("div",B,[t("nav",L,[t("ol",R,[t("li",T,[h(a,{to:{name:"Home"}},{default:g(()=>e[5]||(e[5]=[b("Dashboard")])),_:1})]),t("li",I,[h(a,{to:{name:"UserList"}},{default:g(()=>e[6]||(e[6]=[b("User List")])),_:1})]),e[7]||(e[7]=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New User",-1))])])])]),t("div",F,[e[17]||(e[17]=t("div",{class:"card-header"},[t("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Create New User")],-1)),t("form",M,[t("div",O,[t("div",q,[t("div",z,[e[9]||(e[9]=t("p",{class:"text-center"},"Profile Image",-1)),t("div",H,[i.value?_("",!0):(p(),f("img",W)),i.value?(p(),f("img",{key:1,src:i.value,height:"150",width:"150",class:"border border-1 rounded rounded-2",alt:"Profile Picture"},null,8,G)):_("",!0)]),t("input",{type:"file",id:"profile-picture",ref:"profilePicture",class:"w-1/2",onChange:A,accept:"image/*"},null,544)]),t("div",J,[t("div",K,[t("div",Q,[t("div",X,[t("div",Y,[e[10]||(e[10]=t("label",{for:"input1",class:"form-label"},"Name",-1)),d(t("input",{type:"text",class:"form-control form-control-sm",id:"name",placeholder:"Enter Name","onUpdate:modelValue":e[0]||(e[0]=r=>s.name=r)},null,512),[[m,s.name]])]),t("div",Z,[e[11]||(e[11]=t("label",{for:"input4",class:"form-label"},"Email",-1)),d(t("input",{type:"email",class:"form-control form-control-sm",id:"input4",placeholder:"Email","onUpdate:modelValue":e[1]||(e[1]=r=>s.email=r)},null,512),[[m,s.email]])]),e[12]||(e[12]=v('<div class="col-md-12 mt-2"><label for="input7" class="form-label">Department</label><select id="deptment_id" class="form-control form-control-sm dept_name"><option>Choose...</option></select></div><div class="col-md-12 mt-2"><label for="input11" class="form-label">Office Location</label><select id="off_loc" class="form-control form-control-sm off_loc"><option>Choose...</option></select></div><div class="col-md-12 mt-2"><label for="input11" class="form-label">Role</label><select id="role_id" class="form-control form-control-sm role"><option>Choose...</option></select></div>',3))])]),t("div",ee,[t("div",te,[t("div",oe,[e[13]||(e[13]=t("label",{for:"input1",class:"form-label"},"Staff ID",-1)),d(t("input",{type:"text",class:"form-control form-control-sm",id:"input1",placeholder:"Enter Name","onUpdate:modelValue":e[2]||(e[2]=r=>s.staff_id=r)},null,512),[[m,s.staff_id]])]),t("div",se,[e[14]||(e[14]=t("label",{for:"input4",class:"form-label"},"Phone",-1)),d(t("input",{type:"number",class:"form-control form-control-sm",id:"input4",placeholder:"Phone","onUpdate:modelValue":e[3]||(e[3]=r=>s.phone=r)},null,512),[[m,s.phone]])]),e[15]||(e[15]=v('<div class="col-md-12 mt-2"><label for="input4" class="form-label">Designation</label><select id="desg_id" class="form-control form-control-sm desg"><option>Choose...</option></select></div><div class="col-md-12 mt-2"><label for="input4" class="form-label">Report To</label><select id="report_to" class="form-control form-control-sm report_to"><option>Choose...</option></select></div>',2))])])])])])]),t("div",le,[t("button",{type:"button",onClick:e[4]||(e[4]=r=>S()),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),e[16]||(e[16]=t("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{de as default};
