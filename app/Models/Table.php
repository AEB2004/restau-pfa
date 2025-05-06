<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Important pour Laravel

class Table extends Model
{
    use HasFactory; // Ajoute ceci !

    protected $fillable = [
        'number',
        'capacity',
        'location',
        'status',
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
