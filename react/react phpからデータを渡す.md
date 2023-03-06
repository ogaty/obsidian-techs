# データの受け渡し
windowオブジェクト経由でもいいんだけどdata経由が確かに良いのかも
```
const container = document.getElementById('app');
const props = JSON.parse(container.dataset.props);

<Template props={props} />
```
