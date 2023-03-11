# component
## クラスコンポーネント
```
import React, {Component} from 'react';
class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default MyComponent;
```

## functionコンポーネント
```
import React from 'react';
import { useState } from 'react';

const Article = (props) => {
    const [id, setId] = useState(0);
    
    const handleClick = () => {
        const newId = id + 1;
        setId(newId);
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <span>{id}</span>
            <button onClick={handleClick}>aaa</button>
        </div>
    );
};

export default Article;
```
