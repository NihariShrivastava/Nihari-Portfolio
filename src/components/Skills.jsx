import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2 className="section-title reveal reveal-bottom">Technical Skills</h2>
            <div className="skills-grid">
                {/* Programming Languages */}
                <div className="skill-category reveal reveal-scale">
                    <h3><i className="fas fa-code"></i> Programming Languages</h3>
                    <div className="skill-tags">
                        <span>Java</span>
                        <span>Python</span>
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                    </div>
                </div>

                {/* Frontend */}
                <div className="skill-category reveal reveal-scale delay-100">
                    <h3><i className="fas fa-desktop"></i> Frontend</h3>
                    <div className="skill-tags">
                        <span>React.js</span>
                        <span>Vite</span>
                        <span>Tailwind CSS</span>
                        <span>Bootstrap</span>
                        <span>Material UI</span>
                        <span>Responsive Web Design</span>
                    </div>
                </div>

                {/* Backend */}
                <div className="skill-category reveal reveal-scale delay-200">
                    <h3><i className="fas fa-server"></i> Backend</h3>
                    <div className="skill-tags">
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>FastAPI</span>
                        <span>REST API Development</span>
                        <span>JWT Authentication</span>
                    </div>
                </div>

                {/* Databases */}
                <div className="skill-category reveal reveal-scale delay-300">
                    <h3><i className="fas fa-database"></i> Databases</h3>
                    <div className="skill-tags">
                        <span>SQL</span>
                        <span>MongoDB</span>
                        <span>Supabase</span>
                        <span>Cloudflare D1</span>
                    </div>
                </div>

                {/* Cloud & DevOps */}
                <div className="skill-category reveal reveal-scale delay-100">
                    <h3><i className="fas fa-cloud"></i> Cloud & DevOps</h3>
                    <div className="skill-tags">
                        <span>Cloudflare Workers</span>
                        <span>Cloudflare Pages</span>
                        <span>Cloud Deployment</span>
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>Postman</span>
                        <span>Visual Studio Code</span>
                    </div>
                </div>

                {/* Core Computer Science */}
                <div className="skill-category reveal reveal-scale delay-200">
                    <h3><i className="fas fa-brain"></i> Core Computer Science</h3>
                    <div className="skill-tags">
                        <span>Data Structures & Algorithms</span>
                        <span>Object-Oriented Programming (OOP)</span>
                        <span>Database Management Systems (DBMS)</span>
                        <span>Operating Systems</span>
                        <span>Computer Networks</span>
                    </div>
                </div>

                {/* Additional Skills */}
                <div className="skill-category reveal reveal-scale delay-300">
                    <h3><i className="fas fa-star"></i> Additional Skills</h3>
                    <div className="skill-tags">
                        <span>API Integration</span>
                        <span>Drizzle ORM</span>
                        <span>Authentication & Authorization</span>
                        <span>Version Control</span>
                        <span>Debugging</span>
                        <span>Problem Solving</span>
                        <span>AI/ML Applications</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
