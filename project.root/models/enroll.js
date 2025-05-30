const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    fullName: {  // Changed 'name' to 'fullName' to match frontend
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    enrolledAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
