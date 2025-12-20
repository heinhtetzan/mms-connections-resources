<?php

namespace Database\Seeders;

use App\Models\Voucher;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VoucherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $vouchers = [
            [
                'voucher_id' => 'INV-20240929-1874',
                'customer_name' => 'kyaw kayw',
                'customer_email' => 'kyaw@gmail.com',
                'sale_date' => '2024-09-29',
                'total' => 10600,
                'tax' => 742.0000000000001,
                'net_total' => 11342,
                'user_id' => 1,
                'created_at' => '2024-07-15 10:34:21',
                'updated_at' => '2024-09-20 14:12:05'
            ],
            [
                'voucher_id' => 'INV-20240930-7345',
                'customer_name' => 'Su Su',
                'customer_email' => 'su@gmail.com',
                'sale_date' => '2024-09-30',
                'total' => 8000,
                'tax' => 560,
                'net_total' => 8560,
                'user_id' => 1,
                'created_at' => '2024-06-12 09:25:43',
                'updated_at' => '2024-09-18 11:40:33'
            ],
            [
                'voucher_id' => 'INV-20240930-1297',
                'customer_name' => 'Aung Aung',
                'customer_email' => 'aung',
                'sale_date' => '2024-09-30',
                'total' => 6000,
                'tax' => 420.00000000000006,
                'net_total' => 6420,
                'user_id' => 1,
                'created_at' => '2024-05-30 16:50:27',
                'updated_at' => '2024-09-21 13:47:59'
            ],
            [
                'voucher_id' => 'INV-20240930-8003',
                'customer_name' => 'Kuang Kaung',
                'customer_email' => 'kaung@gmail.com',
                'sale_date' => '2024-09-30',
                'total' => 600,
                'tax' => 42.00000000000001,
                'net_total' => 642,
                'user_id' => 1,
                'created_at' => '2024-08-10 12:17:49',
                'updated_at' => '2024-09-25 09:23:15'
            ],
            [
                'voucher_id' => 'INV-20240930-9714',
                'customer_name' => 'kyaw kayw',
                'customer_email' => 'kyaw@gmail.com',
                'sale_date' => '2024-09-30',
                'total' => 4000,
                'tax' => 280,
                'net_total' => 4280,
                'user_id' => 1,
                'created_at' => '2024-07-22 17:05:34',
                'updated_at' => '2024-09-26 12:45:59'
            ],
            [
                'voucher_id' => 'INV-20240930-4754',
                'customer_name' => 'kyaw kayw',
                'customer_email' => 'kyaw@gmail.com',
                'sale_date' => '2024-09-30',
                'total' => 1200,
                'tax' => 84.00000000000001,
                'net_total' => 1284,
                'user_id' => 1,
                'created_at' => '2024-06-08 15:33:41',
                'updated_at' => '2024-09-29 08:56:22'
            ],
            [
                'voucher_id' => 'INV-20241003-8348',
                'customer_name' => 'kyaw kayw',
                'customer_email' => 'kyaw@gmail.com',
                'sale_date' => '2024-10-03',
                'total' => 2400,
                'tax' => 168,
                'net_total' => 2568,
                'user_id' => 1,
                'created_at' => '2024-08-25 14:25:56',
                'updated_at' => '2024-09-30 17:10:43'
            ],
            // Additional 20 vouchers
            [
                'voucher_id' => 'INV-20241001-6723',
                'customer_name' => 'Min Min',
                'customer_email' => 'min@gmail.com',
                'sale_date' => '2024-10-01',
                'total' => 5200,
                'tax' => 364,
                'net_total' => 5564,
                'user_id' => 1,
                'created_at' => '2024-09-05 11:22:45',
                'updated_at' => '2024-09-30 12:11:22'
            ],
            [
                'voucher_id' => 'INV-20241002-3847',
                'customer_name' => 'Su Hla',
                'customer_email' => 'su.hla@gmail.com',
                'sale_date' => '2024-10-02',
                'total' => 7100,
                'tax' => 497,
                'net_total' => 7597,
                'user_id' => 1,
                'created_at' => '2024-07-18 14:45:12',
                'updated_at' => '2024-09-20 10:32:45'
            ],
            [
                'voucher_id' => 'INV-20241002-2389',
                'customer_name' => 'Aye Aye',
                'customer_email' => 'aye.aye@gmail.com',
                'sale_date' => '2024-10-02',
                'total' => 3600,
                'tax' => 252,
                'net_total' => 3852,
                'user_id' => 1,
                'created_at' => '2024-08-10 12:17:49',
                'updated_at' => '2024-09-27 09:23:15'
            ],
            [
                'voucher_id' => 'INV-20241003-4967',
                'customer_name' => 'Kyaw Soe',
                'customer_email' => 'kyaw@gmail.com',
                'sale_date' => '2024-10-03',
                'total' => 4500,
                'tax' => 315,
                'net_total' => 4815,
                'user_id' => 1,
                'created_at' => '2024-06-18 15:33:21',
                'updated_at' => '2024-09-28 14:20:41'
            ],
            [
                'voucher_id' => 'INV-20241004-8127',
                'customer_name' => 'Moe Moe',
                'customer_email' => 'moe@gmail.com',
                'sale_date' => '2024-10-04',
                'total' => 5800,
                'tax' => 406,
                'net_total' => 6206,
                'user_id' => 1,
                'created_at' => '2024-09-12 11:30:05',
                'updated_at' => '2024-09-29 16:18:52'
            ],
            [
                'voucher_id' => 'INV-20241005-9931',
                'customer_name' => 'Hla Hla',
                'customer_email' => 'hla@gmail.com',
                'sale_date' => '2024-10-05',
                'total' => 2700,
                'tax' => 189,
                'net_total' => 2889,
                'user_id' => 1,
                'created_at' => '2024-07-20 08:47:54',
                'updated_at' => '2024-09-22 13:52:36'
            ],
            [
                'voucher_id' => 'INV-20241006-2945',
                'customer_name' => 'Zaw Zaw',
                'customer_email' => 'zaw@gmail.com',
                'sale_date' => '2024-10-06',
                'total' => 3100,
                'tax' => 217,
                'net_total' => 3317,
                'user_id' => 1,
                'created_at' => '2024-06-15 10:24:58',
                'updated_at' => '2024-09-28 09:35:44'
            ],
            [
                'voucher_id' => 'INV-20241007-4385',
                'customer_name' => 'Nay Nay',
                'customer_email' => 'nay@gmail.com',
                'sale_date' => '2024-10-07',
                'total' => 7900,
                'tax' => 553,
                'net_total' => 8453,
                'user_id' => 1,
                'created_at' => '2024-08-02 12:15:33',
                'updated_at' => '2024-09-24 10:57:18'
            ],
            [
                'voucher_id' => 'INV-20241008-5124',
                'customer_name' => 'Tun Tun',
                'customer_email' => 'tun@gmail.com',
                'sale_date' => '2024-10-08',
                'total' => 4700,
                'tax' => 329,
                'net_total' => 5029,
                'user_id' => 1,
                'created_at' => '2024-07-30 17:05:12',
                'updated_at' => '2024-09-26 11:47:59'
            ],
            [
                'voucher_id' => 'INV-20241009-6584',
                'customer_name' => 'Htay Htay',
                'customer_email' => 'htay@gmail.com',
                'sale_date' => '2024-10-09',
                'total' => 3900,
                'tax' => 273,
                'net_total' => 4173,
                'user_id' => 1,
                'created_at' => '2024-05-20 16:13:34',
                'updated_at' => '2024-09-22 12:44:15'
            ],
            [
                'voucher_id' => 'INV-20241010-7383',
                'customer_name' => 'Hnin Hnin',
                'customer_email' => 'hnin@gmail.com',
                'sale_date' => '2024-10-10',
                'total' => 1500,
                'tax' => 105,
                'net_total' => 1605,
                'user_id' => 1,
                'created_at' => '2024-06-12 10:43:19',
                'updated_at' => '2024-09-21 11:23:10'
            ],
            [
                'voucher_id' => 'INV-20241011-8124',
                'customer_name' => 'Shwe Shwe',
                'customer_email' => 'shwe@gmail.com',
                'sale_date' => '2024-10-11',
                'total' => 6200,
                'tax' => 434,
                'net_total' => 6634,
                'user_id' => 1,
                'created_at' => '2024-07-01 08:15:27',
                'updated_at' => '2024-09-23 15:43:52'
            ],
            [
                'voucher_id' => 'INV-20241012-9381',
                'customer_name' => 'Win Win',
                'customer_email' => 'win@gmail.com',
                'sale_date' => '2024-10-12',
                'total' => 2500,
                'tax' => 175,
                'net_total' => 2675,
                'user_id' => 1,
                'created_at' => '2024-08-20 12:35:56',
                'updated_at' => '2024-09-24 09:48:11'
            ],
            [
                'voucher_id' => 'INV-20241013-7432',
                'customer_name' => 'Kyaw Kyaw',
                'customer_email' => 'kyaw.kyaw@gmail.com',
                'sale_date' => '2024-10-13',
                'total' => 3000,
                'tax' => 210,
                'net_total' => 3210,
                'user_id' => 1,
                'created_at' => '2024-06-22 13:45:29',
                'updated_at' => '2024-09-27 08:23:46'
            ],
            [
                'voucher_id' => 'INV-20241014-5129',
                'customer_name' => 'Aung Aung',
                'customer_email' => 'aung.aung@gmail.com',
                'sale_date' => '2024-10-14',
                'total' => 4300,
                'tax' => 301,
                'net_total' => 4601,
                'user_id' => 1,
                'created_at' => '2024-09-01 10:23:34',
                'updated_at' => '2024-09-28 14:55:19'
            ],
        ];




        Voucher::insert($vouchers);
    }
}
