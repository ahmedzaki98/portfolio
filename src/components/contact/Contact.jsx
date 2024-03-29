import React, { useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Aos from "aos";
import { useInView } from "react-intersection-observer";

const Contact = ({ onViewHandler }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qruwqqg",
      "template_quorw94",
      form.current,
      "x5OBwm4bEEb2Qhu1Z"
    );
    e.target.reset();
  };

  const [sectionRef, sectionInView] = useInView({ threshold:1 });
  if (sectionInView) {
    onViewHandler("contact");
  }

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section id="contact" data-aos="fade-up" ref={sectionRef}>
      <h5>Get In Touch</h5>
      <h2>Contact Me!</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>ahmedzaki19998@gmail.com</h5>
            <a href="mailto:ahmedzaki19998@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>ahmedzaki19998@gmail.com</h5>
            <a href="https://m.me/IAhmedzaki98I" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+201128801171</h5>
            <a href="https://wa.me/+201128801171" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
