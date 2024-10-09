<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">


        <div class="breadcrumb-title pe-3"> User Management</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">User List</li>
                </ol>
            </nav>
        </div>
        <div class="ms-auto">
            <div class="btn-group">
                <router-link :to="{ name: 'CreateUser' }" class="btn btn-primary btn-sm">
                    <i class="fa fa-circle-plus"></i>Add New User
                </router-link>

            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-agency">
                        <span class="info-agency-icon bg-info elevation-1"><i class="fas fa-users"></i></span>
                        <div class="info-agency-content">
                            <span class="info-agency-text">Total User</span>
                            <span class="info-agency-number">
                                1200
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3">
                    <div class="active-agency mb-3">
                        <span class="active-agency-icon bg-success elevation-1 text-white"><i
                                class="fa-solid fa-circle-check"></i></span>
                        <div class="active-agency-content">
                            <span class="active-agency-text">Active User</span>
                            <span class="active-agency-number">760</span>
                        </div>

                    </div>

                </div>

                <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box mb-3">
                        <span class="info-box-icon bg-danger elevation-1"><i class="fa fa-pause"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">On Hold</span>
                            <span class="info-box-number">5</span>
                        </div>

                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="pending-agnt mb-3">
                        <span class="pending-agnt-icon bg-warning elevation-1"><i class="fa fa-clock"></i></span>
                        <div class="pending-agnt-content">
                            <span class="pending-agnt-text">Locked</span>
                            <span class="pending-agnt-number">20</span>
                        </div>

                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <!-- <div class="col-md-4">
									<input type="text" class="form-control date-range" />
                                </div> -->
                                <div class="col-md-2">
                                    <select class="form-select form-select-sm" id="single-select-field"
                                        data-placeholder="Choose one thing">
                                        <option>Select User Type</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-select form-select-sm" id="single-select-field"
                                        data-placeholder="Choose one thing">
                                        <option>Select Office Location</option>
                                    </select>
                                </div>

                                <div class="col-md-2">
                                    <select class="form-select form-select-sm" id="single-select-field"
                                        data-placeholder="Choose one thing">
                                        <option>Select Status</option>
                                    </select>
                                </div>
                                <div class="col-md-1 mt-2">
                                    <i class="fa fa-times text-danger"> </i> Clear
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-responsive">
                <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap5">

                    <div class="card-body">
                        <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab"
                                    aria-selected="true">
                                    <div class="d-flex align-items-center">
                                        <div class="tab-title"> Internal User </div>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab"
                                    aria-selected="false" tabindex="-1">
                                    <div class="d-flex align-items-center">

                                        <div class="tab-title">External User</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content pt-3">
                            <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">

                                        <button class="btn btn-sm btn-danger" style="margin-right: 3px;" tabindex="0"
                                            aria-controls="example2" type="button"><i class="fa-solid fa-file-pdf"
                                                style="font-size: 14px !important;"></i> <span>PDF</span></button>

                                        <button class="btn btn-sm btn-success" style="margin-right: 3px;" tabindex="0"
                                            aria-controls="example2" type="button"> <i class="fa-regular fa-file-excel"
                                                style="font-size: 14px !important;"></i><span>Excel</span></button>


                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <div id="example2_filter" class="dataTables_filter"><label>Search:<input
                                                    type="search" class="form-control form-control-sm" placeholder=""
                                                    aria-controls="example2"></label></div>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-sm-12">
                                        <table class="table table-sm table-striped table-bordered">
                                            <thead>
                                                <tr role="row">
                                                    <th class="sorting_asc" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1" aria-sort="ascending"
                                                        aria-label="SL: activate to sort column descending"
                                                        style="width: 194.4px;">
                                                        SL.</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Staff Info: activate to sort column ascending"
                                                        style="width: 316.087px;">Staff Info</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Role & Office Location: activate to sort column ascending"
                                                        style="width: 140.688px;">Role & Office Location</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="User Login Info: activate to sort column ascending"
                                                        style="width: 66.3875px;">User Login Info</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Created By: activate to sort column ascending"
                                                        style="width: 131.8px;">Created By</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Updated By: activate to sort column ascending"
                                                        style="width: 107.037px;">Updated By</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Status: activate to sort column ascending"
                                                        style="width: 107.037px;">Status</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Action: activate to sort column ascending"
                                                        style="width: 107.037px;">Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr role="row" class="odd">
                                                    <td class="text-left">01</td>
                                                    <td class="text-left">Abu Syed
                                                        <br>
                                                        <small class="text-blue">GB:117</small>
                                                        <br>
                                                        <small>
                                                            UI/UX Designer | Opertation
                                                        </small>
                                                    </td>
                                                    <td class="text-left">
                                                        System Admin
                                                        <br>
                                                        <small class="text-blue">Gulshan HQ</small>
                                                    </td>
                                                    <td class="text-left">
                                                        abu.syed@galxybd.com
                                                        <br>
                                                        <small class="text-blue">017xxxxxxx</small>

                                                    </td>
                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>

                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>
                                                    <td class="text-left">
                                                        <div
                                                            class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">
                                                            <i class="bx bxs-circle me-1"></i>Active
                                                        </div>
                                                        <br>
                                                        <small>
                                                            21-Aug-2024
                                                        </small>
                                                        <br>
                                                        <small class="text-blue">
                                                            Md. Abu Zafar Chowdhary
                                                        </small>
                                                    </td>
                                                    <td class="text-left">


                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px;"
                                                            class="btn btn-outline-only-edit rounded-circle">

                                                            <i class="fa-solid fa-pencil"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-danger rounded-circle">
                                                            <i class="fa fa-trash"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-purple rounded-circle">
                                                            <i class="fa fa-refresh"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-lock rounded-circle">
                                                            <i class="fa fa-lock"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-timer rounded-circle">
                                                            <i class="fa-solid fa-clock-rotate-left"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr role="row" class="odd">
                                                    <td class="text-left">02</td>
                                                    <td class="text-left">Atiqur Rahman
                                                        <br>
                                                        <small class="text-blue">GB:107</small>
                                                        <br>
                                                        <small>
                                                            Senior Executive | Sales
                                                        </small>
                                                    </td>
                                                    <td class="text-left">
                                                        Reservation
                                                        <br>
                                                        <small class="text-blue">Khulna</small>
                                                    </td>
                                                    <td class="text-left">
                                                        atiq@gmail.com
                                                        <br>
                                                        <small class="text-blue">017xxxxxxx</small>

                                                    </td>
                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>

                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>
                                                    <td class="text-left">
                                                        <div
                                                            class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3">
                                                            <i class="bx bxs-circle me-1"></i>On Hold
                                                        </div>
                                                        <br>
                                                        <small>
                                                            21-Aug-2024
                                                        </small>
                                                        <br>
                                                        <small class="text-blue">
                                                            Md. Abu Zafar Chowdhary
                                                        </small>
                                                    </td>
                                                    <td class="text-left">


                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px;"
                                                            class="btn btn-outline-only-edit rounded-circle">

                                                            <i class="fa-solid fa-pencil"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-danger rounded-circle">
                                                            <i class="fa fa-trash"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-purple rounded-circle">
                                                            <i class="fa fa-refresh"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-lock rounded-circle">
                                                            <i class="fa fa-lock"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-timer rounded-circle">
                                                            <i class="fa-solid fa-clock-rotate-left"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr role="row" class="odd">
                                                    <td class="text-left">03</td>
                                                    <td class="text-left">Mujahidul Islam
                                                        <br>
                                                        <small class="text-blue">GB-060</small>
                                                        <br>
                                                        <small>
                                                            Executive | Reservation
                                                        </small>
                                                    </td>
                                                    <td class="text-left">
                                                        Reservation
                                                        <br>
                                                        <small class="text-blue">Khulna</small>
                                                    </td>
                                                    <td class="text-left">
                                                        mujahidul@gmail.com
                                                        <br>
                                                        <small class="text-blue">017xxxxxxx</small>

                                                    </td>
                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>

                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>
                                                    <td class="text-left">
                                                        <div
                                                            class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3">
                                                            <i class="bx bxs-circle me-1"></i>Deactivated
                                                        </div>
                                                        <br>
                                                        <small>
                                                            21-Aug-2024
                                                        </small>
                                                        <br>
                                                        <small class="text-blue">
                                                            Md. Abu Zafar Chowdhary
                                                        </small>
                                                    </td>
                                                    <td class="text-left">


                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px;"
                                                            class="btn btn-outline-only-edit rounded-circle">

                                                            <i class="fa-solid fa-pencil"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-danger rounded-circle">
                                                            <i class="fa fa-trash"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-purple rounded-circle">
                                                            <i class="fa fa-refresh"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-lock rounded-circle">
                                                            <i class="fa fa-lock"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-timer rounded-circle">
                                                            <i class="fa-solid fa-clock-rotate-left"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr role="row" class="odd">
                                                    <td class="text-left">04</td>
                                                    <td class="text-left">Eva Ahmed Tarana
                                                        <br>
                                                        <small class="text-blue">GHR264</small>
                                                        <br>
                                                        <small>
                                                            Executive | Reservation
                                                        </small>
                                                    </td>
                                                    <td class="text-left">
                                                        Reservation
                                                        <br>
                                                        <small class="text-blue">Khulna</small>
                                                    </td>
                                                    <td class="text-left">
                                                        trana@gmail.com
                                                        <br>
                                                        <small class="text-blue">017xxxxxxx</small>

                                                    </td>
                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>

                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>
                                                    <td class="text-left">
                                                        <div
                                                            class="badge rounded-pill text-info bg-light-info p-2 text-uppercase px-3">
                                                            <i class="bx bxs-circle me-1"></i>Locked
                                                        </div>
                                                        <br>
                                                        <small>
                                                            21-Aug-2024
                                                        </small>
                                                        <br>
                                                        <small class="text-blue">
                                                            Md. Abu Zafar Chowdhary
                                                        </small>
                                                    </td>
                                                    <td class="text-left">


                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px;"
                                                            class="btn btn-outline-only-edit rounded-circle">

                                                            <i class="fa-solid fa-pencil"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-danger rounded-circle">
                                                            <i class="fa fa-trash"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-purple rounded-circle">
                                                            <i class="fa fa-refresh"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-lock rounded-circle">
                                                            <i class="fa fa-lock"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-timer rounded-circle">
                                                            <i class="fa-solid fa-clock-rotate-left"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">

                                        <button class="btn btn-sm btn-danger" style="margin-right: 3px;" tabindex="0"
                                            aria-controls="example2" type="button"><i class="fa-solid fa-file-pdf"
                                                style="font-size: 14px !important;"></i> <span>PDF</span></button>

                                        <button class="btn btn-sm btn-success" style="margin-right: 3px;" tabindex="0"
                                            aria-controls="example2" type="button"> <i class="fa-regular fa-file-excel"
                                                style="font-size: 14px !important;"></i><span>Excel</span></button>


                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                        <div id="example2_filter" class="dataTables_filter"><label>Search:<input
                                                    type="search" class="form-control form-control-sm" placeholder=""
                                                    aria-controls="example2"></label></div>
                                    </div>
                                </div>


                                <!-- table -->

                                <div class="row mt-2">
                                    <div class="col-sm-12">
                                        <table class="table table-sm table-striped table-bordered">
                                            <thead>
                                                <tr role="row">
                                                    <th class="sorting_asc" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1" aria-sort="ascending"
                                                        aria-label="SL: activate to sort column descending"
                                                        style="width: 194.4px;">
                                                        SL.</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Staff Info: activate to sort column ascending"
                                                        style="width: 316.087px;">Staff Info</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Agency Info: activate to sort column ascending"
                                                        style="width: 140.688px;">Agency Info</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Area: activate to sort column ascending"
                                                        style="width: 66.3875px;">Area</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Role: activate to sort column ascending"
                                                        style="width: 66.3875px;">Role</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="User Login Info: activate to sort column ascending"
                                                        style="width: 66.3875px;">User Login Info</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Created By: activate to sort column ascending"
                                                        style="width: 131.8px;">Created By</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Updated By: activate to sort column ascending"
                                                        style="width: 107.037px;">Updated By</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Status: activate to sort column ascending"
                                                        style="width: 107.037px;">Status</th>
                                                    <th class="sorting" tabindex="0" aria-controls="example2"
                                                        rowspan="1" colspan="1"
                                                        aria-label="Action: activate to sort column ascending"
                                                        style="width: 107.037px;">Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr role="row" class="odd">
                                                    <td class="text-left">01</td>
                                                    <td class="text-left">Abu Syed

                                                        <br>
                                                        <small class="text-blue">
                                                            Managing Director
                                                        </small>
                                                    </td>
                                                    <td class="text-left">
                                                        ABC Travels Ltd
                                                        <br>
                                                        <small class="text-blue">12345</small> | IATA
                                                    </td>

                                                    <td>
                                                        Motijheel
                                                        <br>
                                                        <small class="text-blue">Dhaka-North</small>
                                                    </td>

                                                    <td>Agency Admin</td>
                                                    <td class="text-left">
                                                        abu.syed@galxybd.com
                                                        <br>
                                                        <small class="text-blue">017xxxxxxx</small>
                                                    </td>

                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>
                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>
                                                    <td class="text-left">
                                                        <div
                                                            class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">
                                                            <i class="bx bxs-circle me-1"></i>Active
                                                        </div>
                                                        <br>
                                                        <small>
                                                            21-Aug-2024
                                                        </small>
                                                        <br>
                                                        <small class="text-blue">
                                                            Md. Abu Zafar Chowdhary
                                                        </small>
                                                    </td>
                                                    <td class="text-left">
                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px;"
                                                            class="btn btn-outline-only-edit rounded-circle">

                                                            <i class="fa-solid fa-pencil"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-danger rounded-circle">
                                                            <i class="fa fa-trash"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-purple rounded-circle">
                                                            <i class="fa fa-refresh"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-lock rounded-circle">
                                                            <i class="fa fa-lock"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-timer rounded-circle">
                                                            <i class="fa-solid fa-clock-rotate-left"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                    </td>
                                                </tr>

                                                <tr role="row" class="odd">
                                                    <td class="text-left">02</td>
                                                    <td class="text-left">Imtiaz Ahmed

                                                        <br>
                                                        <small class="text-blue">
                                                            Supervisor
                                                        </small>
                                                    </td>
                                                    <td class="text-left">
                                                        ABC Travels Ltd
                                                        <br>
                                                        <small class="text-blue">12345</small> | IATA
                                                    </td>


                                                    <td>
                                                        Motijheel
                                                        <br>
                                                        <small class="text-blue">Dhaka-North</small>
                                                    </td>
                                                    <td>Supervisor</td>
                                                    <td class="text-left">
                                                        test@galxybd.com
                                                        <br>
                                                        <small class="text-blue">017xxxxxxx</small>

                                                    </td>
                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>
                                                    <td class="text-left">
                                                        Md. Abu Syed
                                                        <br>
                                                        <small class="text-blue">05-Sept-2024</small>
                                                    </td>
                                                    <td class="text-left">
                                                        <div
                                                            class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">
                                                            <i class="bx bxs-circle me-1"></i>Active
                                                        </div>
                                                        <br>
                                                        <small>
                                                            21-Aug-2024
                                                        </small>
                                                        <br>
                                                        <small class="text-blue">
                                                            Md. Abu Zafar Chowdhary
                                                        </small>
                                                    </td>
                                                    <td class="text-left">
                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px;"
                                                            class="btn btn-outline-only-edit rounded-circle">

                                                            <i class="fa-solid fa-pencil"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-danger rounded-circle">
                                                            <i class="fa fa-trash"
                                                                style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-purple rounded-circle">
                                                            <i class="fa fa-refresh"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-lock rounded-circle">
                                                            <i class="fa fa-lock"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>

                                                        <button type="button"
                                                            style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                                            class="btn btn-outline-timer rounded-circle">
                                                            <i class="fa-solid fa-clock-rotate-left"
                                                                style="margin: 2px 0px 10px -5px; font-size: 14px;"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

