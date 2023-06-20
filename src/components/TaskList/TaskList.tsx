import React from 'react';
import { useRecoilValue } from 'recoil';
import { tasksState } from '../../feactures/TaskAtoms';

import type { Task,CSSProperties } from '../../types';
import TaskListItem from './TaskListItem';


const TaskList  = (): JSX.Element => {
    const task : Task[] =useRecoilValue(tasksState);
    return (
        <div style={styles.container}>
          <h1 style={styles.heading}>Your Tasks</h1>
          <div style={styles.taskButtons}>
            <button style={styles.button}>
              <span className="material-icons">add</span>Add task
            </button>
            <button style={styles.button}>
              <span className="material-icons">sort</span>Filter tasks
            </button>
          </div>
          <div>
            <div style={styles.tableHead}>
              <div style={styles.tableHeaderTaskName}>Task Name</div>
              <div style={styles.tableHeaderDetail}>Detail</div>
              <div style={styles.tableHeaderDueDate}>Due Date</div>
              <div style={styles.tableHeaderProgress}>Progress</div>
            </div>
            {task.map((task: Task) => {
              return <TaskListItem key={task.id} task={task} />
            })}
          </div>
        </div>
      )
}
      const styles: CSSProperties = {
        container: {
          padding: '20px',
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
        },
        link: {
          padding: '16px',
          marginRight: '24px',
        },
      }
      
export default TaskList ;