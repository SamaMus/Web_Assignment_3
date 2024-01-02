import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashCardContent from '../components/FlashCardContent.jsx';
import CardModalPage from '../components/CardModalPage.jsx';
import Navbar from '../components/Navbar.jsx';
import Notify from '../components/Notify.jsx';
import { toast } from 'react-toastify';

const FlashCardPage = () => {
  const [cards, setCards] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All status');
  const [searchInput, setSearchInput] = useState('');
  const [sortBy, setSortBy] = useState('newestToOldest');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const notify = (message) => toast.success(message);

  const fetchInitialCards = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cards?_page=${page}&_limit=6&_sort=${sortBy}`);
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
      const response = await axios.get(`http://localhost:3001/cards?_page=${page}&_limit=6&_sort=${sortBy}`);
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
  }, [sortBy]);

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
  }, [isLoadingMore, hasMore, loadMore, sortBy]);

  const handleDelete = async (id) => {
    try {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));

      notify('Card deleted successfully!');
      await axios.delete(`http://localhost:3001/cards/${id}`);
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const handleCreate = async (newCard) => {
    try {
      const currentDateTime = new Date().toLocaleDateString();

      // Fetch existing cards to determine the next order
      const response = await axios.get('http://localhost:3001/cards');
      const existingCards = response.data;

      // Determine the next order by incrementing the maximum existing order by 1
      const maxOrder = existingCards.reduce((maxOrder, card) => Math.max(maxOrder, card.order || 0), 0);
      const nextOrder = Math.max(maxOrder + 1, 100); // Start from 100 or increment if necessary

      newCard.lastModificationDateTime = currentDateTime;
      newCard.status = 'Want to Learn';
      newCard.order = nextOrder; // Assign the next order

      setCards((prevCards) => {
        const updatedCards = [...prevCards, newCard];

        const sortedCards = updatedCards.sort((a, b) => {
          return new Date(b.lastModificationDateTime) - new Date(a.lastModificationDateTime);
        });

        return sortedCards;
      });

      await axios.post('http://localhost:3001/cards', newCard);

      notify('Card created successfully!');

      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    setCards([]);
  };

  const handleSortingChange = (event) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
  };

  return (
    <div>
      <Navbar />
      <Notify />
      <div className="main-content">
        <h1>Flash Cards</h1>
        <div className="flashcard-operations">
          <select id="filterstatus" name="category" value={selectedStatus} onChange={handleStatusChange}>
            <option>All status</option>
            <option>Want to Learn</option>
            <option>Mark as Noted</option>
            <option>Learned</option>
          </select>
          <input
            className="search"
            placeholder="Enter text to search..."
            value={searchInput}
            onChange={handleSearchInputChange}
          ></input>
          <select id="sortOrder" name="sortOrder" value={sortBy} onChange={handleSortingChange}>
            <option value="newestToOldest">Newest to Oldest</option>
            <option value="frontTextAZ">Sort frontText A-Z</option>
            <option value="frontTextZA">Sort frontText Z-A</option>
            <option value="backAnswerAZ">Sort backAnswer A-Z</option>
            <option value="backAnswerZA">Sort backAnswer Z-A</option>
            {/* Add more sorting options as needed */}
          </select>
        </div>
        <button className="create-btn btn btn" onClick={() => setIsCreateModalOpen(true)}>
          Create
        </button>
        <div className="flashcard-list">
          {cards
            .filter((card) =>
              card.frontText.toLowerCase().includes(searchInput.toLowerCase()) ||
              card.backAnswer.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((card) => (
              <FlashCardContent key={card.id} card={card} onDelete={handleDelete} />
            ))}
        </div>
      </div>
      {isCreateModalOpen && <CardModalPage onCreate={handleCreate} onClose={() => setIsCreateModalOpen(false)} />}
    </div>
  );
};

export default FlashCardPage;
