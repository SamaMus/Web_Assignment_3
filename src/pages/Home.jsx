import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  // State to store the projects data
  const [projects, setProjects] = useState([]);

  // useEffect hook to fetch projects when the component mounts
  useEffect(() => {
    // Function to fetch projects from the server
    const fetchProjects = async () => {
      try {
        // Make a GET request to the server endpoint
        const response = await axios.get('http://localhost:3001/projects');
        // Set the fetched projects in the state
        setProjects(response.data);
      } catch (error) {
        // Log an error message if there's an issue fetching projects
        console.error('Error fetching projects:', error);
      }
    };

    // Call the fetchProjects function when the component mounts
    fetchProjects();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {/* Header section */}
      <header>
        <h1>Welcome to My Portfolio</h1>
        {/* Navigation links */}
   {/* Buttons container */}
<div className="buttons-container">
  <Link to="/flashcards" className="nav-button">
    Flashcards
  </Link>
  <Link to="/contact" className="nav-button">
    Contact Me
  </Link>
  <Link to="/" className="nav-button">
    Home
  </Link>
</div>

      </header>
      {/* Main content section */}
      <div className="content">
        <p>General information about myself</p>

        <h2>Projects</h2>
        {/* Project list */}
        <div className="project-list">
          {/* Map through the projects and render each project */}
          {projects.map((project) => (
            <div key={project.id} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* Link to view the project (opens in a new tab) */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
