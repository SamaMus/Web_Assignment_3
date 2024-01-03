import React from 'react';
import PropTypes from 'prop-types';
import '../assets/style/MessageContent.css';

const MessageContent = ({ message }) => {
  const { subject, name, email, content, message: msg, createdDate, date } = message;
  const formattedDate = createdDate ? new Date(createdDate).toLocaleString() : new Date(date).toLocaleString();

  return (
    <div className="message-content">
      <div className="left-part">
        <h3>{subject || name}</h3>
        <p className="email-label">Email: {email}</p>
        <p>Content: {content || msg}</p>
        <p className="date-label">Date: {formattedDate}</p>
      </div>
    </div>
  );
};

MessageContent.propTypes = {
  message: PropTypes.shape({
    subject: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string.isRequired,
    content: PropTypes.string,
    message: PropTypes.string,
    createdDate: PropTypes.number,
    date: PropTypes.number.isRequired,
  }).isRequired,
};

export default MessageContent;
