import React from 'react';
import { useRecoilValue } from 'recoil';
import { tasksState } from '../../feactures/TaskAtoms';
import type { Task, CSSProperties } from '../../types';
import TaskListItem from './TaskListItem';
import { useState } from 'react';
import TaskModal from '../shared/TaskModal'; // Ditambahkan
import { TASK_PROGRESS_ID, TASK_MODAL_TYPE } from '../../constants/app'; // Ditambahkan
import FilterModal from '../crud/FilterTaskModal';

const TaskList = (): JSX.Element => {
    const task: Task[] = useRecoilValue(tasksState);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Your Tasks</h1>
            <div style={styles.taskButtons}>
                <button
                    style={styles.button}
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                >
                    <span className='material-icons'>add</span>Add task
                </button>
                {isModalOpen && (
                    <TaskModal
                        headingTitle='Add your task'
                        type={TASK_MODAL_TYPE.ADD} // Ditambahkan
                        setIsModalOpen={setIsModalOpen}
                        defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
                       
                    /> 
                )}  

                <button
                    style={styles.button}
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                >
                    <span className='material-icons'>sort</span>Filter tasks
                </button>
                {isModalOpen && (
                    <FilterModal
                        title1='Sort by'
                        title2='Progress'
                        title3='Due date'
                    
                    /> 
                )} 
               
            </div>
            <div>
                <div style={styles.tableHead}>
                    <div style={styles.tableHeaderTaskName}>Task Name</div>
                    <div style={styles.tableHeaderDetail}>Detail</div>
                    <div style={styles.tableHeaderDueDate}>Due Date</div>
                    <div style={styles.tableHeaderProgress}>Progress</div>
                </div>
                {task.map((task: Task) => {
                    return <TaskListItem key={task.id} task={task} />;
                })}
            </div>
        </div>
    );
};
const styles: CSSProperties = {
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '40px',
    },
    heading: {
        color: '#55C89F',
        marginBottom: '60px',
    },
    taskButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    button: {
        padding: '8px 16px',
        margin: '0 8px',
        backgroundColor: 'red',
        color: '#fff',
        borderRadius: '4px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    tableHead: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px',
        color: '#fff',
        backgroundColor: '#55C89F',
        margin: '10px 0',
        borderRadius: '12px',
    },
    tableHeaderTaskName: {
        flex: '2',
    },
    tableHeaderDetail: {
        flex: '2',
    },
    tableHeaderDueDate: {
        flex: '2',
    },
    tableHeaderProgress: {
        flex: '1',
    },
};

export default TaskList;