import React, { useContext, useEffect, useState} from 'react';
import styles from './DropDownMenuCategory.module.css'
import { Context } from '../../index.js';
import { observer } from 'mobx-react-lite';
import { fetchCategories } from '../../http/partAPI.js';
import setSelectedCategory from '../../store/PartStore.js'
import selectedCategory from '../../store/PartStore.js'


const DropDownMenuCategory = observer (() => {
    const {part} = useContext(Context)
    const [show, setShow] = useState(false);
    
    
    useEffect(() => {
        fetchCategories().then(data => part.setCategories(data))
    }, [])

    return (
        <div className={styles.dropdown}>
            <button 
            type='button' 
            className={styles.dropdown__button} 
            onClick={() => setShow(!show)}
            >
                {part.selectedCategory.name || "Выберите Категорию"}
            </button>
            
            {show && <ul 
                className={styles.dropdown__items}>
                    {part.categories.map(category => 
                        <li 
                            key={category.id} 
                            onMouseDown={() => part.setSelectedCategory(category)}
                            onMouseUp={() => setShow(!show)}
                            className={styles.dropdown__items_row}
                            >
                            <span 
                            className={styles.dropdown__link} key={category.id}
                            >
                                {category.name}
                            </span>
                            </li>
                    )}
            </ul>}
        </div>
        
    );
});

export default DropDownMenuCategory;