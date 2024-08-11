import React from 'react';
import styles from './styles/PartPage.module.css'
import ButtonHeader from '../components/UI/button/ButtonHeader'
import ButtonBuy from '../components/UI/button/ButtonBuy';

const PartPage = () => {
    const part = {id:341,
        groups:"Подшипники  KOYO",
        brands:"KOYO",
        number_brands:"RNU0727",
        analogue: "Отсутствует", 
        name_parts: "RNU 0727 PZ  (LAND CR 80-задняя полуось) KOYO (90365-47013) 47-71-27", 
        price: 1122, 
        diksona: 1, 
        semaf: 0,
        lado: 0,
        kalinina: 0, 
        img: "https://img.hyperauto.ru/brands/koyo.png"}
    return (
        <article className={styles.partPage__container}>
            <div className={styles.partPage__image_part_container}>
                <img 
                    alt='image_part' 
                    className={styles.partPage__image_part} 
                    src={part.img}/>
            </div>
            <div className={styles.partPage__main_info}>
                <h1 className={styles.partPage__main_info_name}>
                    {part.name_parts}
                </h1>
                <div className={styles.partPage__main_info_brand}>
                    Бренд: {part.brands}
                </div>
                <div className={styles.partPage__specification_sheet_container}>
                    <table className={styles.partPage__specification_sheet_table}>
                        <tr>
                            <td className={styles.partPage__specification_sheet_first_column_design}>Номер производителя:</td>
                            <td className={styles.partPage__specification_sheet_second_column_design}>{part.number_brands}</td>
                        </tr>
                        <tr>
                            <td className={styles.partPage__specification_sheet_first_column_design}>Аналоги:</td>
                            <td className={styles.partPage__specification_sheet_second_column_design}>{part.analogue}</td>
                        </tr>
                        <tr>
                            <td className={styles.partPage__specification_sheet_first_column_design}>Группа:</td>
                            <td className={styles.partPage__specification_sheet_second_column_design}>{part.groups}</td>
                        </tr>
                    </table>
                </div>
                <div className={styles.partPage__price_container}>
                <div className={styles.partPage__price}>{Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(part.price)}</div>
                <div className={styles.partPage__price_button}><ButtonBuy name='Купить'/></div>
                </div>
            </div>
        </article>
    );
};

export default PartPage;