import React from 'react';
// Here we import the Section.css file to grant access to some additional classNameNames
import '../styles/Section.css';
import '../styles/Basic.css';
import Pixum from '../Images/FinalPixum.png'
import Sneaky from '../Images/SneakyFinal.png'

function Section() {
  return (
    <section className="three">
                <div id="psections">
                    <h2 className="projecthead">Projects and Applications</h2>
                    <div className="filters">
                        <ul>
                            <li>Full-Stack</li>
                            <li>Front-End</li>
                            <li>Back-End</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>NODE.js</li>
                            <li>React.js</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="projects">
                        <div className="cards">
                            <h2>Pixum</h2>
                            <a href="https://mkalik.github.io/pixum/">
                                <div className="blank-result-card">
                                    <div className="app-container" >
                                    <img src={Pixum} className="app-thumbnail" alt="project1" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="cards">
                            <h2>SneakyLink</h2>
                            <a href="https://sneakylink-project-2.herokuapp.com/">
                                <div className="blank-result-card">
                                    <div className="app-container" >
                                    <img src={Sneaky} className="app-thumbnail" alt="project2" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
  );
}

export default Section;
