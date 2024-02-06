import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = ({ section }) => {
  console.log(section);
  return (
    <nav>
      <a href="#header" className={section === "header" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={section === "about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={section === "experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a href="#portfolio" className={section === "portfolio" ? "active" : ""}>
        <BsFillJournalBookmarkFill />
      </a>
      <a href="#contact" className={section === "contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
