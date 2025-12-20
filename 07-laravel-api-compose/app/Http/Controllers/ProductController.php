<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    use AuthorizesRequests;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // GET SEARCH TERM FROM REQUEST
        $searchTerm = $request->input('q');

        // VALIDATE AND SET SORTING PARAMETERS
        $validSortColumns = ['id', 'product_name', 'price'];
        $sortBy = in_array($request->input('sort_by'), $validSortColumns, true) ? $request->input('sort_by') : 'id';
        $sortDirection = in_array($request->input('sort_direction'), ['asc', 'desc'], true) ? $request->input('sort_direction') : 'desc';

        // VALIDATE AND SET PAGINATION LIMIT
        $limit = $request->input('limit', 5);
        $limit = is_numeric($limit) && $limit > 0 && $limit <= 100 ? (int) $limit : 5;

        // GET PRICE RANGE PARAMETERS
        $priceMin = $request->input('price_min');
        $priceMax = $request->input('price_max');

        // INITIALIZE QUERY WITH USER SCOPE
        $query = Product::query()->where('user_id', Auth::id());

        // APPLY SEARCH FILTER IF SEARCH TERM EXISTS
        if ($searchTerm) {
            $query->where(function ($q) use ($searchTerm) {
                $q->where('product_name', 'like', '%'.$searchTerm.'%')
                    ->orWhere('price', 'like', '%'.$searchTerm.'%');
            });
        }

        // APPLY PRICE RANGE FILTER
        if ($priceMin !== null && is_numeric($priceMin)) {
            $query->where('price', '>=', (float) $priceMin);
        }

        if ($priceMax !== null && is_numeric($priceMax)) {
            $query->where('price', '<=', (float) $priceMax);
        }

        // APPLY SORTING
        $query->orderBy($sortBy, $sortDirection);

        // EXECUTE PAGINATED QUERY
        $products = $query->paginate($limit);

        // PRESERVE ALL QUERY PARAMETERS IN PAGINATION LINKS
        $products->appends([
            'q' => $searchTerm,
            'sort_by' => $sortBy,
            'sort_direction' => $sortDirection,
            'limit' => $limit,
            'price_min' => $priceMin,
            'price_max' => $priceMax,
        ]);

        // RETURN RESULTS AS JSON RESOURCE COLLECTION
        return ProductResource::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $product = new Product;
        $product->product_name = $request->product_name;
        $product->image = $request->image;
        $product->price = $request->price;
        $product->user_id = Auth::id();
        $product->save();

        return response()->json([
            'message' => 'Product created successfully',
            'data' => new ProductResource($product),
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $validated = Validator::make(['id' => $id], [
            'id' => 'required|integer|exists:products,id',
        ]);

        if ($validated->fails()) {
            return response()->json([
                'message' => 'Invalid product ID',
            ], 404);
        }

        $product = Product::find($id);

        $this->authorize('view', $product);

        return response()->json([
            'message' => 'Product retrieved successfully',
            'data' => new ProductResource($product),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $this->authorize('update', $product);

        $product->update($request->only([
            'product_name',
            'price',
            'image',
        ]));

        return response()->json([
            'message' => 'Product updated successfully',
            'data' => new ProductResource($product),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $validated = Validator::make(['id' => $id], [
            'id' => 'required|integer|exists:products,id',
        ]);

        if ($validated->fails()) {
            return response()->json([
                'message' => 'Invalid product ID',
            ], 404);
        }

        $product = Product::find($id);

        $this->authorize('delete', $product);

        $product->delete();

        return response()->json([
            'message' => 'Product deleted successfully',
        ]);
    }
}
