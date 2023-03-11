`.travis.yml`に配置
```
language: go
go:
- 1.4.x

before_script:

script:
- go test -v ./...
```


