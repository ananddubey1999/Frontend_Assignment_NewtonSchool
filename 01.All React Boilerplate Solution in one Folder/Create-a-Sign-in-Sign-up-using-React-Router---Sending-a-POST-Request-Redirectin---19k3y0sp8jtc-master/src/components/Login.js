import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ email, password, setLoggedIn, setNavigate }) {

    const [emailval, setemailval] = useState("");
    const [passval, setpassval] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailval == email && passval == password && emailval) {
            setLoggedIn(true)
        }

    }
    return (
        <div id='loginPage'>
            <h1 id='login-tag'>Login</h1>

            <form onSubmit={handleSubmit}>

                <h3>Email</h3>
                <input placeholder='abc@gmail.com' type='email' id='login-email'
                    value={emailval} onChange={(e) => setemailval(e.target.value)} />

                <h3>Password</h3>
                <input placeholder='Enter password' type='password' id='login-password'
                    value={passval} onChange={(e) => setpassval(e.target.value)} /><br />
                <button id='login-submit' type='submit'>Login</button>
            </form>
            <br />
            Don't have an account ?
            <button id='login-to-register' onClick={() => setNavigate(false)}><Link to="/Register">Register here ..</Link></button>


        </div>
    )
}
export default Login;