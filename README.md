# Job Tracker

Job Tracker is a fullstack web application designed to help users manage and track their job applications efficiently. It features a modern React frontend and a robust Node.js/Express backend with MongoDB for data storage.

## Features
- User authentication (register/login)
- Add, edit, and delete job applications
- View jobs in list, table, and timeline formats
- Profile management
- Statistics and analytics dashboard

## Tech Stack
- **Frontend:** React, React Router, Styled Components, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT, bcryptjs

## Folder Structure
```
Job Tracker/
  backend/      # Express API, MongoDB models, routes, middleware
  frontend/     # React app, components, styles
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn
- MongoDB (local or cloud)

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file for environment variables (e.g., MongoDB URI, JWT secret).
4. Start the backend server:
   ```sh
   node server.js
   ```

### Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

The frontend will typically run on [http://localhost:3000](http://localhost:3000) and the backend on [http://localhost:5000](http://localhost:5000).

## How to Push to GitHub
1. Initialize git (if not already done):
   ```sh
   git init
   ```
2. Add all files:
   ```sh
   git add .
   ```
3. Commit your changes:
   ```sh
   git commit -m "Initial commit"
   ```
4. Add your GitHub remote (replace with your repo URL):
   ```sh
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   ```
5. Push to GitHub:
   ```sh
   git branch -M master
   git push -u origin master
   ```

## License
This project is licensed under the ISC License. 