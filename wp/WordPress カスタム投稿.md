## カスタム投稿追加

```php
register_post_type(
    'sightseeing',
    array(
        'label'         => '観光スポット',
        'menu_position' => 5,
        'public'        => true,
        'supports'      => array( 'title', 'thumbnail', 'revisions' ),
        'has_archive'   => true,
        'rewrite'       => array(
            'slug'       => 'sightseeing',
            'with_front' => false,
        ),
        'show_in_rest'  => true,
        'rest_base'     => 'sightseeing',
    )
);
```

## カスタムタクソノミー追加

```php
register_taxonomy(
    'whats_on',
    array(
        'news',
    ),
    array(
        'label'        => __( 'Whats On' ),
        'hierarchical' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
    )
);
```

## オプションメニュー

```php
add_options_page(
  'asanaconnect',       //ページタイトル
  'asanaconnect',       //設定メニューに表示されるメニュータイトル
  'manage_options',     //権限
  'asanaconnect',       //設定ページのURL。options-general.php?page=sample_setup_page
  'asanaconnect_html'   //設定ページのHTMLをはき出す関数の定義
  );
```