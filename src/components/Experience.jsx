import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title reveal reveal-bottom">Experience</h2>
                <div className="timeline">
                    <div className="timeline-item reveal reveal-left">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <span className="timeline-date">Dec 2024 – Jan 2025</span>
                            <h3>Frontend Developer Intern</h3>
                            <h4>Greentrace Consultancy Private Limited</h4>
                            <span className="location"><i className="fas fa-map-marker-alt"></i> Delhi, India</span>
                            <ul>
                                <li>Developed and designed responsive web pages using HTML, CSS, Bootstrap, React, and
                                    JavaScript.</li>
                                <li>Implemented interactive UI components and ensured smooth frontend functionality for
                                    better user experience.</li>
                                <li>Collaborated on frontend development, focusing on clean design, usability, and
                                    performance optimization.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
