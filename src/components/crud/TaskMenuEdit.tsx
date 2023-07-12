import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { CSSProperties, Task } from '../../types';
import { useEditTask } from '../../feactures/hooks/EditTask';
import TaskModal from '../shared/TaskModal';
import { TASK_MODAL_TYPE, TASK_PROGRESS_ID } from '../../constants/app';

interface TaskMenuProps {
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    task: Task;
    taskId: number;
}
const TaskMenu = ({ setIsMenuOpen, taskId, task }: TaskMenuProps): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { deleteTask } = useEditTask();

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
    return (
        <div
            style={styles.menu} 
            data-testid="task-menu" // Ditambahkan tes
        >
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
                <button
                    style={styles.button}
                    onClick={() => {
                        deleteTask(taskId);
                    }}
                    data-testid='delete-button' // Ditambahkan tes
                >
                    <span className='material-icons'>delete</span>Delete
                </button>
            </div>
            <span
                className='material-icons'
                style={styles.closeIcon}
                onClick={() => {
                    setIsMenuOpen(false);
                }}
            >
                close
            </span>
            {isModalOpen && (
                <TaskModal
                    headingTitle='Add your task'
                    type={TASK_MODAL_TYPE.EDIT} // Ditambahkan
                    setIsModalOpen={setIsModalOpen}
                    defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
                    task={task}
                />
            )}
        </div>
    );
};

export default TaskMenu;
