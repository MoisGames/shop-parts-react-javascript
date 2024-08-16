import React from 'react';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css'
import SearchInput from '../input/SearchInput';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container} >
                <NavBar />
                <div className={styles.header__container_search}>
                    <SearchInput />
                </div>
                <hr/>
            </div>
        </header>
    );
};

export default Header;