import React, { useState } from 'react';
import '../styles/Section.css';
import '../styles/Basic.css';
import Pixum from '../Images/FinalPixum.png';
import Sneaky from '../Images/SneakyFinal.png';
import GoB from '../Images/GoB.png';

function Section() {
  const [filters, setFilters] = useState([]);

  const projects = [
    {
      name: 'Pixum',
      img: Pixum,
      url: 'https://mkalik.github.io/pixum/',
      tags: ['full-stack', 'front-end'],
      description: 'The easiest way to find new flix',
    },
    {
      name: 'SneakyLink',
      img: Sneaky,
      url: 'https://sneakylink-project-2.herokuapp.com/',
      tags: ['full-stack', 'back-end'],
      description: 'Store all your socials in one place',
    },
    {
      name: 'GoBommarito',
      img: GoB,
      url: 'https://go-bommarito.herokuapp.com/',
      tags: ['full-stack', 'back-end'],
      description: 'Blogs for travel, eating, and experience around the globe',
    },
  ];

  const toggleFilter = (tag) => {
    if (filters.includes(tag)) {
      setFilters(filters.filter((f) => f !== tag));
    } else {
      setFilters([...filters, tag]);
    }
  };

  const filteredProjects = filters.length > 0 ? projects.filter((project) => project.tags.some((tag) => filters.includes(tag))) : projects;

  return (
    <section className="three" id='works'>
      <div id="psections">
        <h2 className="projecthead">Projects and Applications</h2>
        <div className="filters">
          <ul>
            <li onClick={() => toggleFilter('full-stack')} className={filters.includes('full-stack') ? 'active' : ''}>Full-Stack</li>
            <li onClick={() => toggleFilter('front-end')} className={filters.includes('front-end') ? 'active' : ''}>Front-End</li>
            <li onClick={() => toggleFilter('back-end')} className={filters.includes('back-end') ? 'active' : ''}>Back-End</li>
          </ul>
        </div>
        <div className="projects">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`cards ${!filters.length || project.tags.some((tag) => filters.includes(tag)) ? '' : 'hidden'}`}>
              <h2 className={project.name}>{project.name}</h2>
              <a href={project.url}>
                <div className="blank-result-card">
                  <div className="app-container">
                    <img src={project.img} className="app-thumbnail" alt={project.name} />
                  </div>
                </div>
              </a>
              <p className="appinfo">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;