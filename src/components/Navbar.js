import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Basic.css';

function Navbar() {
  const handleScroll = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      const offset = 50;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }, 200);
  };

  return (
    <nav className="navbar">
      <div className="options">
        <Link to="/About" onClick={() => handleScroll('about')} className="navbut">
          <i className="navcon fa-regular fa-user"></i>
          <br />
          About Me
        </Link>
        <Link to="/Works" onClick={() => handleScroll('works')} className="navbut">
          <i className="navcon fa-solid fa-computer"></i>
          <br />
          Projects
        </Link>
        <Link to="/Contact" onClick={() => handleScroll('contact')} className="navbut">
          <i className="navcon fa-regular fa-envelope"></i>
          <br />
          Contact Info
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
