import{a as p,f as b,h as f,i as v,c as _,o as g,b as o,p as i,q as m,d as c,j as y,w as a,v as s,Q as k,R as x}from"./app-Cbvf3scX.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const B={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},N={class:"ps-3"},h={"aria-label":"breadcrumb"},S={class:"breadcrumb mb-0 p-0"},E={class:"breadcrumb-item"},C={class:"breadcrumb-item"},V={class:"breadcrumb-item"},w={class:"card"},A={id:"addBankform"},M={class:"card-body"},U={class:"row"},F={class:"col-md-6"},T={class:"col-md-6 mt-2"},D={class:"col-md-6 mt-2"},R={class:"col-md-6 mt-2"},I={class:"col-md-6 mt-2"},P={class:"col-md-6 mt-2"},j={class:"card-footer"},J={__name:"create",setup(q){const d=p(),e=b({acc_type:"",bank_name:"",acc_name:"",acc_no:"",branch:"",useEmail:d.email,routing_no:"",service_charge:""});async function u(){try{const l=await x.post("/paymentAcct/save",e);document.getElementById("addBankform").reset(),Notification.showToast("s",l.data.message)}catch(l){ErrorCatch.CatchError(l)}}return f(()=>{$("#acc_type").on("change",function(){e.acc_type=$(this).val()})}),(l,t)=>{const r=v("router-link");return g(),_(k,null,[o("div",B,[t[11]||(t[11]=o("div",{class:"breadcrumb-title pe-3"},"Setting",-1)),o("div",N,[o("nav",h,[o("ol",S,[o("li",E,[i(r,{to:{name:"Home"}},{default:m(()=>t[7]||(t[7]=[c("Dashboard")])),_:1})]),o("li",C,[i(r,{to:{name:"issuedBankMFS"}},{default:m(()=>t[8]||(t[8]=[c("Setings")])),_:1})]),o("li",V,[i(r,{to:{name:"issuedBankMFS"}},{default:m(()=>t[9]||(t[9]=[c("Deposit")])),_:1})]),t[10]||(t[10]=o("li",{class:"breadcrumb-item active","aria-current":"page"},"Create New Payment Account",-1))])])])]),o("div",w,[t[20]||(t[20]=o("div",{class:"card-header"},[o("h5",{class:"m-0 p-0",style:{"border-left":"5px solid #7239ea"}},"   Create New Payment Account")],-1)),o("form",A,[o("div",M,[o("div",U,[t[18]||(t[18]=y('<div class="col-md-6"><label for="input1" class="form-label">Account Type</label><select id="acc_type" name="acc_type" class="form-control form-control-sm"><option selected value="">Choose...</option><option value="Bank">Bank</option><option value="MFS">MFS</option></select></div>',1)),o("div",F,[t[12]||(t[12]=o("label",{for:"input1",class:"form-label"},"Bank Name",-1)),a(o("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>e.bank_name=n),class:"form-control form-control-sm",id:"bank_name",name:"bank_name",placeholder:"Enter Bank Name"},null,512),[[s,e.bank_name]])]),o("div",T,[t[13]||(t[13]=o("label",{for:"input1",class:"form-label"},"Account Name",-1)),a(o("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=n=>e.acc_name=n),class:"form-control form-control-sm",id:"acc_name",name:"acc_name",placeholder:"Enter Account Name"},null,512),[[s,e.acc_name]])]),o("div",D,[t[14]||(t[14]=o("label",{for:"input1",class:"form-label"},"Account Number",-1)),a(o("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=n=>e.acc_no=n),class:"form-control form-control-sm",id:"acc_no",name:"acc_no",placeholder:"Enter Account Number"},null,512),[[s,e.acc_no]])]),o("div",R,[t[15]||(t[15]=o("label",{for:"input1",class:"form-label"},"Branch",-1)),a(o("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=n=>e.branch=n),class:"form-control form-control-sm",id:"branch",name:"branch",placeholder:"Enter Branch"},null,512),[[s,e.branch]])]),o("div",I,[t[16]||(t[16]=o("label",{for:"input1",class:"form-label"},"Routing Number",-1)),a(o("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=n=>e.routing_no=n),class:"form-control form-control-sm",id:"routing_no",name:"routing_no",placeholder:"Enter Routing Number"},null,512),[[s,e.routing_no]])]),o("div",P,[t[17]||(t[17]=o("label",{for:"input1",class:"form-label"},"Service Charge",-1)),a(o("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=n=>e.service_charge=n),class:"form-control form-control-sm",id:"service_charge",name:"service_charge",placeholder:"Enter Service Charge"},null,512),[[s,e.service_charge]])])])]),o("div",j,[o("button",{type:"button",onClick:t[6]||(t[6]=n=>u()),class:"m-2 btn btn-sm btn-info px-4 ms-2 float-end text-white"},"Save"),t[19]||(t[19]=o("button",{class:"m-2 btn btn-sm btn-danger px-4 ms-2 float-end"},"Back",-1))])])])],64)}}};export{J as default};
