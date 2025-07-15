import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => (
    <section className="intro-how-it-works">
        <div className="container">
            <h2>How It Works</h2>
            <div className="steps-grid">
                <div className="step">
                    <div className="step-image">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Create Profile" />
                    </div>
                    <div className="step-number">1</div>
                    <h3>Create Profile</h3>
                    <p>Build your professional profile with skills, experience, and preferences</p>
                </div>
                <div className="step">
                    <div className="step-image">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Find Opportunities" />
                    </div>
                    <div className="step-number">2</div>
                    <h3>Find Opportunities</h3>
                    <p>Browse thousands of internships from top companies worldwide</p>
                </div>
                <div className="step">
                    <div className="step-image">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Apply & Connect" />
                    </div>
                    <div className="step-number">3</div>
                    <h3>Apply & Connect</h3>
                    <p>Apply with one click and connect directly with hiring managers</p>
                </div>
                <div className="step">
                    <div className="step-image">
                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Land Your Dream Internship" />
                    </div>
                    <div className="step-number">4</div>
                    <h3>Land Your Dream Internship</h3>
                    <p>Get hired and start your career journey with amazing opportunities</p>
                </div>
            </div>
        </div>
    </section>
);

export default HowItWorks; 