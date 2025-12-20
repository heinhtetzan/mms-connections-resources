<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRecordRequest;
use App\Http\Requests\UpdateRecordRequest;
use App\Http\Resources\RecordResource;
use App\Models\Record;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RecordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $validSortColumns = [
            'id',
            'voucher_id',
            'product_id',
            'quantity',
            'cost',
            'created_at',
            'updated_at',
            'product_name',
            'price'
        ];

        $sortBy = in_array($request->input('sort_by'), $validSortColumns, true)
            ? $request->input('sort_by')
            : 'id';

        $sortDirection = in_array($request->input('sort_direction'), ['asc', 'desc'], true)
            ? $request->input('sort_direction')
            : 'desc';

        $limit = $request->input('limit', 5);

        // FILTER PARAMETERS
        $filters = [
            'voucher_id' => $request->input('voucher_id'),
            'product_id' => $request->input('product_id'),
            'min_quantity' => $request->filled('min_quantity') ? (int)$request->input('min_quantity') : null,
            'max_quantity' => $request->filled('max_quantity') ? (int)$request->input('max_quantity') : null,
            'min_cost' => $request->filled('min_cost') ? (float)$request->input('min_cost') : null,
            'max_cost' => $request->filled('max_cost') ? (float)$request->input('max_cost') : null,
            'min_price' => $request->filled('min_price') ? (float)$request->input('min_price') : null,
            'max_price' => $request->filled('max_price') ? (float)$request->input('max_price') : null,
            'date_from' => $request->input('date_from'),
            'date_to' => $request->input('date_to'),
        ];

        // BUILD QUERY WITH EAGER LOADING
        $query = Record::where('user_id', Auth::id())->with(['product' => function ($query) use ($filters) {
            if ($filters['min_price'] || $filters['max_price']) {
                $query->when($filters['min_price'], fn($q) => $q->where('price', '>=', $filters['min_price']))
                    ->when($filters['max_price'], fn($q) => $q->where('price', '<=', $filters['max_price']));
            }
        }])

            // DIRECT RECORD FILTERS
            ->when($filters['voucher_id'], fn($q) => $q->where('voucher_id', $filters['voucher_id']))
            ->when($filters['product_id'], fn($q) => $q->where('product_id', $filters['product_id']))
            ->when($filters['min_quantity'], fn($q) => $q->where('quantity', '>=', $filters['min_quantity']))
            ->when($filters['max_quantity'], fn($q) => $q->where('quantity', '<=', $filters['max_quantity']))
            ->when($filters['min_cost'], fn($q) => $q->where('cost', '>=', $filters['min_cost']))
            ->when($filters['max_cost'], fn($q) => $q->where('cost', '<=', $filters['max_cost']))
            // DATE FILTERS
            ->when($filters['date_from'], fn($q) => $q->whereDate('created_at', '>=', $filters['date_from']))
            ->when($filters['date_to'], fn($q) => $q->whereDate('created_at', '<=', $filters['date_to']));

        // HANDLE SORTING (INCLUDING RELATIONSHIP FIELDS)
        $query->orderBy($sortBy, $sortDirection);

        // PAGINATE RESULTS
        $records = $query->paginate($limit);

        // PRESERVE ALL QUERY PARAMETERS
        $records->appends(array_merge(
            $request->only(['q', 'sort_by', 'sort_direction', 'limit']),
            array_filter($filters)
        ));

        return RecordResource::collection($records);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRecordRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Record $record)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRecordRequest $request, Record $record)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Record $record)
    {
        //
    }
}
