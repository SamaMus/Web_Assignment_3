// src/pages/FlashCard.js
import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ id, frontText, backText, lastModified, status, updateLastModified, updateCardStatus }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
    updateLastModified(id);
  };

  const handleStatusChange = (newStatus) => {
    updateCardStatus(id, newStatus);
  };

  return (
    <div className={`flash-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">
        <div>{frontText}</div>
        <div className="last-modified">Last Modified: {lastModified.toLocaleString()}</div>
        <div className="status">{status}</div>
      </div>
      <div className="back">
        <div>{backText}</div>
        <div className="last-modified">Last Modified: {lastModified.toLocaleString()}</div>
        <div className="status">{status}</div>
        <div className="status-buttons">
          <button onClick={() => handleStatusChange('Learned')}>Learned</button>
          <button onClick={() => handleStatusChange('Want to Learn')}>Want to Learn</button>
          <button onClick={() => handleStatusChange('Noted')}>Noted</button>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
