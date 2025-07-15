const express = require('express');
const { postInternship, getAllInternships, applyToInternship, getApplicants, updateApplicantStatus } = require('../controllers/internshipController');
const router = express.Router();

// Recruiter posts a new internship
router.post('/post', postInternship);
// List all internships
router.get('/all', getAllInternships);
// User applies to an internship
router.post('/apply', applyToInternship);
// Recruiter gets applicants for an internship
router.get('/:internshipId/applicants', getApplicants);
// Recruiter updates applicant status
router.patch('/:internshipId/applicants/:applicantId/status', updateApplicantStatus);

module.exports = router; 