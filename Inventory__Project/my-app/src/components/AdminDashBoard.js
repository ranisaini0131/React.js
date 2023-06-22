import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashBoard() {
    return (
        <>
            <h1>Admin DashBoard</h1>

            <div>
                <Link to='/userRegistration'>User Registeration</Link>
            </div>

            <div>
                <Link to='/ChangePassword'>User's Passowrd Change</Link>
            </div>

            <div>
                <Link to='/getAllBills'>All Bills</Link>
            </div>

            <div>
                <Link to='/getAllUsers'>All Users</Link>
            </div>


        </>

    )
}

export default AdminDashBoard