# Cloud Admin Dashboard
A full-stack User Management Web Application hosted on AWS. Users can be added and deleted via a web interface. The backend runs on Node.js, the frontend uses HTML, CSS, and JavaScript, and user data is stored in AWS RDS MySQL. The application is load-balanced with AWS ALB and auto-scaled with AWS ASG.
---

## Features

- Multi-page website: Home and Users page
- Add and delete users from browser
- User data stored in MySQL
- Hosted on AWS EC2 with Nginx reverse proxy
- Hosted on AWS EC2 behind Application Load Balancer (ALB)
- Auto-scaling enabled via Auto Scaling Group (ASG)
- Security group allows ports 22 (SSH), 80 (HTTP), 3000 (Node.js API)

---

## Technologies

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: MySQL on AWS RDS
- AWS Services: EC2, RDS, ALB, ASG, Security Groups
- Process Manager: PM2 
---

## Security Group Configuration

Make sure your EC2 Security Group allows:
| Port | Protocol | Purpose                |
| ---- | -------- | ---------------------- |
| 22   | TCP      | SSH access             |
| 80   | TCP      | HTTP traffic (ALB)     |
| 3000 | TCP      | Node.js API (optional) |



## Dependencies

- Node.js
node -v
npm -v

- npm packages:
  - express
  - cors
  - pm2 (for running server)
- MySQL server
Make sure port 80 and 3000 are open in your EC2 Security Group.
---

## Setup & Run

1. Clone the repository:

git clone <repo-url>
cd cloud-user-dashboard

2. Install backend dependencies:

cd backend/
npm install

3. Configure MySQL database:
Create database and users table:

CREATE DATABASE cloud_db;
USE cloud_db;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

Update db.js with database credentials.


4. Start backend server with PM2:
   
cd backend/
pm2 start server.js --name cloud-backend
pm2 save

Or for development:
node server.js

5. Configure Nginx:
   
Point Nginx root to the frontend folder
Restart Nginx:
sudo systemctl restart nginx

6. Access the Application

Open browser at:

http://<ALB-DNS-Name>/

Use the Users page to add or delete users.

Usage:
Navigate between Home and Users pages.
Add new users via form.
Delete users using the "Delete" button.
User data is automatically updated in MySQL.
