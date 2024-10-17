<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">

        <div class="breadcrumb-title pe-3"> B2B Agency</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">B2B Agency List</li>
                </ol>
            </nav>
        </div>
        <div class="ms-auto">
            <div class="btn-group">
                <router-link :to="{ name: 'CreateAgency' }" class="btn btn-primary btn-sm">
                    <i class="fa fa-circle-plus"></i>Add New Agency
                </router-link>

            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-agency">
                <span class="info-agency-icon bg-info elevation-1"><i class="fas fa-building"></i></span>
                <div class="info-agency-content">
                    <span class="info-agency-text">Total Agency</span>
                    <span class="info-agency-number">
                        1200
                    </span>
                </div>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
            <div class="active-agency mb-3">
                <span class="active-agency-icon bg-success elevation-1"><i
                        class="fa-solid fa-circle-check"></i></span>
                <div class="active-agency-content">
                    <span class="active-agency-text">Active Agency</span>
                    <span class="active-agency-number">760</span>
                </div>

            </div>

        </div>

        <div class="col-12 col-sm-6 col-md-3">
            <div class="pending-agnt mb-3">
                <span class="pending-agnt-icon bg-warning elevation-1"><i class="fa fa-clock"></i></span>
                <div class="pending-agnt-content">
                    <span class="pending-agnt-text">Pending</span>
                    <span class="pending-agnt-number">20</span>
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
    </div>

    <div class="row mb-3">
        <div class="col-md-12 ">
            <div class="card rounded rounded-2 shadow-none p-3">

                <div class="row">

                    <div class="col-md-2">
                        <select class="form-select form-select-sm" id="single-select-field"
                            data-placeholder="Choose one thing">
                            <option>Select Category</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-select form-select-sm" id="single-select-field"
                            data-placeholder="Choose one thing">
                            <option>Select Zone</option>
                        </select>
                    </div>

                    <div class="col-md-2">
                        <select class="form-select form-select-sm" id="single-select-field"
                            data-placeholder="Choose one thing">
                            <option>Select KAM</option>
                        </select>
                    </div>

                    <div class="col-md-2">
                        <select class="form-select form-select-sm" id="single-select-field"
                            data-placeholder="Choose one thing">
                            <option>Select Status</option>
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

    <div class="table-responsive border rounded rounded-2 p-3">
        <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap5">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <button class="btn btn-sm btn-danger" style="margin-right: 3px;" tabindex="0"
                        aria-controls="example2" type="button"><i class="fa-solid fa-file-pdf"
                            style="font-size: 14px !important;"></i> <span>PDF</span></button>

                    <button class="btn btn-sm btn-success" style="margin-right: 3px;" tabindex="0"
                        aria-controls="example2" type="button"> <i class="fa-regular fa-file-excel"
                            style="font-size: 14px !important;"></i><span>Excel</span></button>


                </div>
                <div class="col-md-4"></div>
                <div class="col-md-2">
                    <div id="search_i" class="dataTables_filter">

                        <input type="search" class="form-control form-control-sm" placeholder=""
                            aria-controls="example2">
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-sm-12">
                    <table class="table table-sm table-striped table-bordered">
                        <thead>
                            <tr role="row">
                                <th>SL.</th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                    aria-label="Agency Details: activate to sort column ascending"
                                    style="width: 316.087px;">Agency Details</th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                    aria-label="Category: activate to sort column ascending" style="width: 140.688px;">
                                    Category</th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                    aria-label="Zone: activate to sort column ascending" style="width: 66.3875px;">Zone
                                </th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                    aria-label="Owner Details: activate to sort column ascending"
                                    style="width: 131.8px;">Owner Details</th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                    aria-label="Contact Details: activate to sort column ascending"
                                    style="width: 107.037px;">Contact Details</th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                    aria-label="KAM: activate to sort column ascending" style="width: 107.037px;">KAM
                                </th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                    aria-label="Net Balance: activate to sort column ascending"
                                    style="width: 107.037px;">Net Balance</th>
                                <!-- <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                    aria-label="Documennts: activate to sort column ascending"
                                    style="width: 107.037px;">Documennts</th> -->
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                    aria-label="Status: activate to sort column ascending" style="width: 107.037px;">
                                    Status</th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1"
                                    aria-label="Action: activate to sort column ascending" style="width: 107.037px;">
                                    Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr role="row">
                                <td class="text-left">01</td>
                                <td class="text-left">ABC Travels Ltd.
                                    <br>
                                    <small class="text-blue">BLU000001</small>
                                    <br>
                                    <small>
                                        21-Aug-2024
                                    </small>
                                </td>
                                <td class="text-left">
                                    IATA
                                    <br>
                                    <small class="text-blue">Non-Hajj</small>
                                </td>
                                <td class="text-left">
                                    Motijheel
                                    <br>
                                    <small class="text-blue">Dhaka North</small>

                                </td>
                                <td class="text-left">
                                    Md. Abu Zafar Chowdhary
                                    <br>
                                    <small class="text-blue">Managing Director</small>
                                </td>
                                <td class="text-left">
                                    abc@gmail.com
                                    <br>
                                    <small class="text-blue">017xxxxxxxx</small>
                                </td>
                                <td class="text-center">-</td>
                                <td class="text-left">
                                    <i class="fa-solid fa-bangladeshi-taka-sign"></i> 0.00
                                </td>

                                <td class="text-left">
                                    <div class="d-flex align-items-center text-danger"> <i
                                            class="bx bx-radio-circle-marked bx-burst bx-rotate-90 align-middle font-18 me-1"></i>
                                        <span>Pending</span>
                                    </div>

                                    <small>
                                        21-Aug-2024
                                    </small>
                                    <br>
                                    <small class="text-blue">
                                        Md. Abu Zafar Chowdhary
                                    </small>
                                </td>
                                <td class="text-left">
                                    <button type="button" v-tippy="'Attachment'"
                                        style="size:30px;width:30px;height:30px;"
                                        class="btn btn-outline-info rounded-circle"><i
                                            class="fa-solid fa-file"
                                            style="margin:2px 0px 10px -4px;font-size:14px;"></i></button>

                                    <router-link :to="{ name: 'agentDetails' }"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-success rounded-circle"  v-tippy="'KAM Assign'">
                                        <i class="fa fa-check" style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </router-link>

                                    <button type="button" v-tippy="'Profile Edit'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-user-edit rounded-circle">

                                        <i class="fa-solid fa-user-pen"
                                            style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </button>

                                    <button type="button" v-tippy="'Edit'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-only-edit rounded-circle">

                                        <i class="fa-solid fa-pencil"
                                            style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </button>

                                    <button type="button" v-tippy="'Log'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-action-log rounded-circle">

                                        <i class="fa-solid fa-arrow-trend-up"
                                            style="margin: 2px 0px 10px -6px; font-size: 14px;"></i>
                                    </button>
                                </td>
                            </tr>

                            <tr role="row">
                                <td class="text-left">02</td>
                                <td class="text-left">ABC Travels Ltd.
                                    <br>
                                    <small class="text-blue">BLU000002</small>
                                    <br>
                                    <small>
                                        24-Aug-2024
                                    </small>
                                </td>
                                <td class="text-left">
                                    IATA
                                    <br>
                                    <small class="text-blue">Non-Hajj</small>
                                </td>
                                <td class="text-left">
                                    Motijheel
                                    <br>
                                    <small class="text-blue">Dhaka North</small>

                                </td>
                                <td class="text-left">
                                    Md. Abu Zafar Chowdhary
                                    <br>
                                    <small class="text-blue">Managing Director</small>
                                </td>
                                <td class="text-left">
                                    abc@gmail.com
                                    <br>
                                    <small class="text-blue">017xxxxxxxx</small>
                                </td>
                                <td class="text-left">
                                    Md. Hasanul Banna
                                    <br>
                                    <small class="text-blue">017xxxxxxxx</small>

                                </td>
                                <td class="text-left">
                                    <i class="fa-solid fa-bangladeshi-taka-sign"></i> 0.00
                                </td>

                                <td class="text-left">
                                    <div class="d-flex align-items-center text-danger"> <i
                                            class="bx bx-radio-circle-marked bx-burst bx-rotate-90 align-middle font-18 me-1"></i>
                                        <span>Pending</span>
                                    </div>
                                    <small>
                                        21-Aug-2024
                                    </small>
                                    <br>
                                    <small class="text-blue">
                                        Md. Abu Zafar Chowdhary
                                    </small>
                                </td>
                                <td class="text-left">
                                    <button type="button" v-tippy="'Attachment'"
                                        style="size:30px;width:30px;height:30px;"
                                        class="btn btn-outline-info rounded-circle"><i
                                            class="fa-solid fa-file"
                                            style="margin:2px 0px 10px -4px;font-size:14px;"></i></button>

                                    <router-link :to="{ name: 'agentApprove' }" v-tippy="'Recomandation'"
                                        style="size: 30px; width: 30px; height: 30px;margin-left: 5px;"
                                        class="btn btn-outline-success rounded-circle" placement="top"
                                        title="Recommendation">
                                        <i class="fa fa-check" style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </router-link>

                                    <button type="button" v-tippy="'Profile Edit'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-user-edit rounded-circle">

                                        <i class="fa-solid fa-user-pen"
                                            style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </button>

                                    <button type="button" v-tippy="'Edit'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-only-edit rounded-circle">

                                        <i class="fa-solid fa-pencil"
                                            style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </button>

                                    <button type="button" v-tippy="'Log'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-action-log rounded-circle">

                                        <i class="fa-solid fa-arrow-trend-up"
                                            style="margin: 2px 0px 10px -6px; font-size: 14px;"></i>
                                    </button>
                                </td>
                            </tr>

                            <tr role="row">
                                <td class="text-left">03</td>
                                <td class="text-left">ABCD Travels Ltd.
                                    <br>
                                    <small class="text-blue">BLU000003</small>
                                    <br>
                                    <small>
                                        24-Aug-2024
                                    </small>
                                </td>
                                <td class="text-left">
                                    IATA
                                    <br>
                                    <small class="text-blue">Non-Hajj</small>
                                </td>
                                <td class="text-left">
                                    Motijheel
                                    <br>
                                    <small class="text-blue">Dhaka North</small>

                                </td>
                                <td class="text-left">
                                    Md. Abu Zafar Chowdhary
                                    <br>
                                    <small class="text-blue">Managing Director</small>
                                </td>
                                <td class="text-left">
                                    abc@gmail.com
                                    <br>
                                    <small class="text-blue">017xxxxxxxx</small>
                                </td>
                                <td class="text-left">
                                    Md. Hasanul Banna
                                    <br>
                                    <small class="text-blue">017xxxxxxxx</small>

                                </td>
                                <td class="text-left">
                                    <i class="fa-solid fa-bangladeshi-taka-sign"></i> 0.00
                                </td>

                                <td class="text-left">
                                    <div class="d-flex align-items-center text-primary"> <i
                                            class="bx bx-radio-circle-marked bx-burst bx-rotate-90 align-middle font-18 me-1"></i>
                                        <span>Recommanded</span>
                                    </div>
                                    <small>
                                        21-Aug-2024
                                    </small>
                                    <br>
                                    <small class="text-blue">
                                        Md. Abu Zafar Chowdhary
                                    </small>
                                </td>
                                <td class="text-left">
                                    <button type="button" v-tippy="'Attachment'"
                                        style="size:30px;width:30px;height:30px;"
                                        class="btn btn-outline-info rounded-circle"><i
                                            class="fa-solid fa-file"
                                            style="margin:2px 0px 10px -4px;font-size:14px;"></i></button>

                                    <router-link :to="{ name: 'agentRecomanded' }" v-tippy="'Aproval'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-success rounded-circle" placement="top" >
                                        <i class="fa fa-check" style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </router-link>


                                    <button type="button" v-tippy="'Profile Edit'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-user-edit rounded-circle">

                                        <i class="fa-solid fa-user-pen"
                                            style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </button>

                                    <button type="button" v-tippy="'Edit'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-only-edit rounded-circle">

                                        <i class="fa-solid fa-pencil"
                                            style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </button>

                                    <button type="button" v-tippy="'Log'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-action-log rounded-circle">

                                        <i class="fa-solid fa-arrow-trend-up"
                                            style="margin: 2px 0px 10px -6px; font-size: 14px;"></i>
                                    </button>
                                </td>
                            </tr>

                            <tr role="row">
                                <td class="text-left">04</td>
                                <td class="text-left">ABCD Travels Ltd.
                                    <br>
                                    <small class="text-blue">BLU000003</small>
                                    <br>
                                    <small>
                                        24-Aug-2024
                                    </small>
                                </td>
                                <td class="text-left">
                                    IATA
                                    <br>
                                    <small class="text-blue">Non-Hajj</small>
                                </td>
                                <td class="text-left">
                                    Motijheel
                                    <br>
                                    <small class="text-blue">Dhaka North</small>

                                </td>
                                <td class="text-left">
                                    Md. Abu Zafar Chowdhary
                                    <br>
                                    <small class="text-blue">Managing Director</small>
                                </td>
                                <td class="text-left">
                                    abc@gmail.com
                                    <br>
                                    <small class="text-blue">017xxxxxxxx</small>
                                </td>
                                <td class="text-left">
                                    Md. Hasanul Banna
                                    <br>
                                    <small class="text-blue">017xxxxxxxx</small>

                                </td>
                                <td class="text-left">
                                    <i class="fa-solid fa-bangladeshi-taka-sign"></i> 0.00
                                </td>

                                <td class="text-left">
                                    <div class="d-flex align-items-center text-success"> <i
                                            class="bx bx-radio-circle-marked bx-burst bx-rotate-90 align-middle font-18 me-1"></i>
                                        <span>Approved</span>
                                    </div>

                                    <small>
                                        21-Aug-2024
                                    </small>
                                    <br>
                                    <small class="text-blue">
                                        Md. Abu Zafar Chowdhary
                                    </small>
                                </td>
                                <td class="text-left">
                                    <button type="button" v-tippy="'Attachment'"
                                        style="size:30px;width:30px;height:30px;"
                                        class="btn btn-outline-info rounded-circle"><i
                                            class="fa-solid fa-file"
                                            style="margin:2px 0px 10px -4px;font-size:14px;"></i></button>

                                    <router-link :to="{ name: 'agentView' }" v-tippy="'View Details'"
                                        style="size: 30px; width: 30px; height: 30px;margin-left: 5px;"
                                        class="btn btn-outline-primary rounded-circle" placement="top"
                                        >
                                        <i class="fa fa-eye" style="margin: 2px 0px 10px -6px; font-size: 14px;"></i>
                                    </router-link>


                                    <button type="button" v-tippy="'Profile Edit'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-user-edit rounded-circle">

                                        <i class="fa-solid fa-user-pen"
                                            style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </button>

                                    <button type="button" v-tippy="'Edit'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-only-edit rounded-circle">

                                        <i class="fa-solid fa-pencil"
                                            style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </button>

                                    <button type="button" v-tippy="'Log'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-action-log rounded-circle">

                                        <i class="fa-solid fa-arrow-trend-up"
                                            style="margin: 2px 0px 10px -6px; font-size: 14px;"></i>
                                    </button>
                                </td>
                            </tr>

                            <tr role="row">
                                <td class="text-left">05</td>
                                <td class="text-left">ABCD Travels Ltd.
                                    <br>
                                    <small class="text-blue">BLU000003</small>
                                    <br>
                                    <small>
                                        24-Aug-2024
                                    </small>
                                </td>
                                <td class="text-left">
                                    IATA
                                    <br>
                                    <small class="text-blue">Non-Hajj</small>
                                </td>
                                <td class="text-left">
                                    Motijheel
                                    <br>
                                    <small class="text-blue">Dhaka North</small>

                                </td>
                                <td class="text-left">
                                    Md. Abu Zafar Chowdhary
                                    <br>
                                    <small class="text-blue">Managing Director</small>
                                </td>
                                <td class="text-left">
                                    abc@gmail.com
                                    <br>
                                    <small class="text-blue">017xxxxxxxx</small>
                                </td>
                                <td class="text-left">
                                    Md. Hasanul Banna
                                    <br>
                                    <small class="text-blue">017xxxxxxxx</small>

                                </td>
                                <td class="text-left">
                                    <i class="fa-solid fa-bangladeshi-taka-sign"></i> 0.00
                                </td>

                                <td class="text-left">
                                    <div class="d-flex align-items-center text-success"> <i
                                            class="bx bx-radio-circle-marked bx-burst bx-rotate-90 align-middle font-18 me-1"></i>
                                        <span>Approved</span>
                                    </div>

                                    <small>
                                        21-Aug-2024
                                    </small>
                                    <br>
                                    <small class="text-blue">
                                        Md. Abu Zafar Chowdhary
                                    </small>
                                </td>
                                <td class="text-left">
                                    <button type="button" v-tippy="'Attachment'"
                                        style="size:30px;width:30px;height:30px;"
                                        class="btn btn-outline-info rounded-circle"><i
                                            class="fa-solid fa-file"
                                            style="margin:2px 0px 10px -4px;font-size:14px;"></i></button>

                                    <router-link :to="{ name: 'agentView' }" v-tippy="'View Details'"
                                        style="size: 30px; width: 30px; height: 30px;  margin-left: 5px;"
                                        class="btn btn-outline-primary rounded-circle" placement="top"
                                        >
                                        <i class="fa fa-eye" style="margin: 2px 0px 10px -6px; font-size: 14px;"></i>
                                    </router-link>


                                    <button type="button" v-tippy="'Profile Edit'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-user-edit rounded-circle">

                                        <i class="fa-solid fa-user-pen"
                                            style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </button>

                                    <button type="button" v-tippy="'Edit'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-only-edit rounded-circle">

                                        <i class="fa-solid fa-pencil"
                                            style="margin: 2px 0px 10px -4px; font-size: 14px;"></i>
                                    </button>

                                    <button type="button" v-tippy="'Log'"
                                        style="size: 30px; width: 30px; height: 30px; margin-left: 5px;"
                                        class="btn btn-outline-action-log rounded-circle">

                                        <i class="fa-solid fa-arrow-trend-up"
                                            style="margin: 2px 0px 10px -6px; font-size: 14px;"></i>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12 col-md-5">
                    <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1
                        to 5 of 10 entries</div>
                </div>
                <div class="col-sm-12 col-md-7">
                    <div class="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                        <ul class="pagination">
                            <li class="paginate_button page-item previous disabled" id="example2_previous"><a href="#"
                                    aria-controls="example2" data-dt-idx="0" tabindex="0" class="page-link">Prev</a>
                            </li>
                            <li class="paginate_button page-item active"><a href="#" aria-controls="example2"
                                    data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                            <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="2"
                                    tabindex="0" class="page-link">2</a></li>

                            <li class="paginate_button page-item next" id="example2_next"><a href="#"
                                    aria-controls="example2" data-dt-idx="7" tabindex="0" class="page-link">Next</a>
                            </li>
                        </ul>
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

