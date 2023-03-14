import { Link, Navigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { UserContext } from "../UserContext";


export default function LoginPage(params) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const { setUserInfo } = useContext(UserContext);

    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });

        } else {
            alert("Wrong credentials")
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }


    return (
        <div className="login-box">
            <h2>Login</h2>
            <form className="py-4" onSubmit={login}>
                <div className="user-box">
                    <input type="text"
                        name=""
                        required=""
                        value={username}
                        onChange={ev => setUsername(ev.target.value)}>
                    </input>
                    <label>Username</label>
                </div>

                <div className="user-box">
                    <input type="password"
                        name=""
                        required=""
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}>
                    </input>
                    <label>Password</label>
                </div>

                <div className="button-form">
                    <button id='submit' href="/">Login</button>
                    <div id="register">
                        Don't have an account ?
                        <Link to="/register"> Register</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}