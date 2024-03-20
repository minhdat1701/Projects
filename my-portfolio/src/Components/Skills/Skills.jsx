import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="#skills">
      <div className="skills-container">
        <div className="skills-content">
          <h3 className="skills-subtitle">
            Favorite <span>Skills</span>
          </h3>
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-description">
            See fully what skills I have and perform, to develop the projects
            for you.
          </p>
          <div className="skills-btn">
              <a href="https://www.github.com" target="_blank" className="btn-see">See Projects</a>
          </div>
        </div>
        <div className="skills-list">
            <ol className="skills-group">
                <li className="skills-item">HTML & CSS</li>
                <li className="skills-item">JavaScript</li>
                <li className="skills-item">Bootstrap</li>
                <li className="skills-item">ReactJS</li>
            </ol>
            <ol className="skills-group" start={5}>
                <li className="skills-item">Git & Github</li>
                <li className="skills-item">Figma</li>
                <li className="skills-item">Sketch</li>
            </ol>
        </div>
      </div>
    </div>
  );
};

export default Skills;
