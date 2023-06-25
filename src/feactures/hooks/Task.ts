import { useRecoilState } from 'recoil';
import { tasksState } from '../TaskAtoms';
import { TASK_PROGRESS_ID } from '../../constants/app';
import { Task } from '../../types';
import { useState } from 'react';

interface useTaskActionType {
    moveTaskCard: (taskId: number, directionNumber: 1 | -1) => void;
    addTask: (title: string, detail: string, dueDate: string, progressOrder: number) => void;
}

export const useTasksAction = (): useTaskActionType => {
    const [tasks, setTasks] = useRecoilState(tasksState);
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const completedTask = (taskId: number): void => {
        const updatedTasks: Task[] = tasks.map((task) => (task.id === taskId ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED } : task));
        setTasks(updatedTasks);
    };

    const editTask = (taskId: number): void => {
        setIsEditable(true);
        const updatedTasks = tasks.map((task) => (task.id === taskId ? updateTaskProgress(task, TASK_PROGRESS_ID.IN_PROGRESS) : task));
        setTasks(updatedTasks);
    };

    const updateTaskProgress = (task: Task, progressOrder: number): Task => {
        return { ...task, progressOrder };
    };

    const deleteTask = (taskId: number): void => {
        const updatedTasks: Task[] = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

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
        addTask,
        completedTask,
        editTask,
        deleteTask,
        moveTaskCard: (taskId: number, directionNumber: 1 | -1) => {
            const updatedTasks: Task[] = tasks.map((task) =>
                task.id === taskId ? { ...task, progressOrder: task.progressOrder + directionNumber } : task
            );
            setTasks(updatedTasks);
        },
    };
};
