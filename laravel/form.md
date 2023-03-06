# Form

formファサード使ったほうが良い
```
composer require laravelcollective/html
```

## 基本
```
{{ Form::open(['url' => '/admin_users/add', 'method' => 'post', 'id' => 'create_form']) }}
{{ Form::close() }}

// Formファサードなら不要
{{ csrf_token() }}
```

## text系
```
{{ Form::text('name', $user->name, ['class' => 'form-control', 'placeholder' => '名前']) }}
{{ Form::email('email', $user->email, ['class' => 'form-control', 'placeholder' => 'Email']) }}
{{ Form::password('password', ['class' => 'form-control', 'placeholder' => 'password']) }}
{{ Form::textarea('body', $news->body, ['id' => 'editor_hidden', 'style' => 'display:none;', 'class' => '', 'placeholder' => '本文']) }}
```

## select,radio,checkbox
```
{{ Form::select('category', config('select.news.category'), $news->category, ['class' => 'form-control']) }}
{{ Form::radio('flag', '1', $news->flag == 1, ['id' => 'flag1', 'class' => 'form-check-input']) }}
{{ Form::radio('flag', '2', $news->flag == 2, ['id' => 'flag2', 'class' => 'form-check-input']) }}
{{ Form::checkbox('draft', '1', $news->status == 1) }}
```

## file
```
{{ Form::file('image', ['id' => 'image']) }}
```
multitype設定を忘れずに  
$request->fileで取得  
[file](/file/)

## hidden
```
{{ Form::hidden('id', $id) }}
```

## button,submit
```
{{ Form::button('追加', ['class' => 'btn btn-primary', 'onfocus' => 'this.blur();']) }}
{{ Form::submit('送信', ['name' => 'update', 'class' => 'btn btn-primary', 'onfocus' => 'this.blur();']) }}
```

## formのerror
```
@if ($errors->any())
<ul>
    @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
    @endforeach
</ul>
@endif
```
