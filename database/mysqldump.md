```
mysqldump -uadmin -p -hprod-db.cykansmqmuxw.ap-northeast-1.rds.amazonaws.com  --set-gtid-purged=OFF --skip-column-statistics community > dump.sql
```

--no-tablespaces

```
mysqldump -umyuser -p --no-tablespaces mydb > hama.sql
```