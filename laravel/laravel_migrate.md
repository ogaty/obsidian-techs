# migrate

## create factory
ðã®æ¸ãæ¹ã ã¨ã¯ã©ã¹åãã¾ããã¦seedã¨é£æºã§ããªããªã
temp_tableFactory.phpã¿ããã«ãªãã®ã
  
```
php artisan make:factory temp_table
```
ðãã£ã¡ã®ã»ãããã
  
```
php artisan make:factory PostFactory --model=Post
```

## create seeder
seederã®å¼æ°ã¯ã¯ã©ã¹å
  
```
php artisan make:seeder temp_table
```
ä¸è¨ã®å ´åãtemp_table.phpã¨ãããã¡ã¤ã«åã§
  
```
class temp_table extends Seeder
```
ã¨ãªãã

## seederåºæ¬
  
```
php artisan db:seed --class=temp_table --env=testing
```

## migrate
### ä½ã
```
php artisan make:migration create_admin_user_table
```

### ãã
```
php artisan migrate
```

### ä»ã®ãã·
  
```
php artisan migrate:rollback --step=1
```

### æ¹æ¶
```
php artisan migrate:reset
```

