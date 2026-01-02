import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title reveal reveal-bottom">About Me</h2>
                <div className="about-grid">
                    {/* Text Content */}
                    <div className="about-info reveal reveal-left">
                        <p className="about-text">
                            I am an <strong>Electronics & Telecommunication</strong> student at Madhav Institute of
                            Technology and Science, Gwalior with a strong passion for software development. My journey
                            involves bridging the gap between hardware concepts and modern software engineering.
                        </p>
                        <p className="about-text">
                            Currently, I am honing my skills as a <strong>Full Stack Developer</strong>, with hands-on
                            experience in building AI-integrated platforms and efficient management systems. I love
                            exploring new technologies and applying them to solve real-world problems.
                        </p>

                        <div className="about-attributes">
                            <div className="attr-box glass-card delay-100">
                                <i className="fas fa-code"></i>
                                <div>
                                    <h4>Clean Code</h4>
                                    <span>Readable & Maintainable</span>
                                </div>
                            </div>
                            <div className="attr-box glass-card delay-200">
                                <i className="fas fa-tachometer-alt"></i>
                                <div>
                                    <h4>Performance</h4>
                                    <span>Optimized for Speed</span>
                                </div>
                            </div>
                            <div className="attr-box glass-card delay-300">
                                <i className="fas fa-layer-group"></i>
                                <div>
                                    <h4>Scalability</h4>
                                    <span>Built to Grow</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CGPA & Education Display */}
                    <div className="about-visual glass-card reveal reveal-right">
                        <div className="cgpa-display">
                            <div className="cgpa-content">
                                <span className="cgpa-val">9.05</span>
                                <span className="cgpa-label">CGPA</span>
                            </div>
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" className="bg"></circle>
                                <circle cx="50" cy="50" r="45" className="progress"></circle>
                            </svg>
                        </div>
                        <div className="education-info">
                            <h4>B.Tech Electronics & Telecommunication</h4>
                            <p>Madhav Institute of Technology and Science</p>
                            <span>2023 - 2027</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
