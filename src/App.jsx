import React from "react";
import Header from "./components/layout/header/Header";
import Nav from "./components/layout/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/tetimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/footer/Footer";
import Projects from "./components/projects/Projects";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <React.Fragment>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid rgba(255, 255, 255, 0.6)",
        }}
        innerStyle={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
      />
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
