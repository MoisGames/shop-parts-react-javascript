import React, { useContext } from 'react';
import {Context} from '../index'
import styles from './styles/Pages.module.css'
import { observer } from 'mobx-react-lite';
import setPage from '../store/PartStore'

const Pages = observer (() => {
    const {part} = useContext(Context)
    const pageCount = Math.ceil(part.totalCount / part.limit) // округляем для получения количества страниц
    const pages = []
    
    console.log(pages, "pages");
    console.log(part.page, "part page");

    for (let i = 0; i < pageCount; i++ ) { //массив с цифрами страницы
        pages.push(i+1) // Номер страницы
    }

    return (
        <nav className={styles.pages__container}>
            <ul className={styles.pages__row_container}>
                {pages.map(page => 
                    <li 
                        className={styles.pages__item}
                        key={page}
                        active={part.page === page}
                        onClick={() => 
                            part.setPage(page) 
                            }
                        >
                            {page}
                    </li>
                )}
            </ul>
        </nav>
    );
});

export default Pages;