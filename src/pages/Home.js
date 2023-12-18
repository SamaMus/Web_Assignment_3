import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2' },
];

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="welcome-text">Welcome to My Portfolio</h1>
      <div className="home-container">
        {projects.map((project) => (
          <div key={project.id} className="project-box">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <Link to={`/projects/${project.id}`} className="read-more-link">
              Read more
            </Link>
          </div>
        ))}
      </div>
      <Link to="/pages" className="flash-cards-link">
        Go to Flash Cards
      </Link>
    </div>
  );
};

export default Home;