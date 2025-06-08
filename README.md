# 💻 CODE HUB – Learn & Explore Technology
x  **Code Hub** is a full-stack educational platform developed for students to access high-quality learning content. It offers free and paid courses, dynamic video portals, assignment uploads, certificate modules, and more — all in one centralized place.

## 🔍 Overview

Code Hub provides a seamless experience for both learners and administrators. Students can sign up, log in, view course videos, submit assignments, and track their progress. Admins can manage courses, view submissions, and handle certificates (planned).

---

## 🎯 Features

✅ Stylish Home Page with sticky navbar  
✅ Student and Admin Login system  
✅ Course cards linked to dynamic video player  
✅ Free Courses (Frontend, AI, Data Science, DBMS, etc.)  
✅ Individual course pages with YouTube video embedding  
✅ Assignment and project file uploads with submission status  
✅ Green tick shown after successful submission  
✅ Sidebar-based learning portal  
✅ Responsive UI and Mobile Friendly  
✅ Backend integration with MongoDB and Node.js  
✅ Session or localStorage-based login flow  
✅ Certificate module (planned)


## 📁 Project Structure

code-hub/
│
├── index.html # Landing page with free courses
├── login.html # Student/Admin login
├── signup.html # New user registration
├── free_course.html # All free courses in card format
├── studentportol.html # Dynamic video player with title & tracking
├── assignment.html # Upload assignments and show status
├── certificate.html # Certificate (design only)
├── /routes # Node.js backend API routes
│ ├── auth.js
│ ├── course.js
│ └── assignment.js
├── server.js # Main server file
├── .env # MongoDB URI and secrets
└── /public # Images, CSS, JS

## 💡 Tech Stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| Frontend  | HTML5, CSS3, JavaScript        |
| Styling   | Bootstrap, Font Awesome        |
| Backend   | Node.js, Express.js            |
| Database  | MongoDB, Mongoose              |
| Storage   | LocalStorage / SessionStorage  |
| Hosting   | (Planned) Netlify + Render     |

---
## 🖼️ Screenshots
Home page : ![image](https://github.com/user-attachments/assets/895dc2ca-6c82-49b6-baa8-8c230a16de5f)
Free Course : ![image](https://github.com/user-attachments/assets/04eed155-9d4d-4a36-bf9c-a21a18a16469)
Paid Course : ![image](https://github.com/user-attachments/assets/7987c7ea-a3fd-4291-b0fe-c0538066899c)
About us : ![image](https://github.com/user-attachments/assets/e7fcbfd8-d833-4849-bc38-c06c938a1bfb)
Login : ![image](https://github.com/user-attachments/assets/b13b9ffa-8989-48db-8329-228af9414177)


## 🚀 How to Run Locally

### 🧩 1. Clone the repository
```bash
git clone https://github.com/Sachin-Garg76/code-hub.git

  cd code-hub
  npm install
  MONGO_URI=your_mongodb_connection_string
  node server.js


📬 Contact
👨‍💻 Developer: Sachin Garg
🎓 University: Sanskriti University
📧 Email: S32314800@gmail.com (placeholder)
🔗 GitHub: https://github.com/Sachin-Garg76/