[data-bs-theme=light] body .info-agency {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: .25rem;
    background-image: linear-gradient(to right top, #dae9f8, #dae9f8, #dae9f8, #dae9f8, #dae9f8, #cbdff4, #bcd6f1, #aecced, #8eb6e4, #6da1dc, #4a8bd2, #1576c9);
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;

}

[data-bs-theme=dark] body .info-agency {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: .25rem;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;

}

/* dashboard design */

[data-bs-theme=dark] body .bg-info,.info-agency-icon,.bg-info>a {
    background-color: #06365d !important;
    color: #4f687c !important;
}
[data-bs-theme=light] body .bg-info,.info-agency-icon, .bg-info>a {
    background-color: #0880e1 !important;
    color: #fff !important;

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

[data-bs-theme=light] body .active-agency {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: .25rem;
    background-image: linear-gradient(to right top, #d7f1e9, #d7f1e9, #d7f1e9, #d7f1e9, #d7f1e9, #c9f1e4, #baf1de, #acf0d7, #8cefc6, #6decb1, #4ce998, #24e57c);
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;

}

[data-bs-theme=dark] body .active-agency {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    background-color: #343a40;
    border-radius: .25rem;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;

}


[data-bs-theme=dark] body .bg-success, .active-agency-icon,.bg-success>a {
    background-color: #5b9a59 !important;
    color: #9fbe9e !important;
}
[data-bs-theme=light] body .bg-success, .active-agency-icon, .bg-success>a {
    background-color: #0ea209 !important;
    color: #fff !important;

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

[data-bs-theme=dark] body .bg-warning, .pending-agnt-icon,.bg-warning>a {
    background-color: #562b03 !important;
    color: #d0741d !important;
}
[data-bs-theme=light] body .bg-warning, .pending-agnt-icon, .bg-warning>a {
    background-color: #fb8e28 !important;
    color: #fff !important;

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

[data-bs-theme=light] body .pending-agnt {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: .25rem;
    background-image: linear-gradient(to right top, #eee6e2, #eee6e2, #eee6e2, #eee6e2, #eee6e2, #f0ded6, #f1d7c9, #f2cfbd, #f3bea2, #f3ac88, #f29b6f, #ef8956);
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;
}

[data-bs-theme=dark] body .pending-agnt {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    background-color: #343a40;
    border-radius: .25rem;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;
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

[data-bs-theme=light] body .info-box {
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

[data-bs-theme=dark] body .info-box {
    box-shadow: 0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2);
    background-color: #343a40;
    border-radius: .25rem;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 1rem;
    min-height: 90px;
    padding: .5rem;
    position: relative;
    width: 100%;
}

[data-bs-theme=dark] body .bg-danger, .info-box-icon,.bg-danger>a {
    background-color: #707a03 !important;
    color: #d0d68b !important;
}
[data-bs-theme=light] body .bg-danger, .info-box-icon, .bg-danger>a {
    background-color: #99a705 !important;
    color: #fff !important;

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
