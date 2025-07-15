import logo from '../assets/logo.webp';
import './CTA.css';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-logo">
                    <img src={logo} alt="OnlyInternship Logo" className="cta-logo-img" />
                </div>
                <h2>Ready to Start Your Journey?</h2>
                <p>Join thousands of students who have found their dream internships</p>
                <div className="cta-actions">
                    <Link to="/signup" className="btn btn-primary">Get Started</Link>
                    <button className="btn btn-secondary">Learn More</button>
                </div>
                <p className="terms-text">By continuing, you agree to our T&C</p>
            </div>
        </section>
    );
};

export default CTA; 