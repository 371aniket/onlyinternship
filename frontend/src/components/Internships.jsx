import logo from '../assets/logo.webp';
import '../pages/Internships.css';

const Internships = () => {
    return (
        <div className="internships-page">
            {/* Internships Section */}
            <section className="internships-section">
                <div className="container">
                    <div className="internships-header">
                        <img src={logo} alt="OnlyInternship Logo" className="internships-logo-img" />
                        <h2>Featured Internships</h2>
                    </div>
                    <div className="internship-grid">
                        <div className="internship-card">
                            <div className="card-header">
                                <h3>Software Engineering Intern</h3>
                                <span className="company">Google</span>
                            </div>
                            <div className="card-details">
                                <p>Join our engineering team and work on cutting-edge projects that impact millions of users worldwide.</p>
                            </div>
                            <div className="card-tags">
                                <span className="tag">React</span>
                                <span className="tag">Node.js</span>
                                <span className="tag">Python</span>
                            </div>
                        </div>

                        <div className="internship-card">
                            <div className="card-header">
                                <h3>Data Science Intern</h3>
                                <span className="company">Microsoft</span>
                            </div>
                            <div className="card-details">
                                <p>Analyze large datasets and develop machine learning models to drive business insights.</p>
                            </div>
                            <div className="card-tags">
                                <span className="tag">Python</span>
                                <span className="tag">TensorFlow</span>
                                <span className="tag">SQL</span>
                            </div>
                        </div>

                        <div className="internship-card">
                            <div className="card-header">
                                <h3>UX Design Intern</h3>
                                <span className="company">Apple</span>
                            </div>
                            <div className="card-details">
                                <p>Create beautiful and intuitive user experiences for our next-generation products.</p>
                            </div>
                            <div className="card-tags">
                                <span className="tag">Figma</span>
                                <span className="tag">Sketch</span>
                                <span className="tag">Prototyping</span>
                            </div>
                        </div>

                        <div className="internship-card">
                            <div className="card-header">
                                <h3>Marketing Intern</h3>
                                <span className="company">Amazon</span>
                            </div>
                            <div className="card-details">
                                <p>Develop and execute marketing strategies to reach millions of customers globally.</p>
                            </div>
                            <div className="card-tags">
                                <span className="tag">Digital Marketing</span>
                                <span className="tag">Analytics</span>
                                <span className="tag">SEO</span>
                            </div>
                        </div>

                        <div className="internship-card">
                            <div className="card-header">
                                <h3>Product Management Intern</h3>
                                <span className="company">Meta</span>
                            </div>
                            <div className="card-details">
                                <p>Work on product strategy and help shape the future of social media platforms.</p>
                            </div>
                            <div className="card-tags">
                                <span className="tag">Product Strategy</span>
                                <span className="tag">User Research</span>
                                <span className="tag">Analytics</span>
                            </div>
                        </div>

                        <div className="internship-card">
                            <div className="card-header">
                                <h3>DevOps Intern</h3>
                                <span className="company">Netflix</span>
                            </div>
                            <div className="card-details">
                                <p>Help build and maintain the infrastructure that serves content to millions of users.</p>
                            </div>
                            <div className="card-tags">
                                <span className="tag">AWS</span>
                                <span className="tag">Docker</span>
                                <span className="tag">Kubernetes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Internships; 