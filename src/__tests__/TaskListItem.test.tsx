import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { tasksState } from '../feactures/TaskAtoms';
import TaskList from '../components/TaskList/TaskList';
const taskss = [
    {
        id: 1,
        title: 'Test Task',
        detail: 'aaaaa',
        dueDate: '05-05-2023',
        progressOrder: 0,
    },
    {
        id: 2,
        title: 'Test Task 2',
        detail: 'bbbbb',
        dueDate: '01-01-2025',
        progressOrder: 0,
    },
];

function initializeState({ set }: MutableSnapshot) {
    set(tasksState, taskss);
}

describe('TaskListItem Component', () => {
    beforeEach(() => {
        render(
            <RecoilRoot initializeState={initializeState}>
                <TaskList />
            </RecoilRoot>
        );
    });

    //tes delete
    describe('Delete Task Feature', () => {
        test('A task can be deleted', async () => {
            let lengthBefore = 0;

            // Klik tombol "..." dan simpanjumlah data task pada `lengthBefore`
            await waitFor(() => {
                user.click(screen.getAllByTestId('task-menu-button')[0]);
                lengthBefore = screen.getAllByTestId('task-list-item').length;
                expect(screen.getByTestId('task-menu')).toBeInTheDocument();
            });

            // Klik tombol "Delete"
            await user.click(screen.getByTestId('delete-button'));

            // Periksa apakah jumlah data berkurang atau tidak
            await waitFor(() => {
                const lengthAfter = screen.getAllByTestId('task-list-item').length;
                expect(lengthBefore).toBeGreaterThan(lengthAfter);
            });
        });
    });
    //tes edit
    describe('Edit Task Feature', () => {
      test('A task can be edited', async () => {
        const newInputTitle = 'Task baru nya'
    
        await waitFor(() => {
          user.click(screen.getAllByTestId('task-menu-button')[0])
          expect(screen.getByTestId('task-menu')).toBeInTheDocument()
        })
    
        await user.click(screen.getByTestId('edit-button'))

    
        await waitFor(() => {
          expect(screen.getByTestId('task-modal')).toBeInTheDocument()
        })
        
        await user.type(screen.getByTestId('input'), newInputTitle)
        await user.type(screen.getByTestId('detail'), 'Detail baru nya')
        await user.type(screen.getByTestId('due'), '2023-05-05')
        await user.click(screen.getByTestId('save-button'))
        
      })
    })
})
