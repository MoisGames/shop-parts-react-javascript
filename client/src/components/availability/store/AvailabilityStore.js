import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchOneParts } from '../../../http/partAPI';
import styles from './AvailabilityStore.module.css'

const AvailabilityStore = () => {
    const [part, setPart] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        fetchOneParts(id).then(data => setPart(data))
        
    }, [])
    
    return (
        <div className={styles.availabilityStore__container} >
            {part.diksona > 0 ?
                <span className={styles.availabilityStore__row}>Диксона, 1 : {part.diksona} шт.</span>
                :
                null
            }
            {part.lado > 0 ?
                <span className={styles.availabilityStore__row}>Ладо Кецховели 54 : {part.lado} шт.</span>            
                :
                null
            }
            {part.semaf > 0 ?
                <span className={styles.availabilityStore__row}>Семафорная 261a/2 : {part.semaf} шт.</span>            
                :
                null
            }
            {part.kalinina > 0 ?
                <span className={styles.availabilityStore__row}>Калинина 79/1 : {part.kalinina} шт.</span>
                :
                null
            }
        </div>
    );
};

export default AvailabilityStore;