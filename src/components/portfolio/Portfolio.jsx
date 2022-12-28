import React from "react";
import "./portfolio.css";
// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: require("../../assets/pr-1.png"),
    title: "The Store",
    github: "https://github.com/ahmedzaki98/react-phone-e-commerce-app",
    demo: "https://react-phone-store01.netlify.app/",
  },
  {
    id: 2,
    image: require("../../assets/pr-2.png"),
    title: "My Vue Music",
    github: "https://github.com/ahmedzaki98/vue-music-player",
    demo: "https://my-vue-music.netlify.app/",
  },
  {
    id: 3,
    image: require("../../assets/project-3.png"),
    title: "YouTube Video Player",
    github: "https://github.com/ahmedzaki98/YouTube-video-player",
    demo: "",
  },
  {
    id: 4,
    image: require("../../assets/project-4.png"),
    title: "Image Search Engine",
    github: "https://github.com/ahmedzaki98/image-search-engine",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Swiper
        className="container  portfolio_container"
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, github, demo }) => {
          if (demo !== "") {
            return (
              <SwiperSlide key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
