import React from 'react';
import styles from './styles/Admin.module.css'
import ButtonAdd from '../components/UI/button/ButtonAdd/ButtonAdd';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/const';
import CreateCategory from '../components/modals/CreateCategory';

const Admin = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.admin__container}>
            <ButtonAdd onClick={() => navigate(SHOP_ROUTE)} name={'Вернуться назад'}/>
            <ButtonAdd  name={'Добавить Категорию товаров'}/>
            <ButtonAdd onClick={() => navigate(SHOP_ROUTE)} name={'Добавить Бренд'}/>
            <ButtonAdd onClick={() => navigate(SHOP_ROUTE)} name={'Добавить Запчасть'}/>
            <CreateCategory />
        </div>
    );
};

export default Admin;