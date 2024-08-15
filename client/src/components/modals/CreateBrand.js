import React from 'react';
import styles from './CreateBrand.module.css'
import xImage from '../../../src/assets/image/X.png'
import ButtonClose from '../../components/UI/button/ButtonClose/ButtonClose'
import ButtonAdd from '../UI/button/ButtonAdd/ButtonAddItem'
import InputForm from '../UI/input/InputForm';

const CreateBrand = ({show, onHide}) => {
    if (!show) return null 
    return (
        <div show={show} onHide={onHide} className={styles.createBrand__background} onClick={(e) => {if (e.currentTarget === e.target) {onHide()}}}>
            <div className={styles.createBrand__active}>
                <div onClick={onHide} className={styles.createBrand__close} >
                    <img alt='createCategoryLogo' src={xImage} />
                </div>
                <form className={styles.createBrand__window}>
                    <div className={styles.createBrand__header_name}>
                        Добавить бренд
                    </div>
                    <div className={styles.createBrand__body_container}>
                        <InputForm placeholder='Введите название бренда...'/>
                        <footer className={styles.createBrand__window_footer}>
                        <ButtonAdd />
                        <ButtonClose onClick={onHide} />
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBrand;