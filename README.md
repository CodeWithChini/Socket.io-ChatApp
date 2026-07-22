# 💬 Socket.IO Chat Application

A simple real-time chat application built with **React.js**, **Node.js**, **Express.js**, and **Socket.IO**. This project demonstrates real-time communication between multiple users using WebSockets.

---

## 📸 Preview

> Add screenshots of your project here.

### Home Screen

![Chat App](./Screenshots/1%20(1).png)
![Chat App](./Screenshots/1%20(2).png)
![Chat App](./Screenshots/1%20(3).png)

---

## 🚀 Features

- 💬 Real-time messaging
- ⚡ Instant message updates using Socket.IO
- 👤 User name input
- 🎨 Modern and responsive UI
- 📱 Mobile-friendly design
- 🔄 Automatic message broadcasting to all connected users

---

## 🛠️ Technologies Used

### Frontend
- React.js (Vite)
- Socket.IO Client
- Bootstrap
- CSS3

### Backend
- Node.js
- Express.js
- Socket.IO
- CORS

---

## 📂 Project Structure

```text
chat-app/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
```

---

### 2️⃣ Backend Setup

```bash
cd backend

npm install

node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Open another terminal.

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📦 Dependencies

### Frontend

```bash
npm install socket.io-client bootstrap
```

### Backend

```bash
npm install express socket.io cors
```

---

## 🔌 Socket.IO Events

### Client → Server

| Event | Description |
|--------|-------------|
| `send_message` | Sends a new chat message |

### Server → Client

| Event | Description |
|--------|-------------|
| `receive_message` | Receives the broadcasted message |

---

## 💻 How It Works

1. User enters their name.
2. User types a message.
3. Clicking the **Send** button emits a `send_message` event.
4. The server receives the message.
5. Socket.IO broadcasts it to all connected users.
6. Every connected client immediately displays the new message.

---


## 🌟 Future Improvements

- 🔐 User Authentication
- 💬 Private Chat
- 👥 Online User List
- ⌨️ Typing Indicator
- 🕒 Message Timestamp
- 😀 Emoji Support
- 📎 File Sharing
- 🗑️ Delete Messages
- 💾 Store Chat History in MongoDB
- 🌙 Dark Mode

---

## 👨‍💻 Author

**Hill Kalola**

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to **Star** the repository!
