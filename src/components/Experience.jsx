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
                            <span className="timeline-date">May 2026 – Present</span>
                            <h3>Full Stack Developer Intern</h3>
                            <h4>OmAdvance Pvt. Ltd.</h4>
                            <span className="location"><i className="fas fa-map-marker-alt"></i> Remote</span>
                            <ul>
                                <li>Building several full-stack, ready-to-work websites which digitalize and automate business operations.</li>
                                <li>Assisting businesses in enhancing their operational efficiency through custom software solutions.</li>
                                <li>Engaged in a remote, stipend-based internship focusing on full-stack web development.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="timeline-item reveal reveal-left">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <span className="timeline-date">May 2026 – Aug 2026</span>
                            <h3>Trainee</h3>
                            <h4>DRDE, DRDO</h4>
                            <span className="location"><i className="fas fa-map-marker-alt"></i> Gwalior, India</span>
                            <ul>
                                <li>Created a chemical reactor that automates 90% of the work as an electronics and telecommunication based project.</li>
                                <li>Developed an AI/ML based surveillance system to enhance monitoring capabilities.</li>
                            </ul>
                        </div>
                    </div>

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
