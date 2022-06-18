import React from "react";
import {
  AiOutlineFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="" className="footer__logo">
        THANG'S PORTFOLIO
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Knowledge</a>
          <a href="#services">Experence</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100016924470551">
          <AiOutlineFacebook />
        </a>
        <a href="https://www.linkedin.com/in/th%E1%BA%AFng-h%E1%BB%93-%C4%91%E1%BB%A9c-01ba4b233/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/thanghdheo">
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
