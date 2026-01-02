import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { changeTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleThemeMenu = () => setIsThemeMenuOpen(!isThemeMenuOpen);

    const handleThemeChange = (color) => {
        changeTheme(color);
        setIsThemeMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">&lt;Nihari /&gt;</div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                <li><a href="#activities" onClick={() => setIsMenuOpen(false)}>Activities</a></li>
                <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                <li className="theme-switch-wrapper">
                    <i
                        className="fas fa-palette"
                        id="theme-btn"
                        title="Choose Theme"
                        onClick={toggleThemeMenu}
                    ></i>
                    <div className={`theme-options ${isThemeMenuOpen ? 'active' : ''}`}>
                        <div className="theme-option" data-color="default" title="Purple" onClick={() => handleThemeChange('default')}></div>
                        <div className="theme-option" data-color="blue" title="Blue" onClick={() => handleThemeChange('blue')}></div>
                        <div className="theme-option" data-color="navy" title="Navy" onClick={() => handleThemeChange('navy')}></div>
                        <div className="theme-option" data-color="pink" title="Pink" onClick={() => handleThemeChange('pink')}></div>
                        <div className="theme-option" data-color="green" title="Green" onClick={() => handleThemeChange('green')}></div>
                        <div className="theme-option" data-color="teal" title="Teal" onClick={() => handleThemeChange('teal')}></div>
                    </div>
                </li>
            </ul>
            <div className="menu-toggle" onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
        </nav>
    );
};

export default Navbar;
