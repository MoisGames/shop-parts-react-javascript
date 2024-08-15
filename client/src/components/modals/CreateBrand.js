import React, { useState } from 'react';
import styles from './CreateBrand.module.css'
import xImage from '../../../src/assets/image/X.png'
import ButtonClose from '../../components/UI/button/ButtonClose/ButtonClose'
import ButtonAddItem from '../UI/button/ButtonAdd/ButtonAddItem'
import InputForm from '../UI/input/InputForm';
import { createBrand } from '../../http/partAPI';

const CreateBrand = ({show, onHide}) => {
    const [value,setValue] = useState('')

    if (!show) return null
    if (show && !onHide) return null

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
            }    
        )};

    return (
        <div show={show} onHide={onHide} className={styles.createBrand__background} onClick={(e) => {if (e.currentTarget === e.target) {onHide()}}}>
            <div className={styles.createBrand__active}>
                <div onClick={onHide} className={styles.createBrand__close} >
                    <img alt='createCategoryLogo' src={xImage} />
                </div>
                <form value={value} className={styles.createBrand__window}>
                    <div className={styles.createBrand__header_name}>
                        Добавить бренд
                    </div>
                    <div className={styles.createBrand__body_container}>
                        <InputForm value={value} onChange={e => setValue(e.target.value)} placeholder='Введите название бренда...'/>
                        <footer className={styles.createBrand__window_footer}>
                        <ButtonAddItem onClick={addBrand} />
                        <ButtonClose onClick={onHide} />
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBrand;