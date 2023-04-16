import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNameNameNames
import '../styles/Aboutme.css';
import '../styles/Basic.css';
import hasbulla from '../Images/hasbullaclose.png'

function Aboutme() {

  return (
    <section className="two">
        <div className="formats" id="abmm">
            <div className="abm">
                <div className="abmhead">
                    <h2>About Me</h2>
                </div>
                <div className="bio">
                <img src={hasbulla} className="hasbulla" alt="hasbullaselfie"/>    
                <p>
                    Aspiring Develeoper with a drive to conceptualize, create, and ultimately provide useful full stack applications. <br />
                    Since writing my first line of code only four months ago, I've expanded my skillset across multiple programming languages and frameworks. <br />
                    <br />
                    This includes (but is not limited to)
                    / JavaScript / Github / Node.js / Express.js / OOP / ORM / Heroku / MySQL / React & More <br />
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Aboutme;