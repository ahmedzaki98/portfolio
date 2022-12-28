import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("");
  
  const navId = (id) => {
    setActiveNav(id);
    setTimeout(() => setActiveNav(""), 2000);
  };

  return (
    <nav>
      <a
        href="#"
        onClick={() => navId("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => navId("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => navId("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => navId("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <BsFillJournalBookmarkFill />
      </a>
      <a
        href="#contact"
        onClick={() => navId("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
