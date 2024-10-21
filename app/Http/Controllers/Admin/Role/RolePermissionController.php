<?php

namespace App\Http\Controllers\Admin\Role;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role\Role;
use App\Models\Role\RolePermission;
use Illuminate\Support\Facades\DB;
use Auth;

class RolePermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    public function roleSave(Request $request)
    {

        $validator = validator($request->all(),
            ['roleName' => 'required'],
        );
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->all(), 'types' => 'e']);
        }

        if(sizeof($request->checkedNames)==0){
            return response()->json(['message' => 'No permission assigned.', 'types' => 'e']);

        }

        $role =  new Role;
        $role->name =  $request->roleName;
        $role->display_name =  $request->roleName;
        $role->status =  1;
        $role->created_by =  Auth::id();
        $role->save();

        foreach($request->checkedNames as $perm){
            $perms = new RolePermission;
            $perms->role_id = $role->id;
            $perms->feature_name = $perm;
            $perms->created_by =  Auth::id();

            $perms->save();
        }

        return response()->json(['message' => 'Successfully Role Saved.', 'types' => 's']);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
