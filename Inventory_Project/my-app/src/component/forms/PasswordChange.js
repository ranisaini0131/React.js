import React, { useState } from 'react'

function PasswordChange() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")

    const [allEntry, setAllEntry] = useState([]);

    const [newpassword, setNewPassword] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email, password }

        setAllEntry([...allEntry, newEntry])

        const loginApi = async () => {
            let database = []
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEntry)
            };
            const response = await fetch('http://localhost:8080/api/userLogin', options)
            const data = await response.json();
            database.push(data);
            console.log(data, "")
            localStorage.setItem('loginApi', JSON.stringify({
                loginApi: true,
                token: data.token
            }))
            console.log(localStorage.getItem('loginApi'))


        }

        const passwordChange = () => {
            // let new_email = newEntry.email;
            // console.log(new_email)
            // console.log(email)
            // console.log(allre)

            allEntry.map((curElement) => {

                return email
            })



        }

        loginApi()
        passwordChange();
    }




    return (
        <>
            <form action='' onSubmit={submitForm}>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email' value={email}
                        onChange={(e) => setEmail(e.target.value)} autoComplete='off'

                    />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' value={password}
                        onChange={(e) => setPassword(e.target.value)} autoComplete='off'

                    />
                </div>

                <div>
                    <label htmlFor='newpassword'>New Password</label>
                    <input type='newpassword' name='newpassword' id='newpassword' value={newpassword}
                        onChange={(e) => setNewPassword(e.target.value)} autoComplete='off'

                    />
                </div>


                <button type='submit' onClick={(e) => submitForm(e)}> Login</button>

            </form >
            {/* <div>
                {
                    allEntry.map((curElement, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <p>{curElement.email}</p>
                                    <p>{curElement.password}</p>
                                </div>
                            </>

                        )
                    })
                }

            </div> */}
        </>
    )
}

export default PasswordChange