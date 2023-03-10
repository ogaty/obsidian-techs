## 基本
```bash
git stash push stash1

# 削除
git stash pop 0

# 削除しない
git stash apply 0
```


## 一つのファイルだけ
```bash
git stash -p ファイル名

git checkout stash@{0} aaa.txt
```


