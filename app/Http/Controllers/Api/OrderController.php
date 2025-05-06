<?php
namespace App\Http\Controllers\Api;

use App\Models\Order;
use App\Http\Requests\OrderRequest;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
class OrderController extends Controller
{
    public function index(): JsonResponse
    {
        $data = Order::with(['user', 'items'])->get();
        return response()->json($data);
    }
    public function show(int $id): JsonResponse
    {
        $item = Order::with(['user', 'items'])->findOrFail($id);
        return response()->json($item);
    }
    public function store(OrderRequest $request): JsonResponse
    {
        $order = Order::create($request->validated());
        if ($request->has('items')) {
            $order->items()->sync($request->get('items'));
        }
        return response()->json($order->load('items'), 201);
    }
    public function update(OrderRequest $request, int $id): JsonResponse
    {
        $order = Order::findOrFail($id);
        $order->update($request->validated());
        if ($request->has('items')) {
            $order->items()->sync($request->get('items'));
        }
        return response()->json($order->load('items'));
    }
    public function destroy(int $id): JsonResponse
    {
        Order::destroy($id);
        return response()->json(null, 204);
    }
}