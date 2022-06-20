import React from "react";
import { BiCheck } from "react-icons/bi";
import { Zoom } from "react-reveal";
import PITEK from "../../asset/0001.png";
import "./services.css";

function Services() {
  return (
    <section id="services">
      <h5>What i Experience</h5>
      <h2>My Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h2>PITEK TECHNOLOGY JOINT STOCK COMPANY</h2>
            <h3>2022</h3>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding:"24px" }}>
            <ul className="service__list">
              <li>
                <p>Position : </p>
                <small>
                  <BiCheck className="service__list-icon" />
                  Fresher Front-end Developer ( Web - ReactJs )
                </small>
              </li>
              <li>
                <p>Address : </p>
                <small>
                  <BiCheck className="service__list-icon" />
                  134 Bạch Đằng, Phường 2, Quận Tân Bình, Thành phố Hồ Chí Minh,
                  Việt Nam.
                </small>
              </li>
              <li>
                <p>Main responsibilities : </p>
                <small>
                  <BiCheck className="service__list-icon" />
                  Convert to HTML,CSS from Figma.
                </small>
                <small>
                  {" "}
                  <BiCheck className="service__list-icon" /> Handle logic and
                  integrated API.
                </small>
                {/* <small>
                  {" "}
                  <BiCheck className="service__list-icon" />
                  Support content team to advertise the company.
                </small> */}
              </li>
              <li>
                <p>
                  The projects of the company that I have participated in such
                  as :
                </p>

                <small>
                  <BiCheck className="service__list-icon" />
                  Web Admin (Real estate project).
                </small>
                <small>
                  <BiCheck className="service__list-icon" />
                  Human Resources Manager (Employee management and leave management project).
                </small>
              </li>
              <li>
                <p>My Gains :</p>
                <small>
                  <BiCheck className="service__list-icon" />I was accepted as a
                  full-time employee after my probation.
                </small>
                <small>
                  <BiCheck className="service__list-icon" />
                  Learn new knowledge, experience and skills from experienced
                  people
                </small>
              </li>
            </ul>
            <Zoom>
              <img src={PITEK} alt="" height={500} />
            </Zoom>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
