// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2' },
  // Add more projects as needed
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Link to={`/projects/${project.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
