# usort

## 戻り値

戻り値じゃなくて参照型
bool、`$a = usort($a)`じゃない

## 左がでかい ($x > $y)

昇順になる12345

時刻の場合old→new

## 右がでかい ($x < $y)

降順になる54321

時刻の場合new→old

## null

```
if ($x == '') {
  return true;
}
if ($y == '') {
  return false;
}
```

この場合は""が末尾に

```
if ($x == '') {
  return false;
}
if ($y == '') {
  return true;
}
```

この場合は""が先頭に

全ての値で1,-1を返すとバグる
php8からはboolをreturnしちゃだめ
```php
<?php

$arr = [1,2,3,4,5];

usort($arr, function($a, $b) {
    if ($a == $b) {
        return 0;
    }
    return $a < $b ? 1: -1;
});
var_dump($arr); // 5,4,3,2,1

```

日付順
```php
<?php

$arr = ['2023-04-01','2021-10-22','1999-09-15','2006-02-03','2011-06-05'];

usort($arr, function($a, $b) {
    if ($a == $b) {
        return 0;
    }
    return $a < $b ? 1: -1;
});
var_dump($arr);
//
//array(5) {
//  [0]=>
//  string(10) "2023-04-01"
//  [1]=>
//  string(10) "2021-10-22"
//  [2]=>
//  string(10) "2011-06-05"
//  [3]=>
//  string(10) "2006-02-03"
//  [4]=>
//  string(10) "1999-09-15"
//}
```