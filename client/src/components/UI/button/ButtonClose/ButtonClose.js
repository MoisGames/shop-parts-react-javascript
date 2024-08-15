import React from 'react';
import styles from './ButtonClose.module.css'

const ButtonClose = (props) => {
    return (
        <button className={styles.buttonClose__container} onClick={props.onClick}>
            Закрыть
        </button>
    );
};

export default ButtonClose;