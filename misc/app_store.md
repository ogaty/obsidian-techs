# ストア申請

## windows

- x86のmsixが作れない
    - プロジェクトごと作り直した
- 証明書ツール意味不明
    - 結局使わないでいけた
- 税金関連
    - ややこしい
    - TINは未入力でいけた
- mixed reality
    - こんなのいらない
### バージョンアップ
- パッケージからmsixbundleを入れる
- Store登録情報からバージョンアップ文言入れる


## Mac

- 証明書3つとプロファイルが必要
    - Apple Distribution
    - Apple Development
    - 3rd Party Mac Developer
- 証明書をキーチェーンに入れないといけない
- アーカイブ作れたらあとはXcodeに任せるべし
    - メニューのview→organizer
    - AppStore ConnectからDistribute
- Entitlementに関しては証明書にくっつけるのでVS側
- containerというアプリ固有領域がある、そこに仮想Dobumentフォルダとかファイルが展開される
- Entitlement.plistにcom.apple.security.files.user-selected.read-writeが無いとリリースビルドで落ちる(デバッグビルドだと通る)


