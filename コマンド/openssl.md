### **サーバー確認**

```
openssl s_client -connect test.ogatism.com:20443
```

### **ファイル確認**

```
openssl x509 -text -noout -in file.crt
openssl rsa -text -noout -in file.key
openssl req -text -noout -in file.csr
```

## **Docker httpdの修正**

コメント外す

```
LoadModule ssl_module lib64/httpd/modules/mod_ssl.so
LoadModule socache_shmcb_module lib64/httpd/modules/mod_socache_shmcb.so
Include /etc/httpd/conf/extra/httpd-ssl.conf
```

## Docker wgetでssl証明書エラー

`wget --no-check-certificate
`
で