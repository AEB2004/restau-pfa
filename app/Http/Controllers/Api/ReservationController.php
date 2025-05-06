<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Models\Reservation;
use App\Http\Requests\ReservationRequest;
class ReservationController extends Controller
{
    public function index(): JsonResponse
    {
        $data = Reservation::with(['user', 'table'])->get();
        return response()->json($data);
    }

    public function show(int $id): JsonResponse
    {
        $item = Reservation::with(['user', 'table'])->findOrFail($id);
        return response()->json($item);
    }

    public function store(ReservationRequest $request): JsonResponse
    {
        $item = Reservation::create($request->validated());
        return response()->json($item, 201);
    }

    public function update(ReservationRequest $request, int $id): JsonResponse
    {
        $item = Reservation::findOrFail($id);
        $item->update($request->validated());
        return response()->json($item);
    }

    public function destroy(int $id): JsonResponse
    {
        Reservation::destroy($id);
        return response()->json(null, 204);
    }
}



// 3. OrderController


// 4. UserController

// 5. InventoryController



