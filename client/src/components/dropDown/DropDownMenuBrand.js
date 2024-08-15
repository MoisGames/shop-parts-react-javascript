import React, { useContext, useEffect, useState} from 'react';
import styles from './DropDownMenuBrand.module.css'
import { Context } from '../../index.js';
import { observer } from 'mobx-react-lite';
import { fetchBrands} from '../../http/partAPI.js';

const DropDownMenuBrand = observer (() => {
    const [show, setShow] = useState(false);
    const {part} = useContext(Context)
    
    useEffect(() => {
        fetchBrands().then(data => part.setBrands(data))
    }, [])

    return (
        <div className={styles.dropdown}>
            <button 
                type='button' 
                className={styles.dropdown__button} 
                onClick={() => setShow(!show)}>
                    Выберите бренд
            </button>
            
            {show && <ul className={styles.dropdown__items}>
                {part.brands.map(brand => 
                    <li className={styles.dropdown__items_row}>
                        <a className={styles.dropdown__link} 
                        href={brand.id} 
                        key={brand.id}>
                            {brand.name}
                        </a>
                    </li>
                )}
            </ul>}
        </div>
        
    );
});

export default DropDownMenuBrand;