</template>
<script>

</script>
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


.btn-outline-only-edit {
    --bs-btn-color: #027de2;
    --bs-btn-border-color: #027de2;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #027de2;
    --bs-btn-hover-border-color: #027de2;
    --bs-btn-focus-shadow-rgb: 108, 117, 125;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #027de2;
    --bs-btn-active-border-color: #027de2;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #027de2;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #027de2;
    --bs-gradient: none;
}


.btn-outline-purple {
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

.btn-outline-lock {
    --bs-btn-color: #19c4db;
    --bs-btn-border-color: #19c4db;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #19c4db;
    --bs-btn-hover-border-color: #19c4db;
    --bs-btn-focus-shadow-rgb: 108, 117, 125;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #19c4db;
    --bs-btn-active-border-color: #19c4db;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #19c4db;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #19c4db;
    --bs-gradient: none;
}

.btn-outline-timer {
    --bs-btn-color: #1ba3f0;
    --bs-btn-border-color: #1ba3f0;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #1ba3f0;
    --bs-btn-hover-border-color: #1ba3f0;
    --bs-btn-focus-shadow-rgb: 108, 117, 125;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #1ba3f0;
    --bs-btn-active-border-color: #1ba3f0;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #1ba3f0;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #1ba3f0;
    --bs-gradient: none;
}
</style>
