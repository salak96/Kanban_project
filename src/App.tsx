import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import { RecoilRoot } from 'recoil'; // Ditambahkan
import TaskSummary from './components/TaskSummarry';
import SideMenuLayout from './components/layouts/SideMenuLayout';
import TaskList from './components/TaskList/TaskList';
import TaskProgress from './components/TaskProgress/TaskProgress';
///buat variabel router
const router = createBrowserRouter([
    {
        path: '/',
        element: <SideMenuLayout />,

        children: [
            {
                path: '/',
                element: <TaskSummary />,
            },
            {
                path: 'task-list',
                element: <TaskList />,
            },
            {
                path: 'task-progress',
                element: <TaskProgress />,
            },
            {
                path: '/task-summary',
                element: <TaskSummary />,
            },
        ],
    },
]);

//buat function App untuk render router
function App(): JSX.Element {
    return (
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    );
}
//export default App buat diacces d luar
export default App;
