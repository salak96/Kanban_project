import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { CSSProperties, Task } from '../../types';

interface FilterModalProps {
    title1: string;
    title2: string;
    title3: string;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    type: string; Task ?: Task;
}   

const FilterModal = ({ title1, title2, title3,setIsModal, }: FilterModalProps): JSX.Element => {
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
            <h3>{title1}</h3>
            </div>
            <div style={styles.title}>
            <h3>{title2}</h3>
            </div>
            <div style={styles.title}>
            <h3>{title3}</h3>
            </div>
        </div>
    );
};

const styles: CSSProperties = {
    container: {
        border: '1px solid gray',
        position: 'fixed',
        top: '20%',
        left: '40%',
        width: '5%',
        backgroundColor: '#fff',
        padding: '28px',
        zIndex: 10,
    },
    icon: {
        cursor: 'pointer',
        position: 'absolute',
        top: '20px',
        right: '20px',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',

    }
};

export default FilterModal;
