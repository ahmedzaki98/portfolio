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

const App = () => {
  return (
    <React.Fragment>
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
