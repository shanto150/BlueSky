<?php

namespace App\Http\Controllers\Admin\Area;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\BaseController;
use App\Models\Area\Area;
use App\Models\User;

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
        ->join('divisions as div','ar.division_id','div.id')
        ->selectRaw('ar.id as idd,ar.name,d.name as district,div.name as division,ar.created_at,ar.status,ar.updated_at,f_username(ar.updated_by) updated_by,f_username(ar.created_by) created_by')->get();

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
        // dd($request->all());
        $auth = User::where('email',$request->useEmail)->first();

        $validator = validator($request->all(),
            ['area_name' => 'required'],
            ['division_id' => 'required'],
            ['district_name' => 'required'],
        );
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->all(), 'types' => 'e']);
        }

        $area =  new Area;
        $area->name =  $request->area_name;
        $area->division_id = $request->division_id;
        $area->district_id = $request->district_id;
        $area->status =  1;
        $area->created_by =  $auth->id;
        $area->save();

        return response()->json(['message' => 'Successfully Zone Saved.', 'types' => 's']);

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
        $area = Area::find($request->id);
        return response()->json($area);

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
    public function destroy(Request $request)
    {

        if($request->id){

            $area = Area::where('id',$request->id)->first();
            $area->delete();

            return response()->json(['message' => 'Successfully Zone Saved.', 'types' => 's']);

        }else{
            return response()->json(['message' => 'Error', 'types' => 'e']);

        }

    }


    public function divisionsList()
    {

        $div =DB::table('divisions')->get();
        return response()->json($div);

    }

    public function districtList(Request $request)
    {
        $dist = DB::table('districts')->where('division_id',$request->id)->orderBy('name','asc')->get();
        return response()->json($dist);
    }
}
