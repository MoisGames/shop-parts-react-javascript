import React from 'react';
import styles from './ButtonAddItem.module.css'

const ButtonAdd = (props) => {
    return (
        <button className={styles.buttonAdd__container} onClick={props.onClick} >
            Добавить
        </button>
    );
};

export default ButtonAdd;