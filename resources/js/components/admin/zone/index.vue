<script setup>
import DataTable from "datatables.net-vue3";
import DataBS5 from "datatables.net-bs5";
import axiosInstance from "../../../axiosInstance";
import { ref } from "vue";
import { data } from "jquery";

DataTable.use(DataBS5);

const rData = ref([]);

getListValues();

const options = {
    processing: false,
    serverSide: false,
    responsive: true,
    pageLength: 30,
    lengthMenu: [3, 10, 20, 30, 50, 100, 200, 500],
    bDestroy: true,
    ordering: false,
    language: {
        search: "",
        searchPlaceholder: "Search by anything",
    },
    columns: [
        { data: "DT_RowIndex", title: "SL" },
        {

            title: "Area",
            render: function (data, type, row) {
                var html = "";
                html += row.name;
                html += "<br>";

                html += '<span class="text-primary">';
                html += row.district + "</span>";
                return html;
            },
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
                if (row.updated_at) {
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

                if(row.status==1){
                    html += '<div class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Active </div>';
                }else{
                    html += '<div class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Deactivated </div>';
                }

                return html;
            },
        },{
            title:"Action",
            render: function (data, type, row) {
                var html = "";

                html +='<router-link :to="{name:"zoneCreate"}" style="size: 30px; width: 30px; height: 30px" class="btn btn-outline-only-edit rounded-circle" placement="top" title="KAM Assign"> <i class="fa-solid fa-pencil" style="margin: 0px 0px 10px -5px; font-size: 14px;"></i> </router-link>';

                html +=' <button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-ban rounded-circle"> <i class="fa-solid fa-ban" style="margin: 2px 0px 10px -5px; font-size: 14px;"></i> </button>';

                html +='<button type="button" style="size: 30px; width: 30px; height: 30px; margin-left: 5px;" class="btn btn-outline-danger rounded-circle"> <i class="fa-solid fa-trash" style="margin: 2px 0px 10px  -4px; font-size: 14px;"></i> </button>';

                return html;
            },
        }
    ],
};

async function getListValues() {
    try {
        const response = await axiosInstance.get("getarea");
        rData.value = response.data.data;
    } catch (error) {
        console.log(error);
    }
}

</script>
<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">


        <div class="breadcrumb-title pe-3">Settings</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Area List</li>
                </ol>
            </nav>
        </div>
        <div class="ms-auto">
            <div class="btn-group">
                <router-link :to="{ name: 'zoneCreate' }" class="btn btn-primary btn-sm">
                    <i class="fa fa-circle-plus"></i>Add New Area
                </router-link>

            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-agency">
                <span class="info-agency-icon bg-info elevation-1"><i class="fa-solid fa-location-dot"></i></span>
                <div class="info-agency-content">
                    <span class="info-agency-text">Total Area</span>
                    <span class="info-agency-number">
                        1200
                    </span>
                </div>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
            <div class="active-agency mb-3">
                <span class="active-agency-icon bg-success elevation-1 text-white"><i class="fa fa-check"></i></span>
                <div class="active-agency-content">
                    <span class="active-agency-text">Active Area</span>
                    <span class="active-agency-number">760</span>
                </div>

            </div>

        </div>

        <div class="col-12 col-sm-6 col-md-3">
            <div class="pending-agnt mb-3">
                <span class="pending-agnt-icon bg-warning elevation-1"><i class="fa-solid fa-circle-pause"></i></span>
                <div class="pending-agnt-content">
                    <span class="pending-agnt-text">Inactive Area</span>
                    <span class="pending-agnt-number">20</span>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card rounded rounded-2 shadow-none p-3">
                <div class="row">

                    <div class="col-md-6">
                        <select class="form-select form-select-sm" id="single-select-field"
                            data-placeholder="Choose one thing">
                            <option>Select Area</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select class="form-select form-select-sm" id="single-select-field"
                            data-placeholder="Choose one thing">
                            <option>Select Status</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div id="RoleList" class="table">
            <DataTable :options="options" :data="rData" class="display table table-sm  border table-bordered table-striped table-hover"> </DataTable>
        </div>
    </div>

</template>

<style>
.text-blue {
    color: blue;
}

/* dashboard design */
.info-agency {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: .25rem;
    background-image: linear-gradient(to right top, #dae9f8, #dae9f8, #dae9f8, #dae9f8, #dae9f8, #cbdff4, #bcd6f1, #aecced, #8eb6e4, #6da1dc, #4a8bd2, #1576c9);
    /* background-image: linear-gradient(to right top, #dae9f8, #dae9f8, #dae9f8, #dae9f8, #dae9f8, #d6e7f8, #d1e5f8, #cde3f8, #c2def8, #b8d9f8, #add5f8, #a1d0f8); */
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;
}

.info-agency .info-agency-icon {
    border-radius: .25rem;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.875rem;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    width: 70px;
}

.bg-info,
.bg-info>a {
    color: #fff !important;
}


.elevation-1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24) !important;
}

.bg-info {
    background-color: #0880e1 !important;
}


.info-agency .info-agency-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 1.5;
    -ms-flex: 1;
    flex: 1;
    padding: 0 30px;
    overflow: hidden;
}

