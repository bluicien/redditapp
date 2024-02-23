import React, { useState } from 'react';
import styles from '../stylesheets/signUp.module.css';
import { Link } from 'react-router-dom';

export default function SignUp() {

    const [username, setUsername] = useState("");

    return (
        <main>
            <form type='submit' className={styles.signup}>
                <fieldset>
                    <legend>Sign up</legend>
                    <label className={styles.inputLabel} for='username'>Username: </label>
                    <input className={styles.inputBox} type='text' id='username' name='username' value={username} onChange={({target}) => setUsername(target.value)} />
                    <Link to='/'><button className={styles.signupButton}>Sign Up</button></Link>
                </fieldset>
            </form>
        </main>

    );
}