import{a as b,f as v,E as d,h as _,i as g,o as x,c as h,b as o,p as i,q as l,d as r,w,v as y,j as E,F as L}from"./app-DnwjnSge.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const N={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},k={class:"ps-3"},C={"aria-label":"breadcrumb"},S={class:"breadcrumb mb-0 p-0"},O={class:"breadcrumb-item"},V={class:"breadcrumb-item"},B={class:"breadcrumb-item"},D={class:"card"},T={id:"addZoneform"},A={class:"card-body"},F={class:"row"},I={class:"col-md-6"},M={class:"card-footer"},H={__name:"edit",props:["id"],setup(m){const u=b(),c=m,s=v({loc_name:"",office_loc_id:"",status_val:"",useEmail:u.email});async function f(a){s.office_loc_id=a.id;try{const t=await d.post("/office/location/update",s);Notification.showToast("s",t.data.message)}catch(t){ErrorCatch.CatchError(t)}}p(c);async function p(a){try{const t=await d.post("editOffLoc",{id:a}),e=t.data[0].name;$("#loc_name").val(e);const n=t.data[0].status;$("#status").val(n),$("#status").trigger("change")}catch(t){console.log(t)}}return _(()=>{$("#status").on("change",function(){s.status_val=$(this).val()})}),(a,t)=>{const e=g("router-link");return x(),h(L,null,[o("div",N,[t[6]||(t[6]=o("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),o("div",k,[o("nav",C,[o("ol",S,[o("li",O,[i(e,{to:{name:"Home"}},{default:l(()=>t[2]||(t[2]=[r("Dashboard")])),_:1})]),o("li",V,[i(e,{to:{name:"offLoc"}},{default:l(()=>t[3]||(t[3]=[r("Setings")])),_:1})]),o("li",B,[i(e,{to:{name:"offLoc"}},{default:l(()=>t[4]||(t[4]=[r("Office Location List")])),_:1})]),t[5]||(t[5]=o("li",{class:"breadcrumb-item active","aria-current":"page"},"Edit Office Location",-1))])])])]),o("div",D,[t[10]||(t[10]=o("div",{class:"card-header"},[o("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Edit Office Location")],-1)),o("form",T,[o("div",A,[o("div",F,[o("div",I,[t[7]||(t[7]=o("label",{for:"input1",class:"form-label"},"Name",-1)),w(o("input",{type:"text",class:"form-control form-control-sm",id:"loc_name",name:"loc_name",placeholder:"Enter Name","onUpdate:modelValue":t[0]||(t[0]=n=>s.loc_name=n)},null,512),[[y,s.loc_name]])]),t[8]||(t[8]=E('<div class="col-md-6"><label for="input1" class="form-label">Status</label><select id="status" name="status" class="form-control form-control-sm"><option selected value="">Choose...</option><option value="1">Active</option><option value="2">Inactive</option></select></div>',1))])]),o("div",M,[o("button",{type:"button",onClick:t[1]||(t[1]=n=>f(c)),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Update"),t[9]||(t[9]=o("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{H as default};
