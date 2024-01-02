import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar.jsx';
import MyProjects from '../components/MyProjects.jsx';
import '../assets/style/Home.css';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3001/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <section className="intro-section">
          <h1>Welcome to My Portfolio</h1>
          <p>General information about myself</p>
        </section>
        <MyProjects projects={projects} />
        <div className="buttons-container">
          <Link to="/flashcards" className="nav-button">
            Flashcards
          </Link>
          <Link to="/contact" className="nav-button">
            Contact Me
          </Link>
          <Link to="/home" className="nav-button">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
