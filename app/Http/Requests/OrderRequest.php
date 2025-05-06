<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'user_id' => 'required|exists:users,id',
            'status' => 'required|string',
            'total_price' => 'required|numeric',
            'items' => 'nullable|array',
             'special_requests' => 'nullable|string|max:255',
             
        ];
    }
}
