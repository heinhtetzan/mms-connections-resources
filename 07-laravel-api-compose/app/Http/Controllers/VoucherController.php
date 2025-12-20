<?php


namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Http\Requests\StoreVoucherRequest;
use App\Http\Resources\VoucherDetailResource;
use App\Http\Resources\VoucherResource;
use App\Models\Product;
use App\Models\Record;
use App\Models\Voucher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class VoucherController extends Controller
{
    use AuthorizesRequests;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // SEARCH AND SORTING PARAMETERS
        $searchTerm = $request->input('q');
        $validSortColumns = ['id', 'voucher_id', 'total', 'tax', 'net_total', 'customer_name', 'customer_email', 'sale_date'];
        $sortBy = in_array($request->input('sort_by'), $validSortColumns, true)
            ? $request->input('sort_by')
            : 'id';
        $sortDirection = in_array($request->input('sort_direction'), ['asc', 'desc'], true)
            ? $request->input('sort_direction')
            : 'desc';

        // PAGINATION
        $limit = $request->input('limit', 5);

        // NET TOTAL FILTERS
        $minNetTotal = $request->filled('min_net_total') ? (float)$request->input('min_net_total') : null;
        $maxNetTotal = $request->filled('max_net_total') ? (float)$request->input('max_net_total') : null;
        $netTotalBetween = $request->filled('net_total_between')
            ? array_map('floatval', explode(',', $request->input('net_total_between')))
            : null;

        // DATE FILTERS
        $startDate = $request->filled('start_date') ? $request->input('start_date') : null;
        $endDate = $request->filled('end_date') ? $request->input('end_date') : null;
        $dateBetween = $request->filled('date_between')
            ? explode(',', $request->input('date_between'))
            : null;

        // QUERY CONSTRUCTION
        $query = Voucher::query()
            ->with('records')
            ->where('user_id', Auth::id())
            ->when($searchTerm, function ($q) use ($searchTerm) {
                $q->where(function ($query) use ($searchTerm) {
                    $query->where('voucher_id', 'like', '%' . $searchTerm . '%')
                        ->orWhere('customer_name', 'like', '%' . $searchTerm . '%')
                        ->orWhere('customer_email', 'like', '%' . $searchTerm . '%');
                });
            })
            // NET TOTAL FILTERS
            ->when($minNetTotal, fn($q) => $q->where('net_total', '>=', $minNetTotal))
            ->when($maxNetTotal, fn($q) => $q->where('net_total', '<=', $maxNetTotal))
            ->when($netTotalBetween, function ($q) use ($netTotalBetween) {
                $q->whereBetween('net_total', $netTotalBetween);
            })
            // DATE FILTERS
            ->when($startDate, fn($q) => $q->whereDate('sale_date', '>=', $startDate))
            ->when($endDate, fn($q) => $q->whereDate('sale_date', '<=', $endDate))
            ->when($dateBetween, function ($q) use ($dateBetween) {
                $q->whereBetween('sale_date', $dateBetween);
            })
            ->orderBy($sortBy, $sortDirection);

        $vouchers = $query->paginate($limit);

        // PRESERVE ALL FILTERS IN PAGINATION LINKS
        $vouchers->appends([
            'q' => $searchTerm,
            'sort_by' => $sortBy,
            'sort_direction' => $sortDirection,
            'limit' => $limit,
            'min_net_total' => $minNetTotal,
            'max_net_total' => $maxNetTotal,
            'net_total_between' => $request->input('net_total_between'),
            'start_date' => $startDate,
            'end_date' => $endDate,
            'date_between' => $request->input('date_between'),
        ]);

        return VoucherResource::collection($vouchers);
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $validated = Validator::make(['id' => $id], [
            'id' => 'required|integer|exists:vouchers,id',
        ]);

        if ($validated->fails()) {
            return response()->json([
                'message' => 'Invalid Voucher ID'
            ], 404);
        }

        $voucher = Voucher::find($id);

        $this->authorize('view', $voucher);

        return response()->json([
            'message' => 'Voucher retrieved successfully',
            'data' => new VoucherDetailResource($voucher),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVoucherRequest $request)
    {
        DB::beginTransaction();

        try {

            $records = [];
            foreach ($request->records as $record) {
                $product = Product::find($record["product_id"]);
                $cost = $product->price * $record["quantity"];
                // Insert all records at once
                $records[] = [
                    'voucher_id' => $request->voucher_id,
                    'user_id' => Auth::id(),
                    'product_id' => $product->id,
                    'quantity' => $record['quantity'],
                    'cost' => $cost,
                    'product' => json_encode($product),
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }

            $total = array_sum(array_column($records, 'cost'));
            $tax = $total * 0.05; // Assuming 10% tax rate
            $netTotal = $total + $tax;


            // Create a new Voucher instance and fill it with request data
            $voucher = Voucher::create([
                'voucher_id' => $request->voucher_id,
                'customer_name' => $request->customer_name,
                'customer_email' => $request->customer_email,
                'sale_date' => $request->sale_date,
                'total' => $total,
                'tax' => $tax,
                'net_total' => $netTotal,
                'user_id' => Auth::id(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Insert all records at once
            Record::insert($records);

            // Commit the transaction
            DB::commit();

            return response()->json([
                'message' => 'Voucher created successfully',
                'data' => $voucher->load('records'),
            ], 201);
        } catch (\Exception $e) {
            // Rollback the transaction if any error occurs
            DB::rollback();
            return response()->json(['message' => 'Failed to create voucher', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $validated = Validator::make(['id' => $id], [
            'id' => 'required|integer|exists:vouchers,id',
        ]);

        if ($validated->fails()) {
            return response()->json([
                'message' => 'Invalid Voucher ID'
            ], 404);
        }

        $voucher = Voucher::find($id);

        $this->authorize('delete', $voucher);

        $voucher->delete();

        return response()->json(['message' => 'Voucher deleted successfully.']);
    }
}
