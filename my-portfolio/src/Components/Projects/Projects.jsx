import React from "react";
import "./Projects.css";

const projects = [
  { id: 1, img: require("../Assets/project-img-1.jpg"), subtitle: "Web", title: "Modern website" },
  { id: 2, img: require("../Assets/project-img-2.jpg"), subtitle: "Web", title: "Modern website" },
  { id: 3, img: require("../Assets/project-img-3.jpg"), subtitle: "Web", title: "Modern website" },
  { id: 4, img: require("../Assets/project-img-4.jpg"), subtitle: "Web", title: "Modern website" },
  { id: 5, img: require("../Assets/project-img-5.jpg"), subtitle: "Web", title: "Modern website" },
  { id: 6, img: require("../Assets/project-img-6.jpg"), subtitle: "Web", title: "Modern website" },
];

const Projects = () => {
  return (
    <div className="projects" id="#projects">
      <div className="projects-container">
        <h3 className="projects-subtitle">
          My <span>Jobs</span>
        </h3>
        <h2 className="projects-title">Recent Projects</h2>
        <div className="projects-content">
          {projects.map((project) => (
            <article className="projects-card" key={project.id}>
              <img src={project.img} className="projects-img" alt="" />
              <div className="projects-modal">
                <span className="projects-subtitle">{project.subtitle}</span>
                <h2 className="projects-title">{project.title}</h2>
                <a href={`#`} className="projects-link">
                  View demo <i className="ri-external-link-line"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
