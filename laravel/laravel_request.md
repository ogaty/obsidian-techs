# Request

## リクエストクラスを取り出す
### controller
DIで取り出す場合、引数に
```
Request $request
```
を入れる

途中で必要になったら、
```
$request = request();
```
で

### view
viewで取り出すのなら
```
app('request')->input('id')
```

## 値を取り出す
現在は
```
$request->input('id')
$request->all()
$request->only([])
$request->except([])
```
みたい

## 値が入っていたら
```
$request->filled('id')
```

## 値が入っていなかったら
```
$request->missing('id')
```
