# phpunit


## ファイル名

Example2Test.phpはOK 
ExampleTest2.phpはNG
phpunit.xmlにsuffitというのがあるからそれに従って

## 関数名
testが頭についていれば良い、@test入れれば確か大丈夫(docCommentで囲むこと)
極端な話こんなのでもいい
```php
    public function testログインできること() {
    }
```

個人的にはいちいちDBを消して入れてはしないでシナリオテストにしたほうが好き
setUpBeforeClassとtearDownAfterClassね

# xml
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


以下は[[laravel_index|Laravel]]用testComponentの拡張
laravel側へ別ページを作る
## status

```php
    $response = $this->get('/login');
    $response->assertStatus(200);
```

## login

```php
    $response = $this->post(route('login'), 
    [
        'email' => 'test@example.com', 
        'password' => 'Test123'
    ]);
    $response->assertAuthenticated();
```

## tag,text

```php
// 第2引数はエスケープの有無
    $response->assertSee('<h1>ページタイトル</h1>', false);
    $response->assertSeeText('ようこそ');
    
```


## file
UploadedFile::fakeってのでできる


[[codeception]]