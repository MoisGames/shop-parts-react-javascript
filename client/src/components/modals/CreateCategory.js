import React from 'react';
import styles from './CreateCategory.module.css'
import xImage from '../../../src/assets/image/X.png'
import ButtonClose from '../../components/UI/button/ButtonCloseOpen/ButtonClose'
import ButtonOpen from '../../components/UI/button/ButtonCloseOpen/ButtonOpen'
import InputForm from '../UI/input/InputForm';

const CreateCategory = ({show, onHide}) => {
    return (
        <div show={show} onHide={onHide} className={styles.createCategory__background}>
            <div className={styles.createCategory__active}>
                <div onClick={() => onHide} className={styles.createCategory__close}>
                    <img alt='createCategoryLogo' src={xImage} />
                </div>
                <form className={styles.createCategory__window}>
                    <div className={styles.createCategory__header_name}>
                        Добавить Категорию
                    </div>
                    <InputForm placeholder='Введите название категории...'/>
                    <footer className={styles.createCategory__window_footer}>
                    <ButtonOpen  />
                    <ButtonClose onClick={onHide} />
                    </footer>
                    
                </form>
            </div>
        </div>
    );
};

export default CreateCategory;