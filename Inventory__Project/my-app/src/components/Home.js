import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>Home Page</h1>

            <div>
                <Link to='/adminLogin'>ADMIN</Link>
            </div>
        </>
    )
}

export default Home