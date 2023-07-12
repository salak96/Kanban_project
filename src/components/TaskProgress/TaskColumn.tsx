import React from 'react';
import { TaskCard } from './TaskCard';
import type { Task, CSSProperties } from '../../types';
import TaskModal from '../shared/TaskModal'; // Ditambahkan
import { TASK_MODAL_TYPE, TASK_PROGRESS_ID } from '../../constants/app'; // Ditambahkan
import { useState } from 'react'; // useState ditambahkan
interface TaskColumnProps {
    columnTitle: string;
    tasks: Task[];
}

const TaskColumn = ({ columnTitle, tasks }: TaskColumnProps): JSX.Element => {
    // Ditambahkan
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <div style={styles.categoryColumn}>
            <div style={styles.columnTitleWrapper}>
                <h2 style={styles.categoryTitle}>{columnTitle}</h2>
                <div className='material-icons' style={styles.plusIcon}>
                    <button onClick={() => setIsModalOpen(true)}>add</button>
                </div>
            </div>
            <div>
                {tasks.map((task: Task) => {
                    return <TaskCard key={task.id} task={task} />;
                })}
            </div>
            {isModalOpen && (
                <TaskModal
                    headingTitle='Add your task'
                    type={TASK_MODAL_TYPE.ADD} // Ditambahkan
                    setIsModalOpen={setIsModalOpen}
                    defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
                />
            )}
        </div>
    );
};

const styles: CSSProperties = {
    plusIcon: {
        cursor: 'pointer',
        color: '#55C89F',
        backgroundColor: 'red',
        padding: '2px',
        borderRadius: '4px',
        marginRight: '4px',
    },
    categoryColumn: {
        width: '22%',
    },
    columnTitleWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 4px',
    },
    button: {
        cursor: 'pointer',
        backgroundColor: '#55C89F',
        color: '#fff',
        padding: '4px 8px',
        borderRadius: '4px',
    },
    categoryTitle: {
        fontWeight: 'bold',
    },
};

// Responsive styles
styles.categoryColumn = {
    ...styles.categoryColumn,
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
};

export default TaskColumn;
