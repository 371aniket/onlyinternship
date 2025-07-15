import './Home.css';
import { useState, useEffect, useRef } from 'react';
import HowItWorks from './HowItWorks';
import { Link } from 'react-router-dom';
import salesforceLogo from '../assets/Salesforce.com_logo.svg.png';
import spaceXLogo from '../assets/space.png';

const Home = () => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [storiesPerView, setStoriesPerView] = useState(3);
    const totalStories = 6;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setStoriesPerView(1);
            } else if (window.innerWidth <= 768) {
                setStoriesPerView(2);
            } else {
                setStoriesPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNextStory = () => {
        setCurrentStoryIndex((prevIndex) =>
            prevIndex >= totalStories - storiesPerView ? 0 : prevIndex + 1
        );
    };

    const handlePrevStory = () => {
        setCurrentStoryIndex((prevIndex) =>
            prevIndex === 0 ? totalStories - storiesPerView : prevIndex - 1
        );
    };
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="intro-hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            India's #1 Platform for <span className="highlight">Freshers Only Internships</span>
                        </h1>
                        <p className="hero-subtitle">
                            Your gateway to exceptional internship opportunities with top companies worldwide
                        </p>
                        <div className="hero-description">
                            <p>
                                Connect with Fortune 500 companies, innovative startups, and industry leaders.
                                Find the perfect internship that matches your skills, interests, and career goals.
                            </p>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <h3>10,000+</h3>
                                <p>Internships Available</p>
                            </div>
                            <div className="stat-item">
                                <h3>500+</h3>
                                <p>Top Companies</p>
                            </div>
                            <div className="stat-item">
                                <h3>50,000+</h3>
                                <p>Students Placed</p>
                            </div>
                        </div>
                        <div className="hero-actions">
                            <Link to="/subscription" className="btn btn-primary">Subscribe Now</Link>
                            <Link to="/signup" className="btn btn-primary">Get Started</Link>
                            <button className="btn btn-secondary">Learn More</button>
                        </div>
                        <p className="terms-text">By continuing, you agree to our T&C</p>
                    </div>
                    <div className="hero-visual">
                        <div className="floating-cards">
                            <div className="card card-1">
                                <div className="card-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" />
                                </div>
                                <h4>Google</h4>
                                <p>Software Engineering</p>
                            </div>
                            <div className="card card-2">
                                <div className="card-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png" alt="Microsoft" />
                                </div>
                                <h4>Microsoft</h4>
                                <p>Data Science</p>
                            </div>
                            <div className="card card-3">
                                <div className="card-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="Apple" />
                                </div>
                                <h4>Apple</h4>
                                <p>UX Design</p>
                            </div>
                            <div className="card card-4">
                                <div className="card-icon">
                                    <img src={spaceXLogo} alt="SpaceX" />
                                </div>
                                <h4>SpaceX</h4>
                                <p>Aerospace</p>
                            </div>
                            <div className="card card-5">
                                <div className="card-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" />
                                </div>
                                <h4>Amazon</h4>
                                <p>Product Management</p>
                            </div>
                            <div className="card card-6">
                                <div className="card-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" />
                                </div>
                                <h4>Meta</h4>
                                <p>AI Research</p>
                            </div>
                            <div className="card card-7">
                                <div className="card-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" />
                                </div>
                                <h4>Netflix</h4>
                                <p>Content Creation</p>
                            </div>
                            <div className="card card-8">
                                <div className="card-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" />
                                </div>
                                <h4>Stripe</h4>
                                <p>Fintech</p>
                            </div>
                            <div className="card card-9">
                                <div className="card-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" />
                                </div>
                                <h4>LinkedIn</h4>
                                <p>Marketing</p>
                            </div>
                            <div className="card card-10">
                                <div className="card-icon">
                                    <img src={salesforceLogo} alt="Salesforce" />
                                </div>
                                <h4>Salesforce</h4>
                                <p>Cloud Computing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <HowItWorks />
        </div>
    );
};

export default Home; 