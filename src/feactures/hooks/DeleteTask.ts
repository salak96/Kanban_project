import { useRecoilState } from 'recoil';
import { tasksState } from '../TaskAtoms';
import { Task } from '../../types';

export const useDeleteTask = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  const deleteTask = (taskId: number): void => {
    const updatedTasks: Task[] = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return deleteTask;
};
