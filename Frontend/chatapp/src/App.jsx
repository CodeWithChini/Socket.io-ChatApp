import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

   const sendMessage = () => {
    if (name !== "" && message !== "") {
        const data = {
            name,
            message
        };
        console.log("Sending:", data);
        socket.emit("send_message", data);
        setMessage("");
    }
   };


    useEffect(() => {
    socket.on("receive_message", (data) => {
        console.log("Received:", data);
        setChat((prev) => [...prev, data]);
    });
    return () => {
        socket.off("receive_message");
    };

    }, []);



  return (
    <>
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white text-center">
                    <h3>Chat App</h3>
                </div>
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="form-control mb-5 fcinp"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <div>
                        <input
                            type="text"
                            placeholder="Enter Message"
                            className="form-control"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            className="btn btn-primary "
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>

                    <hr />

                    <div className="chat-box">
                        {
                            chat.map((msg, index) => (
                                <div
                                    key={index}
                                    className="alert alert-secondary mb-2">
                                    <strong>{msg.name}</strong>
                                    <br />
                                    {msg.message}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
