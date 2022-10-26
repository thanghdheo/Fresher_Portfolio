import _ from "lodash";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Bounce, Fade } from "react-reveal";
import "./experience.css";

function Experience() {
  const ProgramingLanguages = [
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "Javascript ES6",
    },
    // {
    //   id: 4,
    //   title: "Responsive",
    // },
  ];

  const Frameworks = [
    {
      id: 1,
      title: "React ( Functional component )",
    },
    {
      id: 9,
      title: "Typescript",
    },
    {
      id: 2,
      title: "Redux toolkit",
    },
    {
      id: 8,
      title: "Typescript",
    },
    {
      id: 3,
      title: "NextJs",
    },
    {
      id: 4,
      title: "Bootstrap",
    },
    {
      id: 5,
      title: "Material UI",
    },
    {
      id: 6,
      title: "Tailwind CSS",
    },
    {
      id: 7,
      title: "Ant Design",
    },
    {
      id: 8,
      title: "Other Libraries ( React Hook Form, React Router Dom, etc. )",
    },
  ];

  const Control = [
    {
      id: 1,
      title: "Github",
    },
    {
      id: 2,
      title: "Gitlab",
    },
    {
      id: 2,
      title: "Bitbucket",
    },
  ];
  const API = [
    {
      id: 1,
      title: "RESTful API",
    },
    {
      id: 2,
      title: "Graphql",
    },
  ];
  const Otherstools = [
    {
      id: 1,
      title: "Agile/Scrum",
    },
    {
      id: 2,
      title: "Nginx",
    },
    {
      id: 3,
      title: "CI/CD",
    },
    {
      id: 4,
      title: "Hasura",
    },
    {
      id: 4,
      title: "Jira",
    },
  ];
  const Others = [
    {
      id: 1,
      title: "Teamwork",
    },
    {
      id: 2,
      title: "Time Management",
    },
    {
      id: 3,
      title: "Knowledge of OOP",
    },
    {
      id: 4,
      title: "Can ability to read English documents.",
    },
  ];
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Knowledge</h2>
      <Fade>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Basic Programming Languages</h3>
            <div className="experience__content">
              {_.map(ProgramingLanguages, (item, index) => {
                return (
                  <article
                    key={_.get(item, "id")}
                    className="experience__details"
                  >
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{_.get(item, "title")}</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="experience__frontend">
            <h3>Frameworks Library</h3>
            <div className="experience__content">
              {_.map(Frameworks, (item, index) => {
                return (
                  <article
                    key={_.get(item, "id")}
                    className="experience__details"
                  >
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{_.get(item, "title")}</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="experience__frontend">
            <h3>Version Control</h3>
            <div className="experience__content">
              {_.map(Control, (item, index) => {
                return (
                  <article
                    key={_.get(item, "id")}
                    className="experience__details"
                  >
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{_.get(item, "title")}</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="experience__frontend">
            <h3>Application Programming Interface ( API )</h3>
            <div className="experience__content">
              {_.map(API, (item, index) => {
                return (
                  <article
                    key={_.get(item, "id")}
                    className="experience__details"
                  >
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{_.get(item, "title")}</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="experience__frontend">
            <h3>Others</h3>
            <div className="experience__content">
              {_.map(Otherstools, (item, index) => {
                return (
                  <article
                    key={_.get(item, "id")}
                    className="experience__details"
                  >
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{_.get(item, "title")}</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="experience__frontend">
            <h3>Others skill</h3>
            <div className="experience__content">
              {_.map(Others, (item, index) => {
                return (
                  <article
                    key={_.get(item, "id")}
                    className="experience__details"
                  >
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{_.get(item, "title")}</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Experience;
