# select

selectedを書いちゃいけない、valueで済ませる  
onChangeもoptionじゃなくてselect側に書く
```
<select value="0" onChange={handleChange}>
    <option defaultValue="0">
</select>
```

```
{options.map(option => {
    <option key={option.value} value={option.value}>
        {option.text}
    </option>
})}
```
