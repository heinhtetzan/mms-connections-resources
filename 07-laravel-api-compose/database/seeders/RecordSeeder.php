<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Record;
use App\Models\Voucher;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RecordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vouchers = Voucher::all();
        $products = Product::all();

        foreach ($vouchers as $voucher) {

            $records = [];
            $total = 0;
            for ($i = 0; $i < rand(1, 5); $i++) {
                $product = $products->random();
                $quantity = rand(1, 10);
                $cost = $quantity * $product->price;


                $records[] = [
                    'voucher_id' => $voucher->id,
                    'user_id' => 1,
                    'product_id' => $product->id,
                    'product' => json_encode($product),
                    'quantity' => $quantity,
                    'cost' => $cost,
                    'created_at' => $voucher->created_at,
                    'updated_at' => $voucher->updated_at
                ];

                $total += $cost;
            }

            Record::insert($records);

            $voucher->update([
                'total' => $total,
                'tax' => $total * 0.07,
                'net_total' => $total + $total * 0.07,
            ]);
        }
    }
}
