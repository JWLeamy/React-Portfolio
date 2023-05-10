import React from 'react';
import { Link } from 'react-router-dom';
// Here we import the Navbar.css file to grant access to some additional classNameNames
import '../styles/Navbar.css';
import '../styles/Basic.css';

function Navbar() {

  return (
    <nav className="navbar">
      <div className="options">

          <Link to="/About" className="navbut"><i className="navcon fa-regular fa-user"></i><br />About Me</Link>

          <Link to="/Works" className="navbut"><i className="navcon fa-solid fa-computer"></i><br />Projects</Link>

          <Link to="/Contact" className="navbut"><i className="navcon fa-regular fa-envelope"></i><br />Contact Info</Link>

      </div>
    </nav>
  );
}

export default Navbar;
