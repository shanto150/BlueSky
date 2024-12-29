<?php

namespace App\Models\Designation;

use App\Models\User;
use Spatie\Activitylog\LogOptions;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Designation extends Model
{
    use HasFactory,LogsActivity;

    protected $fillable = ['name', 'status', 'created_by'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logOnly(['name', 'status', 'user.name'])
        ->useLogName('Designation')
        ->logOnlyDirty();
    }

    public function user()
    {
        return $this->belongsTo(User::class,'created_by');
    }
}
