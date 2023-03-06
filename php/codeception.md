# codeception

Laravel5.1もこんな感じだったような  
5.3から大きく変わった

## install
```
composer require "codeception/codeception" --dev
php vendor/bin/codecept bootstrap
```

## cest(テストケース)の生成
```
php vendor/bin/codecept generate:cest acceptance Signin
```

## test
```
class FirstCest
{
    public function frontpageWorks(AcceptanceTester $I)
    {
        $I->amOnPage('/login');
        $I->fillField('username', 'davert');
        $I->fillField('password', 'qwerty');
        $I->click('LOGIN');
        $I->see('Welcome, Davert!');
    }
}
```

## setup
```
actor: AcceptanceTester
modules:
    enabled:
        - PhpBrowser:
            url: http://www.example.com/
```

## run
```
php vendor/bin/codecept run tests
```

