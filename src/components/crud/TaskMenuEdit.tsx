import React, { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { CSSProperties } from '../../types';
import TaskModalEdit from './TaskModalEdit';
import { useDeleteTask } from '../../feactures/hooks/DeleteTask';
import { useRecoilValue } from 'recoil';
import { tasksState } from '../../feactures/TaskAtoms';

interface TaskMenuProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const TaskMenu = ({ setIsMenuOpen }: TaskMenuProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const deleteTask = useDeleteTask();
  const tasks = useRecoilValue(tasksState);

  const handleDelete = (taskId: number): void => {
    deleteTask(taskId);
    setIsMenuOpen(false);
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

  const task = tasks[0];

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
        <button
          style={styles.button}
          onClick={() => {
            handleDelete(task.id);
          }}
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
        <TaskModalEdit
          headingTitle='Edit Task'
          type='edit'
          setIsModalOpen={setIsModalOpen}
          defaultProgressOrder={0}
          task={task}
        />
      )}
    </div>
  );
};

export default TaskMenu;
