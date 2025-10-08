import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="text-container">
                    <h1 className="hero-title">
                        Market Leading
                        <span className="title-highlight"> Manufacturer</span>
                    </h1>
                    <p className="hero-subtitle">
                        The right candidate may exist, but talented people
                        <span className="subtitle-accent"> drive excellence</span>
                    </p>
                    <button className="cta-button">
                        Learn More
                        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="decorative-elements">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="line line-1"></div>
            </div>
        </section>
    );
};

export default HeroSection;