import{u as y,a as w,e as _,f as T,h as k,F as p,i as S,c as m,o as f,b as a,j as C,p as b,q as z,d as L,s as I,l as v,t as N,G as O}from"./app-BWxCcVMP.js";import{V as g,D as h}from"./dataTables.bootstrap5-Cig6KP_h.js";import{j}from"./responsive.bootstrap5-C2WlIdbu.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";import"./jquery-CK-2X72_.js";import"./dataTables.buttons-CrA6XPY8.js";const V={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},D={class:"ps-3"},U={"aria-label":"breadcrumb"},B={class:"breadcrumb mb-0 p-0"},A={class:"breadcrumb-item"},G={class:"table-responsive"},M={class:"row position-relative"},F={class:"col-12"},q={id:"userList",class:"card rounded rounded-2 shadow-none p-3"},E={key:0,class:"center-body position-absolute top-50 start-50"},Z={__name:"index",setup(R){const c=y(),o=w();g.use(h),h.Buttons.jszip(j);const d=_([]),r=T({status:"",useridStatus:""});k(()=>{$("#status").on("change",function(){r.status=$(this).val()})}),u();const x={responsive:!0,destroy:!0,pageLength:30,lengthMenu:[3,10,20,30],ordering:!1,columnDefs:[{defaultContent:"0",targets:"_all"}],dom:"<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>><'row'<'col-sm-12'tr>><'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",buttons:[{extend:"excel",text:'<i class="fa fa-file-excel"></i> Excel',title:"Your Title",messageTop:function(){return"Fun"},className:"btn btn-danger btn-sm text-white",exportOptions:{columns:[1,2,3,5]}},{extend:"csv",text:'<i class="fa fa-file-csv"></i> CSV',title:"Your Title",messageTop:function(){return"Fun"},className:"btn btn-info btn-sm text-white",exportOptions:{columns:[1,2,3,5]}}],language:{search:"",searchPlaceholder:"Search by anything.."},columns:[{data:"DT_RowIndex",title:"SL"},{title:"Traveler Info",render:function(i,s,e){var t="";return t+='<div class="col-md-8">',t+=e.name,t+="<br>",t+="19-Oct-1992",t+="<br>",t+="Male|Adult",t+="</div>",t},width:"100%"},{title:"Passport Info",render:function(i,s,e){var t="";return t+="023948bdf93450",t+="<br>",t+="19-Aug-2026",t+="<br>",t+="Bangladeshi",t},width:"20%"},{title:"Contact Info",render:function(i,s,e){var t="";return t+=e.email,t+="<br>",t+=e.phone,t}},{title:"Total Usage & Ticketed",render:function(i,s,e){var t="";return t+="৳100000",t+="<br>",t+='<span class="text-primary">',t+="10</span>",t}},{title:"Action",render:function(i,s,e){var t="",n=e.idd,l=e.status;return t+='<button  style="size: 30px; width: 30px; height: 30px" class="btn btn-outline-only-edit rounded-circle edit-item" placement="top" id="edit_tool" data-item-id='+n+'> <i class="fa-solid fa-pencil" style="margin: 0px 0px 10px -5px; font-size: 14px;" ></i> </button>',t+='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-purple rounded-circle status-change" data-item-id='+n+" data-status="+l+'> <i class="fa fa-refresh" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>',t+='<button type="button" v-tippy="Lock" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-timer rounded-circle history-data" data-item-id='+n+'> <i class="fa-solid fa-clock-rotate-left" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>',t+='<button style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-danger rounded-circle delete-item" data-item-id='+n+'> <i class="fa-solid fa-trash" style="margin: 2px 0px 10px  -4px; font-size: 14px;"></i> </button>',t},width:"90%"}],drawCallback:function(i){$(".edit-item").on("click",function(s){var e=$(this).attr("data-item-id");c.push({name:"EditUser",params:{id:e}})}),$(".delete-item").on("click",function(s){var e=$(this).attr("data-item-id");iziToast.question({timeout:1e5,pauseOnHover:!1,close:!1,overlay:!0,displayMode:"once",id:"question",zindex:999,message:"Want to delete this user?",position:"center",buttons:[["<button><b>No</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"no")},!0],["<button><b>Yes</b></button>",function(t,n){t.hide({transitionOut:"fadeOut"},n,"yes")},!0]],onClosed:async function(t,n,l){l=="yes"&&(p.post("deleteUser",{id:e}),u(),Notification.showToast("s","Successfully User Deleted."))}})}),$(".status-change").on("click",function(s){var e=$(this).attr("data-item-id"),t=$(this).attr("data-status");$("#status_change_modal").modal("show"),$("#status").val(t),$("#status").trigger("change"),r.useridStatus=e,$("#useridStatus").val(e)}),$(".history-data").on("click",function(s){var e=$(this).attr("data-item-id");console.log(e),c.push({name:"UserLog",params:{id:e}})})}};async function u(){try{o.GlobalLoading=!0;const i=await p.get("getInternalUsers");d.value=i.data.data,o.GlobalLoading=!1}catch(i){o.GlobalLoading=!1,console.log(i)}}return(i,s)=>{const e=S("router-link");return f(),m(O,null,[a("div",V,[s[2]||(s[2]=a("div",{class:"breadcrumb-title pe-3"}," Traveller Management",-1)),a("div",D,[a("nav",U,[a("ol",B,[a("li",A,[b(e,{to:{name:"Home"}},{default:z(()=>s[0]||(s[0]=[L("Dashboard")])),_:1})]),s[1]||(s[1]=a("li",{class:"breadcrumb-item active","aria-current":"page"},"Traveller List",-1))])])])]),s[4]||(s[4]=C('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fas fa-users"></i></span><div class="info-agency-content"><span class="info-agency-text">Total Traveller</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1 text-white"><i class="fa-solid fa-circle-check"></i></span><div class="active-agency-content"><span class="active-agency-text">Total Adult</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="info-box mb-3"><span class="info-box-icon bg-danger elevation-1"><i class="fa fa-pause"></i></span><div class="info-box-content"><span class="info-box-text">Total Children</span><span class="info-box-number">5</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa fa-clock"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Total Infant</span><span class="pending-agnt-number">20</span></div></div></div></div><div class="row"><div class="col-12"><div class="card"><div class="row shadow-none rounded rounded-2 p-3"><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select User Type</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Office Location</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Status</option></select></div><div class="col-md-1 mt-2"><i class="fa fa-times text-danger"></i> Clear </div></div></div></div></div>',2)),a("div",G,[a("div",M,[a("div",F,[a("div",q,[v(o).GlobalLoading?(f(),m("div",E,s[3]||(s[3]=[a("div",{class:"loader-circle-57"},[a("img",{class:"position-absolute",src:N,height:"22",width:"22",alt:""})],-1)]))):I("",!0),b(v(g),{options:x,data:d.value,class:"table table-sm table-striped table-bordered"},null,8,["data"])])])])])],64)}}};export{Z as default};
