<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
    Route::post('/sanctum/csrf-cookie', function() {
        return response()->noContent();
    });
});

require __DIR__.'/auth.php';
