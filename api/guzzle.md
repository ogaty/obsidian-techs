```php
public function postApi($data) { 
	$url = "https://external.api";      //API側（受取側）のURLを指定 
	$basic = "basic-id:basic-password"; //basic認証のIDとPASSWORD　※envに格納しましょう 
	$encodeBasic = base64_encode($basic);  //basic認証をエンコーディング 
	$config = ['base_uri' => 'https://www.this.com/'];  //送信元のURLを指定 
	$client = new Client($config); 
	$option = [ 
		'http_errors' => true,  //エラーを出力 
		'verify' => false,  //SSL認証を無視 
		'headers' => //ヘッダーにBASIC認証などを追加 
		[ 
			'Authorization' => 'Basic ' . $encodeBasic,  //エンコードしたbasic認証です。外部API側でデコードしてください 
			'Host' => "external.api",  //外部APIのホスト指定 
			'Content-Type' => "text/plain",  //コンテントタイプを指定　無くてもできました。 
		], 
		'form_params' =>  //application / x-www-form-urlencoded POSTリクエストを送信するために使用 
			[ 
				"username" => $data["name"],  //外部APIとカラム名が異なっていたのでここで修正。 
				"tel" => $data["telephone"],  //同上 
				"address" => $data["mail"],  //同上 
				"contents" => $data["content"], //同上 
		], 
	]; 
	$response = $client->request("POST", $url, $option);  //第１引数はPOST or GET、第２引数は受取側のAPI,第３引数はPOST送信データ 
}
```

