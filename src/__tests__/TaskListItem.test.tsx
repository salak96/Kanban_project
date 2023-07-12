import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { tasksState } from '../feactures/TaskAtoms';
import TaskList from '../components/TaskList/TaskList';
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
];

function initializeState({ set }: MutableSnapshot) {
    set(tasksState, tasks);
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
      let lengthBefore = 0

      // Klik tombol "..." dan simpanjumlah data task pada `lengthBefore`
      await waitFor(() => {
        user.click(screen.getAllByTestId('task-menu-button')[0])
        lengthBefore = screen.getAllByTestId('task-list-item').length
        expect(screen.getByTestId('task-menu')).toBeInTheDocument()
      })

      // Klik tombol "Delete"
      await user.click(screen.getByTestId('delete-button'))

      // Periksa apakah jumlah data berkurang atau tidak
      await waitFor(() => {
        const lengthAfter = screen.getAllByTestId('task-list-item').length
        expect(lengthBefore).toBeGreaterThan(lengthAfter)
      })
    })
  })
})
