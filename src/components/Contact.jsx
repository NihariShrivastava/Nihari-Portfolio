import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title reveal reveal-bottom">Get In Touch</h2>
                <p className="section-subtitle reveal reveal-bottom delay-100">Have a project in mind or just want to say hi? I'd love to hear from you.</p>

                <div className="contact-wrapper">
                    {/* Left: Info */}
                    <div className="contact-left reveal reveal-left">
                        <h3>Let's build something <br /> <span className="highlight">amazing together.</span></h3>
                        <p>I'm currently open to new opportunities and collaborations. Whether you have a question or just want to connect, feel free to reach out.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box"><i className="fas fa-envelope"></i></div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:niharishrivastava2005@gmail.com">niharishrivastava2005@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><i className="fas fa-map-marker-alt"></i></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Gwalior, India</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><i className="fab fa-github"></i></div>
                                <div>
                                    <h4>GitHub</h4>
                                    <a href="https://github.com/NihariShrivastava" target="_blank" rel="noreferrer">View Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="contact-right glass-card reveal reveal-right">
                        <form action="mailto:niharishrivastava2005@gmail.com" method="POST" encType="text/plain">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
