# luxon

https://moment.github.io/luxon/#/install
```js
<script src="https://cdn.jsdelivr.net/npm/luxon@3.0.4/build/global/luxon.min.js"></script>
```
## 初期登録
```js
var DateTime = luxon.DateTime;
```
後はnew DateTimeで
```js
d.year.toFormat('yyyy年MM月dd日');

d.plus({day: 1})
d.minus({day: 1})

d.set({weekday: 5}) // friday
xxx.weekdayLong // 日本語で金曜日
xxx.setLocale('en').weekdayLong // Friday
```
これいいね
