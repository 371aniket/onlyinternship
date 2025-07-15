const Internship = require('../models/Internship');
const User = require('../models/User');
const Notification = require('../models/Notification');

// Recruiter posts a new internship
const postInternship = async (req, res) => {
    try {
        const { recruiterId, jobProfile, locationType, stipend, duration, skills, qualification, description } = req.body;
        const internship = await Internship.create({
            recruiter: recruiterId,
            jobProfile,
            locationType,
            stipend,
            duration,
            skills,
            qualification,
            description
        });
        res.status(201).json(internship);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// List all internships
const getAllInternships = async (req, res) => {
    try {
        const internships = await Internship.find()
            .populate('recruiter', 'name email company')
            .populate('applicants.user', 'name email qualification');
        res.status(200).json(internships);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// User applies to an internship
const applyToInternship = async (req, res) => {
    try {
        const { internshipId, userId } = req.body;
        const internship = await Internship.findById(internshipId);
        if (!internship) return res.status(404).json({ msg: 'Internship not found' });
        if (internship.applicants.some(a => a.user.toString() === userId)) return res.status(400).json({ msg: 'Already applied' });
        internship.applicants.push({ user: userId, status: 'Applied', date: new Date() });
        await internship.save();
        res.status(200).json({ msg: 'Applied successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Recruiter gets applicants for their internship
const getApplicants = async (req, res) => {
    try {
        const { internshipId } = req.params;
        const internship = await Internship.findById(internshipId).populate('applicants.user', '-password');
        if (!internship) return res.status(404).json({ msg: 'Internship not found' });
        res.status(200).json(internship.applicants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Recruiter updates applicant status
const updateApplicantStatus = async (req, res) => {
    try {
        const { internshipId, applicantId } = req.params;
        const { status } = req.body;
        const internship = await Internship.findById(internshipId);
        if (!internship) return res.status(404).json({ msg: 'Internship not found' });
        const applicant = internship.applicants.find(a => a.user.toString() === applicantId);
        if (!applicant) return res.status(404).json({ msg: 'Applicant not found' });
        applicant.status = status;
        await internship.save();
        // Create notification for applicant
        const message = `Your application for '${internship.jobProfile}' at '${internship.recruiter}' is now '${status}'.`;
        await Notification.create({ user: applicantId, message });
        res.status(200).json({ msg: 'Status updated', status });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { postInternship, getAllInternships, applyToInternship, getApplicants, updateApplicantStatus }; 