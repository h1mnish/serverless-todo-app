# 🚀 Serverless Todo App

A fully serverless CRUD (Create, Read, Update, Delete) web application built using AWS cloud services. The application allows users to create, update, view, and delete tasks through a responsive frontend hosted on Amazon S3 while leveraging AWS Lambda, API Gateway, DynamoDB, and CloudWatch.

---

## 📌 Project Overview

This project demonstrates how to build and deploy a complete serverless web application without managing any servers.

The frontend is hosted on Amazon S3 as a static website, while backend APIs are exposed through Amazon API Gateway. Business logic is implemented using AWS Lambda and data is stored in Amazon DynamoDB. CloudWatch is used for monitoring and debugging Lambda execution logs.

---

## ✨ Features

- ✅ Create Tasks
- ✅ View Tasks
- ✅ Update Tasks
- ✅ Delete Tasks
- ✅ Serverless Architecture
- ✅ REST API Integration
- ✅ Live Website hosted on Amazon S3
- ✅ CloudWatch Logging
- ✅ Responsive User Interface

---

# 🛠 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- AWS Lambda (Node.js 18)
- Amazon API Gateway
- Amazon DynamoDB

### Cloud Services

- Amazon S3
- AWS IAM
- Amazon CloudWatch

### Development Tools

- AWS CLI
- Git
- GitHub
- Visual Studio Code

---

# ☁ AWS Services Used

| Service | Purpose |
|----------|----------|
| Amazon S3 | Static Website Hosting |
| API Gateway | REST API |
| AWS Lambda | Backend Compute |
| DynamoDB | NoSQL Database |
| CloudWatch | Monitoring & Logs |
| IAM | Permissions Management |

---

# 🏗 Architecture

> Add your architecture diagram here.

Example:

```
User
   │
   ▼
Amazon S3 (Frontend)
   │
   ▼
API Gateway
   │
   ▼
AWS Lambda
   │
   ▼
Amazon DynamoDB

          │
          ▼
 Amazon CloudWatch
```

---

# 📂 Project Structure

```
Serverless-Todo-App/

│── frontend/
│     ├── index.html
│     ├── style.css
│     └── script.js
│
├── events/
│
├── index.mjs
├── package.json
├── package-lock.json
├── README.md
└── architecture.png
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/serverless-todo-app.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure AWS CLI

```bash
aws configure
```

---

## Deploy Lambda

Compress Lambda source into a ZIP file and upload it to AWS Lambda.

---

## Create DynamoDB Table

Create a table named:

```
to_do_table
```

Partition Key

```
taskId
```

Type

```
String
```

---

## Configure API Gateway

Create an HTTP API.

Connect it to the Lambda function.

Enable CORS.

---

## Upload Frontend

Upload

- index.html
- style.css
- script.js

to an Amazon S3 bucket.

Enable Static Website Hosting.

---

# 🔗 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /tasks | Fetch All Tasks |
| POST | /tasks | Create Task |
| PUT | /tasks | Update Task |
| DELETE | /tasks | Delete Task |

---

# 📸 Screenshots

### Home Page

(Add Screenshot)

---

### CloudWatch Logs

(Add Screenshot)

---

### DynamoDB Table

(Add Screenshot)

---

### API Gateway

(Add Screenshot)

---

# 📈 Future Improvements

- User Authentication
- Dark Mode
- Search Tasks
- Task Categories
- Due Dates
- CloudFront Distribution
- Custom Domain
- CI/CD using GitHub Actions

---

# 📚 Learning Outcomes

During this project I learned:

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Amazon S3 Static Website Hosting
- AWS IAM
- CloudWatch Logs
- AWS CLI
- Serverless Architecture
- REST APIs
- CRUD Operations

---

# 👨‍💻 Author

**Himnish Tyagi**

B.Tech Computer Science Engineering

Cloud Computing Enthusiast

GitHub:
https://github.com/h1mnish
