import { useState, useEffect, useContext, useRef } from 'react';
import { UserContext } from '../context/UserContext';
import './RecruiterDashboard.css';
import { BACKEND_URL } from '../config';

const RecruiterDashboard = () => {
    const { user } = useContext(UserContext);
    const [internships, setInternships] = useState([]);
    const [form, setForm] = useState({
        jobProfile: '',
        locationType: 'Remote',
        stipend: '',
        stipendCurrency: 'INR',
        duration: '',
        skills: [],
        skillInput: '',
        qualification: '',
        description: ''
    });
    const [message, setMessage] = useState('');
    const [applicants, setApplicants] = useState({}); // internshipId -> array of applicants
    const [loadingApplicants, setLoadingApplicants] = useState('');
    const [showSkillSuggestions, setShowSkillSuggestions] = useState(false);
    const [showAllSkills, setShowAllSkills] = useState(false);
    const SKILL_LIMIT = 10; // Number of skills to show by default
    const postedSectionRef = useRef(null);

    const jobProfileOptions = [
        'Web Development Intern',
        'App Development Intern',
        'Software Development Intern (SDE)',
        'Data Science Intern',
        'Machine Learning Intern',
        'Artificial Intelligence Intern',
        'Cybersecurity Intern',
        'Blockchain Intern',
        'DevOps Intern',
        'Cloud Computing Intern',
        'Game Development Intern',
        'UI/UX Design Intern',
        'Graphic Design Intern',
        'Video Editing Intern',
        'Animation Intern',
        'Product Management Intern',
        'Business Development Intern',
        'Marketing Intern',
        'Finance Intern',
        'Human Resources (HR) Intern',
        'Content Writing Intern',
        'Technical Writing Intern',
        'Legal Intern',
        'Operations Intern',
        'Customer Support Intern',
        'Other'
    ];

    // Flat, categorized list of all skills
    const allSkills = [
        // Development
        'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Git', 'MongoDB', 'Java', 'C++', 'Python', 'Data Structures and Algorithms (DSA)', 'OOP (Object-Oriented Programming)',
        'Android (Java/Kotlin)', 'iOS (Swift)', 'Flutter', 'Firebase', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'Jupyter Notebooks',
        'Networking Basics', 'Kali Linux', 'Burp Suite', 'Solidity', 'Ethereum', 'Web3.js', 'Docker', 'Jenkins', 'CI/CD', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Unity', 'Unreal Engine', 'C#',
        // Design & Creative
        'Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Adobe Premiere Pro', 'After Effects', 'Blender', 'Maya', 'Storyboarding',
        // Business & Management
        'Agile Methodologies', 'Roadmapping', 'User Stories', 'Market Research', 'Jira', 'CRM Tools (HubSpot, Zoho)', 'Google Analytics', 'SEO', 'SEM', 'Excel', 'Financial Modeling', 'Tally', 'QuickBooks', 'Resume Screening', 'Onboarding',
        // Other
        'English Grammar', 'SEO Writing', 'Blogging', 'WordPress', 'Markdown', 'API Documentation', 'MS Word', 'Legal Research', 'Drafting', 'Communication Skills', 'Problem Solving', 'Ticketing Systems', 'Coordination'
    ];

    const filteredSkillSuggestions = form.skillInput
        ? allSkills.filter(skill =>
            skill.toLowerCase().includes(form.skillInput.toLowerCase()) && !form.skills.includes(skill)
        )
        : [];

    // Fetch internships posted by this recruiter
    useEffect(() => {
        if (!user) return;
        fetch(`${BACKEND_URL}/api/internships/all`)
            .then(res => res.json())
            .then(data => {
                // Only show internships posted by this recruiter
                setInternships(data.filter(i => i.recruiter && i.recruiter.email === user.email));
            });
    }, [user, message]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSkillInputChange = e => {
        setForm(f => ({ ...f, skillInput: e.target.value }));
        setShowSkillSuggestions(true);
    };
    const handleSkillInputKeyDown = e => {
        if ((e.key === 'Enter' || e.key === ',') && form.skillInput.trim()) {
            e.preventDefault();
            const newSkill = form.skillInput.trim();
            if (!form.skills.includes(newSkill)) {
                setForm(f => ({ ...f, skills: [...f.skills, newSkill], skillInput: '' }));
            } else {
                setForm(f => ({ ...f, skillInput: '' }));
            }
            setShowSkillSuggestions(false);
        }
        if (e.key === 'Escape') setShowSkillSuggestions(false);
    };
    const handleSkillSuggestionClick = skill => {
        setForm(f => ({ ...f, skills: [...f.skills, skill], skillInput: '' }));
        setShowSkillSuggestions(false);
    };
    const handleRemoveSkill = skill => {
        setForm(f => ({ ...f, skills: f.skills.filter(s => s !== skill) }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMessage('');
        const recruiterId = user && user._id;
        if (!recruiterId) {
            setMessage('Recruiter info missing. Please log in again.');
            return;
        }
        const res = await fetch(`${BACKEND_URL}/api/internships/post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                recruiterId,
                jobProfile: form.jobProfile,
                locationType: form.locationType,
                stipend: (form.stipendCurrency === 'INR' ? '₹' : '$') + form.stipend,
                duration: form.duration,
                skills: form.skills,
                qualification: form.qualification,
                description: form.description
            })
        });
        if (res.ok) {
            setMessage('Internship posted!');
            setForm({ jobProfile: '', locationType: 'Remote', stipend: '', duration: '', skills: [], skillInput: '', qualification: '', description: '' });
            setTimeout(() => {
                if (postedSectionRef.current) {
                    postedSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            setMessage('Failed to post internship.');
        }
    };

    const handleViewApplicants = async (internshipId) => {
        setLoadingApplicants(internshipId);
        const res = await fetch(`${BACKEND_URL}/api/internships/${internshipId}/applicants`);
        if (res.ok) {
            const data = await res.json();
            setApplicants(prev => ({ ...prev, [internshipId]: data }));
        }
        setLoadingApplicants('');
    };

    const handleStatusChange = async (internshipId, applicantId, newStatus) => {
        await fetch(`${BACKEND_URL}/api/internships/${internshipId}/applicants/${applicantId}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        });
        // Refresh applicants for this internship
        await handleViewApplicants(internshipId);
    };

    return (
        <div className="recruiter-dashboard-container">
            <h2>Recruiter Dashboard</h2>
            <h3>Post a New Internship</h3>
            <form onSubmit={handleSubmit} className="recruiter-dashboard-form">
                <label>Job Profile</label>
                <select name="jobProfile" value={form.jobProfile} onChange={handleChange} required>
                    <option value="">Select a role</option>
                    {jobProfileOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                {form.jobProfile === 'Other' && (
                    <input name="jobProfile" value={form.jobProfileCustom || ''} onChange={e => setForm(f => ({ ...f, jobProfile: e.target.value }))} placeholder="Enter custom job profile" required />
                )}
                <label>Stipend</label>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <select name="stipendCurrency" value={form.stipendCurrency} onChange={handleChange} style={{ width: '90px' }}>
                        <option value="INR">₹ INR</option>
                        <option value="USD">$ USD</option>
                    </select>
                    <input name="stipend" value={form.stipend} onChange={handleChange} placeholder="Amount" style={{ flex: 1 }} />
                </div>
                <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" />
                <label>Skills</label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    {form.skills.map(skill => (
                        <span key={skill} style={{ background: '#e6e9f0', borderRadius: '6px', padding: '0.3rem 0.8rem', fontSize: '0.98rem', border: '1px solid #d1d5db', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                            {skill}
                            <span style={{ cursor: 'pointer', color: '#ff6b6b', fontWeight: 'bold' }} onClick={() => handleRemoveSkill(skill)}>&times;</span>
                        </span>
                    ))}
                </div>
                <div style={{ position: 'relative' }}>
                    <input
                        name="skillInput"
                        value={form.skillInput}
                        onChange={handleSkillInputChange}
                        onKeyDown={handleSkillInputKeyDown}
                        placeholder="Type a skill and press Enter or comma"
                        autoComplete="off"
                        onBlur={() => setTimeout(() => setShowSkillSuggestions(false), 100)}
                        onFocus={() => form.skillInput && setShowSkillSuggestions(true)}
                    />
                    {showSkillSuggestions && filteredSkillSuggestions.length > 0 && (
                        <div style={{ position: 'absolute', top: '110%', left: 0, background: '#fff', border: '1px solid #e9ecef', borderRadius: 8, boxShadow: '0 2px 8px rgba(60,72,88,0.10)', zIndex: 10, minWidth: '220px', maxHeight: '180px', overflowY: 'auto' }}>
                            {filteredSkillSuggestions.map(skill => (
                                <div
                                    key={skill}
                                    style={{ padding: '0.5rem 1rem', cursor: 'pointer', borderBottom: '1px solid #f0f0f0' }}
                                    onMouseDown={() => handleSkillSuggestionClick(skill)}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div style={{ margin: '0.5rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {(showAllSkills ? allSkills : allSkills.slice(0, SKILL_LIMIT)).map(skill => (
                        <span
                            key={skill}
                            style={{ background: '#e6e9f0', borderRadius: '6px', padding: '0.3rem 0.8rem', cursor: 'pointer', fontSize: '0.98rem', border: '1px solid #d1d5db' }}
                            onClick={() => {
                                if (!form.skills.includes(skill)) setForm(f => ({ ...f, skills: [...f.skills, skill] }));
                            }}
                        >{skill}</span>
                    ))}
                    {allSkills.length > SKILL_LIMIT && (
                        <button
                            type="button"
                            style={{ background: 'transparent', border: 'none', color: '#667eea', fontWeight: 600, cursor: 'pointer', fontSize: '1rem', padding: '0.3rem 0.8rem' }}
                            onClick={() => setShowAllSkills(s => !s)}
                        >
                            {showAllSkills ? 'See less' : `See more (${allSkills.length - SKILL_LIMIT})`}
                        </button>
                    )}
                </div>
                <input name="qualification" value={form.qualification} onChange={handleChange} placeholder="Qualification" />
                <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
                <button type="submit">Post Internship</button>
            </form>
            {message && <div className={`recruiter-dashboard-message${message.includes('Failed') ? ' error' : ''}`}>{message}</div>}
            <h3 ref={postedSectionRef}>Your Posted Internships</h3>
            <div className="recruiter-internship-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
                {internships.map(i => (
                    <div key={i._id} className="recruiter-internship-card" style={{ background: '#fff', borderRadius: '15px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.10)', border: '1px solid #e9ecef', transition: 'all 0.3s', marginBottom: '1.5rem' }}>
                        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333', margin: 0 }}>{i.jobProfile}</h3>
                            <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500 }}>{i.locationType}</span>
                        </div>
                        <div className="card-details" style={{ marginBottom: '1.2rem' }}>
                            <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>{i.description}</p>
                        </div>
                        <div className="card-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.7rem' }}>
                            {i.skills && i.skills.map((s, idx) => <span className="tag" key={idx} style={{ background: '#f8f9fa', color: '#667eea', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 500, border: '1px solid #e9ecef' }}>{s}</span>)}
                        </div>
                        <div style={{ marginBottom: '0.5rem' }}>Stipend: {i.stipend} | Duration: {i.duration}</div>
                        <div style={{ marginBottom: '0.5rem' }}>Qualification: {i.qualification}</div>
                        <button onClick={() => handleViewApplicants(i._id)} style={{ marginTop: 8, background: 'linear-gradient(90deg, #ffb347 0%, #ff6b6b 100%)', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.7rem 1.5rem', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 8px rgba(255,107,107,0.10)', transition: 'background 0.2s, transform 0.2s' }}>View Applicants</button>
                        {loadingApplicants === i._id && <div>Loading applicants...</div>}
                        {applicants[i._id] && (
                            <div className="recruiter-dashboard-applicants">
                                <strong>Applicants:</strong>
                                {applicants[i._id].length === 0 ? (
                                    <div>No applicants yet.</div>
                                ) : (
                                    <ul>
                                        {applicants[i._id].map(a => (
                                            <li key={a.user?._id || a._id} className="recruiter-dashboard-applicant-item">
                                                Name: {a.user?.name || 'N/A'}<br />
                                                Email: {a.user?.email || 'N/A'}<br />
                                                Qualification: {a.user?.qualification || 'N/A'}<br />
                                                <span className="recruiter-dashboard-applicant-status">
                                                    Status: <select value={a.status} onChange={e => handleStatusChange(i._id, a.user._id, e.target.value)}>
                                                        <option value="Applied">Applied</option>
                                                        <option value="Reviewed">Reviewed</option>
                                                        <option value="Accepted">Accepted</option>
                                                        <option value="Rejected">Rejected</option>
                                                    </select>
                                                </span><br />
                                                Date: {a.date ? new Date(a.date).toLocaleDateString() : 'N/A'}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecruiterDashboard; 