# slim
Rails以外で使わない？
```slim
- if current_user.nil?
  li 新規登録
- else
  li ログイン
  

- @articles.each do |article|
  p = article.title
  p = article.body
```

