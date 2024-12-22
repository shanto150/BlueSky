<?php

namespace App\Http\Controllers\Admin\Agent;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;

class AgentController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = DB::table('agents as ag')
            ->join('users as u', 'ag.user_id', 'u.id')
            ->selectRaw('ag.id as idd,u.name as owner,ag.name,ag.phone,ag.agent_code as agent_code,ag.email as email,ag.created_at,ag.status,ag.updated_at,f_username(ag.updated_by) updated_by,f_username(ag.created_by) created_by,ag.designation,ag.country,ag.city,ag.address,f_zonename(ag.zone) as zone,ag.trade_licence,ag.ca_number,ag.established_date,ag.reg_number,ag.postal_code,ag.fax,ag.iata_number,ag.hajj_agency_number,f_username(ag.kam) as kam,ag.remarks,ag.net_balance')->get();

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
        //
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
