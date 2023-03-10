過去の歴史改変
コミットハッシュが大きく変わるのでリポジトリはそのまま使えなくなる
## コミットログのメールアドレスの抹消
```
git filter-branch --commit-filter '
	if [ "$GIT_AUTHOR_EMAIL" = "mymail@mymail.com" ];
	then
		GIT_AUTHOR_NAME="myuser";
		GIT_AUTHER_EMAIL="myuser@noreplys.github.com";
		git commit-tree "$@";
	else
		git commit-tree "$@";
	fi' HEAD
```


## でかいファイル、ライセンス的に良くないファイルをpushしたときの抹消
```
git filter-branch --tree-filter='rm -f test.png' HEAD
```