import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title reveal reveal-bottom">Featured Projects</h2>
                <div className="projects-grid">
                    
                    {/* Project - Accessory Billing Portal */}
                    <div className="project-card reveal reveal-left">
                        <div className="project-info">
                            <h3>Accessory Billing & Inventory Management Portal</h3>
                            <p>Innovated a role-based accessory billing and management portal for businesses with multiple counters, supporting Counter Staff, Team Leads, Auditors, and Cashiers through a complete approval workflow. Served 100+ users across 10 stores</p>
                            <div className="tech-stack">
                                <span>React 19</span>
                                <span>TypeScript</span>
                                <span>Vite</span>
                                <span>Tailwind CSS</span>
                                <span>React Router</span>
                                <span>React Query</span>
                                <span>Cloudflare</span>
                                <span>Drizzle ORM</span>
                                <span>Supabase</span>
                            </div>
                            <div className="project-links">
                                <a href="https://neon-testing-accessoriesportal.viewwork.workers.dev/login" target="_blank" rel="noreferrer"
                                    className="btn-sm">Live Demo <i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Project 1 */}
                    <div className="project-card reveal reveal-left">
                        <div className="project-info">
                            <h3>SummarEASE - AI Summarizer</h3>
                            <p>A full-stack AI web application that automates content understanding by summarizing text and videos. Features hybrid AI architecture (Hugging Face, Whisper) and RESTful APIs.</p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>Hugging Face</span>
                                <span>Whisper</span>
                            </div>
                            <div className="project-links">
                                <a href="https://summarease-frontend-6ftb.onrender.com/" target="_blank" rel="noreferrer"
                                    className="btn-sm">Live Demo <i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="project-card reveal reveal-left">
                        <div className="project-info">
                            <h3>AI Internship Recommendation Engine</h3>
                            <p>A smart platform using hybrid ML models to suggest top internship opportunities. Features a
                                multilingual AI chatbot and automated resume scanner.</p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>FastAPI</span>
                                <span>Firebase</span>
                            </div>
                            <div className="project-links">
                                <a href="https://pm-ai-internship-scheme-platform.onrender.com/" target="_blank" rel="noreferrer"
                                    className="btn-sm">Live Demo <i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="project-card reveal reveal-right">
                        <div className="project-info">
                            <h3>Smart Helpdesk Ticketing System</h3>
                            <p>A centralized IT ticketing system with automated urgency classification using NLP (BERT,
                                DeBERTa) and a multimodal AI chatbot.</p>
                            <div className="tech-stack">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>NLP</span>
                            </div>
                            <div className="project-links">
                                <a href="https://ticket-generation-system-pv6k.vercel.app/" target="_blank" rel="noreferrer"
                                    className="btn-sm">Live Demo <i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
