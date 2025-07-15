import logo from '../assets/logo.webp';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src={logo} alt="OnlyInternship Logo" className="footer-logo-img" />
                        <h3>OnlyInternship</h3>
                        <p>India's #1 Platform for Freshers Only Internships</p>
                    </div>
                    <div className="social-links">
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Twitter</a>
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">Instagram</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>For Students</h4>
                    <ul>
                        <li><a href="#">Browse Internships</a></li>
                        <li><a href="#">Create Profile</a></li>
                        <li><a href="#">Career Guidance</a></li>
                        <li><a href="#">Success Stories</a></li>
                        <li><a href="#">Resume Builder</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>For Companies</h4>
                    <ul>
                        <li><a href="#">Post Internship</a></li>
                        <li><a href="#">Browse Candidates</a></li>
                        <li><a href="#">Pricing Plans</a></li>
                        <li><a href="#">Success Stories</a></li>
                        <li><a href="#">Contact Sales</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Internship Guide</a></li>
                        <li><a href="#">Interview Tips</a></li>
                        <li><a href="#">Career Advice</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; 2024 OnlyInternship. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 