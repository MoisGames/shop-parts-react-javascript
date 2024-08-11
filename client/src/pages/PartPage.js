import React from 'react';
import styles from './styles/PartPage.module.css'

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
                <img className={styles.partPage__image_part} src={part.img}/>
            </div>
            <div className={styles.partPage__main_info}>
                <h1 className={styles.partPage}>
                    {part.name_parts}
                </h1>
            </div>
        </article>
    );
};

export default PartPage;