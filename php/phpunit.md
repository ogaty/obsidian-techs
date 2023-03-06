# phpunit

```xml
<phpunit colors="true"
         verbose="true"
         bootstrap="vendor/autoload.php">
    <testsuites>
        <testsuite name="Calculator">
            <directory>test/calculator</directory>
        </testsuite>
    </testsuites>
</phpunit>
```

# status
```php
    $response = $this->get('/login');
    $response->assertStatus(200);
```

# login
```php
    $response = $this->post(route('login'), 
    [
        'email' => 'test@example.com', 
        'password' => 'Test123'
    ]);
    $response->assertAuthenticated();
```

# tag,text
```php
    $response->assertSee('<h1>ページタイトル</h1>', false);
    $response->assertSeeText('ようこそ');
    
```


