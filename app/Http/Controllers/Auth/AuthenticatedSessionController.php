<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthenticatedSessionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
    
        $user = User::where('email', $request->email)->first();
    
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Les informations de connexion sont invalides.'], 401);
        }
    
        // Créer un token
        $token = $user->createToken('apitoken')->plainTextToken;
    
        // Retourner le rôle avec l'utilisateur
        return response()->json([
            'user' => $user,
            'role' => $user->role,
            'token' => $token,
        ]);
    }
    
}
