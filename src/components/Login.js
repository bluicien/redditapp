import React, { useState } from 'react';
import styles from '../stylesheets/login.module.css';
import { Link } from 'react-router-dom';

export default function Login() {

    const [username, setUsername] = useState("");

    return (
        <main>
            <form type='submit' className={styles.signup}>
                <fieldset>
                    <legend>Login</legend>
                    <label className={styles.inputLabel} for='username'>Username: </label>
                    <input className={styles.inputBox} type='text' id='username' name='username' value={username} onChange={({target}) => setUsername(target.value)} />
                    <Link to='/'><button className={styles.loginButton}>Login</button></Link>
                </fieldset>
            </form>
        </main>

    );
}