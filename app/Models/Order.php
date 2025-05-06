<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id', 'table_id', 'status',
        'total_price', 'special_requests'
    ];

    public function items()
    {
        return $this->belongsToMany(MenuItem::class)
            ->withPivot('quantity', 'special_requests');
    }
}