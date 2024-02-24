import React, { useState } from 'react';
import styles from '../stylesheets/login.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

export default function Login() {

    const [username, setUsername] = useState("");

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser(username));
    }


    return (
        <main>
            <form className={styles.signup}>
                <fieldset>
                    <legend>Login</legend>
                    <label className={styles.inputLabel} htmlFor='username'>Username: </label>
                    <input className={styles.inputBox} type='text' id='username' name='username' value={username} onChange={({target}) => setUsername(target.value)} />
                    <Link to='/'><button onClick={handleLogin} className={styles.loginButton}>Login</button></Link>
                </fieldset>
            </form>
        </main>

    );
}