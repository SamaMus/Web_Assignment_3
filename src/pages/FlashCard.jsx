import React, { useState } from 'react';
import '../assets/style/FlashCard.css';

const FlashCard = ({
  card,
  onEdit,
  onDelete,
  onSelect,
  isSelected,
  onRearrange,
}) => {
  const { id, frontText: movie, backAnswer: movieDescription, image, lastModificationDateTime, status } = card;
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  const handleStatusChange = (newStatus) => {
  
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedCardId = e.dataTransfer.getData('text/plain');
    onRearrange(draggedCardId, id);
  };

  return (
    <div
      className={`flash-card ${isFlipped ? 'flipped' : ''} ${isSelected ? 'selected' : ''}`}
      onMouseEnter={onEdit}
      onMouseLeave={onDelete}
      onClick={() => onSelect(id)}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="card-content front">
        <div className="content">
          <h3>{movie}</h3>
          <p>Status: {status}</p>
          <p>Last Modified: {new Date(lastModificationDateTime).toLocaleString()}</p>
        </div>
      </div>
      <div className="card-content back">
        <div className="content">
          <img src={image} alt="Card Back" />
          <h3>{movieDescription}</h3>
          <p>Status: {status}</p>
          <p>Last Modified: {new Date(lastModificationDateTime).toLocaleString()}</p>
          <div className="status-buttons">
            <button onClick={() => handleStatusChange('Learned')}>Learned</button>
            <button onClick={() => handleStatusChange('Want to Learn')}>Want to Learn</button>
            <button onClick={() => handleStatusChange('Noted')}>Noted</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
