import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; 
const projects = [
  {
    id: 1,
    title: 'React Tasks',
    description: 'A project showcasing various tasks implemented using React.',
    link: 'https://example.com/react-tasks',
  },
  {
    id: 2,
    title: 'JavaScript Tasks',
    description: 'A collection of tasks implemented using JavaScript.',
    link: 'https://example.com/javascript-tasks',
  },
  {
    id: 3,
    title: 'Personal Website',
    description: 'My personal website built with HTML, CSS, and JavaScript.',
    link: 'https://example.com/personal-website',
  },
  {
    id: 4,
    title: 'Software Engineering Project',
    description: 'A software engineering project focusing on XYZ.',
    link: 'https://example.com/software-engineering-project',
  },
  {
    id: 5,
    title: 'Web Mobile Assignment 2',
    description: 'Assignment 2 for a web and mobile development course.',
    link: 'https://example.com/web-mobile-assignment2',
  },
];

// ... (previous code)

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
