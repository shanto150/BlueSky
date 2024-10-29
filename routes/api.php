<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\Area\AreaController;
use App\Http\Controllers\Admin\Role\RolePermissionController;


Route::post('login', [AuthController::class,'login'])->name('login');
Route::post('register', [AuthController::class,'register'])->name('register');
Route::post('sendResetLinkEmail', [AuthController::class,'sendResetLinkEmail'])->name('sendResetLinkEmail');
Route::post('PassReset', [AuthController::class,'resetPassword'])->name('password.reset');

Route::get('/migrate', function () {Artisan::call('migrate:refresh'); return Artisan::output();})->name('migrate');

Route::middleware(['auth:api'])->group(function () {
    Route::get('logout', [AuthController::class,'logout'])->name('logout');
    Route::get('refresh', [AuthController::class,'refresh'])->name('refresh');
    Route::get('me', [AuthController::class,'me'])->name('me');
    Route::post('registerOTP', [AuthController::class, 'registerOTP'])->name('registerOTP');
    Route::post('ForcePassReset', [AuthController::class,'ForcePassReset'])->name('ForcePassReset');

    Route::get('divisions', [AreaController::class, 'divisionsList']);
    Route::get('getroles', [RolePermissionController::class, 'index'])->name('roles.index');
});
Route::get('districts', [AreaController::class, 'districtList']);
Route::post('/role/save', [RolePermissionController::class, 'roleSave']);
