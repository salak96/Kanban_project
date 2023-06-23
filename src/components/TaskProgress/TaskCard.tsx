import React from 'react';
import type { Task, CSSProperties } from '../../types';
import { TASK_PROGRESS_ID } from '../../constants/app';
import { useMoveTask } from '../../feactures/hooks/MoveTask';
import { incompleteTask } from '../../feactures/tasks/TaskSelector';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import TaskMenu from '../shared/TaskMenu'; // Ditambahkan
interface TaskCardProps {
    task: Task;
}

export const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
    const { moveTaskCard } = useMoveTask();
    const handleMoveCard = (directionNumber: 1 | -1): void => {
        moveTaskCard(task.id, directionNumber);
    };
    const completedTasks: Task[] = useRecoilValue(incompleteTask);

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
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    return (
        <div style={styles.taskCard}>
            <div style={styles.taskIcons}>
                <div
                    className='material-icons'
                    style={getIconStyle(task.progressOrder)}
                    onClick={() => (completedTasks.includes(task) ? null : handleMoveCard(1))}
                >
                    check_circle
                </div>
            </div>
            <div
                className='material-icons'
                style={styles.menuIcon}
                onClick={(): void => {
                    setIsMenuOpen(true); // Ditambahkan
                }}
            >
                more_vert
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
                {/* Ditambahkan */}
            {isMenuOpen && <TaskMenu setIsMenuOpen={setIsMenuOpen} />}
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
    button: {
        color: '#55C89F',
        cursor: 'pointer',
        fontSize: '28px',
        display: 'flex',
    },
    taskIcons: {
        display: 'flex',
        alignItems: 'center',
    },
    taskTitle: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    icon: {
        marginRight: '8px',
    },
};
