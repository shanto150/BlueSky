<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}',function () {
    return view('welcome');
})->where('any', ".*");

Route::get('/migrate', function () { Artisan::call('migrate');return Artisan::output();});
