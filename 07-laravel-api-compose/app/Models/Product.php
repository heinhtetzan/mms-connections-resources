<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    protected $fillable = [
        'product_name',
        'price',
        'image'
    ];

    public function vouchers()
    {
        return $this->hasMany(Voucher::class);
    }

    public function records()
    {
        return $this->hasMany(Record::class);
    }
}
