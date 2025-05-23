# 🔗 ShortLink - URL Shortener

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>

<p >
  <img src="https://i.imgur.com/YourProjectScreenshot.png" alt="ShortLink Screenshot" width="600" />
</p>

## ✨ Features

- **🔗 URL Shortening**: Transform long URLs into short, manageable links
- **📊 Analytics**: Track clicks and engagement for each shortened URL
- **👤 User Authentication**: Secure login and registration system
- **🔒 User-specific URLs**: Each user has their own dashboard of shortened links
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**

```shell
git clone https://github.com/yourusername/shortlink.git
cd shortlink
```

2. **Set up the backend**

```shell
cd backend
npm install
```

Create a `.env` file in the backend directory with the following variables:

```plaintext
PORT=5000
MONGODB_URI=mongodb://localhost:27017/shortlink
JWT_SECRET=your_jwt_secret
```

3. **Set up the frontend**

```shell
cd ../frontend
npm install
```

4. **Start the application**

In the backend directory:
```shell
npm run dev
```

In the frontend directory:
```shell
npm run dev
```

5. **Access the application**

Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

### Frontend
- React.js
- Zustand (State Management)
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/signin` | Login a user |
| POST | `/api/auth/logout` | Logout a user |
| POST | `/api/url` | Create a new short URL |
| GET | `/api/url` | Get all URLs for the logged-in user |
| GET | `/:shortUrl` | Redirect to the original URL |

## 📸 Screenshots

<div >
  <img src="https://i.imgur.com/YourLoginScreenshot.png" alt="Login Page" width="400" />
  <img src="https://i.imgur.com/YourDashboardScreenshot.png" alt="Dashboard" width="400" />
</div>

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)

---

<p >
  Made with ❤️ by <a href="https://github.com/yourusername">Your Name</a>
</p>
