import React from 'react';
import styles from './ButtonBasket.module.css'
import purchase from '../../../../assets/image/purchase.png'

const ButtonBasket = (props) => {
    return (
        <div className={styles.buttonBasket__container} onClick={props.onClick}>
            <img src={purchase} className={styles.buttonBasket__image}/>
            <button className={styles.buttonBasket__button}>
                Корзина
            </button>
        </div>
    );
};

export default ButtonBasket;