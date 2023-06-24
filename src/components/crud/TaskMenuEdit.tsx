import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { CSSProperties } from '../../types';
import { TASK_MODAL_ID, TASK_PROGRESS_ID } from '../../constants/app';
import TaskModalEdit from './TaskModalEdit';
import { useState } from 'react';
interface TaskMenuProps {
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const TaskMenu = ({ setIsMenuOpen }: TaskMenuProps): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);//ditambahkan
    return (
        <div style={styles.menu}>
            <div style={styles.menuItem}>
            <button
                    style={styles.button}
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                >
                      <span className='material-icons'>edit</span>Edit
                </button>
            </div>
            <div style={styles.menuItem}>
                <span className='material-icons'>delete</span>Delete
            </div>
            <span
                className='material-icons'
                style={styles.closeIcon}
                onClick={(): void => {
                    setIsMenuOpen(false);
                }}
            >
                close
            </span>
            {isModalOpen && (
                    <TaskModalEdit
                        headingTitle='Edit your task'
                        type={TASK_MODAL_ID.EDIT}
                        setIsModalOpen={setIsModalOpen}
                        defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
                    />
                )}
        </div>
        
    );
};

const styles: CSSProperties = {
    menu: {
        backgroundColor: '#fff',
        border: '1px solid gray',
        padding: '8px 16px',
        position: 'absolute',
        top: '-10px',
        right: '4%',
        zIndex: 10,
    },
    menuItem: {
        display: 'flex',
        marginBottom: '8px',
        cursor: 'pointer',
    },
    closeIcon: {
        position: 'absolute',
        top: '0px',
        right: '2px',
        cursor: 'pointer',
    },
};

export default TaskMenu;
