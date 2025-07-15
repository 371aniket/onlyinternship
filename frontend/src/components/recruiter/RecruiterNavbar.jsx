import { useState, useRef, useContext } from 'react';
import logo from '../../assets/logo.webp';
import '../Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useEffect } from 'react';

const RecruiterNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const { user, logout } = useContext(UserContext);
    const dropdownRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Hide dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        if (showDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDropdown]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand" onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }} style={{ cursor: 'pointer' }}>
                    <img src={logo} alt="OnlyInternship Logo" className="navbar-logo-img" />
                    <h1 className="navbar-logo">OnlyInternship</h1>
                </div>
                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/recruiter-dashboard" className={`nav-link${location.pathname === '/recruiter-dashboard' ? ' active' : ''}`}>Dashboard</Link>
                    <Link to="/recruiter/posted-internships" className={`nav-link${location.pathname === '/recruiter/posted-internships' ? ' active' : ''}`}>Posted Internships</Link>
                </div>
                <div className="navbar-actions">
                    {user && (
                        <div className="navbar-profile" style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.5rem', position: 'relative' }} ref={dropdownRef}>
                            {/* User Icon SVG */}
                            <span style={{ cursor: 'pointer', fontSize: '1.7rem' }} title="Profile" onClick={() => setShowDropdown((prev) => !prev)}>
                                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <circle cx="12" cy="8" r="4" />
                                    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                                </svg>
                            </span>
                            {showDropdown && (
                                <div className="navbar-profile-dropdown" style={{ position: 'absolute', top: '120%', right: 0, background: '#fff', color: '#222', border: '1px solid #e9ecef', borderRadius: '8px', boxShadow: '0 2px 8px rgba(60, 72, 88, 0.10)', minWidth: '180px', padding: '1rem', zIndex: 100 }}>
                                    <div><strong>Name:</strong> {user.name || user.company}</div>
                                    <div><strong>Email:</strong> {user.email}</div>
                                    <button onClick={() => { logout(); navigate('/signup'); }} className="btn btn-secondary" style={{ marginTop: '1rem', width: '100%' }}>Logout</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
};

export default RecruiterNavbar; 