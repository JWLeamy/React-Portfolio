import React, { useState } from "react";
import "../styles/Section.css";
import "../styles/Basic.css";
import Pixum from "../Images/FinalPixum.png";
import Sneaky from "../Images/SneakyFinal.png";
import GoB from "../Images/GoB.png";

function Section() {
  const [filters, setFilters] = useState([]);

  const projects = [
    {
      name: "Pixum",
      img: Pixum,
      url: "https://mkalik.github.io/pixum/",
      tags: ["full-stack", "front-end"],
      description: "The easiest way to find new flix",
    },
    {
      name: "SneakyLink",
      img: Sneaky,
      url: "https://sneakylink-project-2.herokuapp.com/",
      tags: ["full-stack", "back-end"],
      description: "Store all your socials in one place",
    },
    {
      name: "GoBommarito",
      img: GoB,
      url: "https://go-bommarito.herokuapp.com/",
      tags: ["full-stack", "back-end"],
      description: "Blogs for travel, eating, and experience around the globe",
    },
  ];

  const toggleFilter = (tag) => {
    if (filters.includes(tag)) {
      setFilters(filters.filter((f) => f !== tag));
    } else {
      setFilters([...filters, tag]);
    }
  };

  const filteredProjects =
    filters.length > 0
      ? projects.filter((project) =>
          project.tags.some((tag) => filters.includes(tag))
        )
      : projects;

  return (
    <section className="three" id="works">
      <div className="fullthree">
        <div className="worksheader">
          <h2 className="projecthead">Projects</h2>
          <p>A collection of works created in recent months</p>
          <p>This is where a few filters will be</p>
        </div>
        <div className="projects">
          {filteredProjects.map((project, index) => (
            
            <div className="image" style={{ backgroundImage: `url(${project.img})` }}>
              <a href={project.url}>
                <div className="imageinfo">
                  <h2 className={project.name}>{project.name}</h2>
                  <p className="appinfo">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;
