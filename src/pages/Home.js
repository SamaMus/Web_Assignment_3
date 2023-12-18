// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2' },
  // Add more projects as needed
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
    </div>
  );
};

export default Home;
