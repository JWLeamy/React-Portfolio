import React from "react";
import { Link } from 'react-router-dom';
// Here we import the Header.css file to grant access to some additional classNameNames
import "../styles/Header.css";
import "../styles/Basic.css";


// My name, opening title (what the client will see when they open the webpage)
function Header() {
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
  const name = "Welcome";

  return (
    <section className="one">
      <div className="homepage">
        <div className="title">
          <h1 className="opening l">
            {[...name].map((letter, index) => (
              <span className="nameletter l" style={{ "--i": index + 1 }}>
                {letter}
              </span>
            ))}
          </h1>
        </div>
        <h2 className="nameintro">
          <p>I'm John.</p>
        </h2>
        <div className="content">
          <div className="containers">
            <p className="text">I develop</p>
            <ul className="list">
              <li className="item">organized</li>
              <li className="item">efficient</li>
              <li className="item">creative</li>
              <li className="item">effective</li>
            </ul>
            <p className="closetext">Full-Stack applications.</p>
          </div>
        </div>
      </div>
      <div className="appear">
        <div className="welcome">
        <Link to="/About" onClick={() => handleScroll('about')} className="linkbox aone">
          About
        </Link>
        <Link to="/Works" onClick={() => handleScroll('works')} className="linkbox atwo">
          Projects
        </Link>
        <Link to="/Contact" onClick={() => handleScroll('contact')} className="linkbox athree">
          Contact Info
        </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
