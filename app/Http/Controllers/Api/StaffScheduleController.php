<?php

namespace App\Http\Controllers\Api;

use App\Models\StaffSchedule;
use App\Http\Requests\StaffScheduleRequest;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
class StaffScheduleController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(StaffSchedule::with('staff')->get());
    }
    public function show(int $id): JsonResponse
    {
        return response()->json(StaffSchedule::with('staff')->findOrFail($id));
    }
    public function store(StaffScheduleRequest $request): JsonResponse
    {
        $sched = StaffSchedule::create($request->validated());
        return response()->json($sched, 201);
    }
    public function update(StaffScheduleRequest $request, int $id): JsonResponse
    {
        $sched = StaffSchedule::findOrFail($id);
        $sched->update($request->validated());
        return response()->json($sched);
    }
    public function destroy(int $id): JsonResponse
    {
        StaffSchedule::destroy($id);
        return response()->json(null, 204);
    }
}
