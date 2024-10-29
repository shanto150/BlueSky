<?php

namespace App\Http\Controllers\Admin\Area;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\BaseController;

use Auth;

class AreaController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data= DB::table('areas as ar')
        ->join('districts as d','ar.district_id','d.id')
        ->selectRaw('ar.name,d.name as district,ar.created_at,ar.status,ar.updated_at,f_username(ar.updated_by) updated_by,f_username(ar.created_by) created_by')->get();

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
        dd($request->all());

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


    public function divisionsList()
    {

        $user =DB::table('divisions')->get();
        return response()->json($user);

    }

    public function districtList()
    {

        $user = DB::table('districts')->get();
        return response()->json($user);
    }
}
