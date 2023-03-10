[[laravel_storage]]

```
    public static function getS3Client()
    {
        if (env('AWS_SECRET_ACCESS_KEY')) {
            // ローカルのcredentialを使用
            $s3client = new S3Client([
                'credentials' => [
                    'key' => env('AWS_ACCESS_KEY_ID'),
                    'secret' => env('AWS_SECRET_ACCESS_KEY'),
                ],
                'region' => 'ap-northeast-1',
                'version' => 'latest',
            ]);
        } else {
            // roleを使用
            $s3client = new S3Client([
                'region' => 'ap-northeast-1',
                'version' => 'latest',
            ]);
        }

        return $s3client;
    }
	$s3client = AwsUtil::getS3Client();

        $extension = $image->extension();
        $key = Str::random(6) . '.' . $extension;

        $result = $s3client->putObject([
            'Bucket' => env('AWS_BUCKET'),
            'Key' => 'news/' . $key,
            'SourceFile' => $image->path(),
            'ContentType' => $image->getMimeType(),
            'ACL' => 'public-read',
        ]);


        $url = env('AWS_CLOUDFRONT_URL') . '/news/' . $key;
```