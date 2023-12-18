import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ frontText, backText }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flash-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">{frontText}</div>
      <div className="back">{backText}</div>
    </div>
  );
};

export default FlashCard;
