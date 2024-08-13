import React, { useContext, useEffect, useState } from 'react';
import styles from './styles/PartPage.module.css'
import ButtonBuy from '../components/UI/button/ButtonBuy';
import { useParams } from 'react-router-dom';
import { fetchOneParts} from '../http/partAPI';
import CategoryBar from '../components/UI/categoryBar/CategoryBar';
import BrandBar from '../components/UI/brandBar/BrandBar';
import AvaibilityYes from '../components/availability/AvaibilityYes'
import AvailabilityNo from '../components/availability/AvailabilityNo'
import AvailabilityStore from '../components/availability/store/AvailabilityStore';



const PartPage = () => {
    const [part, setPart] = useState({})
    
    const {id} = useParams()
    let availability = 0

    const AvailabilityPart = () => {
        availability = part.diksona + part.lado + part.semaf + part.kalinina
        return availability
    }
    AvailabilityPart()

    useEffect(() => {
        fetchOneParts(id).then(data => setPart(data))
        
    }, [])

    
    
    return (
        
        <article className={styles.partPage__container_main}>
            <CategoryBar />
            <div className={styles.partPage__container_brand}>
            <BrandBar />
            <div className={styles.partPage__container_info}>
            <div className={styles.partPage__image_part_container}> 
                <img 
                    alt='image_part' 
                    className={styles.partPage__image_part} 
                    src={process.env.REACT_APP_API_URL + part.img}/>
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
                            <td className={styles.partPage__specification_sheet_second_column_design}>{part.number_brand}</td>
                        </tr>
                        <tr>
                            <td className={styles.partPage__specification_sheet_first_column_design}>Аналоги:</td>
                            <td className={styles.partPage__specification_sheet_second_column_design}>{part.analogue}</td>
                        </tr>
                        <tr>
                            <td className={styles.partPage__specification_sheet_first_column_design}>Группа:</td>
                            <td className={styles.partPage__specification_sheet_second_column_design}>{part.groups}</td>
                        </tr>
                        <tr>
                            <td className={styles.partPage__specification_sheet_first_column_design}>Артикул:</td>
                            <td className={styles.partPage__specification_sheet_second_column_design}>{part.id}</td>
                        </tr>
                    </table>
                </div>
                

                    <div className={styles.partPage__price_container}>
                         <div className={styles.partPage__price}>
                             {Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(part.price)}
                         </div>
                         <div className={styles.partPage__price_button}>
                            {availability > 0 ?
                            <ButtonBuy name='Купить' />
                            :
                            null
                            }
                            
                         </div>
                     </div>
                     <>
                     {availability > 0 ?
                        <>
                            <AvaibilityYes />
                            <AvailabilityStore />
                        </>
                    
                        :
                        <AvailabilityNo />
                        
                       
                        }
                     </>
                        
                     
                </div>
            </div>
            </div>
        </article>
    );
};

export default PartPage;