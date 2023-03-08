---
alias: assetのurlがhttpになる
---

AppServiceProviderに書くのがいいのかな

```
use Illuminate\Support\Facades\App; // 追加
use Illuminate\Support\Facades\URL; // 追加

public function boot() {
    if (App::environment('production','staging')) {
        URL::forceScheme('https');
    }
}
```