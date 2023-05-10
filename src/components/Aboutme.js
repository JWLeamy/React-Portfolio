import React from "react";
// Here we import the Navbar.css file to grant access to some additional classNameNameNames
import "../styles/Aboutme.css";
import "../styles/Basic.css";
import me from "../Images/me.png";

const skills = [
  {
    name: "Team Player",
    icon: <i class="fa-solid fa-people-group fa-2x"></i>,
    description:
      "Concise comments, informative feedback, and exceptional communication when programming in a team setting.",
    key: "teamplayer",
  },
  {
    name: "Responsive",
    icon: <i class="fa-solid fa-laptop fa-2x"></i>,
    description:
      "Make applications functional and satisfying across devices of any size.",
    key: "responsive",
  },
  {
    name: "Dynamic",
    icon: <i class="fa-solid fa-atom fa-2x"></i>,
    description: "Producing websites and applications that come to life.",
    key: "dynamic",
  },
  {
    name: "Detail",
    icon: <i class="fa-solid fa-code fa-2x"></i>,
    description:
      "Pride myself on clear, concise, and organized coding practice. Small details make a big difference.",
    key: "detail",
  },
];

const strengths = [
  {
    name: "HTML 5",
    icon: <i class="fa-brands fa-html5 fa-6x"></i>,
    key: "HTML 5",
  },
  {
    name: "CSS",
    icon: <i class="fa-brands fa-css3-alt fa-6x"></i>,
    key: "CSS",
  },
  {
    name: "JavaScript",
    icon: <i class="fa-brands fa-square-js fa-6x"></i>,
    key: "JavaScript",
  },
  {
    name: "Git",
    icon: <i class="fa-brands fa-git fa-6x"></i>,
    key: "Git",
  },
  {
    name: "GitHub",
    icon: <i class="fa-brands fa-github fa-6x"></i>,
    key: "Github",
  },
  {
    name: "Bootstrap",
    icon: <i class="fa-brands fa-bootstrap fa-6x"></i>,
    key: "Bootstrap",
  }
];

function Aboutme() {
  return (
    <section className="two" id="abmm">
      <div className="abmhead">
        <h2>About Me</h2>
        <p>
          Full Stack Web <span className="contrast">Developer,</span> Business{" "}
          <span className="contrast">Graduate</span>, and{" "}
          <span className="contrast">Creator</span>
        </p>
      </div>
      <div className="profilebox">
        <div className="skillset">
          <div className="skillarray">
            {skills.map(({ name, icon, description, key }) => (
              <div className="skillicon" key={key}>
                <div className="skillbox">
                  <div className="hex">
                    <div className="s1"></div>
                    <div className="s2">{icon}</div>
                    <div className="s3"></div>
                  </div>
                  <p className="infoskill">{description}</p>
                </div>
                <h2>{name}</h2>
              </div>
            ))}
          </div>
          <div className="about">
            <div>
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

        <div className="wordset">
          <div className="formats">
            <div className="abm">
              <div className="pic">
                <img src={me} className="hasbulla" alt="hasbullaselfie" />
              </div>
              <h2 className="picname">
                <p>John</p>
                <p>Leamy</p>
              </h2>
              <div className="pictitle">
                <h2>Student</h2>
              </div>
              <ul className="piclist">
                <li>
                  <a href="https://www.linkedin.com/in/john-leamy-b68676238/">
                    <i className="fa-brands fa-linkedin fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/JWLeamy">
                    <i className="fa-brands fa-github fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="biotext">
              <h2>Skills</h2>
              <div>
                <button className="resume">Resume</button>
                <button className="projectlink">Projects</button>
              </div>
              <div className="bioinfo">
                <ul>
                  {strengths.map((strength) => (
                    <li className={strength.name} key={strength.key}>
                      <span>{strength.icon}</span>
                      <h2>{strength.name}</h2>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
