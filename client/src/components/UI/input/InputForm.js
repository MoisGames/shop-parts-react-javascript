import React from 'react';
import styles from './InputFrom.module.css'

const InputForm = (props) => {
    return (
        <input placeholder={props.placeholder} onChange={props.onChange} type={props.type} className={styles.inputForm__container}>
            
        </input>
    );
};

export default InputForm;