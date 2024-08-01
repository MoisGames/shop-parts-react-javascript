import React from 'react';
import styles from './ButtonHeader.module.css'
import { NavLink } from 'react-router-dom';

const ButtonHeader = (props) => {
    return (
        <button className={styles.button_header} onClick={props.onClick}>
            {props.name}
        </button>
    );
};

export default ButtonHeader;