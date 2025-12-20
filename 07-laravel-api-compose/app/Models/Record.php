<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    use HasFactory;

    protected $fillable = [
        'voucher_id',
        'product_id',
        'product',
        'quantity',
        'cost',
    ];

    protected $casts = [
        'product' => 'object',
    ];


    public function voucher()
    {
        return $this->belongsTo(Voucher::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

}
