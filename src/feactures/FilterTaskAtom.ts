import { atom } from 'recoil';
import type { FilterInterface } from '../types';

export const FilterState = atom<FilterInterface[]>({
    key: 'FilterState',
    default: [
        {
            id: 1,
            type: 'Completed Tasks',
        },
        {
            id: 2,
            type: 'Uncompleted Tasks',
        },
        {
            id: 3,
            type: 'All Tasks',
        },
    ],
});

export const FilterStateId = atom({
    key: 'FilterStateId',
    default: 'all',
});
