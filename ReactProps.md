# Passing information between Child and Parent components in React
## Child to Parent

To send data to a parent component from a child component, create a function in the parent component and pass the function as a prop to the child component.

```js
import React from 'react'

export function Parent() {
    const childToParent = () => {

    }
    return (
        <Child childToParent={childToParent}/>
    )
}
```

Then in the child component, accept the function call as a props and assign it to an onClick event

```js
import React from 'react'

function Child({childToParent}) {
    const data = {
        string: "This is a string",
        number: 1,
        bool: true
    }

    return (
        <div onClick={() => childToParent(data)}></div>
    )
}

export { Child }

```

Then in the parent componet, use a useState hook to set / manipulate the data recieved

```js
import {useState} from 'react'
import Child from './Child'

function Parent() {
    const [data, setData] = useState('')

    const childToParent() = (childData) => {
        let string = childData.string
        setData(string)
    }

    return (
        <>
            <div>
                {data}
            </div>
            <Child childToParent = {childToParent}>
        </>
    )
}
