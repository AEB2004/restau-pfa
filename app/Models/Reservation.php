<?php

// app/Models/Reservation.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'date',
        'time',
        'nombrepersonnes',
        'party',
        'table_id',
        'user_id', // Si vous avez un modèle User associé
        'special_requests',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function table()
    {
        return $this->belongsTo(Table::class);
    }
}
