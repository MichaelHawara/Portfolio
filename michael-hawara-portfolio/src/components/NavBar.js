import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';


function NavBar() {
    const myStyle = (leftPad, botPad, font) => {
        return {
            paddingBottom: botPad + 'px',
            paddingLeft: leftPad + 'px',
            fontSize: font + 'px'
        }
    };
    return (
        <aside className="navbar">
            <div className="separator"></div>
            <ul className="menu-items">
                <li>
                    <Link to="/">
                        <span className="navIcon" style={myStyle(0, 3, 43)}>&#1217;</span>
                        <span className="item-name">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/AboutMe">
                        <span className="navIcon" style={myStyle(7, 0, 47)}>&delta;</span>
                        <span className="item-name">About Me</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Projects">
                        <span className="navIcon" style={myStyle(3, 18, 47)}>&psi;</span>
                        <span className="item-name">Projects</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Experience">

                        <span className="navIcon" style={myStyle(3, 15, 45)}>&Xi;</span>
                        <span className="item-name" style={myStyle(0, 15, 16)}>Experience</span>

                    </Link>
                </li>
                <li>
                    <Link to="/ContactMe">
                        <span className="navIcon" style={myStyle(1, 0, 44)}>&Pi;</span>
                        <span className="item-name">Contact Me</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default NavBar;
