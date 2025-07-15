import './Reviews.css';
import { useState } from 'react';

const stories = [
    {
        image: 'https://lf.dealmakersforums.com/wp-content/uploads/2023/07/Johnson_Official_1-1383x1536.jpg',
        text: '"OnlyInternship helped me land my dream internship at Google. The platform is incredibly user-friendly!"',
        author: 'Sarah Johnson',
        role: 'Software Engineering Intern at Google',
    },
    {
        image: 'https://as1.ftcdn.net/v2/jpg/06/99/46/60/1000_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg',
        text: '"The smart matching feature found me the perfect role that matched my skills and career goals."',
        author: 'Mike Chen',
        role: 'Data Science Intern at Microsoft',
    },
    {
        image: 'https://as2.ftcdn.net/v2/jpg/05/80/60/33/1000_F_580603305_ysEbDBvHCKM9TyzEINHyW614NWLdTe0b.jpg',
        text: '"Quick and easy application process. I got responses within days of applying!"',
        author: 'Emily Rodriguez',
        role: 'UX Design Intern at Apple',
    },
    {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        text: '"The platform connected me with amazing mentors who guided me through the entire process."',
        author: 'David Kim',
        role: 'Product Management Intern at Amazon',
    },
    {
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        text: '"From application to offer letter in just 2 weeks! OnlyInternship made it seamless."',
        author: 'Priya Patel',
        role: 'AI Research Intern at Meta',
    },
    {
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        text: '"The career guidance and interview preparation resources were invaluable for my success."',
        author: 'Alex Thompson',
        role: 'Software Engineer Intern at Netflix',
    },
];

const Reviews = () => {
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const storiesPerView = 3;

    const handleNextStory = () => {
        setCurrentStoryIndex((prev) =>
            prev < stories.length - storiesPerView ? prev + 1 : 0
        );
    };

    const handlePrevStory = () => {
        setCurrentStoryIndex((prev) =>
            prev > 0 ? prev - 1 : stories.length - storiesPerView
        );
    };

    return (
        <div className="reviews-page">
            <section className="intro-success">
                <div className="container">
                    <div className="success-header">
                        <div className="internships-counter">
                            <h2>20,890+</h2>
                            <p>Internships</p>
                        </div>
                        <div className="stories-link">
                            <h3>Read their stories</h3>
                        </div>
                    </div>
                    <div className="success-stories-container">
                        <button className="nav-arrow nav-arrow-left" onClick={handlePrevStory}>
                            <span>‹</span>
                        </button>
                        <div className="success-stories-wrapper">
                            <div
                                className="success-stories-track"
                                style={{ transform: `translateX(${currentStoryIndex * -(100 / storiesPerView)}%)` }}
                            >
                                {stories.map((story, idx) => (
                                    <div className="success-card" key={idx}>
                                        <div className="success-avatar">
                                            <img src={story.image} alt={story.author} className="success-image" />
                                        </div>
                                        <div className="success-content">
                                            <p>{story.text}</p>
                                            <div className="success-author">
                                                <h4>{story.author}</h4>
                                                <span>{story.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="nav-arrow nav-arrow-right" onClick={handleNextStory}>
                            <span>›</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews; 