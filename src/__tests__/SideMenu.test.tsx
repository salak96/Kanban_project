import {render, screen, waitFor} from '@testing-library/react' // waitFor ditambahkan
import {BrowserRouter} from 'react-router-dom'
import SideMenu from '../components/SideMenu'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event' // Ditambahkan

describe('SideMenu', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    )
  })

  test('Home menu is linked to /', async () => {
    await userEvent.click(screen.getByText('Home'))
    await waitFor(() => {
      expect(window.location.pathname).toBe('/')
    })
  })

  test('Task List menu is linked to /task-list', async () => {
    await userEvent.click(screen.getByText('Task List'))
    await waitFor(() => {
      expect(window.location.pathname).toBe('/task-list')
    })
  })

  test('Task Progress menu is linked to /task-progess', async () => {
    await userEvent.click(screen.getByText('Task Progress'))
    await waitFor(() => {
      expect(window.location.pathname).toBe('/task-progress')
    })
  })
})