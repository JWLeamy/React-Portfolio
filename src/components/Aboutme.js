import React from "react";
// Here we import the Navbar.css file to grant access to some additional classNameNameNames
import "../styles/Aboutme.css";
import "../styles/Basic.css";
import hasbulla from "../Images/hasbullaclose.png";

function Aboutme() {
  return (
    <section className="two" id="abmm">
      <div className="abmhead">
        <h2>About Me</h2>
        <p>Full Stack Web Developer, Business Graduate, and Creator</p>
      </div>
      <div className="profilebox">
        <div className="skillset">

        </div>
        <div className="formats">
          <div className="abm">
            <div className="pic">
              <img src={hasbulla} className="hasbulla" alt="hasbullaselfie" />
            </div>
            <h2 className="picname">
              <p>John</p>
              <p>Leamy</p>
            </h2>
            <div className="pictitle">
              <h2>Student</h2>
            </div>
            <ul className="piclist">
              <li>LinkedIn</li>
              <li>Github</li>
            </ul>
          </div>

          <div className="biotext">
            <h2>W</h2>
            <h3>I am and What I do</h3>
            <div>
              <button className="resume">Resume</button>
              <button className="projectlink">Projects</button>
            </div>
            <p>
              Aspiring Develeoper with a drive to conceptualize, create, and
              ultimately provide useful full stack applications.
              <br />
              <br />
              Since writing my first line of code only four months ago, I've
              expanded my skillset across multiple programming languages and
              frameworks.
              <br />
              <br />
              This includes (but is not limited to) / JavaScript / Github /
              Node.js / Express.js / OOP / ORM / Heroku / MySQL / React & More{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
