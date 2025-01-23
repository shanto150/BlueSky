<?php

namespace App\Models\AircraftType;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use App\Models\User;
use Spatie\Activitylog\LogOptions;

class AircraftTypeDesignator extends Model
{
    use HasFactory,LogsActivity;
    protected $fillable = [
        'iata_code',
        'icao_code',
        'model',
        'created_by',
        'updated_by'

    ];


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logOnly(['name', 'status', 'user.name'])
        ->useLogName('AircraftTypeDesignator')
        ->logOnlyDirty();
    }

    public function user()
    {
        return $this->belongsTo(User::class,'created_by');
    }
}
