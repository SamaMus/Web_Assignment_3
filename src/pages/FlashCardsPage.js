// src/pages/FlashCardsPage.js
import React, { useState } from 'react';
import FlashCard from './FlashCard';

const FlashCardsPage = () => {
  const [flashCards, setFlashCards] = useState([
    { id: 1, frontText: 'Question 1', backText: 'Answer 1', lastModified: new Date(), status: 'Learned' },
    { id: 2, frontText: 'Question 2', backText: 'Answer 2', lastModified: new Date(), status: 'Want to Learn' },
    // Add more flash cards as needed
  ]);

  const updateLastModified = (id) => {
    const updatedFlashCards = flashCards.map((card) =>
      card.id === id ? { ...card, lastModified: new Date() } : card
    );
    setFlashCards(updatedFlashCards);
  };

  const updateCardStatus = (id, newStatus) => {
    const updatedFlashCards = flashCards.map((card) =>
      card.id === id ? { ...card, status: newStatus, lastModified: new Date() } : card
    );
    setFlashCards(updatedFlashCards);
  };

  return (
   <div>
      <header>
        <h1>Flash Cards</h1>
        <div className="header-buttons">
          <Link to="/contact">Contact Me</Link>
          <Link to="/">Home</Link>
        </div>
      </header>
       <div className="content">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {flashCards.map((card) => (
            <FlashCard
              key={card.id}
              id={card.id}
              frontText={card.frontText}
              backText={card.backText}
              lastModified={card.lastModified}
              status={card.status}
              updateLastModified={updateLastModified}
              updateCardStatus={updateCardStatus}
            />
          ))}
    </div>
    </div>
    </div>

  );
};

export default FlashCardsPage;
