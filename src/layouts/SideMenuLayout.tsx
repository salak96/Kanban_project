import { NavLink, Outlet } from 'react-router-dom'
import SideMenu from '../components/SideMenu'

const SideMenuLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
            <SideMenu />
            <Outlet />
    </div>
  )
}

export default SideMenuLayout
