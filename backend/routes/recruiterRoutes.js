const express = require('express');
const { registerRecruiter, loginRecruiter } = require('../controllers/recruiterController');
const router = express.Router();

router.post('/signup', registerRecruiter);
router.post('/login', loginRecruiter);

module.exports = router; 