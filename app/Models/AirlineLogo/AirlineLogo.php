<?php
namespace App\Models\AirlineLogo;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;
use App\Models\User;

class AirlineLogo extends Model
{
    use HasFactory,LogsActivity;
    protected $fillable = [
        'name',
        'code',
        'logo_path',
        'country_name',
        'created_by',
        'updated_by',
        'airline_business_type'
    ];


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
        ->logOnly(['name', 'status', 'user.name'])
        ->useLogName('AirlineLogo')
        ->logOnlyDirty();
    }

    public function user()
    {
        return $this->belongsTo(User::class,'created_by');
    }

}
