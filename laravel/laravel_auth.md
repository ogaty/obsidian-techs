# Auth

Laravelのバージョンによって色々変わってわけわからなくなってきた
色々ライブラリはあるけど、illuminate/authを使っているのはすべて同じ、後はスキャフォールドと思って良い
つまり何も入れなくても認証できる

# Laravel/ui
古臭いとは書かれているけど、別に中身を見る限りよくある感じのパッケージ。
```
composer require laravel/ui
php artisan ui bootstrap

# 作られる
ConfirmPasswordController.php
ForgotPasswordController.php
LoginController.php
RegisterController.php
ResetPasswordController.php
VerificationController.php
```

ログインは`$this->guard()->attempt`で行う。でもguradの引数がないからデフォルトガードしか動かないね

## Auth::routesの場所
laravel/uiに分離された
AuthじゃなくてFacadeにある
`Illuminate/Support/Facades/Auth.php`
でここから
`vendor/laravel/ui/src/AuthRouteMethods.php`
が呼ばれる
つまり、login、logout、register、reset、confirm、verifyなどなどのルートが自動生成される

## LoginControllerの場所
vendor/laravel/ui/stubs/Auth/に入っている
これがApp\Http\Controllers\Authに配置される

LoginControllerに入っている
```php
use AuthenticatesUsers;
```
これがlaravel/ui/auth-backend/AuthenticatesUsersというtraitと組み合わさりログイン画面へ遷移

Auth本体がuiで生成されるわけじゃないのでlaravel/ui無くてもログインは可能
attemptとかsession管理とか見てもコントローラーとrouteは使いまわし、viewは独自で書くほうが良さそう

## Laravel7/8
Laravel7/8は`php artisan ui bootstrap`
```console
php artisan ui bootstrap
php artisan ui vue
php artisan ui react
```

## Laravel9
とりあえず最新版で`Auth::routes()`を書くとlaravel/uiを入れろと出る
で、`php artisan ui bootstrap`でLoginController生成
`npm run build`でtailwindのmanifestを生成


# Laravel/breeze
uiの後継的パッケージ。Loginは`Auth::attempt`で行う。こっちはguardが無い。
```
composer require laravel/breeze
php artisan breeze:install

# 作られる
AuthenticatedSessionController.php
ConfirmablePasswordController.php
EmailVerificationNotificationController.php
EmailVerificationPromptController.php
NewPasswordController.php
PasswordResetLinkController.php
RegisteredUserController.php
VerifyEmailController.php
```

routesはauth.phpが用意されるので`Auth::routes`の必要も無い。書いてしまうとlaravel/ui入れろと言われてしまう。

# Laravel/sanctum
spaとかを想定して作られたパッケージ。


# Laravel/fortify
