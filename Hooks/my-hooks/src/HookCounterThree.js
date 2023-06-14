import { useState } from "react"
import React from 'react'

const HookCounterThree = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        < div > HookCounterThree</div>
    )
}

export default HookCounterThree