import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Flashcard App</Link>
      </div>
      <div className="options">
        <Link to="/home">Home</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/contactpage">Contact</Link>
        <Link to="/messages">Messages</Link>
      </div>
    </nav>
  );
};

export default Navbar;
