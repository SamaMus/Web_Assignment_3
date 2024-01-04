import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/style/FlashCardContent.css';

const FlashCardContent = ({ card, onDelete, onEdit }) => {
  const { id, image, frontText, status, lastModificationDateTime, backAnswer } = card;
  const [isHovered, setIsHovered] = useState(false);

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleEditClick = () => {
    onEdit(card);
  };

  return (
    <div
      className={`flashcard-content ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="front">
        {image ? <img src={image} alt="Card" className="card-image" /> : <h3 className="frontTxt">{frontText}</h3>}
        <p className="status">Status: {status}</p>
        <p className="last-modification">Last Modified: {new Date(lastModificationDateTime).toLocaleDateString()}</p>
        {isHovered && (
          <div className="buttons">
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
            <button className="delete-button" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="back">
        <p className="backTxt">{backAnswer}</p>
      </div>
    </div>
  );
};

FlashCardContent.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    frontText: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    lastModificationDateTime: PropTypes.string.isRequired,
    backAnswer: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default FlashCardContent;
