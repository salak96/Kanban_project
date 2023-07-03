import React from "react";
import type { Dispatch, SetStateAction } from 'react';
import type { CSSProperties, Task } from '../../types';


interface FilterModalProps {
    title1: string;
    title2: string;
    title3: string;
    
}

const FilterModal = ({
    title1,
    title2,
    title3,
}: FilterModalProps): JSX.Element => {
    
    return (
        <div style={styles.container}>
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
  
  };

  export default FilterModal;