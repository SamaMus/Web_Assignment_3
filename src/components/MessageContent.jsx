import React from 'react';
import '../assets/style/MessageContent.css';

const MessageContent = ({ message }) => {
  const formattedDate = message.createdDate
    ? new Date(message.createdDate).toLocaleString()
    : new Date(message.date).toLocaleString();

  return (
    <div className="message-content">
      <div className="left-part">
        <h3>{message.subject || message.name}</h3>
        <p>Email: {message.email}</p>
        <p>Content: {message.content || message.message}</p>
        <p>Date: {formattedDate}</p>
      </div>
    </div>
  );
};

export default MessageContent;
