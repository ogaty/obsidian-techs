
```yaml
user:
  {{ .Vars.username }}:
    exists: true
    home: /home/{{ .Vars.username }}
port:
  tcp:20123:
    listening: true
package:
  git:
    installed: true
  unar:
    installed: true
  unzip:
    installed: true
  ansible:
    installed: true
  php7.4:
    installed: true
  php7.4-xml:
    installed: true
  php7.4-mbstring:
    installed: true
service:
  sshd:
    enabled: true
    running: true
file:
  /usr/local/bin/composer:
    exists: true
  /key/id_rsa.github:
    exists: true
  /key:
    exists: true
  /node/bin/node:
    exists: true
  /swiss/swetest2:
    exists: true
  /swapfile:
    exists: true
command:
  date:
    exit-status: 0
    stdout:
    - /JST/
  "aws --version":
    exit-status: 0

```

