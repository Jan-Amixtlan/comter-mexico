import React, { useState, useEffect } from 'react';
import './VideoCarousel.css';

const VideoCarousel = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Array de videos - puedes reemplazar estas URLs con tus videos reales
    const videos = [
        {
            src: "/HeroSection1.mp4",
            title: "Technology at your fingertips"
        },
        {
            src: "/HeroSection2.mp4",
            title: "Innovation and Excellence"
        },
        {
            src: "/HeroSection3.mp4",
            title: "Advanced Solutions"
        }
    ];

    // Cambiar video automáticamente cada 6 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            changeVideo((currentVideoIndex + 1) % videos.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [currentVideoIndex, videos.length]);

    const changeVideo = (newIndex) => {
        if (newIndex !== currentVideoIndex && !isTransitioning) {
            setIsTransitioning(true);
            
            setTimeout(() => {
                setCurrentVideoIndex(newIndex);
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 500);
            }, 400);
        }
    };

    const handleCarouselClick = () => {
        const nextIndex = (currentVideoIndex + 1) % videos.length;
        changeVideo(nextIndex);
    };

    return (
        <section className="video-carousel-section" onClick={handleCarouselClick}>
            {/* Video Background */}
            <div className="video-background">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className={`video-slide ${
                            index === currentVideoIndex ? 'active' : ''
                        } ${isTransitioning && index === currentVideoIndex ? 'transitioning' : ''}`}
                    >
                        <video
                            src={video.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="background-video"
                        />
                        <div className="video-overlay"></div>
                    </div>
                ))}
            </div>

            {/* Content Overlay */}
            <div className="carousel-content">
                <div className="brand-text">COMTER</div>
                
                <div className="main-content">
                    <h1 className="carousel-title">
                        Technology<br />
                        at your<br />
                        fingertips
                    </h1>
                    
                    <div className="logo-section">
                        <div className="tech-circle">
                            <div className="circle-animation"></div>
                        </div>
                        <div className="brand-logo">
                            <span className="comter-text">COMTER</span>
                            <span className="tagline">we provide <strong>solutions!</strong></span>
                        </div>
                    </div>
                </div>
                
                {/* Video Counter */}
                <div className="video-counter">
                    <span className="current-slide">
                        {String(currentVideoIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="separator">/</span>
                    <span className="total-slides">
                        {String(videos.length).padStart(2, '0')}
                    </span>
                </div>
            </div>


        </section>
    );
};

export default VideoCarousel;