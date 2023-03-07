# バリデーション

## Requestクラスでやる
`php artisan make:request` で
authorizeをtrueにするのを忘れずに

```
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'filled',
            'email' => [
                'filled',
                'email',
                Rule::unique('admin_users')->ignore($this->id),
            ]
        ];
    }
    
    public function messages()
    {
    }
```
pubf messagesでメッセージカスタマイズもできる

## Controllerでやる
勝手に元のページへリダイレクトされる
```
    $request = request();
    $request->validate([
        'email' => 'filled'
    ], [
        'email.filled' => 'message'
    ]);
```

failを使うなら
```
use Illuminate\Support\Facades\Validator;

        $rules = [
            'name'=>'required',
            'email'=>'required',
            'password'=>'required'
        ];

        $messages = [
            'name.required'=>'名前は必須です。',
            'email.required'=>'emailは必須です。',
            'password.required'=>'passwordは必須です。',
        ];

        $validation = Validator::make($request->all(),$rules,$messages);

        if($validation->fails()){
            return redirect()->back()->withInput($request->all())->withErrors($validation->errors());
        }

```

## viewへの表示
### 一括
```
        @if ($errors->any())
            <div class="col-12 mb-4">
                <div class="card card-primary bg-danger">
                    <div class="card-body">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        @endif
```
### keyも取る
```
        @if ($errors->any())
            <div class="col-12 mb-4">
                <div class="card card-primary bg-danger">
                    <div class="card-body">
                        <ul>
                            @foreach ($errors->getmessages() as $key => $error)
                                <li>{{ $key . ':' . $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        @endif
```

## バリデーションエラー時のフォーム内容
Formファサード使っていれば入力項目は残っている

使わないのであればold('text')で取得可能

セッションにもold_inputとして入ってる

## 注意
複数validateの場合、最後にrequiredを入れないと動かない


