<?php
namespace App\Http\Controllers\Admin\AircraftType;

use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\BaseController;
use App\Models\AircraftType\AircraftTypeDesignator;

class AircraftTypeDesignatorController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DB::table('aircraft_type_designators as atd')
            ->selectRaw('atd.id as idd,atd.model,atd.created_at,atd.updated_at,f_username(atd.updated_by) updated_by,f_username(atd.created_by) created_by,atd.iata_code as iata,atd.icao_code as icao,atd.model as model')->get();

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

        $auth = Auth::user();

        $validator = validator($request->all(),
            ['iata_code' => 'required'],
            ['icao_code' => 'required'],
            ['model' => 'required'],
        );
        if ($validator->fails()) {
            return $this->ErrorResponse($validator->errors()->all());
        }

        AircraftTypeDesignator::create([
            'iata_code' => $request->iata_code,
            'icao_code' => $request->icao_code,
            'model' => $request->model,
            'created_by' => $auth->id,
        ]);

        $success = '';

        return $this->SuccessResponse($success, 'Successfully Aircraft Saved.');
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
        $air = AircraftTypeDesignator::find($request->id);
        return response()->json($air);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $auth = Auth::user();

        $aircraft = AircraftTypeDesignator::where('id', $request->aircraft_id)->first();
        $aircraft->iata_code = $request->iata_code != null ? $request->iata_code : $aircraft->name;
        $aircraft->icao_code = $request->icao_code != null ? $request->icao_code : $aircraft->icao_code;
        $aircraft->model = $request->model != null ? $request->model : $aircraft->model;
        $aircraft->updated_by = $auth->id;
        $aircraft->save();

        $success = '';
        return $this->SuccessResponse($success, 'Successfully Aircraft Updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {

        if ($request->id) {

            $aircraft = AircraftTypeDesignator::where('id', $request->id)->first();

            $aircraft->delete();
            $success = '';
            return $this->SuccessResponse($success, 'Successfully aircraft deleted.');

        } else {
            $error = 'Id can not be null.';
            return $this->ErrorResponse($error);

        }
    }
}
