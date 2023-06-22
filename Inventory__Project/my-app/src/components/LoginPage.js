import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function LoginPage() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email, password }

        setAllEntry([...allEntry, newEntry])

        const loginApi = async () => {
            const response = await axios.post("http://localhost:8080/api/userLogin", {
                email: email,
                password: password,
            })
            const data = await response.data;
            console.log(data)
            // localStorage.setItem('token', JSON.stringify(data.token))
            // console.log(localStorage.getItem('token'))


        }

        loginApi()

    }


    return (
        <>

            <h1>User Login Page</h1>

            <form action='' >
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='text'
                        name='email'
                        id='email'
                        value={email}
                        autoComplete='off'
                        onClick={(e) => setEmail(e.target.value)}

                    />
                    <div>

                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={password}
                            autoComplete='off'
                            onClick={(e) => setPassword(e.target.value)}
                        />

                    </div>
                    <Link to='/UserProfilePage'>
                        <button
                            type='submit'
                            onClick={(e) => submitForm(e)}>
                            Login
                        </button>
                    </Link>
                </div>
            </form>











        </>
    )
}

export default LoginPage