import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="" className="footer__logo">
        EGATOR
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="">FB</a>
        <a href="">IG</a>
        <a href="">TW</a>
      </div>
      <div className="footer__copyright">
        <small>&copy; abc. All rights abc.</small>
      </div>
    </footer>
  );
}

export default Footer;
