import logo from '../assets/logo.webp';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            {/* About Us Section */}
            <section className="about-section">
                <div className="container">
                    <div className="about-header">
                        <img src={logo} alt="OnlyInternship Logo" className="about-logo-img" />
                        <h2>About OnlyInternship</h2>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                OnlyInternship is a leading platform that connects talented students with exceptional
                                internship opportunities at top companies worldwide. We believe that every student
                                deserves access to meaningful work experiences that can shape their future careers.
                            </p>
                            <p>
                                Our mission is to bridge the gap between ambitious students and innovative companies,
                                creating opportunities for growth, learning, and professional development. With our
                                AI-powered matching system and extensive network of partner companies, we make it
                                easier than ever to find the perfect internship.
                            </p>
                            <div className="about-stats">
                                <div className="about-stat">
                                    <h3>5+</h3>
                                    <p>Years of Experience</p>
                                </div>
                                <div className="about-stat">
                                    <h3>100+</h3>
                                    <p>Countries Served</p>
                                </div>
                                <div className="about-stat">
                                    <h3>95%</h3>
                                    <p>Success Rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <div className="image-placeholder">
                                <h3>Our Team</h3>
                                <p>Dedicated professionals working to connect students with opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs; 