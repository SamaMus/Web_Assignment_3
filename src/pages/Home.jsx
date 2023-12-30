import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <div className="header-buttons">
          <Link to="/flashcards">Flashcards</Link>
          <Link to="/contact">Contact Me</Link>
          <Link to="/">Home</Link>
        </div>
      </header>
      <div className="content">
        <p>General information about yourself...</p>

        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
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
