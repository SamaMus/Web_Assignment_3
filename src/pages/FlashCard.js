import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({
  id,
  frontText,
  backText,
  lastModified,
  status,
  updateLastModified,
  updateCardStatus,
  onEdit,
  onDelete,
}) => {
  const [isFlipped, setFlipped] = useState(false);

  // Unused variable, you can remove it
  // const handleFlip = () => {
  //   setFlipped(!isFlipped);
  //   updateLastModified(id);
  // };

  const handleStatusChange = (newStatus) => {
    updateCardStatus(id, newStatus);
  };

  return (
    <div className={`flash-card ${isFlipped ? 'flipped' : ''}`} onMouseEnter={onEdit} onMouseLeave={onDelete}>
      <div className="card-content front">
        <div className="content">{frontText}</div>
        <div className="last-modified">Last Modified: {lastModified.toLocaleString()}</div>
        <div className="status">{status}</div>
      </div>
      <div className="card-content back">
        <div className="content">{backText}</div>
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
