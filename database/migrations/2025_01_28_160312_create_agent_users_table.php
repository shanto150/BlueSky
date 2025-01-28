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
        Schema::create('agent_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('agent_id');
            $table->string('name',50);
            $table->string('phone',20);
            $table->string('email',50)->unique();
            $table->string('designation',50)->nullable();
            $table->string('nid',20);
            $table->date('dob',50);
            $table->string('img_path',255)->nullable();
            $table->string('created_by');
            $table->string('updated_by')->nullable();

            $table->timestamps();
            $table->index('agent_id');

            $table->foreign('agent_id')->references('id')->on('agent_users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agent_users');
    }
};
