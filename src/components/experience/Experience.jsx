import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>SCSS</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>MUI</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>Ant Design</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            {/* <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>Vue.js</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article> */}
          </div>
        </div>

        <div className="experience_Languages">
          <h3>Languages Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>JavaScript (ES6)</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>Java</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon " />
              <div>
                <h4>Python</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
