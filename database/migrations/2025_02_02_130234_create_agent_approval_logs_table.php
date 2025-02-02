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
        Schema::create('agent_approval_logs', function (Blueprint $table) {
            $table->id();
            $table->integer('agent_id')->unsigned();
            $table->string('status');
            $table->integer('approver_id')->unsigned()->nullable();
            $table->longText('remarks')->nullable();
            $table->string('created_by');
            $table->string('updated_by')->nullable();
            $table->timestamps();
            $table->foreign('agent_id')->references('id')->on('agents')->onDelete('cascade');
            $table->index('approver_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agent_approval_logs');
    }
};
