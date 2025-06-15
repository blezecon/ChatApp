# ChatApp

A real-time chat application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This project was created for learning purposes and demonstrates a full-stack chat solution with user authentication and real-time messaging.

## Features

- User registration and login with JWT authentication
- Real-time messaging (Socket.IO)
- Create and join chat rooms or direct messages
- Responsive, clean UI
- User online/offline status
- Message notifications
- (Optional) Emojis and profile avatars

## Tech Stack

- **Frontend:** React.js (JavaScript), CSS/HTML
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time:** Socket.IO
- **Authentication:** JWT, bcrypt

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/blezecon/ChatApp.git
cd ChatApp
```

#### 2. Install backend dependencies

```bash
cd backend
npm install
```

#### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### Environment Variables

Fill the `.env` file in the `backend` directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
```

### Running the App

#### 1. Start backend (from `/backend`):

```bash
npm run dev
```

#### 2. Start frontend (from `/frontend`):

```bash
npm start
```

- Backend: [http://localhost:5000](http://localhost:5000)
- Frontend: [http://localhost:3000](http://localhost:3000)

## Usage

1. Register a new account or log in.
2. Create or join a chat room, or start a private chat.
3. Enjoy messaging in real time!

## Folder Structure

```
ChatApp/
  backend/
    models/
    routes/
    controllers/
    ...
  frontend/
    src/
      components/
      pages/
      ...
```

## Screenshots

<!-- Add screenshots here if available -->
<!-- ![Screenshot](screenshots/demo.png) -->

## License

This project is for learning purposes.  
You may use or modify it freely.

## Author

- [blezecon](https://github.com/blezecon)
