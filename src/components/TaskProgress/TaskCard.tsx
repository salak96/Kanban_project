import React from 'react';
import type { Task, CSSProperties } from '../../types';
import { TASK_PROGRESS_ID } from '../../constants/app';
import { useRecoilState } from 'recoil';
import { tasksState } from '../../feactures/TaskAtoms';
import { useMoveTask } from '../../feactures/hooks/MoveTask';


interface TaskCardProps {
    task: Task;
}

export const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
    const [tasks, setTasks] = useRecoilState<Task[]>(tasksState);
    const { moveTaskCard } = useMoveTask();

    const completeTask = (taskId: number): void => {
        const updatedTasks: Task[] = tasks.map((task) => (task.id === taskId ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED } : task));
        setTasks(updatedTasks);
    };

    const handleMoveCard = (directionNumber: 1 | -1): void => {
        moveTaskCard(task.id, directionNumber);
    };
    console.log(handleMoveCard);

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
        const justifyContentValue: 'flex-end' | 'space-between' = progressOrder === TASK_PROGRESS_ID.NOT_STARTED ? 'flex-end' : 'space-between';
        return {
            display: 'flex',
            justifyContent: justifyContentValue,
        };
    };

    return (
        <div style={styles.taskCard}>
            <div style={styles.taskIcons}>
                <div
                    className='material-icons'
                    style={getIconStyle(task.progressOrder)
                    // responsive
                    
                    }

                    onClick={(): void => {
                        completeTask(task.id);
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
                {task.progressOrder !== TASK_PROGRESS_ID.NOT_STARTED && (
                    <button className='material-icons' onClick={() => handleMoveCard(-1)}>
                        chevron_left
                    </button>
                )}
                {task.progressOrder !== TASK_PROGRESS_ID.COMPLETED && (
                    <button className='material-icons' onClick={() => handleMoveCard(1)}>
                        chevron_right
                    </button>
                )}
            </div>
        </div>
    );
};

const mediaQueries = {
    tablet: '@media (max-width: 768px)',
    mobile: '@media (max-width: 480px)',
};

const styles:CSSProperties  = {
    taskCard: {
        backgroundColor: '#C7EFD0',
        borderRadius: '12px',
        padding: '24px',
        margin: '12px 0',
        fontSize: '20px',
        overflowWrap: 'anywhere',
        position: 'relative',
    },
    button: {
        color: '#55C89F',
        cursor: 'pointer',
        fontSize: '28px',
    }
};