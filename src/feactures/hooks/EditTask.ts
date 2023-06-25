import { useRecoilState } from 'recoil';
import { tasksState } from '../TaskAtoms';
import { Task } from '../../types';
import { useState } from 'react';

export const useEditTask = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const updateTaskProgress = (updatedTask: Task, progressOrder: number): Task => {
    return { ...updatedTask, progressOrder };
  };

  const editTaskCard = (updatedTask: Task): void => {
    setIsEditable(true);
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updateTaskProgress(updatedTask, updatedTask.progressOrder) : task
    );
    
    setTasks(updatedTasks);
  };

  return {
    tasks,
    editTaskCard,
  };
};
