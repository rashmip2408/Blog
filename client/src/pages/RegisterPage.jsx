import { Link } from "react-router-dom";
import { useState } from 'react';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            alert('registration successful');
        } else {
            alert('registration failed');
        }
    }
    return (

        <div className="login-box">
            <h2>Register</h2>
            <form className="py-4" onSubmit={register}>
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
                    <button id='submit' href="/">Register</button>
                    <div id="register">
                        Already have an account ?
                        <Link to="/login"> Login</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}