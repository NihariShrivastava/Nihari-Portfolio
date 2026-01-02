import React from 'react';

const ExtraCurricular = () => {
    return (
        <section id="activities" className="section">
            <h2 className="section-title reveal reveal-bottom">Beyond Coding</h2>
            <div className="activities-grid">
                <div className="activity-card glass-card reveal reveal-scale">
                    <i className="fas fa-people-arrows icon-bg"></i>
                    <h3>SAARTHI Coordinator</h3>
                    <h4>NEP 2020 (UGC Affiliated)</h4>
                    <p>Served as the coordinator for the SAARTHI program, facilitating initiatives under the National Education Policy 2020.</p>
                </div>
                <div className="activity-card glass-card reveal reveal-scale delay-100">
                    <i className="fas fa-microphone-alt icon-bg"></i>
                    <h3>Student Coordinator</h3>
                    <h4>2nd ISCMCTR 2024</h4>
                    <p>Managed and coordinated conference sessions and student participation for the International Student Conference.</p>
                </div>
                <div className="activity-card glass-card reveal reveal-scale delay-200">
                    <i className="fas fa-users icon-bg"></i>
                    <h3>Class Representative</h3>
                    <h4>MITS, Gwalior</h4>
                    <p>Facilitating communication between faculty and students, resolving academic issues, and managing class activities.</p>
                </div>
                <div className="activity-card glass-card reveal reveal-scale delay-300">
                    <i className="fas fa-trophy icon-bg"></i>
                    <h3>Competitive Coding Coord.</h3>
                    <h4>Institute Level</h4>
                    <p>Organized and coordinated competitive coding activities, contests, and technical events for students.</p>
                </div>
            </div>
        </section>
    );
};

export default ExtraCurricular;
