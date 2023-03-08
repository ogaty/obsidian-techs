platform: linux/x86_64をつける

```
mysql:
    image: mysql:5.7
    platform: linux/x86_64
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: mydb
      MYSQL_USER: myuser
      MYSQL_PASSWORD: password
      TZ: 'Asia/Tokyo'
    volumes:
      - mydb:/var/lib/mysql
      - ./docker/mysql/conf:/etc/mysql/conf.d
      - ./docker/mysql/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d
    ports:
      - "23306:3306"
```