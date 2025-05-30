// server.js (Updated with Review Submission Feature)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const User = require('./models/User');
const Enrollment = require('./models/enroll.js');
const Query = require('./models/query.js');
const Review = require('./models/review.js'); // New Review model

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect('mongodb://localhost:27017/codehub', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => console.log('❌ MongoDB error:', err));

// ✅ Login route
app.post('/login', async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ username: emailOrPhone }, { phone: emailOrPhone }]
    });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const enrollment = await Enrollment.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }]
    });

    if (!enrollment) {
      return res.status(403).json({
        success: false,
        message: 'You have not enrolled in any course. Please enroll to login.'
      });
    }

    res.json({ success: true, message: 'Login successful', name: enrollment.fullName });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ✅ Enroll route (creates user + saves enrollment)
app.post('/enroll', async (req, res) => {
  const { fullName, email, phone, course, price, password } = req.body;

  try {
    const newEnrollment = new Enrollment({
      fullName,
      email,
      phone,
      course,
      price
    });
    await newEnrollment.save();

    const existingUser = await User.findOne({ username: email });
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username: email,
        password: hashedPassword,
        course
      });
      await newUser.save();
    }

    res.status(201).json({ success: true, message: 'Enrollment & user creation successful' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Enrollment failed', error: err.message });
  }
});

// ✅ Query form submission
app.post('/api/query', async (req, res) => {
  const { name, email, query } = req.body;

  try {
    const newQuery = new Query({ name, email, query });
    await newQuery.save();
    res.status(200).json({ message: 'Query submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save query' });
  }
});

// ✅ Submit Review
app.post('/submit-review', async (req, res) => {
  const { name, review, rating } = req.body;

  if (!name || !review || !rating) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newReview = new Review({ name, review, rating });
    await newReview.save();
    res.status(200).json({ message: 'Review submitted successfully' });
  } catch (error) {
    console.error('Review submission error:', error);
    res.status(500).json({ message: 'Failed to submit review' });
  }
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
