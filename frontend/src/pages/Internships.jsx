import logo from '../assets/logo.webp';
import './Internships.css';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Internships = () => {
    const { user } = useContext(UserContext);
    const [internships, setInternships] = useState([]);
    const [applied, setApplied] = useState({}); // internshipId: true
    const [appliedList, setAppliedList] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/internships/all')
            .then(res => res.json())
            .then(data => {
                setInternships(data);
                if (user && user._id) {
                    // Find internships this user has applied to
                    const appliedTo = data.filter(i => i.applicants && i.applicants.includes(user._id));
                    setAppliedList(appliedTo);
                }
            });
    }, [user, message]);

    const handleApply = async (internshipId) => {
        setMessage('');
        if (!user) {
            setMessage('Please login as a student to apply.');
            return;
        }
        const res = await fetch('http://localhost:5000/api/internships/apply', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ internshipId, userId: user._id })
        });
        if (res.ok) {
            setApplied(prev => ({ ...prev, [internshipId]: true }));
            setMessage('Applied successfully!');
        } else {
            const data = await res.json();
            setMessage(data.msg || 'Failed to apply.');
        }
    };

    return (
        <div className="internships-page">
            {/* Internships Section */}
            <section className="internships-section">
                <div className="container">
                    <div className="internships-header">
                        <img src={logo} alt="OnlyInternship Logo" className="internships-logo-img" />
                        <h2>Featured Internships</h2>
                    </div>
                    {user && user._id && appliedList.length > 0 && (
                        <div style={{ margin: '1.5rem 0', background: '#f8f9fa', padding: '1rem', borderRadius: 8 }}>
                            <h3>Internships You've Applied To</h3>
                            <ul>
                                {appliedList.map(i => {
                                    const app = i.applicants.find(a => a.user && a.user._id === user._id);
                                    return (
                                        <li key={i._id} style={{ marginBottom: 8 }}>
                                            <strong>{i.jobProfile}</strong> at {i.recruiter?.company || i.recruiter?.name || 'N/A'}<br />
                                            Status: {app?.status === 'Rejected' ? (
                                                <span style={{ color: 'red', fontWeight: 600 }}>Rejected</span>
                                            ) : app?.status || 'Applied'}<br />
                                            Date: {app?.date ? new Date(app.date).toLocaleDateString() : 'N/A'}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                    {message && <div style={{ color: message.includes('success') ? 'green' : 'red', margin: '1rem 0' }}>{message}</div>}
                    <div className="internship-grid">
                        {internships.map(i => (
                            <div className="internship-card" key={i._id}>
                                <div className="card-header">
                                    <h3>{i.jobProfile}</h3>
                                    <span className="company">{i.recruiter?.company || i.recruiter?.name || 'N/A'}</span>
                                </div>
                                <div className="card-details">
                                    <p>{i.description}</p>
                                </div>
                                <div className="card-tags">
                                    {i.skills && i.skills.map((s, idx) => <span className="tag" key={idx}>{s}</span>)}
                                </div>
                                <div>Location: {i.locationType} | Stipend: {i.stipend} | Duration: {i.duration}</div>
                                <div>Qualification: {i.qualification}</div>
                                {user && user._id && !applied[i._id] ? (
                                    <button onClick={() => handleApply(i._id)} style={{ marginTop: 8 }}>Apply</button>
                                ) : user && user._id && applied[i._id] ? (
                                    <button disabled style={{ marginTop: 8 }}>Applied</button>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Internships; 