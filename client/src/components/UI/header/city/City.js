import React from 'react';
import styles from './City.module.css'

const City = (props) => {
    return (
        <span className={styles.city_name}>
           {'г. ' + props.name}
        </span>
    );
};

export default City;