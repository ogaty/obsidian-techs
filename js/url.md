# url関連クラス

```
var x = new URL(location.href);

//path 置換
x.pathname = '/aaa';

// hash置換
x.hash = 'user';

// query置換
x.search = 'aaa=bbb';

// query追加
x.searchParams.append('a', 'b');
```

```
var y = new URLSearchParams(location.search.substring(1));
y.get('aaa');
var z = new URLSearchParams([['a', 1], ['b', 2]]);
x.search = z;
```
