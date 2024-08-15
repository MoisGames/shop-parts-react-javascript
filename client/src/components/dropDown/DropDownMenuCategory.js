import React, { useContext, useEffect, useState} from 'react';
import styles from './DropDownMenuCategory.module.css'
import { Context } from '../../index.js';
import { observer } from 'mobx-react-lite';
import { fetchCategories } from '../../http/partAPI.js';

const DropDownMenuCategory = observer (() => {
    const [show, setShow] = useState(false);
    const {part} = useContext(Context)
    
    useEffect(() => {
        fetchCategories().then(data => part.setCategories(data))
    }, [])

    return (
        <div className={styles.dropdown}>
            <button type='button' className={styles.dropdown__button} onClick={() => setShow(!show)}>Выберите категорию</button>
            
            {show && <ul className={styles.dropdown__items}>
                {part.categories.map(category => 
                    <li className={styles.dropdown__items_row}><a className={styles.dropdown__link} href={category.id} key={category.id}>{category.name}</a></li>
                )}
            </ul>}
        </div>
        
    );
});

export default DropDownMenuCategory;