# プラグイン周り

## 基本テンプレ
```php
/*
Plugin Name: 
Description: 
Version: 1.0
Author: Yuji Ogata
Author URI: https://ogatism.jp
License: MIT
*/
```

## 設定メニュー追加
```php
if ( is_admin() ){ // admin actions
  add_action( 'admin_menu', 'register_mysettings' );
}

function register_mysettings() { // whitelist options
  add_options_page(
  'asanaconnect',       //ページタイトル
  'asanaconnect',       //設定メニューに表示されるメニュータイトル
  'manage_options',     //権限
  'asanaconnect',       //設定ページのURL。options-general.php?page=sample_setup_page
  'asanaconnect_html'   //設定ページのHTMLをはき出す関数の定義
  );
}
```

## 設定フォーム
https://wpdocs.osdn.jp/%E8%A8%AD%E5%AE%9A%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AE%E4%BD%9C%E6%88%90
```php
settings_fields( 'myoption-group' );
do_settings_sections( 'myoption-group' );


<form method="post" action="options.php">

<?php submit_button(); ?>
</form>
```

