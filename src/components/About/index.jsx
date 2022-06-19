import _ from "lodash";
import React from "react";
import { FaAward } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";
import { Fade } from "react-reveal";
import ME from "../../asset/me1.png";
import "./about.css";

function About() {
  const About = [
    {
      id: 1,
      title: "Education",
      icon: <MdOutlineSchool />,
      desc: " Studied Information Technology at Saigon University in 2018-2022",
    },
    {
      id: 2,
      title: "Experience",
      icon: <FaAward />,
      desc: " 6 months experience of working as a web developer at Ho Chi Minh city.",
    },
  ];
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Fade left>
              <img src={ME} alt="About Image" />
            </Fade>
          </div>
        </div>
        <div className="about__content">
          <Fade top>
            <div className="about__cards">
              {_.map(About, (item, index) => {
                return (
                  <article key={_.get(item, "id")} className="about__card">
                    {_.get(item, "icon")}
                    <h5> {_.get(item, "title")}</h5>
                    <small>{_.get(item, "desc")}</small>
                  </article>
                );
              })}

              <article className="about__card">
                <VscFolderLibrary />
                <h5>Projects</h5>
                <a href="#portfolio">
                  <small>Click here to see all my project.</small>
                </a>
              </article>
            </div>
          </Fade>
          <Fade bottom>
            <p>
              Hi guys ! I'm Hồ Đức Thắng, I was born in 2000 and I'm from Vung
              Tau city. I'm Fresher Front-end Developer. I have 6 months
              experience of working as a web developer at Ho Chi Minh city.{" "}
            </p>

            <p>
              I always put my heart and soul into every single website that I
              develop and want to learn new things and improve my skills. I
              guess that's all I have to share about myself. Thank you for
              reading!
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
