import React from 'react';
import type { Task, CSSProperties } from '../../types';
import { TASK_PROGRESS_ID } from '../../constants/app';
import { useRecoilState } from 'recoil';
import { tasksState } from '../../feactures/TaskAtoms';

interface TaskCardProps {
    task: Task;
}
// Definisikan function ini
const getIconStyle = (progressOrder: number): React.CSSProperties => {
    const color: '#55C89F' | '#C5C5C5' = progressOrder === TASK_PROGRESS_ID.COMPLETED ? '#55C89F' : '#C5C5C5';

    const cursor: 'default' | 'pointer' = progressOrder === TASK_PROGRESS_ID.COMPLETED ? 'default' : 'pointer';

    return {
        color,
        cursor,
        fontSize: '28px',
    };
};

const getArrowPositionStyle = (progressOrder: number): React.CSSProperties => {
    const justifyContentValue: 'flex-end' | 'space-between' = TASK_PROGRESS_ID.NOT_STARTED === 1 ? 'flex-end' : 'space-between';
    return {
        display: 'flex',
        justifyContent: justifyContentValue,
    };
};

const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
    // Ditambahkan
    const [tasks, setTasks] = useRecoilState<Task[]>(tasksState);

    // Definisikan function ini
    const completeTask = (taskId: number): void => {
        const updatedTasks: Task[] = tasks.map((task) => (task.id === taskId ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED } : task));
        setTasks(updatedTasks);
    };
    return (
        <div style={styles.taskCard}>
            <div style={styles.taskIcons}>
                <div
                    className='material-icons'
                    style={getIconStyle(task.progressOrder)} // Diperbarui
                    onClick={(): void => {
                        completeTask(task.id);// Ditambahkan
                    }}
                >
                    check_circle
                </div>
            </div>
            <p style={styles.taskTitle}>{task.title}</p>
            <div>
                <p>{task.detail}</p>
            </div>
            <div>
                <p>Due on {task.dueDate}</p>
            </div>
            <div style={getArrowPositionStyle(task.progressOrder)}>
                {/* Raw data telah digantikan huruf CAPITAL*/}
                {task.progressOrder !== TASK_PROGRESS_ID.NOT_STARTED && <button className='material-icons'>chevron_left</button>}
                {task.progressOrder !== TASK_PROGRESS_ID.COMPLETED && <button className='material-icons'>chevron_right</button>}
            </div>
        </div>
    );
};

const styles: CSSProperties = {
    taskCard: {
        backgroundColor: '#C7EFD0',
        borderRadius: '12px',
        padding: '24px',
        margin: '12px 0',
        fontSize: '20px',
        overflowWrap: 'anywhere',
        position: 'relative',
    },
    taskIcons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    menuIcon: {
        cursor: 'pointer',
    },
    taskTitle: {
        fontSize: '30px',
    },
    arrowsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default TaskCard;
