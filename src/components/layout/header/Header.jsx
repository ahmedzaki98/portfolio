import React from "react";
import CTA from "./CTA";
import "./header.scss";
import ME from "../../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { useInView } from "react-intersection-observer";

const Header = ({ onViewHandler }) => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.5 });
  if (sectionInView) {
    onViewHandler("header");
  }
  return (
    <header id="header" ref={sectionRef}>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ahmed Gamal</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a className="scroll_down" href="#contact" style={{ fontSize: "18px" }}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
