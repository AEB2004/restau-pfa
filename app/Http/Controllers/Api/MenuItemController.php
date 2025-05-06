<?php

namespace App\Http\Controllers\Api;

use App\Models\MenuItem;
use App\Http\Requests\MenuItemRequest;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
class MenuItemController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(MenuItem::all());
    }
    public function show(int $id): JsonResponse
    {
        return response()->json(MenuItem::findOrFail($id));
    }
    public function store(MenuItemRequest $request): JsonResponse
    {
        $item = MenuItem::create($request->validated());
        return response()->json($item, 201);
    }
    public function update(MenuItemRequest $request, int $id): JsonResponse
    {
        $item = MenuItem::findOrFail($id);
        $item->update($request->validated());
        return response()->json($item);
    }
    public function destroy(int $id): JsonResponse
    {
        MenuItem::destroy($id);
        return response()->json(null, 204);
    }
}
