import { useState } from "react"
import React from 'react'

const HookCounterThree = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <form>
            <input
                type='text'
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            />
            <input
                type='text'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h2>Your first Name is-{name.firstName}</h2>
            <h2>Your last Name is-{name.lastName}</h2>
        </form>
    )
}

export default HookCounterThree

//firstName: '', lastName: '' is initialized by empty string and can be of any other data type