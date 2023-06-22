import React from 'react';
import { NavLink } from 'react-router-dom';
import type { CSSProperties } from '../types';

const SideMenu = (): JSX.Element => {
    return (
        <div style={styles.container}>
            {/* icon rumah home */}
            <span className='material-icons' style={styles.icon}>
                home
            </span>
            <NavLink to='/' style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                <p style={styles.text}>Home</p>
            </NavLink>
            <NavLink to='/task-list' style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                <p style={styles.text}>Task List</p>
            </NavLink>
            <NavLink to='/task-progress' style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                <p style={styles.text}>Task Progress</p>
            </NavLink>
        </div>
    );
};

const commonLinkStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    margin: '12px 0',
    textDecoration: 'none',
};
const styles: CSSProperties = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#55ACC8',
        padding: '20px',
        minHeight: '100vh',
        height: '100%',
        width: '5%',
    },
    link: {
        ...commonLinkStyles,
        color: '#fff',
    },
    activeLink: {
        ...commonLinkStyles,
        color: '#255261',
    },
    icon: {
        fontSize: '40px',
    },
    text: {
        fontSize: '24px',
        marginLeft: '8px',
    },
};

// Media queries for responsiveness

// Responsive styles
styles.container = {
    ...styles.container,
    width: '10%',
};

styles.text = {
    ...styles.text,
    fontSize: '20px',
};

export default SideMenu;
