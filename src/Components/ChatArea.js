import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import React, { useState } from 'react'
import MessageOthers from './MessageOthers'
import MessageSelf from './MessageSelf'

function ChatArea({props}) {
    const [message, setMessage] = useState('');
    
        const sendMessage = async () => {
            try {
                const sender = 'YourSender'; // Replace with the actual sender
                const receiver = 'YourReceiver'; // Replace with the actual receiver
                const type = 'TEXT'; // Replace with the actual message type (e.g., TEXT or FILE)

                
                const response = await fetch('http://localhost:9091/api/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: JSON.stringify({ 
                        sender: sender,
                        receiver: receiver,
                        type: type,
                        content: message, // Use the message from the state
                         }),
                });
    
                if (response.ok) {
                    console.log('Message sent successfully');
                } else {
                    console.error('Failed to send message');
                }
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    
    
  return (
    <div className='chatArea-container'>
        <div className='chatArea-header'>
            <p className="con-icon">{props.name[0]}</p>
            <div className='header-text'>
                <p className="con-title">{props.name}</p>
                <p className="con-timeStamp">{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </div>
        <div className='messages-container'>
            <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
            <MessageSelf/>
            <MessageOthers/>
            <MessageSelf/>
        </div>
        <div className='text-input-area'>
            <input 
                placeholder='Type a Message' 
                className='search-box'
                value={message}
                onChange={(e) => setMessage(e.target.value)}/>
            <IconButton onClick={sendMessage}>
                <SendIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea