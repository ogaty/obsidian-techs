# axios

## Get

```js
const axios = require('axios'); 

(async () => { 
    try { 
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY') 
        console.log(response.data.url); 
        console.log(response.data.explanation); 
    } catch (error) { 
        console.log(error.response.body); 
    } 
})();
```

## post

```js
axios.post( process.env.API_URL + 'api/register_confirm',
      {"token": this.$route.query.token}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + Cookie.get('token')
        }
    }).then(response1 => {
      if (response1.data.error) {
        this.formSend = "不正なトークンです。";
      } else {
        Cookie.set('user', JSON.stringify(response1.data.user), { expires: 1 / 24 * 6 });
        Cookie.set('token', response1.data.token, { expires: 1 / 24 * 6 });

        this.complete = true;
      }
    });
```