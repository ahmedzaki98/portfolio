import React from "react";
import "./about.css";
import MeAbout from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={MeAbout} alt="about-me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresh Graduate</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>+10 Projects</small>
            </article>
          </div>
          <p>
            <h3 style={{ color: "#4db5ff" }}>
              Computer Science fresh graduate | Front-end Engineer | Vue.js |
              React.js
            </h3>
            <h3>Date of Birth</h3>
            5/Nov/1998
            <h3>Address</h3>
            First Settlement New Cairo, 11865 Cairo, Egypt
            <h3>Education</h3>
            <strong>Bachelor's Degree in Computer Science</strong>, Faculty of
            Science Cairo university
            <br />
            <strong>Key Courses:</strong> OOP in Java, Compilers, Algorithms,
            Operating Systems, Data Structures, Networking.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
