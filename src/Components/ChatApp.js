import React, { useState, useEffect } from 'react';
import './ChatApp.css'
function ChatApp() {
  const [userList, setUserList] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  // Simulated user data
  const users = ['User 1', 'User 2', 'User 3'];

  useEffect(() => {
    // Simulated initial user list
    setUserList(users)
  });

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    // Simulated message object
    const newMessage = {
      sender: 'You',
      text: message,
    };

    // Add the message to the message list
    setMessages([...messages, newMessage]);

    // Clear the input field
    setMessage('');
  };

  return (
    <div className="chat-app">
      <div className="user-list">
        <h2>Online Users ({userList.length})</h2>
        <ul>
          {userList.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div className="chat-box">
        <div className="message-list">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === 'You' ? 'outgoing' : 'incoming'}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
