# メニュー追加
## 大項目
```
    add_menu_page(
            '記事下設定',
            '記事下設定',
            'manage_options',
            'freelance_custom_menu_page',
            'freelance_article_banner',
            'dashicons-admin-generic',
            75
    );
```

## 設定配下

```
add_options_page(
  'asanaconnect',       //ページタイトル
  'asanaconnect',       //設定メニューに表示されるメニュータイトル
  'manage_options',     //権限
  'asanaconnect',       //設定ページのURL。options-general.php?page=sample_setup_page
  'asanaconnect_html'   //設定ページのHTMLをはき出す関数の定義
  );
```


