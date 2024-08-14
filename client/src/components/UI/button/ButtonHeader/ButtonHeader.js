import React from 'react';
import styles from './ButtonHeader.module.css'

const ButtonHeader = (props) => {
    return (
        <button className={styles.button_header} onClick={props.onClick}>
            {props.name}
        </button>
    );
};

export default ButtonHeader;