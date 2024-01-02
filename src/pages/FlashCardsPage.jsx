import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashCardContent from '../components/FlashCardContent.jsx';
import Navbar from '../components/Navbar.jsx';
import Notify from '../components/Notify.jsx';
import { toast } from 'react-toastify';

const FlashCardPage = () => {
  const [cards, setCards] = useState([]);
  const [selectedStatus] = useState('All status');
  const notify = (message) => toast.success(message);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchInitialCards = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cards?_page=${page}&_limit=6`);
      const initialCards = response.data;

      if (initialCards.length === 0) {
        setHasMore(false);
        return;
      }

      setPage(page + 1);
      setCards(initialCards);
    } catch (error) {
      console.error('Error fetching initial cards:', error);
    }
  };

  const loadMore = async () => {
    try {
      setIsLoadingMore(true);
      const response = await axios.get(`http://localhost:3001/cards?_page=${page}&_limit=6`);
      const newCards = response.data;

      if (newCards.length === 0) {
        setHasMore(false);
        return;
      }

      setTimeout(() => {
        setPage(page + 1);
        setCards((prevCards) => [...prevCards, ...newCards]);
      }, 750);
    } catch (error) {
      console.error('Error fetching more cards:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchInitialCards();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoadingMore && hasMore) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoadingMore, hasMore, loadMore]);

  const handleDelete = async (id) => {
    try {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));

      notify('Card deleted successfully!');
      await axios.delete(`http://localhost:3001/cards/${id}`);
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <Notify />
      <div className="main-content">
        <h1>Flash Cards</h1>
        <div className="flashcard-list">
          {cards.map((card) => (
            <FlashCardContent key={card.id} card={card} onDelete={handleDelete} />
          ))}
        </div>
        {/* Add any other components or elements you want here */}
      </div>
    </div>
  );
};

export default FlashCardPage;
