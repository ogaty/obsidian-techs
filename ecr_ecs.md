# ECR

## docker buildの手順

```
docker build -f Dockerfile.admin -t xxxxx_admin .​

aws ecr get-login-password --region ap-northeast-1 --profile myprofile | docker login -u AWS --password-stdin https://xxxxxxxxxxxx.dkr.ecr.ap-northeast-1.amazonaws.com
​
docker tag xxxxx_admin xxxxxxxxxxxx.dkr.ecr.ap-northeast-1.amazonaws.com/dev-admin:19
```

# ECS

## ポートマッピング空でいい？

コンテナのポートを入れる