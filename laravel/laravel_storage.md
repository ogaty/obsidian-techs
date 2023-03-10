[[laravel_s3]]

Storage::putもStorage::getもstorage/appがルートになる
```php
Storage::put('/tmp/aaa.txt', 'aaaa');
```

これは`storage/app/tmp/`に書かれる
