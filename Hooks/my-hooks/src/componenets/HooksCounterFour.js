import React from 'react'
import { useState } from 'react'

function HooksCounterFour() {
    const [items, setItems] = useState([])

    const addItems = () => {
        setItems([
            ...items, {
                id: items.length,
                value: Math.floor(Math.random() * 10 + 1)
            }
        ])
    }
    return (
        <div>
            <button onClick={addItems}>Add a number</button>
            <ul>
                {items.map(items => (
                    <li key={items.id}>{items.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HooksCounterFour