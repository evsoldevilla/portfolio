import React from 'react';
import ToggleButton from '../SideBar/ToggleButton';
import logo from '../img/logo.png';
import './Navbar.css';

const navbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toogle_button">
                <ToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
                <img className="logo" src={logo} />
                <a href="/">Edson's Profile</a>
            </div>
            <div className="space"></div>
            <div className="toolbar_nav_items">
                <ul>
                    <li><a href="/"> About </a></li>
                    <li><a href="/"> Skills </a></li>
                    <li><a href="/"> Projects </a></li>
                    <li><a href="/"> Experience </a></li>
                    <li><a href="/"> Contact Me </a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;
