import React, { useEffect } from "react";
import { data } from "../../data";
import "./project.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import ReadMore from "../ui/ReadMore";
import { useInView } from "react-intersection-observer";

const Projects = ({ onViewHandler }) => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  if (inView) {
    onViewHandler("portfolio");
  }

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section ref={ref} className="projects-container" id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      {data.map(({ id, image, title, github, demo, disc, live }) => (
        <div className="project-wrapper" key={id}>
          <div data-aos="zoom-in" className="project-img">
            <img src={image.default} alt={title} loading="lazy" />
          </div>
          <div className="project-description">
            <h2>{title}</h2>
            {disc && <ReadMore data-aos="fade-up">{disc}</ReadMore>}
            <div className="footer">
              {github && (
                <button>
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                </button>
              )}
              {demo && (
                <button>
                  <a href={demo} className="btn" target="_blank">
                    Live Demo
                  </a>
                </button>
              )}
              {live && (
                <button>
                  <a href={live} className="btn" target="_blank">
                    Live
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
