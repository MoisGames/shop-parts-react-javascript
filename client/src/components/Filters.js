import React from 'react';
import styles from './Filters.module.css'
import RadioFilters from './UI/input/RadioFilters/RadioFilters';

const Filters = () => {
    return (
        <div className={styles.filters__container}>
            <RadioFilters />
        </div>
    );
};

export default Filters;