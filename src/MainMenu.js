import React, { Component } from 'react';
import './MainMenu.css'

class MainMenu extends Component {
    render() {
        return <div className="MainMenu">
            <div id="mobile-menu-open" className="shoadow-large">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <header>
                <div id="mobile-menu-close">
                    <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <ul id="menu" className="shadow">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                </ul>
            </header>
        </div>;
    }
}

export default MainMenu;
