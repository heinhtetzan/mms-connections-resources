<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\VoucherController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    Route::get('/', function () {
        $response = [
            'message' => 'Welcome from Voucher App API',
            'developed_by' => 'MMS IT',
            'for' => 'SWD React Next Students',
            'documentation_url' => env('APP_DOC_URL', 'https://mms-it.com'),
        ];

        return response()->json($response);
    });
    Route::controller(AuthController::class)->group(function () {
        Route::post('/register', 'register');
        Route::post('/login', 'login');
    });
    Route::middleware('auth:sanctum')->group(function () {
        Route::controller(ProfileController::class)->prefix('user-profile')->group(function () {
            Route::get('/show', 'show');
            Route::patch('/logout', 'logout');
            Route::patch('/change-password', 'changePassword');
            Route::patch('/change-name', 'changeName');
            Route::patch('/change-profile-image', 'changeProfileImage');
        });

        Route::apiResource('/products', ProductController::class);
        Route::apiResource('/records', RecordController::class)->only('index');
        Route::apiResource('/vouchers', VoucherController::class)->except('update');

        Route::controller(MediaController::class)->group(function () {
            Route::post('media', 'store');
            Route::delete('media/{path}', 'destroy');
        });
    });
});
