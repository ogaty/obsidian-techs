# ajax
```
$.ajax({
      url: '/api/uploads/upload',
      type: 'POST',
      headers: {'X-Token': '123456'},
      data: {'title': 'abcdef'}
}).done((data) => {

}).fail((data) => {

}).always((data) => {

});
```

## getJson
```
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
      tags: "mount fuji", //富士山を指定
      tagmode: "any",
      format: "json"
    },
    function(data) {
      $.each(data.items, function(i,item){
        $("<img/>").attr("src", item.media.m).appendTo("#images");
        if ( i == 2 ) return false;
      });
    });
```

