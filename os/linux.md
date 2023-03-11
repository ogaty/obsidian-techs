# swapfile
```
sudo dd if=/dev/zero of=/swapfile bs=1M count=1024
sudo mkswap /swapfile
sudo chmod 0600 /swapfile
sudo swapon /swapfile
```

fstab
```
/swapfile  swap   swap    defaults   0 0
```


# journalctl
# 削除
## 200MBだけ
```
sudo journalctl --vacuum-size=200M
```

## 3日だけ
```
sudo journalctl --vacuum-time=1d
```

# 容量確認
```
sudo journalctl --disk-usage
```

# 容量設定
```
sudo vi /etc/systemd/journald.conf
SystemMaxUse=200M
sudo systemctl restart systemd-journald
```

# crontab
linuxは5桁、awsは6桁  
awsには年がある、曜日を?にする
```
#linx
0 12 1 * *

#aws
0 12 1 * ? *
```
