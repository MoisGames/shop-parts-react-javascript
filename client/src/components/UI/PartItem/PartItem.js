import React from 'react';
import styles from './PartItem.module.css'

const PartItem = ({part}) => {
    return (
        <div className={styles.PartItem__container}>
            <div className={styles.PartItem__item}>
                <img className={styles.PartItem__logo} src={part.img}></img>
                    <div>
                        <div className={styles.PartItem__header}>
                        "MASUMA"
                        </div>
                        <div className={styles.PartItem__name}>
                            {part.name_parts}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default PartItem;