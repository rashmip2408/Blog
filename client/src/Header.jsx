import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { UserContext } from "./UserContext";

export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            });
        });
    }, [setUserInfo]);


    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'Post',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (<header>
        <Link to='/' className='logo'>MyBlog</Link>
        <nav>

            {username && (
                <>
                    <Link to="/compose">Compose</Link>
                    <a href="/" onClick={logout}>Logout</a>
                </>
            )}

            {!username && (
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            )}

        </nav>
    </header>
    );
}