import React from 'react';
import styles from './styles/Admin.module.css'
import ButtonAdd from '../components/UI/button/ButtonAdd/ButtonAdd';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/const';
import ButtonHeader from '../components/UI/button/ButtonHeader/ButtonHeader';
import { CONTACTS_ROUTE } from '../utils/const';

const Admin = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.admin__container}>
            <ButtonAdd onClick={() => navigate(SHOP_ROUTE)} name={'Вернуться назад'}/>
            <ButtonAdd onClick={() => navigate(SHOP_ROUTE)} name={'Добавить Категорию товаров'}/>
            <ButtonAdd onClick={() => navigate(SHOP_ROUTE)} name={'Добавить Бренд'}/>
            <ButtonAdd onClick={() => navigate(SHOP_ROUTE)} name={'Добавить Запчасть'}/>
        </div>
    );
};

export default Admin;