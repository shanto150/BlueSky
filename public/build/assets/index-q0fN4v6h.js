import{u as _,a as k,e as m,E as p,i as S,o as f,c as g,b as a,p as d,q as c,d as r,j as w,l as v,s as B,t as M,F as z}from"./app-qDWnpjwp.js";import{P as x,D as F}from"./dataTables.bootstrap5-PIYx8S9W.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const C={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},D={class:"ps-3"},N={"aria-label":"breadcrumb"},O={class:"breadcrumb mb-0 p-0"},A={class:"breadcrumb-item"},I={class:"breadcrumb-item"},L={class:"breadcrumb-item"},T={class:"ms-auto"},V={class:"btn-group"},j={class:"row position-relative"},q={class:"col-12"},G={id:"issuedBankList",class:"card rounded rounded-2 shadow-none p-3"},E={key:0,class:"center-body position-absolute top-50 start-50"},J={__name:"index",setup(H){const y=_(),l=k();x.use(F);const b=m([]);m(),u();const h={responsive:!0,pageLength:30,lengthMenu:[3,10,20,30],bDestroy:!0,ordering:!1,dom:"<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>><'row'<'col-sm-12'tr>><'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",buttons:["copy","csv","pdf","excel","print"],language:{search:"",searchPlaceholder:"Search by anything"},columnDefs:[{defaultContent:"0",targets:"_all"}],columns:[{data:"DT_RowIndex",title:"SL"},{title:"Issued Bank",render:function(i,e,s){var t="";return t+=s.name,t}},{title:"Created By",render:function(i,e,s){var t="";return t+=s.created_by,t+="<br>",t+='<span class="text-primary">',t+=s.created_at+"</span>",t}},{title:"Updated By",render:function(i,e,s){var t="";return t+=s.updated_by||"-",t+="<br>",s.updated_by&&(t+='<span class="text-primary">',t+=s.updated_at+"</span>"),t}},{title:"Status",render:function(i,e,s){var t="";return s.status==1?t+='<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Active </div>':t+='<div class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Deactivated </div>',t}},{title:"Action",render:function(i,e,s){var t="",n=s.idd,o=s.status;return t+='<button  style="size: 30px; width: 30px; height: 30px" class="btn btn-outline-only-edit rounded-circle edit-item" data-item-id='+n+' placement="top"> <i class="fa-solid fa-pencil" style="margin: 0px 0px 10px -5px; font-size: 14px;"></i> </button>',o==1?t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-ban rounded-circle status-change" data-item-id='+n+'> <i class="fa-solid fa-ban" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>':t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle status-change" data-item-id='+n+'> <i class="fa-solid fa-check" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>',t+='<button style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-danger rounded-circle delete-item" data-item-id='+n+'> <i class="fa-solid fa-trash" style="margin: 2px 0px 10px  -4px; font-size: 14px;" ></i> </button>',t}}],drawCallback:function(i){$(".edit-item").on("click",function(e){var s=$(this).attr("data-item-id");y.push({name:"bankMfsEdit",params:{id:s}})}),$(".delete-item").on("click",function(e){var s=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to delete this issued Bank/MFS?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,o){console.log(o),o=="yes"&&(p.post("deleteBankMFS",{id:s}),u(),Notification.showToast("s","Successfully issued Bank/MFS Deleted."))}})}),$(".status-change").on("click",function(e){var s=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to change status this issued Bank/MFS?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,o){o=="yes"&&(p.post("changeIssuedBankStatus",{id:s}),u(),Notification.showToast("s","Successfully issued Bank/MFS status Changed."))}})})}};async function u(){try{l.GlobalLoading=!0;const i=await p.get("getBankMFS");b.value=i.data.data,l.GlobalLoading=!1}catch(i){console.log(i),l.GlobalLoading=!1}}return(i,e)=>{const s=S("router-link");return f(),g(z,null,[a("div",C,[e[5]||(e[5]=a("div",{class:"breadcrumb-title pe-3"},"Settings",-1)),a("div",D,[a("nav",N,[a("ol",O,[a("li",A,[d(s,{to:{name:"Home"}},{default:c(()=>e[0]||(e[0]=[r("Dashboard")])),_:1})]),a("li",I,[d(s,{to:{name:"issuedBankMFS"}},{default:c(()=>e[1]||(e[1]=[r("Settings")])),_:1})]),a("li",L,[d(s,{to:{name:"issuedBankMFS"}},{default:c(()=>e[2]||(e[2]=[r("Deposit")])),_:1})]),e[3]||(e[3]=a("li",{class:"breadcrumb-item active","aria-current":"page"},"Issued Bank & MFS",-1))])])]),a("div",T,[a("div",V,[d(s,{to:{name:"bankMfsCreate"},class:"btn btn-primary btn-sm"},{default:c(()=>e[4]||(e[4]=[a("i",{class:"fa fa-circle-plus"},null,-1),r("Add New Issued Bank & MFS ")])),_:1})])])]),e[7]||(e[7]=w('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fa-solid fa-location-dot"></i></span><div class="info-agency-content"><span class="info-agency-text">Total Area</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1 text-white"><i class="fa fa-check"></i></span><div class="active-agency-content"><span class="active-agency-text">Active Area</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa-solid fa-circle-pause"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Inactive Area</span><span class="pending-agnt-number">20</span></div></div></div></div>',1)),a("div",j,[a("div",q,[a("div",G,[v(l).GlobalLoading?(f(),g("div",E,e[6]||(e[6]=[a("div",{class:"loader-circle-57"},[a("img",{class:"position-absolute",src:B,height:"22",width:"22",alt:""})],-1)]))):M("",!0),d(v(x),{options:h,data:b.value,class:"table table-sm table-striped table-bordered"},null,8,["data"])])])])],64)}}};export{J as default};
