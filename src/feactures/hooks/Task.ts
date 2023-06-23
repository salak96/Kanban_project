import { useRecoilState } from 'recoil';
import { tasksState } from '../TaskAtoms';
import { TASK_PROGRESS_ID } from '../../constants/app';
import { Task } from '../../types';

interface useTaskActionType {
    moveTaskCard: (taskId: number, directionNumber: 1 | -1) => void;
    addTask: (title: string, detail: string, dueDate: string, progressOrder: number) => void;
}

export const useTasksAction = (): useTaskActionType => {
    const [tasks, setTasks] = useRecoilState(tasksState);

    const completedTask = (taskid: number): void => {
        const updatedTasks: Task[] = tasks.map((task) => (task.id === taskid ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED } : task));
        setTasks(updatedTasks);
    };

    // Ditambahkan
    const addTask = (title: string, detail: string, dueDate: string, progressOrder: number): void => {
        const newTask: Task = {
            id: tasks.length + 1,
            title,
            detail,
            dueDate,
            progressOrder,
        };
        setTasks([...tasks, newTask]);
    };
    return {
        completedTask,
        addTask,
    };
};
