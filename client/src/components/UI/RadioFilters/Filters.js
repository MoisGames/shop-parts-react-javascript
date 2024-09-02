import { React} from 'react';
import { useState } from 'react';
import styles from './Filters.module.css'
import RadioFilters from './RadioFilters';
import ButtonRadioFilters from '../button/ButtonRadioFilters/ButtonRadioFilters';

const Filters = () => {
    const [isOpen,setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={styles.filters__container}>
            <ButtonRadioFilters 
                text='Сортировка по:' 
                onClick={handleOpen}
                onBlur={handleClose}
                />
            {isOpen ?
                <RadioFilters />
            :
            null
            }
        </div>
    );
};

export default Filters;