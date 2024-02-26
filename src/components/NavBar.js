import React from 'react';
import styles from '..//stylesheets/navBar.module.css';
import reditLogo from '../alienIcon.png';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/user/userSlice';
import { logoutUser } from '../features/user/userSlice';
import Search from '../features/search/Search';


export default function NavBar() {

    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
        <>
            <header>
                <nav className={styles.navBar}>
                    <Search />
                    <Link className={styles.pageTitle} to='/'>
                        <img className={styles.redditIcon} src={reditLogo} alt='Reddit blue alien icon' />
                        <h4>
                            <span className={styles.colourName}>Reddit</span>Minimal
                        </h4>
                    </Link>
                    {currentUser 
                    ? <section className={styles.account}>
                        <Link>{currentUser}</Link>
                        <Link to='/login'>
                            <button className={styles.logout} onClick={handleLogout}>Log Out</button>
                        </Link>
                    </section>
                    : <section className={styles.account}>
                            <NavLink to='/login'>
                                <button className={styles.login}>Login</button>
                            </NavLink>
                            <NavLink to='/sign-up'>
                                <button className={styles.signup}>Sign Up</button>
                            </NavLink>
                    </section>
                    }
                </nav>
            </header>
        </>
    );
}