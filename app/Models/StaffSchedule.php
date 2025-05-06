<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StaffSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'staff_id', 'shift_start', 'shift_end'
    ];

    public function staff()
    {
        return $this->belongsTo(User::class, 'staff_id');
    }
}
