import React from 'react';
import styles from './CreatePart.module.css'
import xImage from '../../../src/assets/image/X.png'
import ButtonClose from '../../components/UI/button/ButtonCloseOpen/ButtonClose'
import ButtonOpen from '../../components/UI/button/ButtonCloseOpen/ButtonOpen'
import InputForm from '../UI/input/InputForm';

const CreatePart = ({show, onHide}) => { 
    if (!show) return null
    return (
        <div show={show} onHide={onHide} className={styles.createPart__background} onClick={(e) => {if (e.currentTarget === e.target) {onHide()}}}>
            <div className={styles.createPart__active}>
                <div onClick={onHide} className={styles.createPart__close} >
                    <img alt='createCategoryLogo' src={xImage} />
                </div>
                <form className={styles.createPart__window}>
                    <div className={styles.createPart__header_name}>
                        Добавить Запчасть
                    </div>
                    <div className={styles.createPart__body_container}>
                        <InputForm placeholder='Введите название запчасти...'/>
                        <footer className={styles.createPart__window_footer}>
                        <ButtonOpen  />
                        <ButtonClose onClick={onHide} />
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePart;