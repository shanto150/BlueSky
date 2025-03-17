<script setup>
import DataTable from "datatables.net-vue3";
import DataBS5 from "datatables.net-bs5";
import axiosInstance from "../../../axiosInstance";
import { data } from "jquery";
import { icons } from "lucide-vue-next";
import { useRouter } from 'vue-router';
const router = useRouter();
import { useAuthStore } from '../../../stores/authStore';
const authStore = useAuthStore();
import { ref, reactive, onMounted, render } from "vue";

DataTable.use(DataBS5);

const rData = ref([]);
var regExSearch = ref();
getListValues();

const options = {
    responsive: true,
    pageLength: 30,
    lengthMenu: [3, 10, 20, 30],
    bDestroy: true,
    ordering: false,
    dom: "<'row'<'col-sm-4'B><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'f>>" + "<'row'<'col-sm-12'tr>>" +
        "<'row justify-content-between Reduct_table_gap'<'d-md-flex justify-content-between align-items-center dt-layout-start col-md-auto me-auto'i><'d-md-flex justify-content-between align-items-center dt-layout-end col-md-auto ms-auto'p>>",
    buttons: [
        {
            extend: 'excel',
            text: '<i class="fa fa-file-excel"></i> Excel',
            title: 'Agents List',
            messageTop: function () {
                return 'Agents List';
            },
            className: 'btn btn-danger btn-sm text-white',
            exportOptions: {
                columns: [1, 2, 3, 4, 5, 6, 7, 10],
            }
        },
        {
            extend: 'csv',
            text: '<i class="fa fa-file-csv"></i> CSV',
            title: 'Agents List',
            messageTop: function () {
                return 'Agents List';
            },
            className: 'btn btn-info btn-sm text-white',
            exportOptions: {
                columns: [1, 2, 3, 4, 5, 6, 7, 10],
            }
        }
    ],
    language: {
        search: "",
        searchPlaceholder: "Search by anything",
    },
    columnDefs: [{
        defaultContent: "0",
        targets: "_all",
    }],
    columns: [
        { data: "DT_RowIndex", title: "SL", width: '10%' },
        {
            title: "Agency Name & Code",
            render: function (data, type, row) {
                var html = "";
                html += row.name;
                html += "<br>";

                html += '<span class="text-primary">';
                html += row.agent_code + "</span>";
                // html += "<br>";

                // html += '<span class="text-primary">';
                // html += row.email + "</span>";
                return html;
            },
            // width: '100%',
        },
        {
            title: "Reference & Booking Code",
            render: function (data, type, row) {
                var html = "";
                if (row.iata_number) {
                    html += 'IATA';
                } else {
                    html += 'Non-IATA';
                }
                html += "<br>";
                if (row.hajj_agency_number) {
                    html += '<span class="text-primary">';

                    html += 'Hajj' + "</span>";

                } else {
                    html += '<span class="text-primary">';
                    html += 'Non-Hajj' + "</span>";
                }

                return html;
            },
            // width: '20%',

        },
        {
            title: "Sector",
            data: 'zone',
            // width: '20%',

        },
        {
            title: "Date",
            render: function (data, type, row) {
                var html = "";
                html += row.owner;
                html += "<br>";

                html += '<span class="text-primary">';
                html += row.designation + "</span>";
                return html;
            },
            // width: '20%',

        },
        {
            title: "No. of Pax ",
            data: 'phone',
            // width: '20%',

        },
        {
            title: "GDS & Airlines PNR",
            data: 'kam',
            // width: '20%',

        },
        {
            title: "Total Fare",
            data: 'net_balance',
            // width: '20%',

        },
        {
            title: "Last Ticketing Time & Way Type",
            data: 'status',
            // width: '20%',

        },
        {
            title: "Ticket No. & Date",
            data: 'status',
            // width: '20%',

        },
        {
            title: "Created By",
            render: function (data, type, row) {
                var html = "";
                html += row.created_by;
                html += "<br>";
                html += '<span class="text-primary">';
                html += row.created_at + "</span>";
                return html;
            },
        },
        {
            title: "Updated By",
            render: function (data, type, row) {
                var html = "";
                html += row.updated_by || "-";
                html += "<br>";
                if (row.updated_by) {
                    html += '<span class="text-primary">';
                    html += row.updated_at + "</span>";
                }
                return html;
            },
        },
        {
            title: "Status",
            render: function (data, type, row) {
                var html = "";

                if (row.status == 'Approved') {
                    html += '<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Approved </div>';
                } else if (row.status == 'Pending') {
                    html += '<div class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Pending </div>';
                } else if (row.status == 'Recommended') {
                    html += '<div class="badge rounded-pill text-primary bg-light-primary p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Recommended </div>';
                }
                else if (row.status == 'Hold') {
                    html += '<div class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Hold </div>';
                }
                else if (row.status == 'Decline') {
                    html += '<div class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Declined </div>';
                }

                return html;
            },
        },
        {
            title: "Action",
            render: function (data, type, row) {
                var html = "";
                var idd = row.idd;
                var status = row.status;

                html += '<button  style="size: 30px; width: 30px; height: 30px;" class="btn btn-outline-warning rounded-circle agent-view" placement="top" data-item-id=' + idd + '> <i class="fa fa-eye" style="margin:1px 0px 11px -6px;font-size:14px;"></i> </button>';

                html += '<button type="button"  style="size:30px;width:30px;height:30px; margin-left: 5px;" class="btn btn-outline-info rounded-circle"><i class="fa-solid fa-file" style="margin:2px 0px 10px -4px;font-size:14px;"></i></button>';

                html += '<button type="button"  style="size:30px;width:30px;height:30px; margin-left: 5px;" class="btn btn-outline-timer rounded-circle"><i class="fa-solid fa-ticket" style="margin:2px 0px 10px -6px;font-size:14px;"></i></button>';
                // if (status == 'Pending' || status == 'Hold') {

                // html += '<button  style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle agent-recommended" placement="top" id="edit_tool" data-item-id=' + idd + '> <i class="fa fa-check" style="margin: 2px 0px 10px -4px; font-size: 14px;"></i> </button>';
                // }


                html += '<button style="size: 30px; width: 30px; height: 30px;  margin-top: 5px;" class="btn btn-outline-purple rounded-circle delete-item" data-item-id="1"> <i class="fa-solid fa-envelope" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>';


                html += '<button style="size: 30px; width: 30px; height: 30px; margin-left: 5px; margin-top: 5px;" class="btn btn-outline-danger rounded-circle delete-item" data-item-id="1"> <i class="fa-solid fa-times" style="margin: 2px 0px 10px  -3px; font-size: 14px;"></i> </button>';


                // html += '<button type="button"  style="size:30px;width:30px;height:30px; margin-left: 5px;" class="btn btn-outline-info rounded-circle"><i class="fa-solid fa-file" style="margin:2px 0px 10px -4px;font-size:14px;"></i></button> <router-link style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-success rounded-circle"> <i class="fa fa-check" style="margin: 2px 0px 10px -4px; font-size: 14px;"></i> </router-link> <router-link  style="size: 30px; width: 30px; height: 30px;  margin-left: 5px;" class="btn btn-outline-primary rounded-circle" placement="top" > <i class="fa fa-eye" style="margin: 2px 0px 10px -6px; font-size: 14px;"></i> </router-link> <button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"  class="btn btn-outline-user-edit rounded-circle mt-2"><i class="fa-solid fa-user-pen"  style="margin: 2px 0px 10px -4px; font-size: 14px;"></i> </button> <button type="button"  style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="mt-2 btn btn-outline-only-edit rounded-circle"> <i class="fa-solid fa-pencil" style="margin: 2px 0px 10px -4px; font-size: 14px;"></i> </button>  <button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"  class="mt-2 btn btn-outline-action-log rounded-circle">  <i class="fa-solid fa-arrow-trend-up" style="margin: 2px 0px 10px -6px; font-size: 14px;"></i> </button>';
                return html;
            },
            width: '150%',
        }
    ],
    "drawCallback": function (settings) {
        // edit function
        $(".agent-approve").on('click', function (e) {
            var itemIdd = $(this).attr('data-item-id');
            router.push({ name: 'agentApproved', params: { ids: itemIdd } });
        });
        $(".agent-view").on('click', function (e) {
            var itemIdd = $(this).attr('data-item-id');
            router.push({ name: 'agentView', params: { ids: itemIdd } });
        });
        $(".agent-recommended").on('click', function (e) {
            var itemIdd = $(this).attr('data-item-id');

            router.push({ name: 'agentRecomanded', params: { ids: itemIdd } });

        });

        // delete function
        $(".delete-item").on('click', function (e) {

            // var idd = e.target.dataset.itemId;
            var idd = $(this).attr('data-item-id');

            // delete pop up message

            iziToast.question({
                timeout: 100000,
                pauseOnHover: false,
                close: false,
                overlay: true,
                displayMode: 'once',
                id: 'question',
                zindex: 999,
                message: 'Want to delete this area?',
                position: 'center',
                buttons: [
                    ['<button><b>No</b></button>', function (instance, toast) {

                        instance.hide({ transitionOut: 'fadeOut' }, toast, 'no');

                    }, true],
                    ['<button><b>Yes</b></button>', function (instance, toast) {

                        instance.hide({ transitionOut: 'fadeOut' }, toast, 'yes');

                    }, true]
                ],
                onClosed: async function (instance, toast, closedBy) {
                    console.log(closedBy);

                    if (closedBy == 'yes') {
                        const response = axiosInstance.post("deletearea", { 'id': idd });
                        getListValues();
                        Notification.showToast('s', 'Successfully Zone Deleted.');
                    } else {

                    }

                }
            });
            // delete pop up message end


        });

        // change status
        $(".status-change").on('click', function (e) {

            var idd = $(this).attr('data-item-id');

            iziToast.question({
                timeout: 100000,
                pauseOnHover: false,
                close: false,
                overlay: true,
                displayMode: 'once',
                id: 'question',
                zindex: 999,
                message: 'Want to change status this area?',
                position: 'center',
                buttons: [
                    ['<button><b>No</b></button>', function (instance, toast) {

                        instance.hide({ transitionOut: 'fadeOut' }, toast, 'no');

                    }, true],
                    ['<button><b>Yes</b></button>', function (instance, toast) {

                        instance.hide({ transitionOut: 'fadeOut' }, toast, 'yes');

                    }, true]
                ],
                onClosed: async function (instance, toast, closedBy) {

                    if (closedBy == 'yes') {
                        const response = axiosInstance.post("changeAreaStatus", { 'id': idd });
                        getListValues();
                        Notification.showToast('s', 'Successfully Zone status Changed.');
                    } else {

                    }

                }
            });

        });
    }
};


async function getListValues() {
    try {
        authStore.GlobalLoading = true;
        const response = await axiosInstance.get("getAgent");
        rData.value = response.data.data;
        authStore.GlobalLoading = false;
    } catch (error) {
        console.log(error);
        authStore.GlobalLoading = false;
    }
}

</script>
<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">

        <div class="breadcrumb-title pe-3"> Flight Management</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">Flight Management</li>
                    <li class="breadcrumb-item active" aria-current="page">Search</li>
                    <li class="breadcrumb-item active" aria-current="page">Traveller Info</li>
                </ol>
            </nav>
        </div>
        <!-- <div class="ms-auto">

        </div> -->
    </div>

    <div class="row">
        <div class="col-12 col-md-12 com-sm-12">
            <div class="card m-0">
                <div class="row shadow-none rounded rounded-2 p-3 pb-0">
                    <div class="col-md-7">
                        <div class="d-flex flex-column bd-highlight">
                            <!-- part 1 -->
                            <div class="d-flex flex-row bd-highlight mb-2">
                                <div class="bd-highlight pe-1">
                                    <b><span style="font-size: 15px;">DAC-DXB</span></b>
                                </div>
                                <span><b>|</b></span>
                                <div class="bd-highlight ps-1">
                                    <b><span style="font-size: 15px;">DXB-DAC</span></b>
                                </div>
                            </div>
                            <!-- end of part 1 -->

                            <!-- part 2 -->
                            <div class="d-flex flex-row bd-highlight">
                                <div class="bd-highlight pe-1">
                                    <i class="fa fa-calendar-alt" style="color: #bfc3c9;"></i>
                                    <span class="booking-top-card-text">

                                        Departure: 20 June,2025 - Arrival: 20 July,2025
                                    </span>
                                </div>

                                <span>|</span>

                                <div class="bd-highlight ps-1">
                                    <i class="fa-solid fa-plane-up" style="color: #bfc3c9;"></i>
                                    <span class="booking-top-card-text">
                                        Round Way
                                    </span>

                                </div>

                                <span>|</span>

                                <div class="bd-highlight ps-1">
                                    <i class="fa-solid fa-seat-airline" style="color: #bfc3c9;"></i>
                                    <span class="booking-top-card-text">
                                        Economy
                                    </span>
                                </div>

                                <span>|</span>
                                <div class="bd-highlight ps-1">
                                    <i class="fa fa-user" style="color: #bfc3c9;"></i>
                                    <span class="booking-top-card-text">
                                        4 Travellers
                                    </span>
                                </div>
                            </div>
                            <!-- end of part 2 -->
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="d-flex flex-row bd-highlight ">
                            <div class="pe-1 bd-highlight w-100">
                                <div class="card">
                                    <div class="card-body" style="background-color: #f6f2ff;">
                                        <div
                                            class="d-flex flex-row bd-highlight justify-content-center align-items-center">
                                            <div class="pe-1">Time Remaining</div>
                                            <div class="ps-1 bluesky-departure-text"><b>30 : 00</b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-1 bd-highlight w-75">
                                <div class="card">
                                    <div class="card-body" style="background-color: #f0f7fe;">
                                        <div
                                            class="d-flex flex-row bd-highlight justify-content-center align-items-center">
                                            <div class="pe-1 text-primary">Flight Details</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row position-relative mt-4">
        <div class="col-12 col-md-12 com-sm-12">
            <div class="card m-0">
                <div class="row shadow-none rounded rounded-2 p-3 pb-0">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="bd-highlight">
                                        <img src="../../../../../public/theme/Booking_Steps/Traveler_Details.svg"
                                            alt="">
                                    </div>
                                    <div class="bd-highlight ">
                                        <img class="addones-service-inactive"
                                            src="../../../../../public/theme/Booking_Steps/Addons_Services_Inactive.svg"
                                            alt="">
                                    </div>
                                    <div class="bd-highlight">
                                        <img class="coupon-offers-inactive"
                                            src="../../../../../public/theme/Booking_Steps/Coupon_Offers_Inactive.svg"
                                            alt="">
                                    </div>
                                    <div class="bd-highlight">
                                        <img class="review-payment-inactive"
                                            src="../../../../../public/theme/Booking_Steps/Review_Payment_Inactive.svg"
                                            alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Accordion Example</h5>
                                        <hr>
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                        aria-expanded="false" aria-controls="collapseOne">
                                                        Accordion Item #1
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse"
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample"
                                                    style="">
                                                    <div class="accordion-body"> <strong>This is the first item's
                                                            accordion body.</strong> It is hidden by default, until the
                                                        collapse plugin adds the appropriate classes that we use to
                                                        style each element. These classes control the overall
                                                        appearance, as well as the showing and hiding via CSS
                                                        transitions. You can modify any of this with custom CSS or
                                                        overriding our default variables. It's also worth noting that
                                                        just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.</div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        Accordion Item #2
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse"
                                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body"> <strong>This is the second item's
                                                            accordion body.</strong> It is hidden by default, until the
                                                        collapse plugin adds the appropriate classes that we use to
                                                        style each element. These classes control the overall
                                                        appearance, as well as the showing and hiding via CSS
                                                        transitions. You can modify any of this with custom CSS or
                                                        overriding our default variables. It's also worth noting that
                                                        just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.</div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingThree">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        Accordion Item #3
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse"
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body"> <strong>This is the third item's
                                                            accordion body.</strong> It is hidden by default, until the
                                                        collapse plugin adds the appropriate classes that we use to
                                                        style each element. These classes control the overall
                                                        appearance, as well as the showing and hiding via CSS
                                                        transitions. You can modify any of this with custom CSS or
                                                        overriding our default variables. It's also worth noting that
                                                        just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>

</script>
<style>
.booking-top-card-text {
    color: rgba(94, 104, 120, 1);
}

.addones-service-inactive {
    position: absolute;
    left: 210px;
    top: 16px;
    z-index: 16;
}

.coupon-offers-inactive {
    position: absolute;
    left: 421px;
    top: 16px;
    z-index: 16;
}

.review-payment-inactive {
    position: absolute;
    left: 631px;
    top: 16px;
    z-index: 16;
}
</style>
