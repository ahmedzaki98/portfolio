import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/IAhmedzaki98I/" target="_blank" className="face">
          <FaFacebookF />
        </a>
        <a href="https://github.com/ahmedzaki98" target="_blank" className="linkedin">
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-gamal-459447232/"
          target="_blank"
          className="github"
        >
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; 2022 Copyright Holder All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
