import { useEffect, useRef, useState, useContext } from 'react';
import logo from '../assets/logo.webp';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const { user, logout } = useContext(UserContext);
    const dropdownRef = useRef(null);
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Only fetch notifications for students (not recruiters)
    useEffect(() => {
        if (user && user._id && !user.isRecruiter) {
            fetch(`http://localhost:5000/api/notifications/${user._id}`)
                .then(res => res.json())
                .then(data => setNotifications(data));
        }
    }, [user, showNotifications]);

    const handleBellClick = async () => {
        setShowNotifications(!showNotifications);
        if (!showNotifications && notifications.some(n => !n.read)) {
            // Mark all as read
            await Promise.all(
                notifications.filter(n => !n.read).map(n =>
                    fetch(`http://localhost:5000/api/notifications/read/${n._id}`, { method: 'PATCH' })
                )
            );
            // Refetch notifications
            fetch(`http://localhost:5000/api/notifications/${user._id}`)
                .then(res => res.json())
                .then(data => setNotifications(data));
        }
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

    // Only show student navigation
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
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/internships" className="nav-link">Internships</Link>
                    <Link to="/courses" className="nav-link">Courses</Link>
                </div>

                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search internships..."
                        className="search-input"
                    />
                    <button className="search-btn">🔍</button>
                </div>

                <div className="navbar-actions">
                    {!user && (
                        <>
                            <Link to="/login" className="btn btn-secondary">Login</Link>
                            <Link to="/signup" className="btn btn-primary">Signup</Link>
                        </>
                    )}
                    {user && !user.isRecruiter && (
                        <>
                            <span style={{ cursor: 'pointer', fontSize: '1.7rem', marginLeft: '0.5rem', position: 'relative' }} title="Notifications" onClick={handleBellClick}>
                                🔔
                                {notifications.some(n => !n.read) && (
                                    <span style={{ position: 'absolute', top: 0, right: 0, background: 'red', color: 'white', borderRadius: '50%', fontSize: '0.7rem', padding: '2px 6px' }}>{notifications.filter(n => !n.read).length}</span>
                                )}
                            </span>
                            {showNotifications && (
                                <div style={{ position: 'absolute', right: 0, top: '2.5rem', background: '#fff', color: '#222', border: '1px solid #e9ecef', borderRadius: '8px', boxShadow: '0 2px 8px rgba(60, 72, 88, 0.10)', minWidth: '260px', maxHeight: '350px', overflowY: 'auto', zIndex: 100 }}>
                                    <div style={{ padding: '0.7rem', borderBottom: '1px solid #eee', fontWeight: 600 }}>Notifications</div>
                                    {notifications.length === 0 ? (
                                        <div style={{ padding: '1rem' }}>No notifications</div>
                                    ) : notifications.map(n => (
                                        <div key={n._id} style={{ padding: '0.7rem', borderBottom: '1px solid #eee', background: n.read ? '#f8f9fa' : '#e6f7ff' }}>
                                            {n.message}<br />
                                            <span style={{ fontSize: '0.8rem', color: '#888' }}>{new Date(n.date).toLocaleString()}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
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
                                    <div><strong>Name:</strong> {user.name}</div>
                                    <div><strong>Email:</strong> {user.email}</div>
                                    <button onClick={logout} className="btn btn-secondary" style={{ marginTop: '1rem', width: '100%' }}>Logout</button>
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

export default Navbar; 