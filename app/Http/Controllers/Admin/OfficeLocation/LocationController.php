<?php

namespace App\Http\Controllers\Admin\OfficeLocation;

use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Controllers\BaseController;
use App\Models\OfficeLocation\Officelocation;

class LocationController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DB::table('officelocations as lct')
            // ->join('users as u', 'lct.id', 'u.dept_id')
            ->selectRaw('lct.id as idd,lct.name,status,lct.updated_at,f_username(lct.updated_by) updated_by,f_username(lct.created_by) created_by,lct.created_at,lct.updated_at')->get();

        return DataTables::of($data)->addIndexColumn()->make(true);
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
        $auth = User::where('email', $request->useEmail)->first();

        $validator = validator($request->all(),
            ['loc_name' => 'required'],
        );
        if ($validator->fails()) {
            return $this->ErrorResponse($validator->errors()->all());
        }

        $location = new Officelocation;
        $location->name = $request->loc_name;
        $location->status = 1;
        $location->created_by = $auth->id;
        $location->save();

        $success = '';

        return $this->SuccessResponse($success, 'Successfully Location Saved.');

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
    public function edit(Request $request)
    {
        $loc = Officelocation::find($request->id);
        return response()->json($loc);
    }

    public function getAllOffLoc()
    {
        $off_loc = DB::table('officelocations')->get();
        return response()->json($off_loc);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $auth = User::where('email', $request->useEmail)->first();
        $off_loc = Officelocation::where('id', $request->office_loc_id)->first();
        $off_loc->name = $request->loc_name != null ? $request->loc_name : $off_loc->name;
        $off_loc->status = $request->status_val != null ? $request->status_val : $off_loc->status;
        $off_loc->updated_by = $auth->id;
        $off_loc->save();

        $success = '';
        return $this->SuccessResponse($success, 'Successfully Office Location Updated.');
    }

    public function changeOffLocStatus(Request $request)
    {
        if ($request->id) {

            $off_loc = Officelocation::where('id', $request->id)->first();
            if ($off_loc->status == 1) {

                $off_loc->status = 2;
            } else if ($off_loc->status == 2) {
                $off_loc->status = 1;
            }
            $off_loc->save();
            $success = '';
            return $this->SuccessResponse($success, 'Successfully Office Location status updated.');

        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        if ($request->id) {

            $off_loc = Officelocation::where('id', $request->id)->first();
            $off_loc->delete();
            $success= '';
            return $this->SuccessResponse($success, 'Successfully Office Location deleted.');


        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }
}
