import React from 'react';
import styles from '../../stylesheets/navBar.module.css';
import reditLogo from '../../alienIcon.png';


export default function NavBar() {
    return (
        <header>
            <nav className={styles.navBar}>
                <section className={styles.pageTitle}>
                    <img className={styles.redditIcon} src={reditLogo} alt='Reddit blue alien icon' />
                    <h4>
                        <span className={styles.colourName}>Reddit</span>Minimal
                    </h4>
                </section>
                <section className={styles.account}>
                    <button className={styles.login}>Login</button>
                    <button className={styles.signup}>Sign Up</button>
                </section>
            </nav>
        </header>
    );
}