# ■ array
## js
### length
```
a.length;
```
### 最初
```
a[0];
a.shift();
```

### 最後
```
a.pop();
```

### in_array
```
a.includes('apple');
```

### array_key_exists
```
'key' in obj
```

## php
### length
```
count($a);
```
### 最初
```
$a[0];
array_shift($a);
```

### 最後
```
$a[count($a) - 1];
array_pop($a);
```

### in_array
```
in_array('apple', $a);
```

### array_key_exists
```
array_key_exists('key', $a);
```

# ■ string
## js
### length
```
str.length;
```

### match
```
if (/aaa/.test(str)) {

}
```

### replace
```
str.replace('aaa', 'ccc');
str.replaceAll('aaa', 'ccc');
```

## php
### length
```
mb_strlen($str);
```

### match
```
if (preg_match('/aaa/', $str)) {

}
```

### replace
```
preg_replace('/aaa/', 'ccc', $str, 1);
preg_replace('/aaa/', 'ccc', $str);
```

## C#
### length
```
str.Length
```

### match
```
if (str.Contains("aaa")) {
}
```

### replace
```
str.Replace('aaa', 'ccc')
str.Replace('aaa', 'ccc', 1)
```

# ■ for
## JavaScript
```
for (i in a) {
console.log(a[i]);
}

a.forEach((x) => {console.log(x)});

a.forEach((x, index) => {console.log(x)});
```

## Python
```
for name in arr:
    print(name)
    
for index, name in enumerate(arr):
    print(index)
```

## ruby
```
for fruit in fruits do  
  p fruit 
end

for key, value in score do
  p key, value
end

strs.each do |str|
  puts str
end

a.each_with_index do |x, i|
  puts "#{i}: #{x}"
end
```

## php
```
for ($i = 0; $i < 10; $i++) {

}

foreach ($obj as $key => $value) {

}
```
