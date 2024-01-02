import React from "react";
import "../assets/style/MessageContent.css";

const MessageContent = ({ message, onDelete }) => {
    const formattedDate = message.createdDate
        ? new Date(message.createdDate).toLocaleString()
        : new Date(message.date).toLocaleString();

    const handleDelete = () => {
        onDelete(message.id);
    };

    return (
        <div className="message-content">
            <div className="left">
                <h3>{message.subject || message.name}</h3>
                <p>Email: {message.email}</p>
                <p>Content: {message.content || message.message}</p>
                <p>Date: {formattedDate}</p>
            </div>
            <div className="right">
                <button className="delete" 
                onClick={handleDelete}>Delete This</button>
            </div>
        </div>
    );
};

export default MessageContent;