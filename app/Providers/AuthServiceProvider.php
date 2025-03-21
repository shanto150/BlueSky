<?php
namespace App\Providers;

use App\Models\Role\RolePermission;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
        $this->registerUserAccessToGates();
    }

    protected function registerUserAccessToGates()
    {
        try {
            foreach (RolePermission::pluck('feature_name') as $permission) {
                Gate::define($permission, function ($user) use ($permission) {
                    $data = $user->role->role_permissions()->where('feature_name', $permission)->count() > 0;

                    if ($data == false) {
                        exit();
                    } else {
                        return $data;
                    }
                });
            }
        } catch (\Exception $e) {

            info('registerUserAccessToGates: Database not found or not yet migrated. Ignoring user permissions while booting app.');
        }
    }
}
