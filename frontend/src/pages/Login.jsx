import { useState, useContext } from 'react';
import './Login.css';
import googleLogo from '../assets/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState('student');
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        setError('');
        try {
            let url = 'http://localhost:5000/api/users/login';
            if (role === 'recruiter') {
                url = 'http://localhost:5000/api/recruiters/login';
            }
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            if (res.status === 400) {
                // Invalid credentials, show alert
                alert('Invalid credentials');
                return;
            }
            if (!res.ok) throw new Error('Login failed');
            const user = await res.json();
            // Store user info (including _id and company) in localStorage and context
            localStorage.setItem('user', JSON.stringify({ _id: user._id, name: user.name, email: user.email, company: user.company }));
            setUser({ _id: user._id, name: user.name, email: user.email, company: user.company });
            // Login successful, redirect
            if (role === 'recruiter') {
                navigate('/recruiter-dashboard');
            } else {
                navigate('/');
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-top-heading">Login to your account</div>
            <div className="login-subheading">Find your next opportunity on OnlyInternship</div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
                <button type="button" className={role === 'student' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setRole('student')}>Login as Student</button>
                <button type="button" className={role === 'recruiter' ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setRole('recruiter')} style={{ marginLeft: '1rem' }}>Login as Recruiter</button>
            </div>
            <div className="login-center-wrapper">
                <div className="login-card">
                    <button type="button" className="google-login-btn">
                        <img src={googleLogo} alt="Google" className="google-icon" />
                        Login with Google
                    </button>
                    <div className="login-divider">OR</div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        {error && <div className="login-error">{error}</div>}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="login-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="login-input"
                        />
                        <button type="submit" className="btn btn-primary login-btn">Login</button>
                        <div className="login-links-row">
                            <Link to="#" className="login-forgot">Forgot password?</Link>
                        </div>
                        <div className="login-register-link">
                            New on OnlyInternship? <Link to="/signup">Register now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; 