<?php
namespace App\Http\Controllers\Api;

use App\Models\Inventory;
use App\Http\Requests\InventoryRequest;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
class InventoryController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Inventory::all());
    }
    public function show(int $id): JsonResponse
    {
        return response()->json(Inventory::findOrFail($id));
    }
    public function store(InventoryRequest $request): JsonResponse
    {
        $item = Inventory::create($request->validated());
        return response()->json($item, 201);
    }
    public function update(InventoryRequest $request, int $id): JsonResponse
    {
        $item = Inventory::findOrFail($id);
        $item->update($request->validated());
        return response()->json($item);
    }
    public function destroy(int $id): JsonResponse
    {
        Inventory::destroy($id);
        return response()->json(null, 204);
    }
}
