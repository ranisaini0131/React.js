import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom'
import axios from 'axios'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const navigate = useNavigate()
    const [adminEmail, setAdminEmail] = useState("")
    const [adminPassword, setAdminPassword] = useState("")
    const [allAdmin, setNewAdmin] = useState([])

    const submitForm = (e) => {
        e.preventDefault();
        const newAdmin = { adminEmail, adminPassword }

        setNewAdmin([...allAdmin, newAdmin])

        const login = async () => {
            const response = await axios.post("http://localhost:8080/api/adminLogin", {
                email: adminEmail,
                password: adminPassword,
            })
            const data = await response.data;
            console.log(data)
            localStorage.setItem('token', JSON.stringify(data.token))
            console.log(localStorage.getItem('token'))
            if (data.status === "success") {
                navigate('/adminDashboard')
            } else {
                alert(data.msg);
            }
        }

        login();
    }


    return (
        <>
            <h1>Admin Login Page</h1>

            <div>
                <label htmlFor='adminEmail'>Email</label>
                <input
                    type='text'
                    name='adminEmail'
                    id='adminEmail'
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    autoComplete='off'


                />

            </div>

            <div>
                <label htmlFor='adminPassword'>Password</label>
                <input
                    type='password'
                    name='adminPassword'
                    id='adminPassword'
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    autoComplete='off'
                />

            </div>

            {/* <Navigate to='/adminDashboard' replace={true} /> */}

            <button
                type='submit'
                onClick={(e) => submitForm(e)}

            > Login</button >




        </>
    )
}

export default AdminLogin