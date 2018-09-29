import React from 'react';
import './SideBar.css';


const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Experience</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;