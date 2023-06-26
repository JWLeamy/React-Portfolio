import React, { useState } from "react";
import "../styles/Section.css";
import "../styles/Basic.css";
import Pixum from "../Images/FinalPixum.png";
import Sneaky from "../Images/SneakyFinal.png";
import GoB from "../Images/GoB.png";

function Section() {
  const [filters, setFilters] = useState([]);

  function haslink(project) {
    if(project) {
      return <a href={project}>
      <i class="fa-brands fa-space-awesome fa-2x"></i>
      </a>
    }
  }

  const projects = [
    {
      name: "Pixum",
      img: Pixum,
      url: "https://mkalik.github.io/pixum/",
      tags: ["full-stack", "front-end"],
      description: "The easiest way to find new flix",
      github: "https://github.com/mkalik/pixum"
    },
    {
      name: "SneakyLink",
      img: Sneaky,
      url: "https://sneakylink-project-2.herokuapp.com/",
      tags: ["full-stack", "back-end"],
      description: "Store all your socials in one place",
      github: "https://github.com/JWLeamy/SneakyLink"
    },
    {
      name: "GoBommarito",
      img: GoB,
      url: "https://go-bommarito.herokuapp.com/",
      tags: ["full-stack", "back-end"],
      description: "Blogs for travel, eating, and experience around the globe",
      github: "https://github.com/malxxy/go-bommarito"
    },
    {
      name: "J.A.T.E",
      img: GoB,
      tags: ["back-end"],
      description: "Your own downloadable text editor. Use it to add, edit, and maniputate text as you please.",
      github: "https://github.com/JWLeamy/Text-Editor"
    },
    {
      name: "Social Network API",
      img: GoB,
      tags: ["back-end"],
      description: "An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
      github: "https://github.com/JWLeamy/Social-network-API"
    },
    {
      name: "My Portfolio",
      img: GoB,
      url: "https://go-bommarito.herokuapp.com/",
      tags: ["full-stack", "back-end"],
      description: "My personal React.js Portfolio.",
      github: "https://github.com/JWLeamy/React-Portfolio"
    },
  ];

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
          <p>A collection of <span className="blu">works </span>created in recent months</p>
          <p>This is where a few filters will be</p>
        </div>
        <div className="psec">
          <div className="projects">
            {filteredProjects.map((project, index) => (
              
              <div className="image" style={{ backgroundImage: `url(${project.img})` }}>
                
                  <div className="imageinfo">
                    <h2 className={project.name}>{project.name}</h2>
                    <p className="appinfo">{project.description}</p>
                    <div>
                      {haslink(project.url)}
                      <a href={project.github}>
                        <i className="fa-brands fa-github fa-2x"></i>
                      </a>
                    </div>
                  </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
