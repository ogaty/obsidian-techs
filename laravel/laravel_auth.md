# Auth

Laravelのバージョンによって色々変わってわけわからなくなってきた

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

## Laravel9
とりあえず最新版で`Auth::routes()`を書くとlaravel/uiを入れろと出る
で、`php artisan bootstrap ui`でLoginController生成
`npm run build`でtailwindのmanifestを生成



