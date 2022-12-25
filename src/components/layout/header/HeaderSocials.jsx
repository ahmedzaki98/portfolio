import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ahmed-gamal-459447232/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/ahmedzaki98" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
