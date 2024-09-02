import React from 'react';
import styles from './ButtonRadioFilters.module.css'

const ButtonRadioFilters = (props) => {
    return (
        <button className={styles.buttonRadioFilters__container} 
            onBlur={props.onBlur} 
            onClick={props.onClick} >
            {props.text}
        </button>
    );
};

export default ButtonRadioFilters;