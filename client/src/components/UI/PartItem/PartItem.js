import React from 'react';
import styles from './PartItem.module.css'
import { SYMBOL_RUB, PART_ROUTE } from '../../../utils/const';
import {useNavigate} from 'react-router-dom'

const PartItem = ({part}) => {
    const navigate = useNavigate()
    
    return (
        <div 
            className={styles.PartItem__container} 
            onClick={() => navigate(PART_ROUTE + '/' + part.id)}
            >
            <div className={styles.PartItem__item}>
                <img 
                    alt='logo_part' 
                    className={styles.PartItem__logo} 
                    src={part.img}></img>
                    <div>
                        <div className={styles.PartItem__header}>
                        {part.id}
                        </div>
                        <div className={styles.PartItem__name}>
                            {part.name_parts}
                        </div>
                        <div className={styles.PartItem__price}>
                        {SYMBOL_RUB} {part.price}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default PartItem;