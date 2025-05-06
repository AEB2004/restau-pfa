<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StaffScheduleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'staff_id' => 'required|exists:users,id',
            'shift_start' => 'required|date_format:Y-m-d H:i:s',
            'shift_end' => 'required|date_format:Y-m-d H:i:s'
        ];
    }
    public function messages(): array
    {
        return [
            'staff_id.required' => 'Staff ID is required.',
            'staff_id.exists' => 'The selected staff ID does not exist.',
            'shift_start.required' => 'Shift start time is required.',
            'shift_start.date_format' => 'Shift start time must be in the format Y-m-d H:i:s.',
            'shift_end.required' => 'Shift end time is required.',
            'shift_end.date_format' => 'Shift end time must be in the format Y-m-d H:i:s.'
        ];
    }
}
