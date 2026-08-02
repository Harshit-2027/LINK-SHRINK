# 🔗 Link-Shrink

A full-stack **URL Shortener** built using the **MERN Stack** that allows users to convert long URLs into short, shareable links and efficiently manage their shortened URLs.

## 🚀 Live Demo

🔗 **Live Website: 

## 📌 Features

* 🔗 Generate short URLs from long URLs
* ⚡ Fast and efficient URL redirection
* 📊 Track and manage shortened URLs
* 🔐 User authentication and authorization
* 👤 User-specific URL management
* 📱 Responsive and user-friendly interface
* 🗑️ Delete shortened URLs
* 📋 Easy copy-to-clipboard functionality
* 🔒 Secure backend API
* 🌐 RESTful API architecture

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Tools & Deployment

* Git & GitHub
* Vercel / Netlify
* Render
* MongoDB Atlas

## 🏗️ Project Structure

```text
LINK-SHRINK/
│
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Backend Node.js application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── .gitignore
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Harshit-2027/LINK-SHRINK.git
```

### 2. Navigate to the Project

```bash
cd LINK-SHRINK
```

### 3. Install Dependencies

For the frontend:

```bash
cd client
npm install
```

For the backend:

```bash
cd ../server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Replace the values with your actual configuration.

### 5. Start the Backend

```bash
cd server
npm run dev
```

### 6. Start the Frontend

Open another terminal:

```bash
cd client
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 🔄 How It Works

1. User enters a long URL into the application.
2. The frontend sends the URL to the backend API.
3. The backend validates the URL and generates a unique short code.
4. The short URL is stored in MongoDB.
5. The generated short URL is returned to the user.
6. When someone accesses the short URL, the server finds the original URL.
7. The user is automatically redirected to the original destination.

## 📡 API Endpoints

| Method   | Endpoint           | Description               |
| -------- | ------------------ | ------------------------- |
| `POST`   | `/api/url/shorten` | Create a shortened URL    |
| `GET`    | `/:shortCode`      | Redirect to original URL  |
| `GET`    | `/api/url`         | Get user's shortened URLs |
| `DELETE` | `/api/url/:id`     | Delete a shortened URL    |

> API endpoints may vary depending on the backend implementation.

## 🔐 Environment Variables

| Variable     | Description                           |
| ------------ | ------------------------------------- |
| `PORT`       | Port on which the backend server runs |
| `MONGO_URI`  | MongoDB database connection string    |
| `JWT_SECRET` | Secret key used for authentication    |
| `CLIENT_URL` | Frontend application URL              |


## 🔮 Future Improvements

* 📈 Click analytics and URL statistics
* 📊 Detailed analytics dashboard
* 🔗 Custom short URLs
* ⏳ Link expiration
* 📱 QR code generation
* 🌙 Dark mode
* 🛡️ Advanced rate limiting
* 📧 Email-based authentication

## 🤝 Contributing

## 👨‍💻 Author

**Harshit Goyal**

* GitHub: [Harshit-2027](https://github.com/Harshit-2027)

---

⭐ If you found this project useful, consider giving it a star!
