<?php

namespace App\Models\Agent;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Models\User;
use Spatie\Activitylog\LogOptions;
class AgentUser extends Model
{
    use HasFactory,LogsActivity;

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logOnly(['name', 'status', 'user.name'])
        ->useLogName('AgentUser')
        ->logOnlyDirty();

    }

    public function user()
    {
        return $this->belongsTo(User::class,'created_by');
    }
}
