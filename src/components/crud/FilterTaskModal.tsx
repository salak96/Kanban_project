import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { CSSProperties, Task } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress, faCheck, faListCheck } from '@fortawesome/free-solid-svg-icons';

interface FilterModalProps {
    title1: string;
    title2: string;
    title3: string;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    type: string;
    Task?: Task;
}

const FilterModal = ({ title1, title2, title3, setIsModal }: FilterModalProps): JSX.Element => {
    
    return (
        <div style={styles.container}>
            <span
                className='material-icons'
                style={styles.icon}
                onClick={(): void => {
                    setIsModal(false);
                }}
            >
                close
            </span>
            <div style={styles.title}>
                <FontAwesomeIcon icon={faCheck} />
                <h3>{title1}</h3>
            </div>
            <div style={styles.title}>
                <FontAwesomeIcon icon={faListCheck} />
                <h3>{title2}</h3>
            </div>
            <div style={styles.title}>
                <FontAwesomeIcon icon={faBarsProgress} />
                <h3>{title3}</h3>
            </div>
        </div>
    );
};

const styles: CSSProperties = {
    container: {
        border: '1px solid gray',
        position: 'fixed',
        top: '5%',
        left: '52%',
        width: '7%',
        transform: 'translateX(-30%)',
        backgroundColor: '#fff',
        padding: '28px',
        zIndex: 10,
        fontSize: '11px',
    },
    icon: {
        cursor: 'pointer',
        position: 'absolute',
        top: '10px',
        right: '20px',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
   
    },
};

export default FilterModal;
