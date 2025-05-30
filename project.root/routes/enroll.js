// Extract query parameters (course and price)
const urlParams = new URLSearchParams(window.location.search);
const course = urlParams.get('course');
const price = urlParams.get('price');

// Display course information on enrol.js
document.getElementById('course-name').textContent = course;
document.getElementById('course-price').textContent = "₹" + price;

// Handle enrollment submission (e.g., save to database, etc.)
// When enrolled, redirect to student portal
function enroll() {
    // Save enrollment details (e.g., to the server or local storage)
    window.location.href = "studentportal.html?course=" + course;
}

// Button to enroll
document.getElementById('enroll-button').addEventListener('click', enroll);
