<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Models\Password_history;
use PragmaRX\Google2FA\Google2FA;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\BaseController;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password as Pass;

class AuthController extends BaseController {

    // Login

    public function login( Request $request ) {

        // dd( $request->all() );

        $request->validate( [ 'email' => 'required|email', 'password' => 'required|min:8' ] );

        try {

            // $credentials = request( [ 'email', 'password' ] );
            // $token =  auth()->attempt( $credentials );

            // $success = $this->respondWithToken( $token );
            // return $this->SuccessResponse( $success, 'Authorized User Login.' );

            $credentials = request( [ 'email', 'password' ] );
            $UserExist = User::where( 'email', $request->email )->get();
            $token =  auth()->attempt( $credentials );

            if ( $UserExist->count() == 0 ) {
                return $this->ErrorResponse( 'User not found !' );
            } else if ( $UserExist->value( 'is_active' ) == 0 ) {
                return $this->ErrorResponse( 'User not active !' );
            } else if ( $UserExist->value( 'login_attamp' ) >= 3 ) {
                return $this->ErrorResponse( 'Locked Account. Use forget Password.' );
            } else if ( !$token ) {

                DB::table( 'login_histories' )->insert( [
                    [
                        'user_id' => $UserExist->value( 'id' ),
                        'ip' => $request->IPinfo[ 'IPv4' ],
                        'contry_code' => $request->IPinfo[ 'country_code' ],
                        'city' => $request->IPinfo[ 'city' ],
                        'login_attamp' => 'Failed',
                        'device_type' => $request->IPinfo[ 'devicetype' ],
                        'os' => $request->IPinfo[ 'os' ],
                    ],
                ] );

                $la = User::where( 'email', $request->email )->first();
                $la->login_attamp = $la->login_attamp+1;
                $la->save();

                if ( $la->login_attamp == 3 ) {
                    return $this->ErrorResponse( 'Locked Account. Use forget Password.', [ 'RA'=>$la->login_attamp ] );
                } else {
                    return $this->ErrorResponse( 'Wrong Password !', [ 'RA'=>$la->login_attamp ] );
                }
            } else {

                $toDate = Carbon::parse( $UserExist->value( 'password_updated_at' ) )->addDays( $UserExist->value( 'password_max_expired' ) );
                $result = now()->lt( $toDate );

                if ( $result ) {

                    // check maximum attapms
                    if ( $UserExist->value( 'login_attamp' ) >= 0 && $UserExist->value( 'login_attamp' )<4 ) {

                        DB::table( 'login_histories' )->insert( [
                            [
                                'user_id' => $UserExist->value( 'id' ),
                                'ip' => $request->IPinfo[ 'IPv4' ],
                                'contry_code' => $request->IPinfo[ 'country_code' ],
                                'city' => $request->IPinfo[ 'city' ],
                                'login_attamp' => 'Success',
                                'device_type' => $request->IPinfo[ 'devicetype' ],
                                'os' => $request->IPinfo[ 'os' ],
                            ],
                        ] );

                        $laa = User::where( 'email', $request->email )->first();
                        $laa->login_attamp = 0;
                        $laa->save();

                        DB::table( 'login_histories' )->insert( [
                            [
                                'user_id' => $UserExist->value( 'id' ),
                                'ip' => $request->IPinfo[ 'IPv4' ],
                                'contry_code' => $request->IPinfo[ 'country_code' ],
                                'city' => $request->IPinfo[ 'city' ],
                                'login_attamp' => 'Success',
                                'device_type' => $request->IPinfo[ 'devicetype' ],
                                'os' => $request->IPinfo[ 'os' ],
                            ],
                        ] );

                        $success = $this->respondWithToken( $token );
                        return $this->SuccessResponse( $success, 'Authorized User Login.' );
                    }

                    // end check maximum attapms
                } else {
                    $laas = User::where( 'email', $request->email )->first();
                    $laas->login_attamp = 0;
                    $laas->save();
                    $success = $this->respondWithToken( $token );
                    return $this->SuccessResponse( $success, 'Your password must be change.' );
                }

            }

        } catch ( Exception $e ) {
            return $this->ErrorResponse( $e->getMessage() );

        }
    }


    // Register

