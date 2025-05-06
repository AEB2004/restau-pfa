<?php
namespace App\Http\Controllers\Api;
use App\Models\CustomerFeedback;
use App\Http\Requests\CustomerFeedbackRequest;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class CustomerFeedbackController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(CustomerFeedback::all());
    }
    public function show(int $id): JsonResponse
    {
        return response()->json(CustomerFeedback::findOrFail($id));
    }
    public function store(CustomerFeedbackRequest $request): JsonResponse
    {
        $fb = CustomerFeedback::create($request->validated());
        return response()->json($fb, 201);
    }
    public function update(CustomerFeedbackRequest $request, int $id): JsonResponse
    {
        $fb = CustomerFeedback::findOrFail($id);
        $fb->update($request->validated());
        return response()->json($fb);
    }
    public function destroy(int $id): JsonResponse
    {
        CustomerFeedback::destroy($id);
        return response()->json(null, 204);
    }
}