import React, { useState } from 'react';
import FlashCard from './FlashCard';
import { Link } from 'react-router-dom';

const FlashCardsPage = () => {
  const [flashCards, setFlashCards] = useState([
    { id: 1, frontText: 'Question 1', backText: 'Answer 1', lastModified: new Date(), status: 'Learned' },
    { id: 2, frontText: 'Question 2', backText: 'Answer 2', lastModified: new Date(), status: 'Want to Learn' },
    // Add more flash cards as needed
  ]);

  const [newCardFront, setNewCardFront] = useState('');
  const [newCardBack, setNewCardBack] = useState('');

  const [hoveredCard, setHoveredCard] = useState(null);

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

  const handleAddCard = () => {
    const newCard = {
      id: flashCards.length + 1,
      frontText: newCardFront,
      backText: newCardBack,
      lastModified: new Date(),
      status: 'New Card',
    };
    setFlashCards([...flashCards, newCard]);
    setNewCardFront('');
    setNewCardBack('');
  };

  const handleEdit = (id) => {
    setHoveredCard(id);
  };

  const handleDelete = (id) => {
    const updatedFlashCards = flashCards.filter((card) => card.id !== id);
    setFlashCards(updatedFlashCards);
    setHoveredCard(null);
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
        <h1>Flash Cards</h1>
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
              onEdit={() => handleEdit(card.id)}
              onDelete={() => handleDelete(card.id)}
            />
          ))}
        </div>

        <div className="add-card-form">
          <h2>Add New Flash Card</h2>
          <label>
            Front Text:
            <input type="text" value={newCardFront} onChange={(e) => setNewCardFront(e.target.value)} />
          </label>
          <label>
            Back Text:
            <input type="text" value={newCardBack} onChange={(e) => setNewCardBack(e.target.value)} />
          </label>
          <button onClick={handleAddCard}>Add Card</button>
        </div>
      </div>
    </div>
  );
};

export default FlashCardsPage;
