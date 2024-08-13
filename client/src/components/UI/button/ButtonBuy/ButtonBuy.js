import React from 'react';
import styles from './ButtonBuy.module.css'

const ButtonBuy = (props) => {
    return (
        <button onClick={props.onClick} className={styles.buttonBuy}>
            <div className={styles.buttonBuy__name}>
                {props.name}
            </div>
        </button>
    );
};

export default ButtonBuy;