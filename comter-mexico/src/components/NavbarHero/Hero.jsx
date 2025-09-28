import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            {/* Top Bar with Contact Info */}
            <div className="top-bar">
                <div className="container">
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <span>+52 33 1042 4009</span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">✉️</span>
                            <span>contacto@comtermexico.com</span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📍</span>
                            <span>Ahuehuetes 133, Col. Altus Bosques, Tlajomulco de Zuñiga, Jalisco, Mexico</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="main-nav">
                <div className="container">
                    <div className="nav-content">
                        {/* Logo */}
                        <div className="logo">
                            <img src="/api/placeholder/120/60" alt="Comter" className="logo-img" />
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="nav-menu desktop-menu">
                            <li><a href="#home" className="nav-link">Home</a></li>
                            <li><a href="#about" className="nav-link">About Us</a></li>
                            <li><a href="#benefits" className="nav-link">Benefits</a></li>
                            <li><a href="#controls" className="nav-link">Controls</a></li>
                            <li><a href="#5s" className="nav-link">5'S</a></li>
                            <li><a href="#safety" className="nav-link">Safety</a></li>
                            <li><a href="#esd" className="nav-link">ESD</a></li>
                            <li><a href="#login" className="nav-link">Login</a></li>
                        </ul>

                        {/* Contact Button */}
                        <button className="contact-btn">
                            Contact Us →
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="mobile-toggle"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="mobile-nav-list">
                            <li><a href="#home" className="mobile-nav-link" onClick={toggleMenu}>Home</a></li>
                            <li><a href="#about" className="mobile-nav-link" onClick={toggleMenu}>About Us</a></li>
                            <li><a href="#benefits" className="mobile-nav-link" onClick={toggleMenu}>Benefits</a></li>
                            <li><a href="#controls" className="mobile-nav-link" onClick={toggleMenu}>Controls</a></li>
                            <li><a href="#5s" className="mobile-nav-link" onClick={toggleMenu}>5'S</a></li>
                            <li><a href="#safety" className="mobile-nav-link" onClick={toggleMenu}>Safety</a></li>
                            <li><a href="#esd" className="mobile-nav-link" onClick={toggleMenu}>ESD</a></li>
                            <li><a href="#login" className="mobile-nav-link" onClick={toggleMenu}>Login</a></li>
                            <li>
                                <button className="mobile-contact-btn" onClick={toggleMenu}>
                                    Contact Us →
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Hero;