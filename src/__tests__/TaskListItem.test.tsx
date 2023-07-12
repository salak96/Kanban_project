import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import TaskList from '../components/TaskList/TaskList';
import { tasksState, } from '../feactures/TaskAtoms';

const tasks = [
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
  ]
  
  function initializeState({set}: MutableSnapshot) {
    set(tasksState, tasks)
  }
  
describe('TaskListItem Component', () => {
    beforeEach(() => {
        render(
            <RecoilRoot initializeState={initializeState}>
                <TaskList />
            </RecoilRoot>
        );
    });

    describe('Delete Task Feature', () => {
        test('A task can be deleted', async () => {
            let lengthBefore = 0;

            // Klik tombol "..." dan simpanjumlah data task pada `lengthBefore`
            await waitFor(() => {
                user.click(screen.getAllByTestId('task-menu-button')[0]);
                lengthBefore = screen.getAllByTestId('task-list-item').length;
                expect(screen.getByTestId('task-menu')).toBe('/task-progress');
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
});
describe('Add Task Feature', () => {
    test('A new task can be added', async () => {
        let lengthBefore = 0;
        await waitFor(() => {
            user.click(screen.getByTestId('add-task-button'));
            lengthBefore = screen.getAllByTestId('task-list-item').length;
            expect(screen.getByTestId('task-modal')).toBe('/task-progress');
        });


        // Masukkan judul
        const inputTitle = 'Task baru 1';
        await user.type(screen.getByTestId('title-input'), inputTitle);
        expect(screen.getByTestId('title-input')).toBe(inputTitle);

        // Masukkan detail
        const inputDetail = 'Detail Task baru 1';
        await user.type(screen.getByTestId('detail-input'), inputDetail);
        expect(screen.getByTestId('detail-input')).toBe(inputDetail);

        // Pilih tanggal
        const inputDate = '2022-09-09';
        await user.clear(screen.getByTestId('due-date-input'));
        await user.type(screen.getByTestId('due-date-input'), inputDate);
        expect(screen.getByTestId('due-date-input')).toBe(inputDate);

        // Pilih progress
        const inputProgress = '3';
        await user.selectOptions(screen.getByTestId('progress-select'), inputProgress);
        expect(screen.getByTestId('progress-select')).toBe(inputProgress);

        // Klik submit
        await user.click(screen.getByTestId('task-modal-submit-button'));

        await waitFor(() => {
            const lengthAfter = screen.getAllByTestId('task-list-item').length;
            expect(lengthBefore).toBeLessThan(lengthAfter);
        });
    });
});

describe('Edit Task Feature', () => {
    test('A task can be edited', async () => {
        const newInputTitle = 'Task baru nya';

        await waitFor(() => {
            user.click(screen.getAllByTestId('task-menu-button')[0]);
            expect(screen.getByTestId('task-menu')).toBe('/task-list');
        });

        await user.click(screen.getByTestId('edit-button'));

        await waitFor(() => {
            expect(screen.getByTestId('task-modal')).toBe('/task-list');
        });

        await user.clear(screen.getByTestId('title-input'));
        await user.type(screen.getByTestId('title-input'), newInputTitle);
        await user.click(screen.getByTestId('task-modal-submit-button'));

        await waitFor(() => {
            expect(screen.getByText(newInputTitle)).toBe('/task-list');
        });
    });
});
