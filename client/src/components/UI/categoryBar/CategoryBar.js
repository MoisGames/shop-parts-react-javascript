import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { Context } from '../../../index';
import styles from './CategoryBar.module.css'

const CategoryBar = observer(() => {
    const {part} = useContext(Context);
    return (
        <ul className={styles.categoryBar__list}>
                {part.categories.map(category => 
                   <li 
                    className={styles.categoryBar__list_item}
                    onClick={() => part.setSelectedCategory(category)}
                    key={category.id}
                    tabIndex= {0}
                    
                    >
                        {category.name}
                   </li> 
                )}
                <hr/>
        </ul>
    );
});

export default CategoryBar;