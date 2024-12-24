import{a as h,e as T,f as B,D as i,h as F,i as I,o as p,c as f,b as t,p as _,q as g,d as b,t as v,w as c,v as m,j as w,F as M}from"./app-BzoMQIll.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const O={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},q={class:"ps-3"},z={"aria-label":"breadcrumb"},H={class:"breadcrumb mb-0 p-0"},W={class:"breadcrumb-item"},G={class:"breadcrumb-item"},J={class:"card"},K={id:"addUserform"},Q={class:"card-body"},X={class:"row"},Y={class:"col-lg-2"},Z={class:"mb-3 pt-0 text-center mx-auto"},ee={key:0,src:"",height:"150",width:"150",class:"border border-1 rounded rounded-2",alt:"Profile Picture"},te=["src"],oe={class:"col-lg-8",style:{"border-left":"2px solid #dfeffd"}},se={class:"row"},ae={class:"col-md-6"},le={class:"row"},re={class:"col-md-12"},ne={class:"col-md-12 mt-2"},ie={class:"col-md-6"},de={class:"row"},ce={class:"col-md-12"},me={class:"col-md-12 mt-2"},pe={class:"card-footer"},ge={__name:"edit",props:["id"],setup(y){const u=y,x=h(),d=T(""),s=B({useEmail:x.email,name:"",email:"",staff_id:"",profile_picture:"",phone:"",dept_name:"",desg:"",off_loct:"",report_to:"",role_id:"",user_id:""});async function C(o){s.user_id=o.id;try{const e=h(),r=e.decryptWithAES(e.token),a=await axios.post("/api/user-details/update",s,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+r,Accept:"application/json"}});Notification.showToast("s",a.data.message)}catch(e){ErrorCatch.CatchError(e)}}k(u);async function k(o){try{const e=await i.post("editUser",{id:o}),r=e.data[0].designation_id;$("#desg_id").val(r),$("#desg_id").trigger("change");const a=e.data[0].dept_id;$("#deptment_id").val(a),$("#deptment_id").trigger("change");const l=e.data[0].office_loc_id;$("#off_loc").val(l),$("#off_loc").trigger("change");const n=e.data[0].report_to;$("#report_to").val(n),$("#report_to").trigger("change");const V=e.data[0].user_role;$("#user_role").val(V);const P=e.data[0].name;$("#name").val(P);const j=e.data[0].emp_id;$("#staff_id").val(j);const L=e.data[0].email;$("#email").val(L);const R=e.data[0].phone;$("#phone").val(R)}catch(e){console.log(e)}}U();async function U(){try{const e=await i.get("getAllDept");var o=[];$.each(e.data,function(a,l){var n={id:l.id,text:l.name};o.push(n)}),$("#deptment_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:o})}catch{}}D();async function D(){try{const e=await i.get("getAllDesign");var o=[];$.each(e.data,function(a,l){var n={id:l.id,text:l.name};o.push(n)}),$("#desg_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:o})}catch{}}S();async function S(){try{const e=await i.get("getAllOffLoc");var o=[];$.each(e.data,function(a,l){var n={id:l.id,text:l.name};o.push(n)}),$("#off_loc").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:o})}catch{}}A();async function A(){try{const e=await i.get("getAllRoles");var o=[];$.each(e.data,function(a,l){var n={id:l.id,text:l.name};o.push(n)}),$("#role_id").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:o})}catch{}}N();async function N(){try{const e=await i.get("getAllUsers");var o=[];$.each(e.data,function(a,l){var n={id:l.id,text:l.name};o.push(n)}),$("#report_to").select2({placeholder:"=Select=",theme:"bootstrap-5",width:"100%",allowClear:!0,height:"50",data:o})}catch{}}F(()=>{$(".dept_name").on("change",function(){s.dept_name=$(this).val()}),$(".desg").on("change",function(){s.desg=$(this).val()}),$(".off_loc").on("change",function(){s.off_loct=$(this).val()}),$(".report_to").on("change",function(){s.report_to=$(this).val()}),$(".role").on("change",function(){s.role_id=$(this).val()})});const E=o=>{s.profile_picture=o.target.files[0];const e=new FileReader;e.readAsDataURL(s.profile_picture),e.onload=r=>{d.value=r.target.result}};return(o,e)=>{const r=I("router-link");return p(),f(M,null,[t("div",O,[e[8]||(e[8]=t("div",{class:"breadcrumb-title pe-3"},"User Managemnet",-1)),t("div",q,[t("nav",z,[t("ol",H,[t("li",W,[_(r,{to:{name:"Home"}},{default:g(()=>e[5]||(e[5]=[b("Dashboard")])),_:1})]),t("li",G,[_(r,{to:{name:"UserList"}},{default:g(()=>e[6]||(e[6]=[b("User List")])),_:1})]),e[7]||(e[7]=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New User",-1))])])])]),t("div",J,[e[17]||(e[17]=t("div",{class:"card-header"},[t("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Create New User")],-1)),t("form",K,[t("div",Q,[t("div",X,[t("div",Y,[e[9]||(e[9]=t("p",{class:"text-center"},"Profile Image",-1)),t("div",Z,[d.value?v("",!0):(p(),f("img",ee)),d.value?(p(),f("img",{key:1,src:d.value,height:"150",width:"150",class:"border border-1 rounded rounded-2",alt:"Profile Picture"},null,8,te)):v("",!0)]),t("input",{type:"file",id:"profile-picture",ref:"profilePicture",class:"w-1/2",onChange:E,accept:"image/*"},null,544)]),t("div",oe,[t("div",se,[t("div",ae,[t("div",le,[t("div",re,[e[10]||(e[10]=t("label",{for:"input1",class:"form-label"},"Name",-1)),c(t("input",{type:"text",class:"form-control form-control-sm",id:"name",placeholder:"Enter Name","onUpdate:modelValue":e[0]||(e[0]=a=>s.name=a)},null,512),[[m,s.name]])]),t("div",ne,[e[11]||(e[11]=t("label",{for:"input4",class:"form-label"},"Email",-1)),c(t("input",{type:"email",class:"form-control form-control-sm",id:"email",placeholder:"Email","onUpdate:modelValue":e[1]||(e[1]=a=>s.email=a)},null,512),[[m,s.email]])]),e[12]||(e[12]=w('<div class="col-md-12 mt-2"><label for="input7" class="form-label">Department</label><select id="deptment_id" class="form-control form-control-sm dept_name"></select></div><div class="col-md-12 mt-2"><label for="input11" class="form-label">Office Location</label><select id="off_loc" class="form-control form-control-sm off_loc"></select></div><div class="col-md-12 mt-2"><label for="input11" class="form-label">Role</label><select id="role_id" class="form-control form-control-sm role"></select></div>',3))])]),t("div",ie,[t("div",de,[t("div",ce,[e[13]||(e[13]=t("label",{for:"input1",class:"form-label"},"Staff ID",-1)),c(t("input",{type:"text",class:"form-control form-control-sm",placeholder:"Enter Name",id:"staff_id","onUpdate:modelValue":e[2]||(e[2]=a=>s.staff_id=a)},null,512),[[m,s.staff_id]])]),t("div",me,[e[14]||(e[14]=t("label",{for:"input4",class:"form-label"},"Phone",-1)),c(t("input",{type:"phone",class:"form-control form-control-sm",id:"phone",placeholder:"Phone","onUpdate:modelValue":e[3]||(e[3]=a=>s.phone=a)},null,512),[[m,s.phone]])]),e[15]||(e[15]=w('<div class="col-md-12 mt-2"><label for="input4" class="form-label">Designation</label><select id="desg_id" class="form-control form-control-sm desg"></select></div><div class="col-md-12 mt-2"><label for="input4" class="form-label">Report To</label><select id="report_to" class="form-control form-control-sm report_to"></select></div>',2))])])])])])]),t("div",pe,[t("button",{type:"button",onClick:e[4]||(e[4]=a=>C(u)),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),e[16]||(e[16]=t("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{ge as default};
