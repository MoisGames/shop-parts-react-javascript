import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { Context } from '../../../index';
import styles from './BrandBar.module.css'

const BrandBar = observer(() => {
    const {part} = useContext(Context);
    return (
        <ul className={styles.brandBar__list}>
                {part.brands.map(brand =>
                        <li 
                        className={styles.brandBar__list_item}
                        onClick={() => part.setSelectedBrand(brand)}
                        key={brand.id}
                        tabIndex={0}
                        >
                            {brand.name}
                       </li>
                )}
        </ul>
    );
});

export default BrandBar;