import React from 'react';
import './Courses.css';
import certificationImg from '../assets/certification.jpg';
import placementImg from '../assets/product-jpeg-500x500.webp';

const Courses = () => {
    return (
        <div className="courses-page">
            {/* Top Banner */}
            <div className="courses-top-banner">
                Get 80% OFF on all Certification courses! <a href="#" className="courses-banner-link">Avail now &gt;</a>
            </div>
            {/* Navbar substitute (for demo) */}
            <div className="courses-navbar">
                <div className="courses-navbar-left">
                    <span className="courses-logo">ONLYINTERNSHIP <span className="courses-logo-sub">TRAININGS</span></span>
                    <span className="courses-guarantee-btn">Career Ki Guarantee</span>
                </div>
                <div className="courses-navbar-center">
                    <span className="courses-navbar-link">Certification courses <span className="courses-offer-badge">OFFER</span></span>
                    <span className="courses-navbar-link">Placement Guarantee courses</span>
                </div>
                <div className="courses-navbar-right">
                </div>
            </div>
            {/* Hero Section */}
            <div className="courses-hero-section">
                <h1 className="courses-hero-title">
                    Give the <span className="courses-hero-highlight">Best Start</span> to your Career
                    <span className="courses-hero-underline"></span>
                </h1>
                <div className="courses-hero-subtitle">Learn, practice, and get hired!</div>
            </div>
            {/* Course Cards */}
            <div className="courses-cards-row">
                <div className="courses-card courses-card-blue">
                    <div className="courses-card-header">
                        <span className="courses-card-title">Certification courses</span>
                        <span className="courses-card-duration">4-8 weeks</span>
                    </div>
                    <div className="courses-card-desc">Learn in-demand skills and get certified</div>
                    <img className="courses-card-img" src={certificationImg} alt="Certification" />
                    <a href="#" className="courses-card-link">Explore now &gt;</a>
                </div>
                <div className="courses-card courses-card-yellow">
                    <div className="courses-card-header">
                        <span className="courses-card-title">Placement Guarantee courses</span>
                        <span className="courses-card-duration">2-7 months</span>
                    </div>
                    <div className="courses-card-desc">Upskill and get a guaranteed placement</div>
                    <img className="courses-card-img" src={placementImg} alt="Placement Guarantee" />
                    <a href="#" className="courses-card-link">Explore now &gt;</a>
                </div>
            </div>
        </div>
    );
};

export default Courses; 