## Cloud Admin Dashboard

A full-stack User Management Web Application hosted on AWS. Users can be added and deleted via a web interface.

Backend: Node.js + Express
Frontend: HTML, CSS, JavaScript
Database: MySQL on AWS RDS
Deployment: AWS EC2 with Nginx reverse proxy, Application Load Balancer (ALB), and Auto Scaling Group (ASG)
Process Manager: PM2 for automatic backend startup

## Features

Multi-page website: Home and Users page
Add and delete users from browser
User data stored in MySQL (AWS RDS)
Hosted on AWS EC2 behind ALB
Auto-scaling enabled via ASG
Backend runs continuously using PM2
Security group allows ports 22 (SSH), 80 (HTTP), and 3000 (Node.js API, optional)

## Technologies

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MySQL (AWS RDS)
AWS Services: EC2, RDS, ALB, ASG, Security Groups
Process Manager: PM2
Security Group Configuration

## Security Group Configuration Make sure your EC2 Security Group allows:
| Port | Protocol | Purpose |
| ---- | -------- | ---------------------- |
| 22 | TCP | SSH access |
| 80 | TCP | HTTP traffic (ALB) |
| 3000 | TCP | Node.js API (optional) |

## Dependencies

Node.js
Check versions:
node -v
npm -v

npm packages:
express
cors
pm2 (for production)
MySQL server
For RDS: use endpoint in db.js
Ensure database port (default 3306) is accessible

## Setup & Run
1. Clone the repository
git clone <repo-url>
cd cloud-project

2. Install backend dependencies
cd backend/
npm install

3. Configure MySQL database

Create database and users table (example):

CREATE DATABASE cloud_db;
USE cloud_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);


Update db.js with your database credentials (RDS endpoint, username, password).

4. Start backend server with PM2
cd backend/
pm2 start server.js --name cloud-backend
pm2 save
pm2 startup    # Optional: to ensure backend auto-starts after EC2 reboot


For development, you can also use:

node server.js

5. Configure Nginx (optional)

Point Nginx root to the frontend folder.

Restart Nginx:

sudo systemctl restart nginx

6. Access the Application

Open browser at:

http://<ALB-DNS-Name>/


Navigate between Home and Users pages
Add new users via form
Delete users using the Delete button
User data is automatically updated in MySQL
