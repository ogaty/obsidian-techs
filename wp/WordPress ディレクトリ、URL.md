# ディレクトリ、URL

```
// これは親テーマ
<?php echo get_template_directory_uri() ?>

// こっちが子テーマ
<?php echo get_stylesheet_directory_uri(); ?>



plugin_dir_path( __FILE__ );

plugin_dir_url( __FILE__ );
```

