<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payment_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('acc_type',7)->nullable();
            $table->string('bank_name',30)->nullable();
            $table->string('acc_name',50)->nullable();
            $table->string('acc_no',25)->nullable();
            $table->string('branch',20)->nullable();
            $table->string('routing_no',15)->nullable();
            $table->decimal('service_charge',4,2)->nullable();
            $table->boolean('status')->default(1);
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_accounts');
    }
};
