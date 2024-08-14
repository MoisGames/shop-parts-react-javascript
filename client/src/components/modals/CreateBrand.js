import React from 'react';
import styles from './CreateCategory.module.css'
import xImage from '../../../src/assets/image/X.png'
import ButtonClose from '../../components/UI/button/ButtonCloseOpen/ButtonClose'
import ButtonOpen from '../../components/UI/button/ButtonCloseOpen/ButtonOpen'
import InputForm from '../UI/input/InputForm';

const CreateBrand = ({show, onHide}) => {
    return (
        <div show={show} onHide={onHide} className={styles.createBrand__background}>
            <div className={styles.createBrand__active}>
                <div onClick={() => onHide} className={styles.createBrand__close}>
                    <img alt='createBrandLogo' src={xImage} />
                </div>
                <form className={styles.createBrand__window}>
                    <div className={styles.createBrand__header_name}>
                        Добавить бренд
                    </div>
                    <InputForm placeholder='Введите название бренда...'/>
                    <footer className={styles.createBrand__window_footer}>
                    <ButtonOpen  />
                    <ButtonClose onClick={onHide} />
                    </footer>
                    
                </form>
            </div>
        </div>
    );
};

export default CreateBrand;