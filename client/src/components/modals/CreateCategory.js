import React, { useState } from 'react';
import styles from './CreateCategory.module.css'
import xImage from '../../../src/assets/image/X.png'
import ButtonClose from '../UI/button/ButtonClose/ButtonClose'
import ButtonAddItem from '../UI/button/ButtonAdd/ButtonAddItem'
import InputForm from '../UI/input/InputForm/InputForm';
import {createCategory } from '../../http/partAPI'

const CreateCategory = ({show, onHide}) => {
    const [value,setValue] = useState('')
    if (!show) return null
    if (show && !onHide) return null
    
    const addCategory = () => {
        createCategory({name: value}).then(data => {
            setValue('')
            onHide()
            }    
        )};

    return (
        <div show={show} onHide={onHide} className={styles.createCategory__background} onClick={(e) => {if (e.currentTarget === e.target) {onHide()}}}>
            <div className={styles.createCategory__active} >
                <div onClick={onHide} className={styles.createCategory__close} >
                    <img alt='createCategoryLogo' src={xImage} />
                </div>
                <form className={styles.createCategory__window}>
                    <div className={styles.createCategory__header_name}>
                        Добавить Категорию
                    </div>
                    <div className={styles.createCategory__body_container}>
                        <InputForm value={value} onChange={e => setValue(e.target.value)} placeholder='Введите название категории...'/>
                        <footer className={styles.createCategory__window_footer}>
                        <ButtonAddItem onClick={addCategory}/>
                        <ButtonClose onClick={onHide} />
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCategory;