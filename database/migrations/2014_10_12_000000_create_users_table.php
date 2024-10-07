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
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->string('name',50);
            $table->string('email',50)->unique();
            $table->string('user_role',15)->nullable();
            $table->tinyInteger('login_attamp')->default(0);
            $table->tinyInteger('is_active')->default(1)->comment('1=active 0=Inactive');
            $table->tinyInteger('require_2fa')->default(1)->comment('1=Required 0=no need');
            $table->tinyInteger('registered_2fa')->default(0)->comment('1=Yes 0=No');
            $table->string('google2fa_secret',100)->nullable();
            $table->string('google2fa_qr',150)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('password_updated_at')->useCurrent();
            $table->tinyInteger('password_max_expired')->default(90);
            $table->string('password');
            $table->rememberToken();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
            $table->index('email');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};