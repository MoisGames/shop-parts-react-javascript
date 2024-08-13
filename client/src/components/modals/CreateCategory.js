import React from 'react';
import styles from './CreateCategory.module.css'
import xImage from '../../../src/assets/image/X.png'

const CreateCategory = ({show, onHide}) => {
    return (
        <div show={show} onHide={onHide} className={styles.createCategory__background}>
            <div className={styles.createCategory__active}>
                <div onClick={() => onHide} className={styles.createCategory__close}>
                    <img src={xImage} />
                </div>
                <div className={styles.createCategory__window}>
                    <div className={styles.createCategory__header_name}>
                        Добавить Категорию
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCategory;