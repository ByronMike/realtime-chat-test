import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const Chats = () => {
  const [messages, setMessages] = useState([])
  const [socket] = useState(io(':3000'))

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message])
    })
  }, [messages])

  const sendMessage = message => {
    socket.emit('message', message)
    setMessages([...messages, message])
  }

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={e => {
        e.preventDefault()
        sendMessage(e.target.message.value)
        e.target.reset()
      }}>
        <input name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chats
