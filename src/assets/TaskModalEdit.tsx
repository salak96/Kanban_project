import React, { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { CSSProperties, Task } from '../../types';
import TaskForm from './TaskFormEdit';
import { useEditTask } from '../../feactures/hooks/EditTask';

interface TaskModalProps {
  headingTitle: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  defaultProgressOrder: number;
  type: string;
  task: Task; // Perbaiki tipe data prop "task" menjadi Task
  taskId: number
}

const TaskModal = ({
  headingTitle,
  type,
  setIsModalOpen,
  defaultProgressOrder,
  task,
}: TaskModalProps): JSX.Element => {
  const [isEditable, setIsEditable] = useState<boolean>(true);
  
  return (
    <div style={styles.container}>
      <div style={styles.modalTop}>
        <h1>{headingTitle}</h1>
        <span
          className='material-icons'
          style={styles.icon}
          onClick={(): void => {
            setIsModalOpen(false);
          }}
        >
          close
        </span>
      </div>
      <TaskForm
        type={type}
        defaultProgressOrder={defaultProgressOrder}
        setIsEditable={setIsEditable}
        task={task}
        taskId={task.id}
        onEditTask={useEditTask}
      />
      {!isEditable && <div style={styles.successMessage}>Task successfully updated.</div>}
    </div>
  );
};

const styles: CSSProperties = {
  container: {
    border: '1px solid gray',
    position: 'fixed',
    top: '20%',
    left: '40%',
    width: '25%',
    backgroundColor: '#fff',
    padding: '28px',
    zIndex: 10,
  },
  modalTop: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    cursor: 'pointer',
  },
  successMessage: {
    marginTop: '16px',
    color: 'red',
  },
};

export default TaskModal;
