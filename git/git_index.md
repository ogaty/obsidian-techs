# Git

## 特定ユーザーのgist
```
colors user:ogaty
```

## reset周り
ワークツリー、staging、HEAD全部戻す
```
git reset --hard 
```

staging、HEAD戻す
```
git reset 
```

HEADのみ戻す
```
git reset --soft 
```

## diff周り
最新コミット
```
git diff HEAD^ resources/views/backend/post/index.blade.php 
```

ファイルのみ
```
git diff --name-only 
```

空白を無視
```
git diff -w 
```
stageとの差分
```
git diff --staged 
```

## checkout
```
git checkout -b ローカルブランチ名 origin/develop
```

## originを設定する
```
git remote add origin https://github.com/ogaty/chloe-based.git
```

```
git branch --set-upstream-to=origin/master master
```

## remoteを書き換える
```
git remote set-url 新url
```

## 特定の期間のログ
```
git log --since="2017-05-01 00:00:00" --until="2017-05-02 00:00:00"
```

## MERGE_HEAD取り消し
```
git reset --merge
```

## skip状態確認
```
git ls-files -v
```

## pullエラー
```
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> develop
```
該当するブランチがリモート側に無いってこと git checkout間違えてない？

初回はローカルにmasterすら無いので`git branch --set-upstream-to=origin/master master` が必要 その前に

```
git remote add origin ssh://git@git.jetbrains.space/ogatism/local-ogatismjp.git
git merge --allow-unrelated-histories origin/master
```
これも
