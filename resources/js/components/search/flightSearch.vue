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
                        <div class="col-md-3">
                            <input type="text" list="from_countries" class="form-control form-control-sm" name="from" placeholder="From">
                            <datalist id="from_countries">
                                <option>Russia</option>
                                <option>Germany</option>
                                <option>United Kingdom</option>
                            </datalist>

                        </div>
                        <div class="col-md-3">
                            <input type="text" list="to_countries" class="form-control form-control-sm" name="to" placeholder="To">
                            <datalist id="to_countries">
                                <option>Bangladesh</option>
                                <option>Indio</option>
                                <option>USA</option>
                            </datalist>
                        </div>
                        <div class="col-md-3">
                            <input type="date" class="form-control form-control-sm" name="date" placeholder="Date">
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-sm btn-danger"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
