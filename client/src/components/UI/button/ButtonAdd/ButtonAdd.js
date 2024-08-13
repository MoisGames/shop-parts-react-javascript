import React from 'react';
import styles from './ButtonAdd.module.css'

const ButtonAdd = (props) => {
    return (
        <button className={styles.buttonAdd__container} onClick={props.onClick}>
            {props.name}
        </button>
    );
};

export default ButtonAdd;