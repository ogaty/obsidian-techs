# 関数呼び出し(classコンポーネント)

## 子供から親を呼ぶ
単純にpropsにコールバック変数を渡してあげれば良い

## 親から子を呼ぶ
constructor内でRefを宣言
```
this.MyRef = React.createRef();
this.myfunc = this.myfunc.bind(this);
```
で refを渡す
```
    <NewsChildFunction ref={MyRef}></NewsChildFunction>
```
んで
```
    showModal = () => {
        this.MyRef.current.myfunc();
    }
```
こう


# 関数呼び出し(functionコンポーネント)

## 子供から親を呼ぶ
単純にpropsにコールバック変数を渡してあげれば良い

## 親から子を呼ぶ
refを宣言
```
    const myRef = useRef();
```
refを渡す
```
    <NewsChildFunction ref={myRef}></NewsChildFunction>
```
で呼ぶ
```
    myRef.current.childButtonClick();
```
functionコンポーネントは子供側もいじる  
まずrefを引数に入れる
```
    const NewsChildFunction = (props, ref) => {
```
でこんな感じに
```
    useImperativeHandle(
        ref,
        () => ({
            childButtonClick() {
                setTitle("called from parent");
            }
        }),
    )
```
でforwardRefでくくる
```
    export default forwardRef(NewsChildFunction);
```
