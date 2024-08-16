import React from 'react';
import NavBar from './NavBar/NavBar';
import styles from './Header.module.css'
import SearchInput from '../input/SearchInput';
import ButtonBasket from '../button/ButtonBasket/ButtonBasket';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__background}></div>
            <div className={styles.header__container} >
                <NavBar />
                <div className={styles.header__container_search}>
                    <SearchInput />
                    <ButtonBasket />
                </div>
                <hr/>
            </div>
        </header>
    );
};

export default Header;