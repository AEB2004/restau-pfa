<?php
namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Requests\UserRequest;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(User::all());
    }
    public function show(int $id): JsonResponse
    {
        return response()->json(User::findOrFail($id));
    }
    public function store(UserRequest $request): JsonResponse
    {
        $user = User::create($request->validated());
        return response()->json($user, 201);
    }
    public function update(UserRequest $request, int $id): JsonResponse
    {
        $user = User::findOrFail($id);
        $user->update($request->validated());
        return response()->json($user);
    }
    public function destroy(int $id): JsonResponse
    {
        User::destroy($id);
        return response()->json(null, 204);
    }
}