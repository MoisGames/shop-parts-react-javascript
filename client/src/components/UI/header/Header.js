import React from 'react';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css'

const Header = () => {
    // console.log(styles);
    return (
        <header className={styles.Header}>
            <NavBar />
        <hr/>
        </header>
    );
};

export default Header;