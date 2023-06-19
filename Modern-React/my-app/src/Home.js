import React, { useState } from 'react'

function Home() {
    const handleClick1 = (e) => {
        console.log('hello,ninjas', e)
    }


    const handleClickAgain = (name, e) => {
        console.log('hello' + name, e.target); //tarhetting the events
    }

    const [name, setName] = useState('mario')
    const [age, setAge] = useState('24')

    const handleClick2 = () => {
        setName('kehav')
        setAge('34')
    }

    return (
        <div className='home'>
            <h2>HomePage</h2>
            <button onClick={handleClick1}>Click Me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click Me Again</button>
            <button onClick={handleClick2}>Click Me</button>
            <p>{name} is {age} years old</p>
        </div>
    )
}

export default Home