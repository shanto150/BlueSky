import{_ as p,i as c,r as x,c as i,o as e,b as t,j as d,p as m,q as r,d as a,w as n,Z as b,Q as u}from"./app-DgxQLPTl.js";import"https://code.jquery.com/jquery-3.7.1.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.4.0/js/iziToast.min.js";import"https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";const g={},f={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},v={class:"ps-3"},y={"aria-label":"breadcrumb"},w={class:"breadcrumb mb-0 p-0"},k={class:"breadcrumb-item"},A={class:"table-responsive mt-2 border rounded rounded-2 p-3"},B={id:"example2_wrapper",class:"dataTables_wrapper dt-bootstrap5"},h={class:"row mt-2"},S={class:"col-sm-12"},T={class:"table table-sm table-striped table-bordered"},z={role:"row"},L={type:"button",style:{size:"30px",width:"30px",height:"30px","margin-left":"5px"},class:"btn btn-outline-info rounded-circle"},C={type:"button",style:{size:"30px",width:"30px",height:"30px","margin-left":"5px"},class:"btn btn-outline-action-log rounded-circle"},D={role:"even"},R={type:"button",style:{size:"30px",width:"30px",height:"30px"},class:"btn btn-outline-info rounded-circle"},N={type:"button",style:{size:"30px",width:"30px",height:"30px","margin-left":"5px"},class:"btn btn-outline-danger rounded-circle"},j={type:"button",style:{size:"30px",width:"30px",height:"30px"},class:"btn btn-outline-info rounded-circle"},q={type:"button",title:"Log",class:"btn btn-outline-action-log rounded-circle",style:{size:"30px",width:"30px",height:"30px","margin-left":"5px"}};function M(P,s){const o=c("router-link"),l=x("tippy");return e(),i(u,null,[t("div",f,[s[2]||(s[2]=t("div",{class:"breadcrumb-title pe-3"}," Deposit Management",-1)),t("div",v,[t("nav",y,[t("ol",w,[t("li",k,[m(o,{to:{name:"Home"}},{default:r(()=>s[0]||(s[0]=[a("Dashboard")])),_:1})]),s[1]||(s[1]=t("li",{class:"breadcrumb-item active","aria-current":"page"},"Deposit List",-1))])])])]),s[40]||(s[40]=d('<div class="row"><div class="col-12 col-sm-6 col-md-3"><div class="info-agency"><span class="info-agency-icon bg-info elevation-1"><i class="fas fa-users"></i></span><div class="info-agency-content"><span class="info-agency-text">Total</span><span class="info-agency-number"> 1200 </span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="active-agency mb-3"><span class="active-agency-icon bg-success elevation-1 text-white"><i class="fa-solid fa-circle-check"></i></span><div class="active-agency-content"><span class="active-agency-text">Approved</span><span class="active-agency-number">760</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="info-box mb-3"><span class="info-box-icon bg-danger elevation-1"><i class="fa fa-pause"></i></span><div class="info-box-content"><span class="info-box-text">Requested</span><span class="info-box-number">5</span></div></div></div><div class="col-12 col-sm-6 col-md-3"><div class="pending-agnt mb-3"><span class="pending-agnt-icon bg-warning elevation-1"><i class="fa fa-clock"></i></span><div class="pending-agnt-content"><span class="pending-agnt-text">Decline</span><span class="pending-agnt-number">20</span></div></div></div></div><div class="row"><div class="col-12"><div class="card rounded rounded-2 shadow-none p-3"><div class="row"><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Payment</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Bank</option></select></div><div class="col-md-2"><select class="form-select form-select-sm" id="single-select-field" data-placeholder="Choose one thing"><option>Select Status</option></select></div><div class="col-md-1 mt-2"><i class="fa fa-times text-danger"></i> Clear </div></div></div></div></div>',2)),t("div",A,[t("div",B,[s[38]||(s[38]=d('<div class="row"><div class="col-sm-12 col-md-6"><button class="btn btn-sm btn-danger" style="margin-right:3px;" tabindex="0" aria-controls="example2" type="button"><i class="fa-solid fa-file-pdf" style="font-size:14px !important;"></i> <span>PDF</span></button><button class="btn btn-sm btn-success" style="margin-right:3px;" tabindex="0" aria-controls="example2" type="button"><i class="fa-regular fa-file-excel" style="font-size:14px !important;"></i><span>Excel</span></button></div><div class="col-md-4"></div><div class="col-sm-2 col-md-2"><div id="example2_filter" class="dataTables_filter"><input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example2"></div></div></div>',1)),t("div",h,[t("div",S,[t("table",T,[s[37]||(s[37]=t("thead",null,[t("tr",{role:"row"},[t("th",{class:"sorting_asc",tabindex:"0","aria-controls":"example2",rowspan:"1",colspan:"1","aria-sort":"ascending","aria-label":"SL: activate to sort column descending",style:{width:"10px"}}," SL."),t("th",{class:"sorting",tabindex:"0","aria-controls":"example2",rowspan:"1",colspan:"1","aria-label":"Agency: activate to sort column ascending",style:{width:"116.087px"}}," Agency"),t("th",{class:"sorting",tabindex:"0","aria-controls":"example2",rowspan:"1",colspan:"1","aria-label":"Payment Term: activate to sort column ascending",style:{width:"107.037px"}},"Payment Term"),t("th",{class:"sorting",tabindex:"0","aria-controls":"example2",rowspan:"1",colspan:"1","aria-label":"Bank & Balance: activate to sort column ascending",style:{width:"107.037px"}},"Bank & Balance"),t("th",{class:"sorting",tabindex:"0","aria-controls":"example2",rowspan:"1",colspan:"1","aria-label":"Ref. No: activate to sort column ascending",style:{width:"107.037px"}}," Ref. No"),t("th",{class:"sorting",tabindex:"0","aria-controls":"example2",rowspan:"1",colspan:"1","aria-label":"Total Amount: activate to sort column ascending",style:{width:"107.037px"}},"Total Amount"),t("th",{class:"sorting",tabindex:"0","aria-controls":"example2",rowspan:"1",colspan:"1","aria-label":"Remarks: activate to sort column ascending",style:{width:"307.037px"}}," Remarks"),t("th",{class:"sorting",tabindex:"0","aria-controls":"example2",rowspan:"1",colspan:"1","aria-label":"Requested By: activate to sort column ascending",style:{width:"107.037px"}},"Requested By"),t("th",{class:"sorting",tabindex:"0","aria-controls":"example2",rowspan:"1",colspan:"1","aria-label":"Status: activate to sort column ascending",style:{width:"107.037px"}}," Status"),t("th",{class:"sorting",tabindex:"0","aria-controls":"example2",rowspan:"1",colspan:"1","aria-label":"Action: activate to sort column ascending",style:{width:"107.037px"}}," Action")])],-1)),t("tbody",null,[t("tr",z,[s[5]||(s[5]=t("td",{class:"text-left"},"01",-1)),s[6]||(s[6]=t("td",{class:"text-left"},[a("ABC Travel Ltd "),t("br"),t("small",{class:"text-blue"}," BLU00011 "),a("| "),t("small",{class:"text-violate"}," IATA ")],-1)),s[7]||(s[7]=t("td",{class:"text-left"},"Bank",-1)),s[8]||(s[8]=t("td",{class:"text-left"},[a("Bank Asia "),t("br"),t("small",{class:"text-blue"}," Gulshan-1 ")],-1)),s[9]||(s[9]=t("td",{class:"text-left"},[a("101921101 "),t("br"),t("small",{class:"text-blue"}," 25-Sept-2024 ")],-1)),s[10]||(s[10]=t("td",{class:"text-left"},[t("i",{class:"fa-solid fa-bangladeshi-taka-sign"}),a(" 1000000 "),t("br"),t("small",{class:"text-blue"},[a(" (-)"),t("i",{class:"fa-solid fa-bangladeshi-taka-sign"}),a(" 70000 ")])],-1)),s[11]||(s[11]=t("td",{class:"text-left",id:"pre-line"}," Air Ticket Reserve ",-1)),s[12]||(s[12]=t("td",{class:"text-left"},[a(" Md. Atiqur Rahman "),t("br"),t("small",{class:"text-blue"}," 25-Sept-2024 ")],-1)),s[13]||(s[13]=t("td",null,[t("div",{class:"badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"},[t("i",{class:"bx bxs-circle me-1"}),a("Approved ")])],-1)),t("td",null,[n((e(),i("button",L,s[3]||(s[3]=[t("i",{class:"fa-solid fa-file",style:{margin:"2px 0px 10px -4px","font-size":"14px"}},null,-1)]))),[[l,"Attachment"]]),n((e(),i("button",C,s[4]||(s[4]=[t("i",{class:"fa-solid fa-arrow-trend-up",style:{margin:"2px 0px 10px -6px","font-size":"14px"}},null,-1)]))),[[l,"Log"]])])]),t("tr",D,[s[17]||(s[17]=t("td",{class:"text-left"},"02",-1)),s[18]||(s[18]=t("td",{class:"text-left"},[a("Zaima Travel Ltd "),t("br"),t("small",{class:"text-blue"}," BLU00012 "),a("| "),t("small",{class:"text-violate"}," Hajj ")],-1)),s[19]||(s[19]=t("td",{class:"text-left"},"Cash",-1)),s[20]||(s[20]=t("td",{class:"text-left"},[a("Cash Counter-BS "),t("br"),t("small",{class:"text-blue"}," Gulshan-1 ")],-1)),s[21]||(s[21]=t("td",{class:"text-left"},[a("9001921101 "),t("br"),t("small",{class:"text-blue"}," 23-Sept-2024 ")],-1)),s[22]||(s[22]=t("td",{class:"text-left"},[t("i",{class:"fa-solid fa-bangladeshi-taka-sign"}),a(" 109000 ")],-1)),s[23]||(s[23]=t("td",{class:"text-left",id:"pre-line"}," Air Ticket Booking ",-1)),s[24]||(s[24]=t("td",{class:"text-left"},[a(" Md. Sajjadul Anam "),t("br"),t("small",{class:"text-blue"}," 23-Sept-2024 ")],-1)),s[25]||(s[25]=t("td",null,[t("div",{class:"badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3"},[t("i",{class:"bx bxs-circle me-1"}),a("Requested ")])],-1)),t("td",null,[n((e(),i("button",R,s[14]||(s[14]=[t("i",{class:"fa-solid fa-file",style:{margin:"2px 0px 10px -4px","font-size":"14px"}},null,-1)]))),[[l,"Attachment"]]),n((e(),b(o,{to:{name:"depoDetails"},style:{size:"30px",width:"30px",height:"30px","margin-left":"5px"},class:"btn btn-outline-success rounded-circle",placement:"top"},{default:r(()=>s[15]||(s[15]=[t("i",{class:"fa fa-check",style:{margin:"2px 0px 10px -4px","font-size":"14px"}},null,-1)])),_:1})),[[l,"Aproval"]]),n((e(),i("button",N,s[16]||(s[16]=[t("i",{class:"fa fa-ban",style:{margin:"2px 0px 10px -5px","font-size":"14px"}},null,-1)]))),[[l,"Log"]])])]),t("tr",null,[s[28]||(s[28]=t("td",{class:"text-left"},"02",-1)),s[29]||(s[29]=t("td",{class:"text-left"},[a("DDD Travel Ltd "),t("br"),t("small",{class:"text-blue"}," BLU00014 "),a("| "),t("small",{class:"text-violate"}," IATA ")],-1)),s[30]||(s[30]=t("td",{class:"text-left"},"Bank",-1)),s[31]||(s[31]=t("td",{class:"text-left"},[a("City Bank "),t("br"),t("small",{class:"text-blue"}," Gulshan-2 ")],-1)),s[32]||(s[32]=t("td",{class:"text-left"},[a("64019221101 "),t("br"),t("small",{class:"text-blue"}," 23-Sept-2024 ")],-1)),s[33]||(s[33]=t("td",{class:"text-left"},[t("i",{class:"fa-solid fa-bangladeshi-taka-sign"}),a(" 1119000 ")],-1)),s[34]||(s[34]=t("td",{class:"text-left",id:"pre-line"}," Air Ticket Booking ",-1)),s[35]||(s[35]=t("td",{class:"text-left"},[a(" Md. Masiur Alam "),t("br"),t("small",{class:"text-blue"}," 23-Sept-2024 ")],-1)),s[36]||(s[36]=t("td",null,[t("div",{class:"badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"},[t("i",{class:"bx bxs-circle me-1"}),a("Rejected ")])],-1)),t("td",null,[n((e(),i("button",j,s[26]||(s[26]=[t("i",{class:"fa-solid fa-file",style:{margin:"2px 0px 10px -4px","font-size":"14px"}},null,-1)]))),[[l,"Attachment"]]),n((e(),i("button",q,s[27]||(s[27]=[t("i",{class:"fa-solid fa-arrow-trend-up",style:{margin:"2px 0px 10px -6px","font-size":"14px"}},null,-1)]))),[[l,"Log"]])])])])])])]),s[39]||(s[39]=t("div",{class:"row"},[t("div",{class:"col-sm-12 col-md-5"},[t("div",{class:"dataTables_info",id:"example2_info",role:"status","aria-live":"polite"},"Showing 1 to 5 of 10 entries")]),t("div",{class:"col-sm-12 col-md-7"},[t("div",{class:"dataTables_paginate paging_simple_numbers",id:"example2_paginate"},[t("ul",{class:"pagination"},[t("li",{class:"paginate_button page-item previous disabled",id:"example2_previous"},[t("a",{href:"#","aria-controls":"example2","data-dt-idx":"0",tabindex:"0",class:"page-link"},"Prev")]),t("li",{class:"paginate_button page-item active"},[t("a",{href:"#","aria-controls":"example2","data-dt-idx":"1",tabindex:"0",class:"page-link"},"1")]),t("li",{class:"paginate_button page-item"},[t("a",{href:"#","aria-controls":"example2","data-dt-idx":"2",tabindex:"0",class:"page-link"},"2")]),t("li",{class:"paginate_button page-item next",id:"example2_next"},[t("a",{href:"#","aria-controls":"example2","data-dt-idx":"7",tabindex:"0",class:"page-link"},"Next")])])])])],-1))])])],64)}const F=p(g,[["render",M]]);export{F as default};
