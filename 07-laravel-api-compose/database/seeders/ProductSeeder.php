<?php

namespace Database\Seeders;

use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Product::factory()->count(10)->create();
        $defaultProducts = [
            [
                // 'category_id' => 'Bread',
                'product_name' => 'Buttery French Morning Croissant',
                'price' => 5800,
                'image' => '1.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-08-15T10:30:00Z'),
                'updated_at' => Carbon::parse('2024-02-18T11:15:00Z'),
            ],
            [
                // 'category_id' => 'Bread',
                'product_name' => 'Artisan Crusty Rye Loaf',
                'price' => 6300,
                'image' => '2.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-07-22T09:45:00Z'),
                'updated_at' => Carbon::parse('2024-01-05T14:20:00Z'),
            ],
            [
                // 'category_id' => 'Bread',
                'product_name' => 'Healthy Sesame Multigrain Loaf',
                'price' => 5800,
                'image' => '3.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-09-05T08:15:00Z'),
                'updated_at' => Carbon::parse('2024-03-12T16:40:00Z'),
            ],
            [
                // 'category_id' => 'Bread',
                'product_name' => 'Golden Classic Sliced Bread',
                'price' => 6400,
                'image' => '4.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-10-12T11:20:00Z'),
                'updated_at' => Carbon::parse('2024-02-28T10:05:00Z'),
            ],
            [
                // 'category_id' => 'Cake',
                'product_name' => 'Berry Layered Mousse Cake',
                'price' => 16000,
                'image' => '5.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-06-18T14:50:00Z'),
                'updated_at' => Carbon::parse('2024-01-22T09:30:00Z'),
            ],
            [
                // 'category_id' => 'Cake',
                'product_name' => 'Red velvet double cheese cake',
                'price' => 10500,
                'image' => '6.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-11-08T13:25:00Z'),
                'updated_at' => Carbon::parse('2024-03-05T15:45:00Z'),
            ],
            [
                // 'category_id' => 'Cake',
                'product_name' => 'Dark Chocolate Fudge Cake',
                'price' => 10500,
                'image' => '7.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-08-30T16:10:00Z'),
                'updated_at' => Carbon::parse('2024-02-14T12:55:00Z'),
            ],
            [
                // 'category_id' => 'Cake',
                'product_name' => 'Strawberry Glaze Cheesecake',
                'price' => 12500,
                'image' => '8.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-07-14T10:05:00Z'),
                'updated_at' => Carbon::parse('2024-01-30T17:20:00Z'),
            ],
            [
                // 'category_id' => 'Coffee',
                'product_name' => 'Creamy Classic Hot Cappuccino',
                'price' => 8000,
                'image' => '9.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-09-22T08:40:00Z'),
                'updated_at' => Carbon::parse('2024-02-10T14:15:00Z'),
            ],
            [
                // 'category_id' => 'Coffee',
                'product_name' => 'Iced Caramel Latte Bliss',
                'price' => 9500,
                'image' => '10.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-10-05T12:30:00Z'),
                'updated_at' => Carbon::parse('2024-03-18T11:50:00Z'),
            ],
            [
                // 'category_id' => 'Coffee',
                'product_name' => 'Bold Roast Hot Black Coffee',
                'price' => 8000,
                'image' => '11.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-08-08T09:15:00Z'),
                'updated_at' => Carbon::parse('2024-01-15T16:25:00Z'),
            ],
            [
                // 'category_id' => 'Coffee',
                'product_name' => 'Whipped Ice Mocha Craze',
                'price' => 8500,
                'image' => '12.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-11-20T15:45:00Z'),
                'updated_at' => Carbon::parse('2024-03-08T10:10:00Z'),
            ],
            [
                // 'category_id' => 'Smoothie',
                'product_name' => 'Frosted Berry Smoothie Burst',
                'price' => 7800,
                'image' => '13.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-07-05T14:20:00Z'),
                'updated_at' => Carbon::parse('2024-02-22T13:35:00Z'),
            ],
            [
                // 'category_id' => 'Smoothie',
                'product_name' => 'Frosted Strawberry Smoothie Burst',
                'price' => 7800,
                'image' => '14.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-09-14T11:10:00Z'),
                'updated_at' => Carbon::parse('2024-01-08T08:50:00Z'),
            ],
            [
                // 'category_id' => 'Smoothie',
                'product_name' => 'Frosted Lychee Smoothie Burst',
                'price' => 9500,
                'image' => '15.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-08-25T16:30:00Z'),
                'updated_at' => Carbon::parse('2024-03-15T12:05:00Z'),
            ],
            [
                // 'category_id' => 'Smoothie',
                'product_name' => 'Frosted Sunkist Smoothie Burst',
                'price' => 9200,
                'image' => '16.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-10-18T13:55:00Z'),
                'updated_at' => Carbon::parse('2024-02-05T15:40:00Z'),
            ],
            [
                // 'category_id' => 'Smoothie',
                'product_name' => 'Tropical Layered Fruit Smoothie',
                'price' => 8500,
                'image' => '17.png',
                'user_id' => 1,
                'created_at' => Carbon::parse('2023-11-30T10:25:00Z'),
                'updated_at' => Carbon::parse('2024-03-22T09:15:00Z'),
            ],
        ];

        foreach ($defaultProducts as $product) {
            $sourcePath = public_path('images/'.$product['image']);
            $destinationPath = $product['image'];
            Storage::put($destinationPath, File::get($sourcePath), 'public');
        }
        Product::insert($defaultProducts);
    }
}
