import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    function handleClick(e) {
        e.preventDefault();
        if (username === "abc" && password === "123") {
            window.localStorage.setItem("username", "abc");
            window.localStorage.setItem("password", "123");
            history.push("/profile");
        } else {
            // setUserName("");
            // setPassword("");
            window.localStorage.setItem("username", username);
            window.localStorage.setItem("password", password);
            history.push("/profile");
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => setUserName(e.target.value)}
                    value={username}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button id="submit" onClick={handleClick}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
