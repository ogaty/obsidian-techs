
## 1. Gemfileを生成してvendor/bundle以下にRailsをインストールする

まずはRailsプロジェクトを作成します。

Rails Tutorialや入門書では

```
$ gem install rails
$ rails new project-app
```

と書かれていますが、これではシステムのgemにインストールされてしまいます。システムのgemはできるだけクリーンに保ち、gemは`vendor/bundle`に入れて`bundle exec`で呼び出すようにするのが良いそう。

ですので、先にディレクトリを作成し、`vendor/bundle`にrailsをインストールします。

```
$ mkdir test-app
$ cd test-app
$ bundle init
Writing new Gemfile to /path/to/project_name/Gemfile
```

生成されたGemfileを下記のように編集します。（railsのコメントを外すだけ）

```
# frozen_string_literal: true
source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

gem "rails"
```

これで準備ができたので、下記のコマンドでRailsをインストールします。

`$ bundle install --path vendor/bundle`

この時に`--path vendor/bundle`を忘れずにつけること。  
このオプションを付けることによって、プロジェクトの`vendor/bundle`以下にgemが格納されます。（一度オプションをつけて`bundle install`したら、次回以降はオプションを付けなくてもvendor/bundle以下に格納されるようになります）

## 2. Railsプロジェクトを生成する

準備が整ったのでRailsプロジェクトを生成します。

`$ bundle exec rails new . -B -d mysql --skip-turbolinks --skip-test`

Rails Tutorialなどでは `$ rails new test-app` のようにプロジェクト名を指定していますが、ここを`.（ドット）`にすると現在のディレクトリにRailsプロジェクトが生成されます。

使用しているオプションは以下の通りです。

```
-d, --database=DATABASE
```

指定したデータベースに変更する（railsのデフォルトのDBはsqlite3）

```
--skip-turbolinks
```

turbolinksをオフにする　

```
--skip-test
```

railsのデフォルトのminitestというテストを使わない時に付ける。RSpecなどほかのテストフレームワークを利用したい時に使うと良い

```
ｰB, --skip-bundle
```

Railsプロジェクト作成時にbundle installを行わないようにする

ほかにも様々なオプションがあるのですが割愛します。コマンドがわからなくなった時や使えるオプションを調べたい時は `$ rails new -h` を実行してみましょう。ヘルプが表示され、使用できるオプションが確認できます。

Railsのインストール実行時にGemfileを上書きしていいか聞かれますが、yesにして続行します。

## 3. 必要なgemをインストール

Railsプロジェクトが生成できたら、Gemfileを編集して必要なgemをインストールしましょう。
- [[devise]]
