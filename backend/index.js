const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB(); // Connect to DB

app.use(cors());
app.use(express.json()); // Parse JSON body

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/recruiters', require('./routes/recruiterRoutes'));
app.use('/api/internships', require('./routes/internshipRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
