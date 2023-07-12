;
import { useRecoilValue } from 'recoil';
import type { Task, CSSProperties } from '../types';
import { completedTasksSelector, uncompletedTasksSelector } from '../feactures/tasks/TaskSelector';
import { Link } from 'react-router-dom';
const TaskSummary = (): JSX.Element => {
    const completedTasks = useRecoilValue<Task[]>(completedTasksSelector);

    const uncompletedTasks = useRecoilValue<Task[]>(uncompletedTasksSelector);

    return (
        <div style={styles.container}>
            <div style={styles.heading}></div>
            <h1 style={styles.heading}>Summary of Your Tasks</h1>
            <div style={styles.list}>
                <span className='material-icons'>check_circle</span>
                <h2>
                    You have completed {completedTasks.length} {completedTasks.length <= 1 ? 'task' : 'tasks'}
                </h2>
            </div>
            <div style={styles.list}>
                <span className='material-icons'>list</span>
                <h2>
                    You still have {uncompletedTasks.length} {uncompletedTasks.length <= 1 ? 'task' : 'tasks'} left
                </h2>
                <h2>You have {completedTasks.length} tasks</h2>
            </div>
            <div style={styles.links}>
                <div style={styles.link2}>
                    <Link to='/task-list' style={styles.link}>
                        See Your Task List
                    </Link>
                    <Link to='/task-progress' style={styles.link}>
                        Manage Your Task Progress
                    </Link>
                </div>
            </div>
        </div>
    );
};

const styles: CSSProperties = {
    container: {
        padding: '40px',
    },
    heading: {
        color: '#55C89F',
        marginBottom: '60px',
    },
    list: {
        color: '#fff',
        backgroundColor: '#55C89F',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '40px',
        width: '100%',
        height: '5%',
        borderRadius: '8px',
        border: '2px solid #55C89F',
        fontSize: '14px',
        textDecoration: 'none',
        padding: '16px',
        margin: '12px 0',
    },
    link: {
        padding: '16px',
        marginRight: '24px',
        backgroundColor: '#55ACC8',
        color: '#fff',
        borderRadius: '8px',
        textDecoration: 'none',
    },
    link2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        fontSize: '14px',
        padding: '16px',
    },
};
export default TaskSummary;
