import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <div>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Products