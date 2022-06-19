import React from "react";
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";
import { Fade } from "react-reveal";

function HeaderSocials() {
  return (
    <Fade left>
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/th%E1%BA%AFng-h%E1%BB%93-%C4%91%E1%BB%A9c-01ba4b233/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/thanghdheo/" target="_blank">
          <BsGithub />
        </a>
      </div>
    </Fade>
  );
}

export default HeaderSocials;
