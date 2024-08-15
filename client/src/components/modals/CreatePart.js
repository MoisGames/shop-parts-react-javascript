import React, { useContext, useState } from 'react';
import styles from './CreatePart.module.css'
import xImage from '../../../src/assets/image/X.png'
import ButtonClose from '../../components/UI/button/ButtonClose/ButtonClose'
import ButtonAdd from '../UI/button/ButtonAdd/ButtonAddItem'
import {Context} from '../../index'
import DropDownMenuCategory from '../dropDown/DropDownMenuCategory';
import DropDownMenuBrand from '../dropDown/DropDownMenuBrand';
import InputForm from '../UI/input/InputForm';
import { observer } from 'mobx-react-lite';
import { createPart } from '../../http/partAPI';
import selectedCategory from '../../store/PartStore'
import selectedBrand from '../../store/PartStore'



const CreatePart = observer(({show, onHide}) => { 
    const {part} = useContext(Context)
    const [groups, setGroups] = useState('')
    const [brands, setBrands] = useState('')
    const [numberBrand, setNumberBrand] = useState('')
    const [analogue, setAnalogue] = useState('')
    const [nameParts, setNameParts] = useState('')
    const [price, setPrice] = useState('')
    const [diksona, setDiksona] = useState('')
    const [semaf, setSemaf] = useState('')
    const [lado, setLado] = useState('')
    const [kalinina, setKalinina] = useState('')
    const [file, setFile] = useState('')
    const [brand, setbrand] = useState('')
    const [category, setCategory] = useState('')

    if (!show) return null
    
    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addPart = () => {
        const formData = new FormData()
        formData.append('groups', groups)
        formData.append('brands', brands)
        formData.append('number_brand', numberBrand)
        formData.append('analogue', analogue )
        formData.append('name_parts', nameParts )
        formData.append('price', `${price}`)
        formData.append('diksona', `${diksona}` )
        formData.append('semaf', `${semaf}`)
        formData.append('lado', `${lado}`)
        formData.append('kalinina', `${kalinina}` )
        formData.append('img', file )
        formData.append('brandId', part.selectedBrand.id)
        formData.append('categoryId', part.selectedCategory.id )
        
        createPart(formData)
    }
    // onClick={(e) => {if (e.currentTarget === e.target) {onHide()}}}
    return (
        <div show={show} onHide={onHide} className={styles.createPart__background}>
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
                            value={groups}
                            onChange={e => setGroups(e.target.value)} 
                            placeholder='Введите название группы...'
                            type='text'
                            />
                        <InputForm
                            value={brands}
                            onChange={e => setBrands(e.target.value)} 
                            placeholder='Введите название бренда...'
                            type='text'
                            />
                        <InputForm
                            value={numberBrand}
                            onChange={e => setNumberBrand(e.target.value)} 
                            placeholder='Введите номер бренда...'
                            type='text'
                            />
                        <InputForm
                            value={analogue}
                            onChange={e => setAnalogue(e.target.value)} 
                            placeholder='Введите название аналогов...'
                            type='text'
                            />
                        <InputForm
                            value={nameParts}
                            onChange={e => setNameParts(e.target.value)} 
                            placeholder='Введите название запчасти...'
                            type='text'
                            />
                        <InputForm
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))} 
                            placeholder='Введите цену...'
                            type='number'
                            />
                        <InputForm
                            value={diksona}
                            onChange={e => setDiksona(Number(e.target.value))} 
                            placeholder='Введите кол-во на Диксона...'
                            type='number'
                            />
                        <InputForm
                            value={semaf}
                            onChange={e => setSemaf(Number(e.target.value))} 
                            placeholder='Введите кол-во на Семафорной...'
                            type='number'
                            />
                        <InputForm
                            value={lado}
                            onChange={e => setLado(Number(e.target.value))} 
                            placeholder='Введите кол-во на Ладо...'
                            type='number'
                            />
                        <InputForm
                            value={kalinina}
                            onChange={e => setKalinina(Number(e.target.value))} 
                            placeholder='Введите кол-во на Калинина...'
                            type='number'
                            />
                        <InputForm
                            
                            onChange={selectFile}
                            placeholder='Выберите файл'
                            type='file'
                            />
                        
                        
                        <footer className={styles.createPart__window_footer}>
                        <ButtonAdd onClick={addPart}/>
                        <ButtonClose onClick={onHide} />
                        </footer>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default CreatePart;