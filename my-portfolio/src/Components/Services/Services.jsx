import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services" id="#services">
      <div className="services-container" >
        <h3 className="services-subtitle">
          My <span>Services</span>
        </h3>
        <h2 className="services-title">What I Do</h2>
        <div className="services-content">
          <article className="services-card">
            <i className="ri-layout-3-line services-icon"></i>
            <h2 className="services-title">Web Developer</h2>
            <p className="services-description">
              Development of custom web pages. Using current technologies and
              libraries of the labor field.
            </p>
          </article>
          <article className="services-card">
            <i className="ri-pantone-line services-icon"></i>
            <h2 className="services-title">UI/UX Designer</h2>
            <p className="services-description">
              I offer design of web interfaces and mobile applications, design
              made in figma, adobe xd and sketch.
            </p>
          </article>
          <article className="services-card">
            <i className="ri-pen-nib-line services-icon"></i>
            <h2 className="services-title">Graphic Design</h2>
            <p className="services-description">
              I make designs at the client's request, banner design, posters,
              digital designs among others.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Services;
