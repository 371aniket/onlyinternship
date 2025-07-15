import { useState, useContext } from 'react';
import './Signup.css';
import googleLogo from '../assets/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { BACKEND_URL } from '../config';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState('student');
    const [company, setCompany] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password || (role === 'recruiter' && !company)) {
            setError('Please fill in all fields.');
            return;
        }
        setError('');
        try {
            let url = `${BACKEND_URL}/api/users/signup`;
            let body = { name: firstName + ' ' + lastName, email, password };
            if (role === 'recruiter') {
                url = `${BACKEND_URL}/api/recruiters/signup`;
                body.company = company;
            }
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (res.status === 400) {
                const data = await res.json();
                alert(data.msg || (role === 'recruiter' ? 'Recruiter already exists' : 'User already exists'));
                return;
            }
            if (!res.ok) throw new Error('Signup failed');
            // Signup successful
            if (role === 'recruiter') {
                navigate('/recruiter-dashboard');
            } else {
                navigate('/login');
            }
        } catch (err) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-top-heading">Sign-up and apply for free</div>
            <div className="signup-subheading">3,00,000+ companies hiring on Internshala</div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
                <button type="button" className={role === 'student' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setRole('student')}>Signup as Student</button>
                <button type="button" className={role === 'recruiter' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setRole('recruiter')} style={{ marginLeft: '1rem' }}>Signup as Recruiter</button>
            </div>
            <div className="signup-center-wrapper">
                <div className="signup-card">
                    <button type="button" className="google-signup-btn">
                        <img src={googleLogo} alt="Google" className="google-icon" />
                        Sign up with Google
                    </button>
                    <div className="signup-divider">OR</div>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        {error && <div className="signup-error">{error}</div>}
                        <label className="signup-label">Email</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="signup-input"
                        />
                        <label className="signup-label">Password</label>
                        <input
                            type="password"
                            placeholder="Must be atleast 6 characters"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="signup-input"
                        />
                        <div className="signup-names-row">
                            <div className="signup-names-col">
                                <label className="signup-label">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    className="signup-input"
                                />
                            </div>
                            <div className="signup-names-col">
                                <label className="signup-label">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    className="signup-input"
                                />
                            </div>
                        </div>
                        {role === 'recruiter' && (
                            <>
                                <label className="signup-label">Company</label>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    value={company}
                                    onChange={e => setCompany(e.target.value)}
                                    className="signup-input"
                                />
                            </>
                        )}
                        <button type="submit" className="btn signup-btn-blue">Sign up</button>
                        <div className="signup-terms">By signing up, you agree to our <a href="#">Terms and Conditions</a>.</div>
                        <div className="signup-login-link">Already have an account? <a href="/login">Log in</a></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup; 