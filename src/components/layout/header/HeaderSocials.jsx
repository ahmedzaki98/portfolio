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
        <BsLinkedin size={25} />
      </a>
      <a href="https://github.com/ahmedzaki98" target="_blank">
        <FaGithub size={25} />
      </a>
    </div>
  );
};

export default HeaderSocials;
