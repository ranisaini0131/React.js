import React, { useState, useEffect } from 'react'

function HookCounterFive() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(50)

    const handlerIncremnet = () => {
        setCount(count + 1);
    }

    const handlerDecremnet = () => {
        setCount1(count1 - 1);
    }

    useEffect(() => {
        console.log("UseEffect called")// called after every event,it called when component mount,update and unmount
    }, [count, count1])
    return (
        <div>
            <h1>Count Up: {count}</h1>
            <button onClick={handlerIncremnet}>Increment</button>
            <h1>Count Down: {count1}</h1>
            <button onClick={handlerDecremnet}>Decrement</button>

        </div>
    )
}

export default HookCounterFive