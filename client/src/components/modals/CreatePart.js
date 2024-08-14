import React from 'react';
import styles from './CreateCategory.module.css'
import xImage from '../../../src/assets/image/X.png'
import ButtonClose from '../../components/UI/button/ButtonCloseOpen/ButtonClose'
import ButtonOpen from '../../components/UI/button/ButtonCloseOpen/ButtonOpen'
import InputForm from '../UI/input/InputForm';

const CreatePart = ({show, onHide}) => { 
    return (
        <div show={show} onHide={onHide} className={styles.createPart__background}>
            <div className={styles.createPart__active}>
                <div onClick={() => onHide} className={styles.createPart__close}>
                    <img alt='createBrandLogo' src={xImage} />
                </div>
                <form className={styles.createPart__window}>
                    <div className={styles.createBrand__header_name}>
                        Добавить запчасть
                    </div>
                    <InputForm placeholder='Введите название запчасти'/>
                    <footer className={styles.createPart__window_footer}>
                    <ButtonOpen  />
                    <ButtonClose onClick={onHide} />
                    </footer>
                    
                </form>
            </div>
        </div>
    );
};

export default CreatePart;