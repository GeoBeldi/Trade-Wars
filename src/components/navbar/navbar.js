import React from 'react';
import '../navbar/style.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="logo">
                <h3><i className="fa-sharp fa-solid fa-alien-8bit"></i>
                    Barry Hardacre Developer <i className="fa-sharp fa-solid fa-alien-8bit"></i>
                </h3>
            </div>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#work" className="nav-link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link">My Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#connect" className="nav-link">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}