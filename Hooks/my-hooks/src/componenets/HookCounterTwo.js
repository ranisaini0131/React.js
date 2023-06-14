import React, { useState } from 'react'

const HookCounterTwo = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrememt</button>
            <button onClick={() => setCount(count + 5)}>Increment by 5</button>

        </div>
    )
}

export default HookCounterTwo