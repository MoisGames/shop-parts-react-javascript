import React, { useContext } from 'react';
import styles from './CreatePart.module.css'
import xImage from '../../../src/assets/image/X.png'
import ButtonClose from '../../components/UI/button/ButtonClose/ButtonClose'
import ButtonAdd from '../UI/button/ButtonAdd/ButtonAddItem'
import {Context} from '../../index'
import DropDownMenuCategory from '../dropDown/DropDownMenuCategory';
import DropDownMenuBrand from '../dropDown/DropDownMenuBrand';
import InputForm from '../UI/input/InputForm';


const CreatePart = ({show, onHide}) => { 
    const {part} = useContext(Context)
    if (!show) return null

    return (
        <div show={show} onHide={onHide} className={styles.createPart__background} onClick={(e) => {if (e.currentTarget === e.target) {onHide()}}}>
            <div className={styles.createPart__active}>
                <div onClick={onHide} className={styles.createPart__close} >
                    <img alt='createCategoryLogo' src={xImage} />
                </div>
                <form className={styles.createPart__window}>
                    <div className={styles.createPart__header_name}>
                        Добавить Запчасть
                    </div>
                    <div className={styles.createPart__body_container}>
                        <DropDownMenuCategory />
                        <DropDownMenuBrand />
                        <InputForm 
                            placeholder='Введите название группы...'/>
                        <InputForm 
                            placeholder='Введите название бренда...'/>
                        <InputForm 
                            placeholder='Введите номер бренда...'/>
                        <InputForm 
                            placeholder='Введите название аналогов...'/>
                        <InputForm 
                            placeholder='Введите название запчасти...'/>
                        <InputForm 
                            placeholder='Введите цену...'
                            type='number'
                            />
                        <InputForm 
                            placeholder='Введите кол-во на Диксона...'
                            type='number'
                            />
                        <InputForm 
                            placeholder='Введите кол-во на Семафорной...'
                            type='number'
                            />
                        <InputForm 
                            placeholder='Введите кол-во на Ладо...'
                            type='number'
                            />
                        <InputForm 
                            placeholder='Введите кол-во на Калинина...'
                            type='number'
                            />
                        <InputForm 
                            placeholder='Выберите файл'
                            type='file'
                            />
                        
                        
                        <footer className={styles.createPart__window_footer}>
                        <ButtonAdd />
                        <ButtonClose onClick={onHide} />
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePart;