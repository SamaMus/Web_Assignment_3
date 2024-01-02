import React from 'react';
import '../assets/style/FlashCardContent.css';

const FlashCardContent = ({ card }) => {
  return (
    <div className="flashcard-content">
      <div className="front">
        {card.image ? (
          <img src={card.image} alt="Card" className="card-image" />
        ) : (
          <h3 className="frontTxt">{card.frontText}</h3>
        )}
        <p className="status">Status: {card.status}</p>
        <p className="last-modification">
          Last Modified: {new Date(card.lastModificationDateTime).toLocaleDateString()}
        </p>
      </div>
      <div className="back">
        <p className="backTxt">{card.backAnswer}</p>
      </div>
    </div>
  );
};

export default FlashCardContent;
