# migrate

## create factory
👇の書き方だとクラス名がまずくてseedと連携できなくなる
temp_tableFactory.phpみたいになるのよ
  
```
php artisan make:factory temp_table
```
👇こっちのほうがいい
  
```
php artisan make:factory PostFactory --model=Post
```

## create seeder
seederの引数はクラス名
  
```
php artisan make:seeder temp_table
```
上記の場合、temp_table.phpというファイル名で
  
```
class temp_table extends Seeder
```
となる。

## seeder基本
  
```
php artisan db:seed --class=temp_table --env=testing
```

## migrate
### 作る
```
php artisan make:migration create_admin_user_table
```

### やる
```
php artisan migrate
```

### 今のナシ
  
```
php artisan migrate:rollback --step=1
```

### 抹消
```
php artisan migrate:reset
```

