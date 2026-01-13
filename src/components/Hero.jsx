import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content reveal reveal-left">
                <span className="greeting">Verified Full Stack Developer <i className="fas fa-check-circle"></i></span>
                <h1>Hi, I'm <span className="highlight">Nihari Shrivastava</span></h1>
                <h2 className="typing-text">Full Stack Developer</h2>
                <p>
                    Passionate about building scalable web applications and integrating AI solutions. I transform complex
                    problems into elegant, user-centric digital experiences.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">My Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    <a href="/assets/nihari_resume.pdf" download="nihari_resume.pdf" className="btn btn-secondary">Download CV <i className="fas fa-download"></i></a>

                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/nihari-shrivastava-878739279" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/NihariShrivastava" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="mailto:niharishrivastava2005@gmail.com"><i className="fas fa-envelope"></i></a>
                </div>
            </div>

            <div className="hero-image reveal reveal-right">
                <div className="image-wrapper">
                    <img src={`${import.meta.env.BASE_URL}assets/nihari_profile.png`} alt="Nihari Shrivastava" className="avatar-img" />

                    {/* Floating Icons decoration */}
                    <div className="floating-icon icon-react"><i className="fab fa-react"></i></div>
                    <div className="floating-icon icon-node"><i className="fab fa-node-js"></i></div>
                    <div className="floating-icon icon-code"><i className="fas fa-code"></i></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
