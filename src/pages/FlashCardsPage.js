import React from 'react';
import FlashCard from './FlashCard';

const FlashCardsPage = () => {
  const flashCards = [
    { id: 1, frontText: 'Question 1', backText: 'Answer 1' },
    { id: 2, frontText: 'Question 2', backText: 'Answer 2' },
    { id: 3, frontText: 'Question 3', backText: 'Answer 3' },
    { id: 4, frontText: 'Question 4', backText: 'Answer 4' },
    { id: 5, frontText: 'Question 5', backText: 'Answer 5' },
    { id: 6, frontText: 'Question 6', backText: 'Answer 6' },
    { id: 7, frontText: 'Question 7', backText: 'Answer 7' },
    { id: 8, frontText: 'Question 8', backText: 'Answer 8' },
    { id: 9, frontText: 'Question 9', backText: 'Answer 9' },
    { id: 10, frontText: 'Question 10', backText: 'Answer 10' },
  ];

  return (
    <div>
      <h1>Flash Cards</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {flashCards.map((card) => (
          <FlashCard key={card.id} frontText={card.frontText} backText={card.backText} />
        ))}
      </div>
    </div>
  );
};

export default FlashCardsPage;
