import{u as _,a as w,e as b,R as p,i as A,c as f,o as g,b as s,j as k,p as c,q as d,d as r,s as z,l as y,t as C,Q as P}from"./app-Zx8ncWUj.js";import{V as v}from"./datatables.net-vue3-DqpK_T78.js";import{D as S}from"./dataTables.bootstrap5-Co7fb4WY.js";import"./jquery-Rf6qqHEO.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const D={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},N={class:"ps-3"},O={"aria-label":"breadcrumb"},T={class:"breadcrumb mb-0 p-0"},L={class:"breadcrumb-item"},V={class:"breadcrumb-item"},j={class:"breadcrumb-item"},q={class:"ms-auto"},B={class:"btn-group"},R={class:"row position-relative"},G={class:"col-12"},I={id:"paymentAcctList",class:"card rounded rounded-2 shadow-none p-3"},H={key:0,class:"center-body position-absolute top-50 start-50"},U={__name:"index",setup(M){const h=_(),l=w();v.use(S);const m=b([]);b(),u();const x={responsive:!0,pageLength:30,lengthMenu:[3,10,20,30],bDestroy:!0,ordering:!1,dom:"<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>><'row'<'col-sm-12'tr>><'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",buttons:["copy","csv","pdf","excel","print"],language:{search:"",searchPlaceholder:"Search by anything"},columnDefs:[{defaultContent:"0",targets:"_all"}],columns:[{data:"DT_RowIndex",title:"SL"},{title:"Account Type",render:function(i,a,e){var t="";return t+=e.acc_type,t}},{title:"Payment Amount & Charge",render:function(i,a,e){var t="";return t+=e.bank_name,t+="<br>",t+='<span class="text-primary">',t+=e.service_charge+"%</span>",t}},{title:"Branch",render:function(i,a,e){var t="";return t+=e.branch,t},width:"14%"},{title:"Account & Routing Number",render:function(i,a,e){var t="";return e.routing_no?t+=e.routing_no:t+="-",t}},{title:"Created By",render:function(i,a,e){var t="";return t+=e.created_by,t+="<br>",t+='<span class="text-primary">',t+=e.created_at+"</span>",t},width:"20%"},{title:"Status",render:function(i,a,e){var t="";return e.status==1?t+='<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Active </div>':t+='<div class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Deactivated </div>',t},width:"10%"},{title:"Action",render:function(i,a,e){var t="",n=e.idd,o=e.status;return t+='<button  style="size: 30px; width: 30px; height: 30px" class="btn btn-outline-only-edit rounded-circle edit-item" data-item-id='+n+' placement="top"> <i class="fa-solid fa-pencil" style="margin: 0px 0px 10px -5px; font-size: 14px;"></i> </button>',o==1?t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-ban rounded-circle status-change" data-item-id='+n+'> <i class="fa-solid fa-ban" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>':t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle status-change" data-item-id='+n+'> <i class="fa-solid fa-check" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>',t+='<button style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-danger rounded-circle delete-item" data-item-id='+n+'> <i class="fa-solid fa-trash" style="margin: 2px 0px 10px  -4px; font-size: 14px;" ></i> </button>',t},width:"10%"}],drawCallback:function(i){$(".edit-item").on("click",function(a){var e=$(this).attr("data-item-id");h.push({name:"payAcctEdit",params:{id:e}})}),$(".delete-item").on("click",function(a){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to delete this issued Payment Account?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,o){console.log(o),o=="yes"&&(p.post("deletePaymentAcct",{id:e}),u(),Notification.showToast("s","Successfully issued Payment Account Deleted."))}})}),$(".status-change").on("click",function(a){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to change status this issued Payment Account?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,o){o=="yes"&&(p.post("changePaymentAcctStatus",{id:e}),u(),Notification.showToast("s","Successfully issued Payment Account status Changed."))}})})}};async function u(){try{l.GlobalLoading=!0;const i=await p.get("getPaymentAcct");m.value=i.data.data,l.GlobalLoading=!1}catch(i){console.log(i),l.GlobalLoading=!1}}return(i,a)=>{const e=A("router-link");return g(),f(P,null,[s("div",D,[a[5]||(a[5]=s("div",{class:"breadcrumb-title pe-3"},"Settings",-1)),s("div",N,[s("nav",O,[s("ol",T,[s("li",L,[c(e,{to:{name:"Home"}},{default:d(()=>a[0]||(a[0]=[r("Dashboard")])),_:1})]),s("li",V,[c(e,{to:{name:"paymentacct"}},{default:d(()=>a[1]||(a[1]=[r("Settings")])),_:1})]),s("li",j,[c(e,{to:{name:"paymentacct"}},{default:d(()=>a[2]||(a[2]=[r("Deposit")])),_:1})]),a[3]||(a[3]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"Payment Account",-1))])])]),s("div",q,[s("div",B,[c(e,{to:{name:"paymentAcctCreate"},class:"btn btn-primary btn-sm"},{default:d(()=>a[4]||(a[4]=[s("i",{class:"fa fa-circle-plus"},null,-1),r("Payment Account ")])),_:1})])])]),a[7]||(a[7]=k('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fa-solid fa-location-dot"></i></span><div class="info-agency-content"><span class="info-agency-text">Total Area</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1 text-white"><i class="fa fa-check"></i></span><div class="active-agency-content"><span class="active-agency-text">Active Area</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa-solid fa-circle-pause"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Inactive Area</span><span class="pending-agnt-number">20</span></div></div></div></div>',1)),s("div",R,[s("div",G,[s("div",I,[y(l).GlobalLoading?(g(),f("div",H,a[6]||(a[6]=[s("div",{class:"loader-circle-57"},[s("img",{class:"position-absolute",src:C,height:"22",width:"22",alt:""})],-1)]))):z("",!0),c(y(v),{options:x,data:m.value,class:"table table-sm table-striped table-bordered"},null,8,["data"])])])])],64)}}};export{U as default};
