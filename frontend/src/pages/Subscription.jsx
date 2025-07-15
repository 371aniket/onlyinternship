import React from 'react';
import './Subscription.css';
import atsImg from '../assets/ats.webp';

const Subscription = () => {
    return (
        <div className="subscription-page">
            <div className="subscription-top-heading">Unlock Premium Internship Features</div>
            <div className="subscription-subheading">Get all the benefits for just ₹299/year</div>
            <div className="subscription-center-wrapper">
                <div className="subscription-card">
                    <div className="subscription-steps-grid">
                        <div className="subscription-step">
                            <div className="subscription-step-image">
                                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Internship Alerts" />
                            </div>
                            <div className="subscription-step-number">1</div>
                            <h3>Real-time Internship Alerts</h3>
                            <p>Get notified instantly about the latest and most relevant internship opportunities tailored to your interests and skills.</p>
                        </div>
                        <div className="subscription-step">
                            <div className="subscription-step-image">
                                <img src={atsImg} alt="Resume Guides" />
                            </div>
                            <div className="subscription-step-number">2</div>
                            <h3>ATS-friendly Resume Guides</h3>
                            <p>Access step-by-step guides and templates to build resumes that pass automated screening and impress recruiters.</p>
                        </div>
                        <div className="subscription-step">
                            <div className="subscription-step-image">
                                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Mock Interviews" />
                            </div>
                            <div className="subscription-step-number">3</div>
                            <h3>Mock Interview Practice</h3>
                            <p>Sharpen your interview skills with realistic mock interviews and get actionable feedback to boost your confidence.</p>
                        </div>
                        <div className="subscription-step">
                            <div className="subscription-step-image">
                                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="Career Tips" />
                            </div>
                            <div className="subscription-step-number">4</div>
                            <h3>Career Tips & Tricks</h3>
                            <p>Receive expert advice, tips, and resources to help you navigate your career journey and stand out from the crowd.</p>
                        </div>
                        <div className="subscription-step subscription-pay-card">
                            <div className="subscription-offer-label">Great Offer</div>
                            <div className="subscription-price-label">All features for just</div>
                            <div className="subscription-price">₹299 <span className="subscription-price-duration">/year</span></div>
                            <div className="paynow-arrow-animate">⬇️</div>
                            <button className="btn btn-paynow">Pay Now</button>
                            <div className="subscription-excellent-opportunity">Excellent Opportunity</div>
                        </div>
                        <div className="subscription-step">
                            <div className="subscription-step-image">
                                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Webinars & Events" />
                            </div>
                            <div className="subscription-step-number">5</div>
                            <h3>Exclusive Webinars & Events</h3>
                            <p>Join members-only webinars, workshops, and networking events to learn from industry leaders and grow your network.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription; 