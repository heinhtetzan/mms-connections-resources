<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VoucherDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'voucher_id' => $this->voucher_id,
            'customer_name' => $this->customer_name,
            'customer_email' => $this->customer_email,
            'sale_date' => $this->sale_date,
            'total' => $this->total,
            'tax' => $this->tax,
            'net_total' => $this->net_total,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            // 'records' => $this->records()->get(),
            // Include related records (e.g., associated products) if applicable
            'records' => RecordResource::collection($this->records()->get()),
        ];
    }
}
