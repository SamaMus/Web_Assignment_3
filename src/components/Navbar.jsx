import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <button className="logo-button">Flashcard App</button></Link>
      </div>
      <div className="options">
        <Link to="/">
          <button className="nav-button">Home</button>
        </Link>
        <Link to="/cards">
          <button className="nav-button">Cards</button>
        </Link>
        <Link to="/contactpage">
          <button className="nav-button">Contact</button>
        </Link>
        <Link to="/messages">
          <button className="nav-button">Messages</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
