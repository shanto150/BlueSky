import{a as v,f,R as m,h as _,i as g,c as x,o as h,b as s,p as i,q as r,d,j as D,w,v as y,Q as E}from"./app-DgxQLPTl.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const N={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},k={class:"ps-3"},C={"aria-label":"breadcrumb"},S={class:"breadcrumb mb-0 p-0"},V={class:"breadcrumb-item"},B={class:"breadcrumb-item"},L={class:"breadcrumb-item"},T={class:"card"},A={id:"addZoneform"},I={class:"card-body"},M={class:"row"},U={class:"col-md-6"},j={class:"card-footer"},R={__name:"edit",props:["id"],setup(c){const u=v(),l=c,e=f({des_name:"",dept_id:"",status_val:"",useEmail:u.email});async function p(a){e.dept_id=a.id;try{const t=await m.post("/Designation/update",e);Notification.showToast("s",t.data.message)}catch(t){ErrorCatch.CatchError(t)}}b(l);async function b(a){try{const t=await m.post("editDesignation",{id:a}),o=t.data[0].name;$("#des_name").val(o);const n=t.data[0].status;$("#status").val(n),$("#status").trigger("change")}catch(t){console.log(t)}}return _(()=>{$("#status").on("change",function(){e.status_val=$(this).val()})}),(a,t)=>{const o=g("router-link");return h(),x(E,null,[s("div",N,[t[6]||(t[6]=s("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),s("div",k,[s("nav",C,[s("ol",S,[s("li",V,[i(o,{to:{name:"Home"}},{default:r(()=>t[2]||(t[2]=[d("Dashboard")])),_:1})]),s("li",B,[i(o,{to:{name:"designationList"}},{default:r(()=>t[3]||(t[3]=[d("Setings")])),_:1})]),s("li",L,[i(o,{to:{name:"designationList"}},{default:r(()=>t[4]||(t[4]=[d("Designation List")])),_:1})]),t[5]||(t[5]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"Edit Designation",-1))])])])]),s("div",T,[t[10]||(t[10]=s("div",{class:"card-header"},[s("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Edit Designation")],-1)),s("form",A,[s("div",I,[s("div",M,[s("div",U,[t[7]||(t[7]=s("label",{for:"input1",class:"form-label"},"Name",-1)),w(s("input",{type:"text",class:"form-control form-control-sm",id:"des_name",name:"des_name",placeholder:"Enter Name","onUpdate:modelValue":t[0]||(t[0]=n=>e.des_name=n)},null,512),[[y,e.des_name]])]),t[8]||(t[8]=D('<div class="col-md-6"><label for="input1" class="form-label">Status</label><select id="status" name="status" class="form-control form-control-sm"><option selected value="">Choose...</option><option value="1">Active</option><option value="2">Inactive</option></select></div>',1))])]),s("div",j,[s("button",{type:"button",onClick:t[1]||(t[1]=n=>p(l)),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Update"),t[9]||(t[9]=s("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{R as default};
