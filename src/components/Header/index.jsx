import React from "react";
import CTA from "./CTA";
import ME from "../../asset/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import { Fade } from "react-reveal";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <Fade top>
          <h5>Hello I'm</h5>
          <h1>Hồ Đức Thắng</h1>
          <h5 className="text-light">Frontend Developer</h5>
          <CTA />
        </Fade>
        <HeaderSocials />
        <Fade bottom>
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </Fade>
        <a href="#contact" className="scroll__dowm">
          <Fade top>Scroll Down</Fade>
        </a>
      </div>
    </header>
  );
}

export default Header;
