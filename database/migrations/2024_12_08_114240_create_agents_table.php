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
        Schema::create('agents', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('agent_code', 10)->unique()->nullable();
            $table->string('email', 50)->unique();
            $table->string('phone', 20);
            $table->string('logo_path', 255)->nullable();
            $table->string('designation',100)->nullable();
            $table->string('country');
            $table->string('city');
            $table->string('zone');
            $table->string('address');
            $table->string('trade_licence', 50)->unique();
            $table->string('ca_number', 50)->nullable()->unique();
            $table->date('established_date')->nullable();
            $table->string('reg_number', 50)->nullable()->unique();
            $table->string('postal_code', 50)->nullable();
            $table->string('fax', 50)->nullable()->unique();
            $table->string('iata_number', 50)->nullable()->unique();
            $table->string('hajj_agency_number', 50)->nullable()->unique();
            $table->integer('kam')->nullable();
            $table->string('remarks')->nullable();
            $table->string('status')->default('Pending')->comment('Approved,Reject,Hold,Pending');
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->index('email');
            $table->index('phone');
            $table->timestamps();
        });
    }

    // $table->string('full_name',100);

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agents');
    }
};
