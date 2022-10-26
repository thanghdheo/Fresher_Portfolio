import React from "react";
import CV from "../../asset/CV_Ho Duc Thang_Frontend_Developer.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} className="btn" download target="_blank">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
