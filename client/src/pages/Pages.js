import React, { useContext, useEffect, useState } from 'react';
import {Context} from '../index'
import styles from './styles/Pages.module.css'
import { observer } from 'mobx-react-lite';
import setPage from '../store/PartStore'

const Pages = observer (() => {
    const {part} = useContext(Context)
    const pageCount = Math.ceil(part.totalCount / part.limit) // 110 страниц округляем для получения количества страниц
    const pages = []
    
    for(let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    let [beginCountSlice,setBeginCountSlice] = useState(0)
    let [endCountSlice,setEndCountSlice] = useState(8)
    const defaultArrayPages = [...pages.slice(beginCountSlice,endCountSlice)]
    
    const defaultLiClass = styles.pages__item
    const buttonBackNextStyleDefault = styles.pages__item_button_next_back 
    let [backDisabled, setBackDisabled] = useState(true)
    let [nextDisabled, setNextDisabled] = useState(false)
    
    

    return (
        <nav className={styles.pages__container}>
            <ul className={styles.pages__row_container}>
                    <button 
                        className={buttonBackNextStyleDefault}
                        disabled={backDisabled}
                        onClick={() => {
                            setBackDisabled(true)
                            setNextDisabled(false)
                            setBeginCountSlice(0)
                            setEndCountSlice(8)
                            part.setPage(1)
                        }}
                        >
                            {'<<'}
                    </button>
                    <button 
                        className={buttonBackNextStyleDefault}
                        disabled={backDisabled}
                        onClick={() => {
                            if (part.page  === 2) {
                                setBackDisabled(backDisabled = true)
                                setBeginCountSlice(beginCountSlice - 1)
                                setEndCountSlice(endCountSlice - 1)
                                part.setPage(part.page - 1)
                            } else if (beginCountSlice >= 1){
                                setBeginCountSlice(beginCountSlice - 1)
                                setEndCountSlice(endCountSlice - 1)
                                part.setPage(part.page - 1)
                                setBackDisabled(false)
                                }
                                else {
                                setBeginCountSlice(beginCountSlice - 1)
                                setEndCountSlice(endCountSlice - 1)
                                part.setPage(part.page - 1)
                                setBackDisabled(false)
                                setNextDisabled(false)
                                }
                            }
                        }
                        >
                            {'<'}
                    </button>
                    
                
                {defaultArrayPages.map(page => // отправляем текущую страницу в setPage
                                    
                    <li 
                        className={defaultLiClass}
                        key={page}
                        id={page}
                        disabled={false}
                        onClick={(e) => {
                            part.setPage(page)
                        
                            setBackDisabled(backDisabled = false)
                            if (part.page === 1) {
                                setBackDisabled(backDisabled = true)
                                setNextDisabled(nextDisabled = false)
                            }
                            if (part.page === pageCount) {
                                setNextDisabled(nextDisabled = true)
                                setBackDisabled(backDisabled = false)
                            }
                            
                            
                            
                            }
                        }
                        value={page}
                        >
                            {page}
                    </li>
                )}
                    <button 
                        className={buttonBackNextStyleDefault}
                        disabled={nextDisabled}
                        onClick={() => {
                            if (part.page === pageCount - 2) {
                                setNextDisabled(nextDisabled = true)
                                setBeginCountSlice(beginCountSlice + 1)
                                setEndCountSlice(endCountSlice + 1)
                                part.setPage(pageCount - 1)
                            } else {
                                setBeginCountSlice(beginCountSlice + 1)
                                setEndCountSlice(endCountSlice + 1)
                                part.setPage(part.page + 1)
                                setBackDisabled(false)
                                }
                            }
                            
                        }
                        
                        >
                            {'>'}
                    </button>
                    <button 
                        className={buttonBackNextStyleDefault}
                        disabled={nextDisabled}
                        onClick={() => {
                                setNextDisabled(true)
                                setBackDisabled(false)
                                setBeginCountSlice(beginCountSlice = pageCount - 8)
                                setEndCountSlice(endCountSlice = pageCount)
                                part.setPage(pageCount)
                                
                        }}
                        >
                            {'>>'}
                    </button>
            </ul>
        </nav>
    );
});

export default Pages;