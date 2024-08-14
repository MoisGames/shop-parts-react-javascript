import React from 'react';
import styles from './ButtonOpen.module.css'

const ButtonOpen = (props) => {
    return (
        <button className={styles.buttonOpen__container} onClick={props.onClick} >
            Добавить
        </button>
    );
};

export default ButtonOpen;