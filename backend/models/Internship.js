const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, default: 'Applied' },
    date: { type: Date, default: Date.now }
}, { _id: false });

const internshipSchema = new mongoose.Schema({
    recruiter: { type: mongoose.Schema.Types.ObjectId, ref: 'Recruiter', required: true },
    jobProfile: { type: String, required: true },
    locationType: { type: String, enum: ['Remote', 'Office'], required: true },
    stipend: { type: String },
    duration: { type: String },
    skills: [String],
    qualification: { type: String },
    description: { type: String },
    applicants: [applicantSchema],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Internship', internshipSchema); 