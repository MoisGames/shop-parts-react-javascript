import React from 'react';
import styles from './SearchInput.module.css'

const SearchInput = (props) => {
    return (
            <input type='text' placeholder='Поиск по сайту' className={styles.searchInput__input} onChange={props.onChange} >
            
            </input>
    );
};

export default SearchInput;