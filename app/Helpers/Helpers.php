<?php

use Illuminate\Support\Facades\Log;
use Barryvdh\Debugbar\Facades\Debugbar;

function custom_debug($message, $data = null) {
    $output = is_string($message) ? $message : json_encode($message);
    if ($data) {
        $output .= ': ' . json_encode($data);
    }

    Log::info($output);

    // Optional: Output to browser console
    // if (config('app.debug')) {
    //     echo "<script>console.log('" . addslashes($output) . "');</script>";
    // }
}
