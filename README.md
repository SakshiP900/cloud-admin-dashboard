# Cloud Admin Dashboard

A simple admin dashboard hosted on AWS EC2 with Node.js, Express, MySQL, and Nginx. You can **view, add, and delete users** through a web interface.

---

## Features

- Multi-page website: Home and Users page
- Add and delete users from browser
- User data stored in MySQL
- Hosted on AWS EC2 with Nginx reverse proxy

---

## Technologies

- Node.js & Express
- MySQL
- PM2 (process manager)
- Nginx
- HTML, CSS, JavaScript

---

## Dependencies

- Node.js
- npm packages:
  - express
  - mysql
  - cors
  - pm2 (for running server)
- MySQL server
Make sure port 80 and 3000 are open in your EC2 Security Group.
---

## Setup & Run

1. Clone the repository:

```bash
git clone <repo-url>
cd cloud-project


2. Install backend dependencies:

cd backend/
npm install

git clone <repo-url>
cd cloud-project

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
pm2 start server.js --name cloud-backend
pm2 save

5. Configure Nginx:
Point Nginx root to the frontend folder
Restart Nginx:
sudo systemctl restart nginx

6. Open your public IP in browser:
http://<your-ec2-public-ip>

Usage:
Navigate between Home and Users pages.
Add new users via form.
Delete users using the "Delete" button.
User data is automatically updated in MySQL.
