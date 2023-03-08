# gitignore_global
~/.gitignore_global
```
*~
.DS_Store
.idea
```


# .gitignoreを後から設定し、git管理から除外する

## **1. git管理から除外したいフォルダ・ファイルを記入する**

```
vendor/*
```

## **2. gitignoreをコミット**

```
$ git add .gitignore
```

```
$ git commit -m ".gitignore作成"
```

## **3. 削除したいフォルダ・ファイルをリポジトリから削除する**

```
$ git rm --cached -r 削除したいディレクトリ
```

```
$ git rm --cached ファイル名
```

```
$ git add .
```

```
$ git commit -m "ignore"
```