import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNameNames
import '../styles/Navbar.css';
import '../styles/Basic.css';

function Navbar() {

  return (
    <nav className="navbar">
      <div className="options">

          <a href="#abmm" className="navbut"><i className="navcon fa-regular fa-user"></i><br />About Me</a>

          <a href="#psections" className="navbut"><i className="navcon fa-solid fa-computer"></i><br />My Projects</a>

          <a href="#" className="navbut"><i className="navcon fa-regular fa-envelope"></i><br />Contact Info</a>

      </div>
    </nav>
  );
}

export default Navbar;
