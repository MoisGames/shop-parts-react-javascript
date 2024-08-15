import React, { useContext, useEffect, useState} from 'react';
import styles from './DropDownMenuBrand.module.css'
import { Context } from '../../index.js';
import { observer } from 'mobx-react-lite';
import { fetchBrands} from '../../http/partAPI.js';
import setSelectedBrand from '../../store/PartStore.js'
import selectedBrand from '../../store/PartStore.js'

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
                onClick={() => setShow(!show)}
                >
                    {part.selectedBrand.name || "Выберите Бренд"}
            </button>
            
            {show && <ul className={styles.dropdown__items}>
                {part.brands.map(brand => 
                    <li 
                        key={brand.id} 
                        onMouseDown={() => part.setSelectedBrand(brand)}
                        onMouseUp={() => setShow(!show)} 
                        className={styles.dropdown__items_row}
                        >
                        <span 
                        className={styles.dropdown__link}  
                        key={brand.id}
                        >
                            {brand.name}
                        </span>
                    </li>
                )}
            </ul>}
        </div>
        
    );
});

export default DropDownMenuBrand;