    public function register( Request $request ) {

        $request->validate( [
            'email' => 'required|unique:users|max:35',
            'name' => 'required|max:35',
            'password' => 'required|min:4',
            // 'password' => [ 'required', Password::min( 8 )->mixedCase()->numbers()->symbols()->uncompromised() ],
        ] );

        try {

            $google2fa = app( Google2FA::class );

            $rSecretkey = $google2fa->generateSecretKey();

            $g2faUrl = $google2fa->getQRCodeUrl(
                'BlueSky',
                $request->email,
                $rSecretkey
            );

            $user = User::create( [
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make( $request->password ),
                'google2fa_secret' => $rSecretkey,
                'google2fa_qr' => $g2faUrl,
            ] );

            $token = auth()->login( $user );
            return $this->respondWithToken( $token );
        } catch ( Exception $e ) {
            return response()->json( [ 'error' => $e->getMessage() ], 401 );
        }
    }

    // me

    public function me() {
        $user = User::get();
        return response()->json( $user );
    }

    // Logout

    public function logout( Request $request ) {
        // dd( $request->all() );
        auth()->logout();
        $success = [];
        return $this->SuccessResponse( $success, 'Successfully logged out.' );
    }

    // Token Refresh

    public function refresh() {
        $TTLTIME = Auth::factory()->getTTL() * 60;
        $tokenJson[ 'access_token' ] = auth()->refresh();
        $tokenJson[ 'expires_in_sec' ] = $TTLTIME;
        return $this->SuccessResponse( $tokenJson, 'Token Refreshed.' );
    }

    // loginDetails
    protected function respondWithToken( $token ) {
        $TTLTIME = Auth::factory()->getTTL() * 60;

        $userTable = auth()->user();
        $userTable[ 'access_token' ] = $token;
        $userTable[ 'token_type' ] = 'bearer';
        $userTable[ 'expires_in_sec' ] = $TTLTIME;

        return $userTable;
    }

    // Sent Mail for reset password

    public function sendResetLinkEmail( Request $request ) {

        $request->validate( [ 'email' => 'required|email' ] );
        Artisan::call( 'auth:clear-resets' );

        try {
            $status = Password::sendResetLink( $request->only( 'email' ) );
            return $status === Password::RESET_LINK_SENT ? $this->SuccessResponse( '', __( $status ) ) :
            $this->ErrorResponse( __( $status ) );
        } catch ( Exception $e ) {
            return $this->ErrorResponse( $e->getMessage() );
        }

    }

    // Reset Password

    public function resetPassword( Request $request ) {

        // dd( $request->all() );

        $request->validate( [
            'token' => 'required',
            'email' => 'required | email',
            'password' => [ 'required', Pass::min( 8 )->mixedCase()->numbers()->symbols() ],
            'password_confirmation' => 'required|same:password' ] );

            $Passwords = DB::table( 'users as u' )
            ->join( 'password_histories as p', 'u.id', '=', 'p.user_id' )
            ->where( 'u.email', $request->email )
            ->orderByDesc( 'p.created_at' )
            ->limit( 3 )
            ->get( 'p.password' );

            foreach ( $Passwords as $pass ) {
                if ( Hash::check( $request->password, $pass->password ) ) {
                    return $this->ErrorResponse( 'Matched with last 3 used password, choose diffrent.' );
                }
            }

            try {

                $status = Password::reset(
                    $request->only( 'email', 'password', 'password_confirmation', 'token' ),

                    function ( User $user, string $password ) {
                        $user->forceFill( [ 'password' => bcrypt( $password ), 'remember_token' => Str::random( 20 ), 'login_attamp' => 0, 'password_updated_at' => now(), 'password_max_expired' => 90 ] )->save();
                    }
                );

                return $status === Password::PASSWORD_RESET ? $this->SuccessResponse( '', __( $status ) ) : $this->ErrorResponse( __( $status ) );
            } catch ( Exception $e ) {
                return $this->ErrorResponse( $e->getMessage() );
            }

        }

        //OTP register

        public function registerOTP( Request $request ) {

            Validator::make( $request->all(), [
                'otp' => 'required',
            ] )->validate();

            try {
                $google2fa = app( Google2FA::class );
                $otp = $request->input( 'otp' );
                $UserExist = User::where( 'email', auth()->user()->email )->first();
                $valid = $google2fa->verifyKey( $UserExist->google2fa_secret, $otp );

                if ( $valid ) {
                    $UserExist->registered_2fa = 1;
                    $UserExist->save();

                    $success = [ 'require_2fa' => $UserExist->require_2fa, 'registered_2fa' => 1 ];
                    return $this->SuccessResponse( $success, 'OTP Authrized.' );
                } else {
                    return $this->ErrorResponse( 'Unauthorized OTP' );
                }

            } catch ( Exception $e ) {
                return $this->ErrorResponse( $e->getMessage() );
            }
        }

