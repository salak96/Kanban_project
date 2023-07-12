import { useRecoilState } from 'recoil';
import { tasksState } from '../TaskAtoms';
import { Task } from '../../types';
import { useState } from 'react';

export const useEditTask = () => {
    const [tasks, setTasks] = useRecoilState(tasksState);
    const [setIsFilter, setFilter] = useState<boolean>(false);

    const deleteTask = (taskId: number): void => {
        const updatedTasks: Task[] = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const updateTaskProgress = (updatedTask: Task, progressOrder: number): Task => {
        return { ...updatedTask, progressOrder };
    };

    const editTask = (updatedTask: Task): void => {
        setFilter(true);
        const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updateTaskProgress(updatedTask, updatedTask.progressOrder) : task));

        setTasks(updatedTasks);
    };

    return {
        tasks,
        editTask,
        deleteTask,
        setIsFilter,
    };
};
