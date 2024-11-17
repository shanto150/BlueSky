<?php

use App\Http\Controllers\Admin\Area\AreaController;
use App\Http\Controllers\Admin\Department\DepartmentController;
use App\Http\Controllers\Admin\Role\RolePermissionController;
use App\Http\Controllers\Admin\OfficeLocation\LocationController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login'])->name('login');
Route::post('register', [AuthController::class, 'register'])->name('register');
Route::post('sendResetLinkEmail', [AuthController::class, 'sendResetLinkEmail'])->name('sendResetLinkEmail');
Route::post('PassReset', [AuthController::class, 'resetPassword'])->name('password.reset');

Route::get('/migrate', function () {Artisan::call('migrate:refresh');return Artisan::output();})->name('migrate');

Route::middleware(['auth:api'])->group(function () {
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('refresh', [AuthController::class, 'refresh'])->name('refresh');
    Route::get('me', [AuthController::class, 'me'])->name('me');
    Route::post('registerOTP', [AuthController::class, 'registerOTP'])->name('registerOTP');
    Route::post('ForcePassReset', [AuthController::class, 'ForcePassReset'])->name('ForcePassReset');

    // area
    Route::get('getarea', [AreaController::class, 'index'])->name('area.index');
    Route::get('divisions', [AreaController::class, 'divisionsList']);
    Route::post('districts', [AreaController::class, 'districtList']);

    Route::post('/zone/save', [AreaController::class, 'store']);
    Route::post('/zone/update', [AreaController::class, 'update']);
    Route::post('editArea', [AreaController::class, 'edit']);
    Route::post('changeAreaStatus', [AreaController::class, 'changeAreaStatus']);
    Route::post('deletearea', [AreaController::class, 'destroy']);

    //role-permission
    Route::get('getroles', [RolePermissionController::class, 'index'])->name('roles.index');


    // department
    Route::get('getdept', [DepartmentController::class, 'index'])->name('dept.getdept');
    Route::post('/dept/save', [DepartmentController::class, 'store']);
    Route::post('editDept', [DepartmentController::class, 'edit']);
    Route::post('/dept/update', [DepartmentController::class, 'update']);
    Route::post('changeDepartmentStatus', [DepartmentController::class, 'changeDepartmentStatus']);
    Route::post('deleteDept', [DepartmentController::class, 'destroy']);

    // office location
    Route::get('getOfficeLocation', [LocationController::class, 'index'])->name('officeLocation.officelocations');
    Route::post('/loc/save', [LocationController::class, 'store']);
    Route::post('editOffLoc', [LocationController::class, 'edit']);
    Route::post('/office/location/update', [LocationController::class, 'update']);
    Route::post('changeOffLocStatus', [LocationController::class, 'changeOffLocStatus']);
    Route::post('deleteOfficeLocation', [LocationController::class, 'destroy']);


});
Route::post('/role/save', [RolePermissionController::class, 'roleSave']);
