import { selector } from 'recoil';
import { tasksState } from '../TaskAtoms';
import type { FilterInterface, Task } from '../../types';
import { SelectorKeys } from '../../constants/recoilKeys';
import { FilterState, FilterStateId } from '../FilterTaskAtom';

export const uncompletedTasksSelector = selector<Task[]>({
    key: SelectorKeys.UNCOMPLETED_TASKS,
    get: ({ get }) => {
        return get(tasksState).filter((task) => {
            return task.progressOrder !== 4;
        });
    },
});

export const completedTasksSelector = selector<Task[]>({
    key: SelectorKeys.COMPLETED_TASKS,
    get: ({ get }) => {
        return get(tasksState).filter((task) => {
            return task.progressOrder === 4;
        });
    },
});

export const notStartedTasksSelector = selector<Task[]>({
    key: SelectorKeys.NOT_STARTED_TASKS,
    get: ({ get }) => {
        return get(tasksState).filter((task) => {
            return task.progressOrder === 1;
        });
    },
});

export const inProgressTasksSelector = selector<Task[]>({
    key: SelectorKeys.IN_PROGRESS_TASKS,
    get: ({ get }) => {
        return get(tasksState).filter((task) => {
            return task.progressOrder === 2;
        });
    },
});
export const waitingTasksSelector = selector<Task[]>({
    key: SelectorKeys.WAITING_TASKS,
    get: ({ get }) => {
        return get(tasksState).filter((task) => {
            return task.progressOrder === 3;
        });
    },
});

export const incompleteTask = selector<Task[]>({
    key: 'SelectorKeys',
    get: ({ get }) => {
        return get(tasksState).filter((task) => {
            return task.progressOrder === 4;
        });
    },
});

//filter task
export const filterTask = selector({
    key: 'FilterTask',
    get: ({ get }) => {
        const filter = get(FilterStateId); // ditambahkan
        const taks = get(FilterState);

        // Menghasilkan state yang diperbarui berdasarkan nilai filter
        if (filter === 'all') {
            return taks.filter((FilterState) => FilterState.type === filter);
        }
        if (filter === 'completed') {
            return taks.filter((FilterState) => FilterState.type === filter);
        }
        if (filter === 'uncompleted') {
            return taks.filter((FilterState) => FilterState.type === filter);
        }
    },
});
