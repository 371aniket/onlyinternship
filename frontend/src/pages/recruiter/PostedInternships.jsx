import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import '../../pages/Internships.css';
import { BACKEND_URL } from '../../config';

const PostedInternships = () => {
    const { user } = useContext(UserContext);
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        if (!user) return;
        fetch(`${BACKEND_URL}/api/internships/all`)
            .then(res => res.json())
            .then(data => {
                setInternships(data.filter(i => i.recruiter && i.recruiter.email === user.email));
            });
    }, [user]);

    return (
        <div className="internships-page">
            <section className="internships-section">
                <div className="container">
                    <div className="internships-header">
                        <h2>Your Posted Internships</h2>
                    </div>
                    <div className="internship-grid">
                        {internships.map(i => (
                            <div className="internship-card" key={i._id}>
                                <div className="card-header">
                                    <h3>{i.jobProfile}</h3>
                                    <span className="company">{user.company || user.name}</span>
                                </div>
                                <div className="card-details">
                                    <p>{i.description}</p>
                                </div>
                                <div className="card-tags">
                                    {i.skills && i.skills.map((s, idx) => <span className="tag" key={idx}>{s}</span>)}
                                </div>
                                <div>Location: {i.locationType} | Stipend: {i.stipend} | Duration: {i.duration}</div>
                                <div>Qualification: {i.qualification}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PostedInternships; 