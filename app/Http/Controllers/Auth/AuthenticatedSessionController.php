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

        // Chercher l'utilisateur par email
        $user = User::where('email', $request->email)->first();

        // Vérifier si l'utilisateur existe et le mot de passe est correct
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Les informations de connexion sont invalides.',
            ], 401); // Unauthorized
        }

        // Créer un nouveau token
        $token = $user->createToken('apitoken')->plainTextToken;

        // Retourner la réponse
        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }
}
