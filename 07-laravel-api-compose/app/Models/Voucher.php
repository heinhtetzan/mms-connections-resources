<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;
    protected $fillable = ["customer_email", "customer_name", "net_total", "records", "sale_date", "tax", "total", "voucher_id","user_id"];

    protected $casts = [
        "records" => "array",
    ];

    public function records()
    {
        return $this->hasMany(Record::class,"voucher_id","voucher_id");
    }
}
