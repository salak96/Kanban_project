import { atom } from 'recoil';

export const FilterState = atom({
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
