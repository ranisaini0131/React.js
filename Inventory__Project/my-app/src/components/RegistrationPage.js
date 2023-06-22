import React from 'react'
import { useState } from 'react';
import axios from 'axios'

function RegistrationPage() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [allUsers, setNewUsers] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        const newUser = { usernameReg, passwordReg }
        setNewUsers([...allUsers, newUser])
        const register = async () => {
            try {

                const bearer = 'Bearer' + JSON.parse(localStorage.getItem('token'))
                const response = await axios.post("http://localhost:8080/api/userSignup", {
                    headers: {
                        'authorization': bearer
                    }
                }, {
                    email: usernameReg,
                    password: passwordReg,
                })
                const data = await response.data;
                console.log(data, "fgh")
                console.log(localStorage.getItem('token'))

            } catch (error) {
                console.log(error)
            }

        }
        register()
    }

    return (
        <>
            <h1> User Registration Page</h1>
            <form action='' >
                <div>
                    <label htmlFor='username'>UserName</label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        value={usernameReg}
                        autoComplete='off'
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }}

                    />
                    <div>

                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={passwordReg}
                            autoComplete='off'
                            onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }}
                        />

                    </div>

                    {/* <Link to='/userLogin'> */}
                    <button
                        type='submit'
                        onClick={(e) => submitForm(e)}>
                        Sign Up
                    </button>
                </div>
            </form>
        </>
    )
}

export default RegistrationPage