<?php

namespace App\Models\Agent;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Models\User;
use Spatie\Activitylog\LogOptions;

class AgentImage extends Model
{
    use HasFactory,LogsActivity;

}
