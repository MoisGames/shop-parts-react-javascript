import React, { useState } from 'react';
import styles from './RadioFilters.module.css'
import ButtonRadioFilters from '../button/ButtonRadioFilters/ButtonRadioFilters';

const RadioFilters = () => {
    return (
        <fieldset>
            <div className={styles.radioFilters__dropdown_content} >
                <div className={styles.radioFilters__sort_content_up}>
                    <input 
                    type='radio' 
                    className={styles.radioFilters__container} 
                    id='sortPriceUp' 
                    value='sortPriceUp' 
                    name='sort'/>
                    <label for='sortPriceUp' className={styles.radioFilters__label}>Сначала дорогие</label>
                </div>
                <div className={styles.radioFilters__sort_content}>
                    <input 
                    type='radio' 
                    className={styles.radioFilters__container} 
                    id='sortPriceDown' 
                    value='sortPriceDown' 
                    name='sort' />
                    <label for='sortPriceDown' className={styles.radioFilters__label}>Сначала дешевые</label>
                </div>
            </div>
        </fieldset>
    );
};

export default RadioFilters;