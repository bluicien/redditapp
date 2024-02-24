import React, { useState } from 'react';
import styles from '../stylesheets/signUp.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/user/userSlice';


export default function SignUp() {

    const [username, setUsername] = useState("");
    const dispatch = useDispatch();

    const handleSignup = () => {
        dispatch(addUser(username));
    }

    return (
        <main>
            <form className={styles.signup}  >
                <fieldset>
                    <legend>Sign up</legend>
                    <label className={styles.inputLabel} htmlFor='username'>Username: </label>
                    <input className={styles.inputBox} type='text' id='username' name='username' value={username} onChange={({target}) => setUsername(target.value)} />
                    <Link to='/'><button onClick={handleSignup} className={styles.signupButton}>Sign Up</button></Link>
                </fieldset>
            </form>
        </main>

    );
}