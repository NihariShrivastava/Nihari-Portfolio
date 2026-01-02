import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2 className="section-title reveal reveal-bottom">Technical Skills</h2>
            <div className="skills-grid">
                {/* Languages */}
                <div className="skill-category reveal reveal-scale">
                    <h3><i className="fas fa-code"></i> Languages</h3>
                    <div className="skill-tags">
                        <span>C++</span>
                        <span>Java</span>
                        <span>Python</span>
                        <span>JavaScript (ES6+)</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>SQL</span>
                    </div>
                </div>

                {/* Frameworks & Libs */}
                <div className="skill-category reveal reveal-scale delay-100">
                    <h3><i className="fas fa-layer-group"></i> Frameworks & Libs</h3>
                    <div className="skill-tags">
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Bootstrap</span>
                        <span>Tailwind CSS</span>
                    </div>
                </div>

                {/* Tools & Platforms */}
                <div className="skill-category reveal reveal-scale delay-200">
                    <h3><i className="fas fa-tools"></i> Tools & Platforms</h3>
                    <div className="skill-tags">
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>VS Code</span>
                        <span>MongoDB</span>
                        <span>Postman</span>
                        <span>Vercel</span>
                    </div>
                </div>

                {/* Core Concepts */}
                <div className="skill-category reveal reveal-scale delay-300">
                    <h3><i className="fas fa-brain"></i> Core Concepts</h3>
                    <div className="skill-tags">
                        <span>Data Structures</span>
                        <span>Algorithms</span>
                        <span>OOPs</span>
                        <span>DBMS</span>
                        <span>OS</span>
                        <span>Computer Networks</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
