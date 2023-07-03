import React from "react";
import type { Dispatch, SetStateAction } from 'react';
import type { CSSProperties, Task } from '../../types';


interface FilterModalProps {
    title1: string;
    title2: string;
    title3: string;
    type: string;
    task ? : Task;
    setIsEditable: Dispatch<SetStateAction<boolean>>;
}

const FilterModal = ({
    title1,
    title2,
    title3,
    setIsEditable
}: FilterModalProps): JSX.Element => {
    
    return (
        <div style={styles.container}>
            <span
                    className='material-icons'
                    style={styles.icon}
                    onClick={(): void => {
                        setIsEditable(false);

                    }}
                >
                    close
                </span>
            
            <h1>{title1}</h1>
            <h1>{title2}</h1>
            <h1>{title3}</h1>
        </div>
    );
}

const styles: CSSProperties = {
    container: {
      border: '1px solid gray',
      position: 'fixed',
      top: '20%',
      left: '40%',
      width: '25%',
      backgroundColor: '#fff',
      padding: '28px',
      zIndex: 10,
    },
    icon: {
        cursor: 'pointer',
        display: 'flex',
        
    }
  
  };

  export default FilterModal;