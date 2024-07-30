import React from 'react';
import styles from './NavBar.module.css'

const NavBar = () => {
    console.log(styles);
    return (
        <nav className={styles.main_nav}>
            <a href='http://localhost:3001/'>
                <div className={styles.logo_img}></div>
            </a>
        </nav>
    );
};

export default NavBar;