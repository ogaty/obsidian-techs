# jmeter
## 起動
- mac: 拡張子なしのやつから
- win: batファイルから

## web
テンプレートからSimple HTTP Requestを

あとはHomePageのパスやレスポンステキストなどを色々いじる

- Number of Threads: 同時実行回数
- duration: 実行時間
- startup delay: 開始までの時間

## cli
```console
bin/jmeter -n -t test.jmx -l test.jtl
```

guiからjmxを開いてView Results Treeを開いてFilenameからjtlを選択
