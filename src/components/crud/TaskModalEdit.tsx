import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { CSSProperties } from '../../types';
import TaskForm from './TaskFormEdit';

interface TaskModalProps {
    headingTitle: string;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    defaultProgressOrder: number;
    type: string;
}

const TaskModal = ({ headingTitle, type, setIsModalOpen, defaultProgressOrder }: TaskModalProps): JSX.Element => {
    return (
        <div style={styles.container}>
            <div style={styles.modalTop}>
                <h1>{headingTitle}</h1>
                <span
                    className='material-icons'
                    style={styles.icon}
                    onClick={(): void => {
                        setIsModalOpen(false);
                    }}
                >
                    close
                </span>
            </div>
            <TaskForm type={type} defaultProgressOrder={defaultProgressOrder} setIsModalOpen={setIsModalOpen} />
        </div>
    );
};

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
    modalTop: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    icon: {
        cursor: 'pointer',
    },
};

export default TaskModal;