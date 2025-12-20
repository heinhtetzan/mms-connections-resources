<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMediaRequest;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function store(StoreMediaRequest $request)
    {

        $file = $request->file('image');

        $path = Storage::putFile('/', $file);

        return response()->json([
            'message' => 'Media upload successfully',
            'data' => [
                'path' => $path,
                'url' => asset(Storage::url($path)),
            ],
        ]);

    }

    public function destroy($path)
    {
        Storage::delete($path);

        return response()->json([
            'message' => 'Media deleted successfully',
        ]);
    }
}
