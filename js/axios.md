# axios

```js
axios.get('https://aaa.bbb')
    .then((res) => {console.log(res.data)});
```

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