.info-agency .info-agency-text {
    font-size: 19px;
    letter-spacing: normal;
    color: #838587;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.info-agency .info-agency-number {
    display: block;
    margin-top: .25rem;
    font-weight: 700;
    font-size: 22px;
}

/* active agency */

.active-agency {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: .25rem;
    background-image: linear-gradient(to right top, #d7f1e9, #d7f1e9, #d7f1e9, #d7f1e9, #d7f1e9, #c9f1e4, #baf1de, #acf0d7, #8cefc6, #6decb1, #4ce998, #24e57c);
    /* background-image: linear-gradient(to right top, #dbf1eb, #dbf1eb, #dbf1eb, #dbf1eb, #dbf1eb, #d2f1e8, #c9f1e5, #c0f1e1, #acf1d7, #99f0cb, #87efbe, #76eeae); */
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;
}

.active-agency .active-agency-icon {
    border-radius: .25rem;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.875rem;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    width: 70px;
}

.bg-success,
.bg-success>a {
    color: #fff !important;
}

.bg-success {
    background-color: #05cc61 !important;
}

.elevation-1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24) !important;
}

.bg-success {
    background-color: #05cc61 !important;
}


.active-agency .active-agency-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 1.5;
    -ms-flex: 1;
    flex: 1;
    padding: 0 30px;
    overflow: hidden;
}

.active-agency .active-agency-text {
    font-size: 19px;
    letter-spacing: normal;
    color: #838587;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.active-agency .active-agency-number {
    display: block;
    margin-top: .25rem;
    font-weight: 700;
    font-size: 22px;
}

/* Pending */
.pending-agnt {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: .25rem;
    background-image: linear-gradient(to right top, #eee6e2, #eee6e2, #eee6e2, #eee6e2, #eee6e2, #f0ded6, #f1d7c9, #f2cfbd, #f3bea2, #f3ac88, #f29b6f, #ef8956);
    /* background-image: linear-gradient(to right top, #eee6e2, #eee6e2, #eee6e2, #eee6e2, #eee6e2, #efe2db, #efddd5, #f0d9ce, #f1d0bf, #f2c6b1, #f2bda2, #f1b494); */
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;
}

.pending-agnt .pending-agnt-icon {
    border-radius: .25rem;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.875rem;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    width: 70px;
}

.bg-warning,
.bg-warning>a {
    color: #fff !important;
}

.bg-warning {
    background-color: #fb8e28 !important;
}

.elevation-1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24) !important;
}

.bg-warning {
    background-color: #fb8e28 !important;
}


.pending-agnt .pending-agnt-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 1.5;
    -ms-flex: 1;
    flex: 1;
    padding: 0 30px;
    overflow: hidden;
}

.pending-agnt .pending-agnt-text {
    font-size: 19px;
    letter-spacing: normal;
    color: #838587;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.pending-agnt .pending-agnt-number {
    display: block;
    margin-top: .25rem;
    font-weight: 700;
    font-size: 22px;
}


/* On Hold */
.info-box {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: .25rem;
    background-image: linear-gradient(to right top, #eef1e2, #eef1e2, #eef1e2, #eef1e2, #eef1e2, #ebf0d6, #e9eeca, #e8ecbe, #e7e7a2, #e8e285, #ebdb66, #efd444);
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;
}

.info-box .info-box-icon {
    border-radius: .25rem;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.875rem;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    width: 70px;
}

.bg-danger,
.bg-danger>a {
    color: #fff !important;
}

.bg-danger {
    background-color: #efb51d !important;
}

.elevation-1 {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24) !important;
}

.bg-danger {
    background-color: #efb51d !important;
}


.info-box .info-box-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 1.5;
    -ms-flex: 1;
    flex: 1;
    padding: 0 30px;
    overflow: hidden;
}

.info-box .info-box-text {
    font-size: 19px;
    letter-spacing: normal;
    color: #838587;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.info-box .info-box-number {
    display: block;
    margin-top: .25rem;
    font-weight: 700;
    font-size: 22px;
}

.odd td {
    background-color: #F5F8FA;
}

.even td {
    background-color: #fff;
}

.btn-outline-user-edit {
    --bs-btn-color: #7239ea;
    --bs-btn-border-color: #7239ea;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #7239ea;
    --bs-btn-hover-border-color: #7239ea;
    --bs-btn-focus-shadow-rgb: 108, 117, 125;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #7239ea;
    --bs-btn-active-border-color: #7239ea;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #7239ea;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #7239ea;
    --bs-gradient: none;
}

.btn-outline-ban {
    --bs-btn-color: #e25802;
    --bs-btn-border-color: #e25802;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #e25802;
    --bs-btn-hover-border-color: #e25802;
    --bs-btn-focus-shadow-rgb: 108, 117, 125;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #e25802;
    --bs-btn-active-border-color: #e25802;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #e25802;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #e25802;
    --bs-gradient: none;
}

.btn-outline-action-log {
    --bs-btn-color: #f1892a;
    --bs-btn-border-color: #f1892a;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #f1892a;
    --bs-btn-hover-border-color: #f1892a;
    --bs-btn-focus-shadow-rgb: 108, 117, 125;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #f1892a;
    --bs-btn-active-border-color: #f1892a;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #f1892a;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #f1892a;
    --bs-gradient: none;
}
</style>
