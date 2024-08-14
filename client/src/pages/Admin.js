import React, { useState } from 'react';
import styles from './styles/Admin.module.css'
import ButtonAdd from '../components/UI/button/ButtonAdd/ButtonAdd';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/const';
import CreateCategory from '../components/modals/CreateCategory';
import CreateBrand from '../components/modals/CreateBrand'
import CreatePart from '../components/modals/CreatePart'

const Admin = () => {
    const navigate = useNavigate()
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [partVisible, setPartVisible] = useState(false)
    return (
        <div className={styles.admin__container}>
            <ButtonAdd onClick={() => navigate(SHOP_ROUTE)} name={'Вернуться назад'}/>
            <ButtonAdd onClick={() => setCategoryVisible(true)} name={'Добавить Категорию товаров'}/>
            <ButtonAdd onClick={() => setBrandVisible(true)} name={'Добавить Бренд'}/>
            <ButtonAdd onClick={() => setPartVisible(true)} name={'Добавить Запчасть'}/>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreatePart show={partVisible} onHide={() => setPartVisible(false)} />
        </div>
    );
};

export default Admin;