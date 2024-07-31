import React from 'react';
import styles from './NavBar.module.css'
import ButtonHeader from '../../button/ButtonHeader';
import City from '../city/City';

const NavBar = () => {
    console.log(styles);
    return (
        <nav className={styles.main_nav}>
            <a href='http://localhost:3001/'>
                <div className={styles.logo_img}></div>
            </a>
            <City name='Красноярск' />
            <div className={styles.container_nav}>
                <ButtonHeader name = 'Купить'/>
                <ButtonHeader name = 'Продать' />
                <ButtonHeader name = 'Удалить' />

            </div>
        </nav>
    );
};

export default NavBar;