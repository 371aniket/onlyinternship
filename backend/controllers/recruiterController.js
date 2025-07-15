const Recruiter = require('../models/Recruiter');
const bcrypt = require('bcryptjs');

const registerRecruiter = async (req, res) => {
    const { name, email, password, company } = req.body;
    try {
        const exist = await Recruiter.findOne({ email });
        if (exist) return res.status(400).json({ msg: 'Recruiter already exists' });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newRecruiter = await Recruiter.create({ name, email, password: hashedPassword, company });
        res.status(201).json({ name: newRecruiter.name, email: newRecruiter.email, company: newRecruiter.company, _id: newRecruiter._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const loginRecruiter = async (req, res) => {
    const { email, password } = req.body;
    try {
        const recruiter = await Recruiter.findOne({ email });
        if (!recruiter) return res.status(400).json({ msg: 'Invalid credentials' });
        const isMatch = await bcrypt.compare(password, recruiter.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
        res.status(200).json({ name: recruiter.name, email: recruiter.email, company: recruiter.company, _id: recruiter._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { registerRecruiter, loginRecruiter }; 