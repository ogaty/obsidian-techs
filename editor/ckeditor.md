```html
<script src="https://cdn.ckeditor.com/ckeditor5/36.0.1/classic/ckeditor.js"></script>
```

```html
<!DOCTYPE html>
<html>
        <head>
                <meta charset="utf-8">
                <title>CKEditor</title>
                <script src="https://cdn.ckeditor.com/ckeditor5/36.0.1/classic/ckeditor.js"></script>
        </head>
        <body>
                <div id="editor">This is some sample content.</div>
                <script>
                        ClassicEditor
                                .create( document.querySelector( '#editor' ) )
                                .then( editor => {
                                        console.log( editor );
                                } )
                                .catch( error => {
                                        console.error( error );
                                } );
                </script>
        </body>
</html>
```


## s3
そのうち詳しく見る
https://blazarblogs.wordpress.com/2019/04/27/s3_video_upoload-ckeditor-plugin-to-upload-videos-to-s3/
