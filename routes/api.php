<?php
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ReservationController; // Ensure this class exists in the specified namespace
use App\Http\Controllers\Api\MenuItemController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\InventoryController;
use App\Http\Controllers\Api\StaffScheduleController;
use App\Http\Controllers\Api\CustomerFeedbackController;

// Routes publiques
Route::post('/register', [RegisteredUserController::class, 'store']);
Route::post('/login', [AuthenticatedSessionController::class, 'store']);

// Routes protégées par auth:sanctum
Route::middleware(['auth:sanctum'])->group(function () {
    
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('reservations', ReservationController::class);
    Route::apiResource('menu-items', MenuItemController::class);
    Route::apiResource('orders', OrderController::class);
    Route::apiResource('users', UserController::class);
    Route::apiResource('inventories', InventoryController::class);
    Route::apiResource('staff-schedules', StaffScheduleController::class);
    Route::apiResource('feedbacks', CustomerFeedbackController::class);

});
