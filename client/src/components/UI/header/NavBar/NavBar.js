import React from 'react';
import styles from './NavBar.module.css'
import ButtonHeader from '../../button/ButtonHeader/ButtonHeader';
import City from '../city/City';
import { NavLink, useNavigate } from 'react-router-dom';
import {WHOLE_SALERS_ROUTE, CONTACTS_ROUTE, OUR_SHOPS_ROUTE, SHOP_ROUTE, ADMIN_ROUTE} from '../../../../utils/const'

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav className={styles.main_nav}>
            <NavLink to={SHOP_ROUTE}>
                <div className={styles.logo_img}></div>
            </NavLink>
            <City name='Красноярск' />
            <div className={styles.container_nav}>
                <ButtonHeader name = 'Админ панель' onClick = {() => navigate(ADMIN_ROUTE)} />
                <ButtonHeader name = 'Оптовикам' onClick = {() => navigate(WHOLE_SALERS_ROUTE)} />
                <ButtonHeader name = 'Наши магазины' onClick = {() => navigate(OUR_SHOPS_ROUTE)} />
                <ButtonHeader name = 'Контакты' onClick = {() => navigate(CONTACTS_ROUTE)}/>
            </div>
        </nav>
    );
};

export default NavBar;