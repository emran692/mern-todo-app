![aweh](https://github.com/user-attachments/assets/4894cf1f-ca68-4829-9ac2-6cbd7ee08c96)
![aaf](https://github.com/user-attachments/assets/f448050d-934a-43b3-9a27-4efbb863f958)
![SFG](https://github.com/user-attachments/assets/8ba1891d-25a4-4e56-84a7-f10d7176867d)
![JF](https://github.com/user-attachments/assets/b521c417-0b60-4a19-b54d-2864243259fd)
![KUTD](https://github.com/user-attachments/assets/c334747b-a678-4700-ac30-25d1652294ab)
![CJ](https://github.com/user-attachments/assets/c7aed93b-57a8-4635-9373-af7da6b7c176)
# 📝 MERN Todo Application

A **full-stack productivity app** built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.
It provides secure user authentication and complete CRUD functionality for managing personal tasks with due dates and times.

---

## 🚀 Features

✅ **User Authentication**

* Register and Login using JWT authentication.
* Passwords securely hashed using bcrypt.

✅ **Task Management (CRUD)**

* Add, edit, delete, and view todos.
* Assign due date and time to each task.

✅ **Responsive Frontend**

* Built with React and TailwindCSS for a clean, modern UI.

✅ **Backend API**

* RESTful API built with Express and MongoDB (Atlas).
* JWT-protected routes to ensure secure access.

✅ **Cloud Deployment**

* Backend hosted on [Render](https://render.com).
* Frontend deployed on [Vercel](https://vercel.com).

---

## 🏗️ Tech Stack

| Layer              | Technology                       |
| ------------------ | -------------------------------- |
| **Frontend**       | React, Axios, TailwindCSS        |
| **Backend**        | Node.js, Express.js              |
| **Database**       | MongoDB Atlas                    |
| **Authentication** | JSON Web Token (JWT)             |
| **Hosting**        | Render (API) & Vercel (Frontend) |

---

## ⚙️ Project Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/emran692/mern-todo-app.git
cd mern-todo-app
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` and add:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=10000
```

Start the backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file inside `frontend/` and add:

```bash
REACT_APP_API_URL=http://localhost:10000/api
```

Start the frontend:

```bash
npm start
```

Then open 👉 [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment

### 🔹 Backend (Render)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://render.com)
3. Create a **New Web Service** → Connect your GitHub repo
4. Set environment variables:

   ```
   MONGO_URI=<your_mongodb_uri>
   JWT_SECRET=<your_secret_key>
   ```
5. Deploy 🚀

---

### 🔹 Frontend (Vercel)

1. Go to [Vercel Dashboard](https://vercel.com)
2. Import your GitHub repo
3. Add environment variable:

   ```
   REACT_APP_API_URL=https://<your-render-backend-url>/api
   ```
4. Deploy 🚀

---

## 📸 Screenshots

**Login Page**
![Login Screenshot](https://via.placeholder.com/800x400?text=Login+Page)

**Todo Dashboard**
![Todo Screenshot](https://via.placeholder.com/800x400?text=Todo+Dashboard)

---

## 🧠 Learning Outcomes

* Full understanding of **MERN architecture**
* Implementing secure JWT-based authentication
* Managing REST APIs and frontend integration
* Environment variable configuration for deployment

---

## 🧑‍💻 Author

👤 **Muhammed AL-Imran**
🎓 Student | CSE (AI & ML)
🌐 GitHub: [emran692](https://github.com/emran692)

