<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReservationRequest extends FormRequest
{
    public function rules()
    {
        return [
            'date' => 'required|date',
            'time' => 'required|string',
         // Assurez-vous que c'est dans le bon range
            'party' => 'required|string|max:255', // Assurez-vous que c'est une chaîne de caractères
            'table_id' => 'required|exists:tables,id', // Assurez-vous que la table existe dans la base de données
            'user_id' => 'required|exists:users,id', // Assurez-vous que l'utilisateur existe dans la base de données
           
        ];
    }

    public function messages()
    {
        return [
            'date.required' => 'La date est obligatoire.',
            'time.required' => 'L\'heure est obligatoire.',
            'party.required' => 'Le nombre de personnes est obligatoire.',
            'table_id.required' => 'La table est obligatoire.',
            'user.first_name.required' => 'Le prénom est obligatoire.',
            'user.last_name.required' => 'Le nom est obligatoire.',
            'user.email.required' => 'L\'email est obligatoire.',
            'user.phone.required' => 'Le numéro de téléphone est obligatoire.',
        ];
    }
}
