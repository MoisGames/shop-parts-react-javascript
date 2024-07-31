import React from 'react';
import styles from './NavBar.module.css'
import ButtonHeader from '../../button/ButtonHeader';
import City from '../city/City';

const NavBar = () => {
    return (
        <nav className={styles.main_nav}>
            <a href='http://localhost:3000/'>
                <div className={styles.logo_img}></div>
            </a>
            <City name='Красноярск' />
            <div className={styles.container_nav}>
                <ButtonHeader name = 'Оптовикам'/>
                <ButtonHeader name = 'Наши магазины' />
                <ButtonHeader name = 'Контакты' />

            </div>
        </nav>
    );
};

export default NavBar;