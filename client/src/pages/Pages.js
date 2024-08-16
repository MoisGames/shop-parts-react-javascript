import React, { useContext } from 'react';
import {Context} from '../index'
import styles from './styles/Pages.module.css'
import { observer } from 'mobx-react-lite';

const Pages = observer (() => {
    const {part} = useContext(Context)
    const pages = [1,2,3,4,5]
    return (
        <nav className={styles.pages__container}>
            <ul className={styles.pages__row_container}>
                {pages.map(page => 
                    <li className={styles.pages__item}>
                        {page}
                    </li>
                )}
            </ul>
        </nav>
    );
});

export default Pages;