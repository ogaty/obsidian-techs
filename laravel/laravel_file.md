# File

## request
`$request->file('name')`でオブジェクト取得  
ほとんどprivateメンバなので注意

### オリジナルファイル名
```
$file->getClientOriginalName
```
### 拡張子
```
$file->extension() // mimetype次第
$file->getClientOriginalExtension() // 単純な拡張子
```

## Storage
### Storage::get()
バイナリ情報が入ってくる

## save
```
$files = $request->file('file');

foreach($files as $file){
	$file_name = $file->getClientOriginalName();
	$file->storeAS('',$file_name);
}
```