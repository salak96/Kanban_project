import { useRecoilState } from 'recoil';
import { tasksState } from '../TaskAtoms';
import { Task } from '../../types';


export const useMoveTask = () => {
    const [tasks, setTasks] = useRecoilState(tasksState);

    const moveTaskCard = (taskId: number, directionNumber: 1 | -1): void => {
            const updatedTasks: Task[] = tasks.map((task) => (task.id === taskId ? { ...task, progressOrder:task.progressOrder+directionNumber } : task)); 
            setTasks(updatedTasks);
    };

    return {
        tasks,
        moveTaskCard,
    };
};
