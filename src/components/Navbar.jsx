import React from "react";
import "./styles/Navbar.css";

function Navbar({onClick, setPage, page}) {
    const className = page;
    const handleClick = ({target}) => {
        const value = target.value;
        onClick(setPage, value);
    }

    return (
        <nav className="nav-container">
            <button className={`nav-btn ${className === 'about' && className}`} value="about" onClick={handleClick}>about me</button>
            <button className={`nav-btn ${className === 'projects' && className}`} value="projects" onClick={handleClick}>projects</button>
            <button className={`nav-btn ${className === 'content' && className}`} value="content" onClick={handleClick}>content me</button>
        </nav>
    );
}


export default Navbar;