import React from 'react';
import PropTypes from 'prop-types';
import '../assets/style/FlashCardContent.css';

const FlashCardContent = ({ card }) => {
  const { image, frontText, status, lastModificationDateTime, backAnswer } = card;

  return (
    <div className="flashcard-content">
      <div className="front">
        {image ? <img src={image} alt="Card" className="card-image" /> : <h3 className="frontTxt">{frontText}</h3>}
        <p className="status">Status: {status}</p>
        <p className="last-modification">Last Modified: {new Date(lastModificationDateTime).toLocaleDateString()}</p>
      </div>
      <div className="back">
        <p className="backTxt">{backAnswer}</p>
      </div>
    </div>
  );
};

FlashCardContent.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string,
    frontText: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    lastModificationDateTime: PropTypes.string.isRequired,
    backAnswer: PropTypes.string.isRequired,
  }).isRequired,
};

export default FlashCardContent;