        //OTP register

        public function ForcePassReset( Request $request ) {

            $request->validate( [
                'old_password' => 'required|string|current_password',
                // 'password' => [ 'required', Pass::min( 8 )->mixedCase()->numbers()->symbols()->uncompromised() ],
                'password' => [ 'required', Pass::min( 8 )->mixedCase()->numbers()->symbols() ],
                'password_confirmation' => 'required|same:password',
                'eDays' => 'required|integer|between:1,90',
            ], [
                'old_password.required' => 'Enter Your Current Password.',
                'old_password.current_password' => 'Current Password incorrect.',
            ] );

            if ( strcmp( $request->old_password, $request->password ) == 0 ) {
                return $this->ErrorResponse( 'New Password cannot be same as your current password.' );
            }

            $Passwords = Password_history::where( 'user_id', Auth::user()->id )->latest()->take( 3 )->get( 'password' );

            foreach ( $Passwords as $pass ) {
                if ( Hash::check( $request->password, $pass->password ) ) {
                    return $this->ErrorResponse( 'Matched with last 3 used password, choose diffrent.' );
                }
            }

            $UserExist = User::where( 'email', Auth::user()->email )->first();
            $UserExist->password = $request->password;
            $UserExist->password_updated_at = now();
            $UserExist->password_max_expired = $request->eDays;
            $UserExist->login_attamp = 0;
            $UserExist->save();
            $success = [];
            return $this->SuccessResponse( $success, 'Password changed successfully.' );

        }

        public function xml( Request $request ) {

            $url = 'https://apac.universal-api.pp.travelport.com/B2BGateway/connect/uAPI/AirService';
            $xmlPayload = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
                            <LowFareSearchReq xmlns="http://www.travelport.com/schema/air_v52_0" TraceId="c8f38268-3b70-4141-869d-010611bc23e5" TargetBranch="P7186658" SolutionResult="true" ReturnUpsellFare="true">
                            <BillingPointOfSaleInfo xmlns="http://www.travelport.com/schema/common_v52_0" OriginApplication="UAPI"/>
                            <SearchAirLeg>
                            <SearchOrigin>
                            <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="DAC" PreferCity="true"/>
                            </SearchOrigin>
                            <SearchDestination>
                            <CityOrAirport xmlns="http://www.travelport.com/schema/common_v52_0" Code="DXB" PreferCity="true"/>
                            </SearchDestination>
                            <SearchDepTime PreferredTime="2024-12-20"/>
                            </SearchAirLeg>

                            <AirSearchModifiers>
                            <PreferredProviders>
                            <Provider xmlns="http://www.travelport.com/schema/common_v52_0" Code="1G"/>
                            </PreferredProviders>
                            <PreferredCabins>
                            <CabinClass xmlns="http://www.travelport.com/schema/common_v52_0" Type="Economy"/>
                            </PreferredCabins>
                            </AirSearchModifiers>
                            <SearchPassenger xmlns="http://www.travelport.com/schema/common_v52_0" Code="ADT" BookingTravelerRef="ADT_0"/>
                            <AirPricingModifiers FaresIndicator="PublicAndPrivateFares"/>
                            </LowFareSearchReq>
                            </s:Body>
                            </s:Envelope>';
            $username =env('API_USERNAME');
            $password =env('API_PASSWORD');

            $ch = curl_init();

            // Set cURL options
            curl_setopt( $ch, CURLOPT_URL, $url );
            curl_setopt( $ch, CURLOPT_POST, true );
            curl_setopt( $ch, CURLOPT_POSTFIELDS, $xmlPayload );
            curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
            curl_setopt( $ch, CURLOPT_HTTPHEADER, [
                'Content-Type: text/xml;charset=UTF-8',
            ] );
            curl_setopt( $ch, CURLOPT_USERPWD, "$username:$password" );

            // Execute and fetch the response
            $response = curl_exec( $ch );

            // Check for errors
            if ( curl_errno( $ch ) ) {
                $error = curl_error( $ch );
                curl_close( $ch );
                return response()->json( [ 'error' => $error ] );
            }

            curl_close( $ch );

            // Return the response

            dd($response);
            return $response;
        }

    }
