import React from 'react';
import styles from './PartItem.module.css'
import { SYMBOL_RUB, PART_ROUTE } from '../../../utils/const';
import {useNavigate} from 'react-router-dom'
import ButtonBuy from '../button/ButtonBuy';

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
                        <div className={styles.PartItem__name}>
                        {part.name_parts}{part.name_parts}{part.name_parts}
                        </div>
                        
                        <div className={styles.PartItem__price}>
                        {Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(part.price)}
                        </div>
                        <div>
                            <ButtonBuy name='Купить'/>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default PartItem;