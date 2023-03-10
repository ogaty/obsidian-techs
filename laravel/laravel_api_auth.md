## ブラウザでログイン済みユーザーが使えるapiの実装
## 前提
api側で認証をさせるにはtoken方式とsession方式がある
前者はgetパラメータにapi_token=を付与、後者はクッキーにブラウザ側のlaravel_sessionを付与

sanctumはapi_tokenだった気がするし、oauth2もcookie使ってない
一方openid_connectはクッキー使ってた記憶

### 方法1
api用キーを用意しておく
https://zakkuri.life/laravel-api-auth/
ここで書いてあるような感じ
usersテーブルにapi_tokenカラムを追加
セッションガードにapiをtokenで追加
```php
    'api' => [
      'driver' => 'token',
      'provider' => 'users', // ここはプロジェクトに応じて変更する
     ],
```
api_tokenをgetパラメータに付与する

### 方法2
routes/web側にルートを定義、authミドルウェアを挟む
ブラウザ側のセッションクッキーlaravel_sessionを付与して送信

### 方法3
routes/api側にルートを定義、authミドルウェアを挟む
app/Http/Kernel.phpのapiミドルウェアグループに以下追記
```
            \App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
```

ブラウザ側のセッションクッキーlaravel_sessionを付与して送信

