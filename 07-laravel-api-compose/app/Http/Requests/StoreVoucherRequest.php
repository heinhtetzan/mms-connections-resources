<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVoucherRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'voucher_id' => 'required|string|unique:vouchers,voucher_id|max:255',
            'customer_name' => 'required|string|max:255',
            'customer_email' => 'required|email|max:255',
            'sale_date' => 'required|date',
            'records' => 'required|array',
            'records.*.product_id' => 'required|integer|exists:products,id',
            'records.*.quantity' => 'required|integer|min:1',
        ];
    }
}
