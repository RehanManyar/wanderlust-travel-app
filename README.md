# wanderlust-travel-app
A full-stack Airbnb-inspired travel accommodation platform for discovering, listing, and reviewing stays.
# 🌍 WanderLust

> A full-stack travel accommodation platform for discovering, listing, and reviewing stays.

## 📌 About The Project

**WanderLust** is a full-stack web application inspired by modern travel and accommodation platforms.

The application allows users to explore different stays, view detailed property information, create listings, and share reviews. It is built to provide a smooth experience for users looking for places to stay while traveling.

The project was developed to practice and demonstrate full-stack web development concepts including RESTful APIs, MVC architecture, database management, authentication, authorization, and CRUD operations.

---

## ✨ Features

* 🏠 Browse available property listings
* 🔍 View detailed information about each property
* ➕ Create new property listings
* ✏️ Edit existing listings
* 🗑️ Delete listings
* ⭐ Add and manage reviews
* 🔐 User authentication
* 🛡️ Authorization for protected actions
* 📱 Responsive user interface
* 🗺️ Location-based property information
* ⚡ Server-side rendering using EJS
* 💾 Persistent data storage with MongoDB

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* Passport.js
* Express Session
* Cookies
* Authorization middleware

### Development Tools

* Git
* GitHub
* Nodemon
* VS Code

---

## 🏗️ Architecture

The project follows the **MVC (Model-View-Controller)** architecture.

```text
User
 │
 ▼
Routes
 │
 ▼
Controllers
 │
 ├──────────────► Models
 │                    │
 │                    ▼
 │                MongoDB
 │
 ▼
Views (EJS)
 │
 ▼
Browser
```

---

## 📂 Project Structure

```text
WanderLust/
│
├── controllers/
│
├── init/
│
├── models/
│
├── public/
│   ├── css/
│   └── js/
│
├── routes/
│
├── utils/
│
├── views/
│   ├── includes/
│   ├── layouts/
│   └── listings/
│
├── middleware.js
├── app.js
├── schema.js
├── package.json
├── package-lock.json
└── README.md
```

> The structure may vary depending on the current implementation of the project.

---

## 🚀 Getting Started

Follow these steps to run WanderLust locally.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/wanderlust-travel-app.git
```

### 2. Navigate to the Project

```bash
cd wanderlust-travel-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
MONGO_URI=your_mongodb_connection_string
SECRET=your_session_secret
```

### 5. Start MongoDB

Make sure your MongoDB server is running locally or provide a MongoDB Atlas connection string.

### 6. Start the Application

```bash
node app.js
```

For development:

```bash
nodemon app.js
```

### 7. Open in Browser

```text
http://localhost:8080
```

---

## 🔐 Environment Variables

The application may require the following environment variables:

| Variable    | Description                            |
| ----------- | -------------------------------------- |
| `MONGO_URI` | MongoDB database connection string     |
| `SECRET`    | Secret key used for session management |

Never commit your `.env` file to GitHub.

Add this to `.gitignore`:

```text
.env
node_modules/
```

---

## 📸 Screenshots

Add screenshots of the application here.

### Home Page

```text
Add screenshot here
```

### Listings

```text
Add screenshot here
```

### Listing Details

```text
Add screenshot here
```

### Create Listing

```text
Add screenshot here
```

### Reviews

```text
Add screenshot here
```

---

## 🔄 Core Functionality

### Listings

Users can:

* Create listings
* View listings
* Update listings
* Delete listings

### Reviews

Users can:

* Add reviews
* View reviews
* Delete their reviews

### Authentication

Users can:

* Register
* Login
* Logout

Protected routes ensure that only authorized users can perform specific actions.

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience with:

* Full-stack web development
* RESTful routing
* MVC architecture
* Express.js
* MongoDB & Mongoose
* CRUD operations
* Authentication & authorization
* Middleware
* EJS templating
* Session management
* Git & GitHub
* Responsive web development

---

## 🚧 Future Improvements

Some improvements planned for future versions:

* [ ] Add advanced search and filtering
* [ ] Add map integration
* [ ] Add image upload using cloud storage
* [ ] Add booking functionality
* [ ] Add payment integration
* [ ] Improve mobile responsiveness
* [ ] Add user profile pages
* [ ] Add wishlist functionality
* [ ] Deploy the application

---

## 🌐 Live Demo

**Coming Soon**

> Add your deployed application URL here once the project is deployed.

---

## 👨‍💻 Author

### Rehan Manyar

B.Tech Data Science Student

Interested in:

* Web Development
* Backend Development
* Data Structures & Algorithms
* Open Source

---

## ⭐ Show Your Support

If you like this project, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for educational and portfolio purposes.
