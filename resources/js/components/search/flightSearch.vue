<template>
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">

        <div class="breadcrumb-title pe-3">Settings</div>
        <div class="ps-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-0 p-0">
                    <li class="breadcrumb-item">
                        <router-link :to="{ name: 'Home' }">Dashboard</router-link>
                    </li>

                    <li class="breadcrumb-item active" aria-current="page">Flight Search</li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 border border-1 border-primary m-2 pt-1">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" checked type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1">
                                <label class="form-check-label" for="inlineRadio1">One Way</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2">
                                <label class="form-check-label" for="inlineRadio2">Round</label>
                            </div>

                        </div>
                    </div>
                    <div class="row">

                        <div class="col-md-2">
                            <label for="">From</label>
                            <input type="text" list="from_countries" class="form-control mt-1 form-control-sm"
                                name="from" placeholder="From">
                            <datalist id="from_countries">
                                <option>Russia</option>
                                <option>Germany</option>
                                <option>United Kingdom</option>
                            </datalist>

                        </div>
                        <div class="col-md-2">
                            <label for="">To</label>
                            <input type="text" list="to_countries" class="form-control mt-1 form-control-sm" name="to"
                                placeholder="To">
                            <datalist id="to_countries">
                                <option>Bangladesh</option>
                                <option>Indio</option>
                                <option>USA</option>
                            </datalist>
                        </div>
                        <div class="col-md-2">
                            <label for="">Date</label>

                            <input type="date" class="form-control form-control-sm" name="date" placeholder="Date">
                        </div>

                        <div class="col-md-2">
                            <label for="">Adult</label>

                            <input type="text" class="form-control form-control-sm" name="adult" placeholder="Adult">
                        </div>
                        <div class="col-md-2">
                            <label for="">Child</label>

                            <input type="text" class="form-control form-control-sm" name="child" placeholder="Child">
                        </div>
                        <div class="col-md-2 mt-3">
                            <button class="btn btn-sm btn-danger"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
