import{a as m,D as c,i as b,o as p,c as u,b as s,p as i,q as l,d as n,w as v,v as f,j as _,F as x}from"./app-C6QxwfQ3.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const g={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},A={class:"ps-3"},w={"aria-label":"breadcrumb"},y={class:"breadcrumb mb-0 p-0"},D={class:"breadcrumb-item"},N={class:"breadcrumb-item"},k={class:"card"},S={id:"addZoneform"},V={class:"card-body"},h={class:"row"},B={class:"col-md-6"},j={__name:"edit",props:["id"],setup(r){m(),d(r);async function d(e){try{const t=await c.post("editArea",{id:e}),o=t.data[0].name,a=t.data[0].division_id,C=t.data[0].district_id,F=t.data[0].status}catch{}}return(e,t)=>{const o=b("router-link");return p(),u(x,null,[s("div",g,[t[4]||(t[4]=s("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),s("div",A,[s("nav",w,[s("ol",y,[s("li",D,[i(o,{to:{name:"Home"}},{default:l(()=>t[1]||(t[1]=[n("Dashboard")])),_:1})]),s("li",N,[i(o,{to:{name:"zoneList"}},{default:l(()=>t[2]||(t[2]=[n("Area List")])),_:1})]),t[3]||(t[3]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"Edit Area",-1))])])])]),s("div",k,[t[8]||(t[8]=s("div",{class:"card-header"},[s("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Edit Area")],-1)),s("form",S,[s("div",V,[s("div",h,[s("div",B,[t[5]||(t[5]=s("label",{for:"input1",class:"form-label"},"Area Name",-1)),v(s("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>e.name=a),class:"form-control form-control-sm",id:"area_name",name:"area_name",placeholder:"Enter Name"},null,512),[[f,e.name]])]),t[6]||(t[6]=_('<div class="col-md-6"><label for="input1" class="form-label">Division</label><select id="division_id" name="division_name" class="form-control form-control-sm single-select-fields division_name"></select></div><div class="col-md-6 mt-2"><label for="input1" class="form-label">District</label><select id="district_id" name="district_name" class="form-control form-control-sm single-select-field district_name"></select></div><div class="col-md-6 mt-2"><label for="input1" class="form-label">Status</label><select id="status" name="status" class="form-control form-control-sm"><option selected value="">Choose...</option><option value="1">Active</option><option value="2">Inactive</option></select></div>',3))])]),t[7]||(t[7]=s("div",{class:"card-footer"},[s("button",{type:"button",class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),s("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back")],-1))])])],64)}}};export{j as default};
