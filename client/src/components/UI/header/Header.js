import React from 'react';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.Header}>
            <NavBar />
            <hr/>
        </header>
    );
};

export default Header;