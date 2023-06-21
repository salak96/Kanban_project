import React from 'react';
import { TaskCard } from './TaskCard';
import type { Task, CSSProperties } from '../../types';

interface TaskColumnProps {
    columnTitle: string;
    tasks: Task[];
}

const TaskColumn = ({ columnTitle, tasks }: TaskColumnProps): JSX.Element => {
    return (
        <div style={styles.categoryColumn}>
            <div style={styles.columnTitleWrapper}>
                <h2 style={styles.categoryTitle}>{columnTitle}</h2>
                <div className='material-icons' style={styles.plusIcon}>
                    add
                </div>
            </div>
            <div>
                {tasks.map((task: Task) => {
                    return <TaskCard key={task.id} task={task} />;
                })}
            </div>
        </div>
    );
};

const mediaQueries = {
    tablet: '@media (max-width: 768px)',
    mobile: '@media (max-width: 480px)',
};

const styles:  CSSProperties  = {
    plusIcon: {
        cursor: 'pointer',
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
};

// Responsive styles
styles.categoryColumn = {
    ...styles.categoryColumn,
    [mediaQueries.tablet]: {
        width: '40%',
    },
    [mediaQueries.mobile]: {
        width: '100%',
    },
};

export default TaskColumn;
