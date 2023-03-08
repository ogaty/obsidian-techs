Laravelのroutes.phpに

```
Route::get('/sample', 'SampleController@index');
```

と書いてもなぜか読めない。

```
App\Http\Controllers\SampleController
```

なら読めるのに。

実はこれ、Laravel8になったことによる影響っぽいです。

```
app/Providers/RouteServiceProvider.php
```

というところに`$namespace`というものがあるのですが、こいつがコメントアウトされている。

こいつかー！

これを

```
protected $namespace = 'App\Http\Controllers';
```

と直してあげればちゃんとnamespace入れなくても動くようになりました。