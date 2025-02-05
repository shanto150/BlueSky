import{u as _,a as A,e as m,E as r,i as w,o as g,c as b,b as a,p,q as f,d as v,j as C,l as x,s as S,t as k,F as N}from"./app-CRkVFXnG.js";import{V as h,D as O}from"./dataTables.bootstrap5-C1JqzZo-.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const L={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},B={class:"ps-3"},D={"aria-label":"breadcrumb"},T={class:"breadcrumb mb-0 p-0"},j={class:"breadcrumb-item"},z={class:"ms-auto"},H={class:"btn-group"},V={class:"row position-relative"},R={class:"col-12"},I={id:"RoleList",class:"card rounded rounded-2 shadow-none p-3"},q={key:0,class:"center-body position-absolute top-50 start-50"},K={__name:"index",setup(M){const c=_(),l=A();h.use(O);const u=m([]);m(),d();const y={responsive:!0,pageLength:30,lengthMenu:[3,10,20,30],bDestroy:!0,ordering:!1,dom:"<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>><'row'<'col-sm-12'tr>><'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",buttons:[{extend:"excel",text:'<i class="fa fa-file-excel"></i> Excel',title:"Agents List",messageTop:function(){return"Agents List"},className:"btn btn-danger btn-sm text-white",exportOptions:{columns:[1,2,3,4,5,6,7,10]}},{extend:"csv",text:'<i class="fa fa-file-csv"></i> CSV',title:"Agents List",messageTop:function(){return"Agents List"},className:"btn btn-info btn-sm text-white",exportOptions:{columns:[1,2,3,4,5,6,7,10]}}],language:{search:"",searchPlaceholder:"Search by anything"},columnDefs:[{defaultContent:"0",targets:"_all"}],columns:[{data:"DT_RowIndex",title:"SL"},{title:"Agent Details",render:function(i,s,t){var e="";return e+=t.name,e+="<br>",e+='<span class="text-primary">',e+=t.agent_code+"</span>",e+="<br>",e+='<span class="text-primary">',e+=t.email+"</span>",e}},{title:"Category",render:function(i,s,t){var e="";return t.iata_number?e+="IATA":e+="Non-IATA",e+="<br>",t.hajj_agency_number?(e+='<span class="text-primary">',e+="Hajj</span>"):(e+='<span class="text-primary">',e+="Non-Hajj</span>"),e}},{title:"Zone",data:"zone"},{title:"Owner Details",render:function(i,s,t){var e="";return e+=t.owner,e+="<br>",e+='<span class="text-primary">',e+=t.designation+"</span>",e}},{title:"Contact ",data:"phone"},{title:"KAM",data:"kam"},{title:"Net Balance",data:"net_balance"},{title:"Created By",render:function(i,s,t){var e="";return e+=t.created_by,e+="<br>",e+='<span class="text-primary">',e+=t.created_at+"</span>",e}},{title:"Updated By",render:function(i,s,t){var e="";return e+=t.updated_by||"-",e+="<br>",t.updated_by&&(e+='<span class="text-primary">',e+=t.updated_at+"</span>"),e}},{title:"Status",render:function(i,s,t){var e="";return t.status=="Approved"?e+='<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Approved </div>':t.status=="Pending"?e+='<div class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Pending </div>':t.status=="Recommended"?e+='<div class="badge rounded-pill text-primary bg-light-primary p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Recommended </div>':t.status=="Hold"?e+='<div class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Hold </div>':t.status=="Decline"&&(e+='<div class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Declined </div>'),e}},{width:"150px",title:"Action",render:function(i,s,t){var e="",n=t.idd,o=t.status;return e+='<button  style="size: 30px; width: 30px; height: 30px;" class="btn btn-outline-info rounded-circle agent-view" placement="top" data-item-id='+n+'> <i class="fa-solid fa-file" style="margin:1px 0px 11px -3px;font-size:14px;"></i> </button>',(o=="Pending"||o=="Hold")&&(e+='<button  style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle agent-recommended" placement="top" id="edit_tool" data-item-id='+n+'> <i class="fa fa-check" style="margin: 2px 0px 10px -4px; font-size: 14px;"></i> </button>'),o=="Recommended"&&(e+='<button  style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle agent-approve" placement="top" id="edit_tool" data-item-id='+n+'> <i class="fa fa-check" style="margin: 2px 0px 10px -4px; font-size: 14px;"></i> </button>'),e}}],drawCallback:function(i){$(".agent-approve").on("click",function(s){var t=$(this).attr("data-item-id");c.push({name:"agentApproved",params:{ids:t}})}),$(".agent-view").on("click",function(s){var t=$(this).attr("data-item-id");c.push({name:"agentView",params:{ids:t}})}),$(".agent-recommended").on("click",function(s){var t=$(this).attr("data-item-id");c.push({name:"agentRecomanded",params:{ids:t}})}),$(".delete-item").on("click",function(s){var t=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to delete this area?",position:"center",buttons:[["<button><b>No</b></button>",function(e,n){e.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(e,n){e.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(e,n,o){console.log(o),o=="yes"&&(r.post("deletearea",{id:t}),d(),Notification.showToast("s","Successfully Zone Deleted."))}})}),$(".status-change").on("click",function(s){var t=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to change status this area?",position:"center",buttons:[["<button><b>No</b></button>",function(e,n){e.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(e,n){e.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(e,n,o){o=="yes"&&(r.post("changeAreaStatus",{id:t}),d(),Notification.showToast("s","Successfully Zone status Changed."))}})})}};async function d(){try{l.GlobalLoading=!0;const i=await r.get("getAgent");u.value=i.data.data,l.GlobalLoading=!1}catch(i){console.log(i),l.GlobalLoading=!1}}return(i,s)=>{const t=w("router-link");return g(),b(N,null,[a("div",L,[s[3]||(s[3]=a("div",{class:"breadcrumb-title pe-3"}," B2B Agent",-1)),a("div",B,[a("nav",D,[a("ol",T,[a("li",j,[p(t,{to:{name:"Home"}},{default:f(()=>s[0]||(s[0]=[v("Dashboard")])),_:1})]),s[1]||(s[1]=a("li",{class:"breadcrumb-item active","aria-current":"page"},"B2B Agent List",-1))])])]),a("div",z,[a("div",H,[p(t,{to:{name:"CreateAgency"},class:"btn btn-primary btn-sm"},{default:f(()=>s[2]||(s[2]=[a("i",{class:"fa fa-circle-plus"},null,-1),v(" B2B Agent ")])),_:1})])])]),s[5]||(s[5]=C('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fas fa-building"></i></span><div class="info-agency-content"><span class="info-agency-text">Total Agency</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1"><i class="fa-solid fa-circle-check"></i></span><div class="active-agency-content"><span class="active-agency-text">Active Agency</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa fa-clock"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Pending</span><span class="pending-agnt-number">20</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="info-box mb-3"><span class="info-box-icon bg-danger elevation-1"><i class="fa fa-pause"></i></span><div class="info-box-content"><span class="info-box-text">On Hold</span><span class="info-box-number">5</span></div></div></div></div><div class="row mb-3"><div class="col-md-12"><div class="card rounded rounded-2 shadow-none p-3"><div class="row"><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Category</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Zone</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select KAM</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Status</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Status</option></select></div><div class="col-md-1 mt-2"><i class="fa fa-times text-danger"></i> Clear </div></div></div></div></div>',2)),a("div",V,[a("div",R,[a("div",I,[x(l).GlobalLoading?(g(),b("div",q,s[4]||(s[4]=[a("div",{class:"loader-circle-57"},[a("img",{class:"position-absolute",src:S,height:"22",width:"22",alt:""})],-1)]))):k("",!0),p(x(h),{options:y,data:u.value,class:"table table-sm table-striped table-bordered"},null,8,["data"])])])])],64)}}};export{K as default};
