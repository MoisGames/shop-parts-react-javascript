import React from 'react';
import styles from './RadioFilters.module.css'

const RadioFilters = () => {
    return (
        <fieldset>
            <legend>Сортировка по:</legend>
            <input type='radio' className={styles.radioFilters__container} placeholder='INPUT'>  
            </input>
        </fieldset>
    );
};

export default RadioFilters;