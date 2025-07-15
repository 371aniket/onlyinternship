import './IntroPage.css';

const IntroPage = () => {
    return (
        <div className="intro-page">
            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <h2>Why Choose OnlyInternship?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="envelope-wrapper">
                                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=100&q=80" alt="Smart Matching" className="feature-img card-in-envelope" />
                                <div className="envelope-bg"></div>
                            </div>
                            <h3>Smart Matching</h3>
                            <p>AI-powered algorithm matches you with the perfect internship based on your skills and preferences.</p>
                        </div>
                        <div className="feature-card">
                            <div className="envelope-wrapper">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=100&q=80" alt="Quick Apply" className="feature-img card-in-envelope" />
                                <div className="envelope-bg"></div>
                            </div>
                            <h3>Quick Apply</h3>
                            <p>One-click application process with pre-filled profiles and instant notifications.</p>
                        </div>
                        <div className="feature-card">
                            <div className="envelope-wrapper">
                                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=100&q=80" alt="Top Companies" className="feature-img card-in-envelope" />
                                <div className="envelope-bg"></div>
                            </div>
                            <h3>Top Companies</h3>
                            <p>Connect with Fortune 500 companies and innovative startups from around the world.</p>
                        </div>
                        <div className="feature-card">
                            <div className="envelope-wrapper">
                                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80" alt="Career Growth" className="feature-img card-in-envelope" />
                                <div className="envelope-bg"></div>
                            </div>
                            <h3>Career Growth</h3>
                            <p>Track your progress and get insights to improve your career development.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IntroPage; 