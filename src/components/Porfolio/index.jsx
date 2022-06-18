import React from "react";
import COVID from "../../asset/covid.png";
import ECOMMERCE from "../../asset/ecommerce.png";
import POKEMON from "../../asset/pokemon.png";
import TODOLIST from "../../asset/todolist.png";
import RFID from "../../asset/rfid.png";
import DISNEY from "../../asset/disney.png";
import "./portfolio.css";
import _ from "lodash";
function Portfolio() {
  const projects = [
    {
      id: 1,
      image: COVID,
      name: "COVID-19",
      type: "Project while learn ReactJs",
      tech: " ReactJs Hook, Material UI, React-high-chart, Axios, Lodash, Moment",
      func: "Integrated API, filter by nation, filter by day, dashboard chart",
      git: "https://github.com/thanghdheo/covid19clone",
      demo: "https://thanghdheo.github.io/covid19clone/",
    },
    {
      id: 2,
      image: ECOMMERCE,
      name: "CLOTHING SHOP",
      type: "Personal project",
      tech: " ReactJs Hook, React toolkit, Material UI, Sanity, React Reveal, Style Components, React Slicks, React Spinners, Axios , React hook form, Sweet Aleart ",
      func: "Integrated API, Login/Logout, Register, Show list product all/category, Filter/Sort, Search Product, Add Cart, Remove cart, Payment",
      git: "https://github.com/thanghdheo/CCNLTHD",
      demo: "https://thang-ecommerce.vercel.app/",
    },
    {
      id: 3,
      image: POKEMON,
      name: "POKEMON",
      type: "Project while learn ReactJs",
      tech: " ReactJs Hook,  Axios ",
      func: "Integrated API, Show pokemont list, Show pokemon detail",
      git: "https://github.com/thanghdheo/pokemon",
      demo: "https://pokemon-tau-seven.vercel.app/",
    },
    {
      id: 4,
      image: DISNEY,
      name: "DISNEY",
      type: "Project while learn ReactJs",
      tech: " ReactJs Hook, React toolkit, React router dom, React slick, Styled components ",
      func: "Integrated API,  Login/Logout, Show movie list, Show movie detail ",
      git: "https://github.com/thanghdheo/disney",
      demo: "https://disney-ashen.vercel.app/",
    },
    {
      id: 5,
      image: RFID,
      name: "PRODUCT MANAGER",
      type: "Project at university",
      tech: " ReactJs Hook, Tailwind CSS, Sanity, React CSV, Lodash, Moment, Yup, React hook form, React router dom, Sweet alert ",
      func: "Integrated API, Show list product with pagination, Filter/Search, Add product, Export peoducts to excel file, Export product by date range to excel file ",
      git: "https://github.com/thanghdheo/seminar",
      demo: "https://seminar-rifd.vercel.app/",
    },
    {
      id: 6,
      image: TODOLIST,
      name: "TO DO LIST",
      type: "Personal project",
      tech: " ReactJs Hook, Reactstrap, React toolkit Material UI Icons, UUID",
      func: "Add job to do, Disabled job when have done, Search job/search job by status, Filter job by status, Save data in localstorage",
      git: "https://github.com/thanghdheo/TodoListByThang",
      demo: "https://thanghdheo.github.io/TodoListByThang/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>What i Do</h5>
      <h2>My Projects</h2>

      <div className="container portfolio__container">
        {_.map(projects, (item, index) => {
          return (
            <article key={_.get(item, "id")} className="portfolio__item">
              <div>
                <div className="portfolio__item-image">
                  <img src={_.get(item, "image")} alt="" />
                </div>
                <h3>{_.get(item, "name")}</h3>
                <h4>{_.get(item, "type")}</h4>

                <h5>Technologies using:</h5>
                <small>{_.get(item, "tech")}</small>
                <h5>Functions:</h5>
                <small>{_.get(item, "func")}</small>
              </div>

              <div className="portfolio__item-cta">
                <a href={_.get(item, "git")} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={_.get(item, "demo")}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
