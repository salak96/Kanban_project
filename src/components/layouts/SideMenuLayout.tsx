import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu';

const SideMenuLayout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <SideMenu />
            <Outlet />
        </div>
    );
};

export default SideMenuLayout;
