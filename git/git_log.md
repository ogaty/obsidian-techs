
| オプション  | 意味     |
|--------|--------|
|--graph| グラフを表示 |
|--reverse|ログを逆順（古い順）に表示する（--graphとは同時に指定できない）|
|--decorate=表示 |refs部分の表示方法を「short」「full」「auto」「no」のいずれかで指定する（※2）。「full」は接頭辞（refs/heads/、refs/tags/、refs/remotes/）付きで表示、「short」は接頭辞を付けずに表示（デフォルト）、「auto」は画面表示の際は表示、それ以外のときは非表示、「no」常に非表示になる|
|--no-decorate |「--decorate=no」相当の指定となる                                                                                                                                                    |
|--stat        |ログとともに、どのファイルが何カ所変更されたのかを表示する                                                                                                                                              |
|--name-only   |ログとともに、変更されたファイルの名前のみを表示する                                                                                                                                                 |
|--shortstat   |ログとともに、追加、修正、削除の個数のみを表示する                                                                                                                                                  |
|--name-status |ログとともに、変更されたファイルの変更情報（追加、修正、削除のいずれか）を表示する                                                                                                                                  |
|--patch       |差分の内容を表示する                                                                                                                                                                 |
|--abbrev-commit|コミットのハッシュ値を、特定できる範囲の省略形（デフォルトは先頭7バイト分）で表示する                                                                                                                                |
|--no-abbrev   |コミットのハッシュ値を全て表示する（40バイト）                                                                                                                                                   |
|--abbrev=バイト数 |コミットのハッシュ値を指定したバイト数分だけ表示する                                                                                                                                                 |
|--parents     |親コミット（変更元）のハッシュ値も一緒に表示する                                                                                                                                                   |
|--pretty      |表示フォーマットを「oneline」「short」「medium」（デフォルト）、「full」「fuller」で指定する。「--pretty=format:」で書式を指定可能（連載第388回）                                                                           |
|--date        |日付の書式（連載第388回）                                                                                                                                                             |
|--oneline     |各コミットを1行で簡潔に表示する（「--pretty=oneline --abbrev-commit」相当）                                                                                                                     |
