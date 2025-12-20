<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        collect(Storage::disk('public')->files())->each(function ($file) {
            if (basename($file) !== '.gitignore') {
                Storage::disk('public')->delete($file);
            }
        });

        $this->call(UserSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(VoucherSeeder::class);
        $this->call(RecordSeeder::class);
    }
}
