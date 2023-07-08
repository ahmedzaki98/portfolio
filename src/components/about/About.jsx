import React, { useEffect } from "react";
import "./about.css";
import MeAbout from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section id="about" data-aos="fade-up">
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
              <small>1 year</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>+10 Projects</small>
            </article>
          </div>
          <p>
            <h3 style={{ color: "#4db5ff" }}>Front-end Engineer</h3>
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
            <h3>Experience</h3>
            <article
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <strong style={{ color: "rgba(255, 255, 255, 0.771)" }}>
                Almusand Co, Front-end Developer
              </strong>
              <strong style={{ color: "rgba(255, 255, 255, 0.771)" }}>
                01/2023 – present
              </strong>
            </article>
            <strong>Cooperated </strong>with <strong>backend developers</strong>
            and a<strong> UI/UX designer </strong>
            to create high-quality web apps.
            <br />
            Used <strong> React/JavaScript </strong>as the primary development
            library.
            <br />
            <strong>maintaining, debugging </strong>and{" "}
            <strong> creating new </strong> features in several projects.
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
