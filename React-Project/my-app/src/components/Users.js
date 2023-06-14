import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Users = () => {
    return (
        <>
            <div>
                <h2> <Link to='1'>User1</Link></h2>
                <h2><Link to='2'>User2</Link></h2>
                <h2> <Link to='3'>User3</Link></h2>
            </div >
            <Outlet />

        </>
    )
}

export default Users