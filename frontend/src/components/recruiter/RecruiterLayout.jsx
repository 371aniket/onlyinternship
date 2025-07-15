// frontend/src/components/recruiter/RecruiterLayout.jsx

import React from 'react';
import RecruiterNavbar from './RecruiterNavbar';

const RecruiterLayout = ({ children }) => {
    return (
        <>
            <RecruiterNavbar />
            <div className="main-content">
                {children}
            </div>
        </>
    );
};

export default RecruiterLayout;
