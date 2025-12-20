<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
        $userId = $this->user()->id; // Get the authenticated user ID
        $productId = $this->route('product') ? $this->route('product')->id : null; // Get the product ID if updating

        return [
            'product_name' => [
                'sometimes',
                'string',
                'max:255',
                'unique:products,product_name,' . $productId . ',id,user_id,' . $userId,
            ],
            'price' => 'sometimes|numeric|min:0',
            'image' => 'sometimes|string|min:0',
        ];
    }
}
