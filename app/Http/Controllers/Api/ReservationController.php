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
        // Vérifie si la table est déjà réservée à cette date/heure
        $existingReservation = Reservation::where('table_id', $request->table_id)
            ->where('date', $request->date)
            ->where('time', $request->time)
            ->exists();
    
        if ($existingReservation) {
            return response()->json([
                'message' => 'Cette table est déjà réservée pour cette date et heure.'
            ], 422);
        }
    
        $reservation = Reservation::create($request->validated());
        return response()->json($reservation, 201);
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






