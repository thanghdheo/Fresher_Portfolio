import _ from "lodash";
import React, { useState } from "react";
import {
  AiOutlineBook,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";
import { RiServiceLine } from "react-icons/ri";
import "./nav.css";

const icons = [
  {
    url: "#",
    icon: <AiOutlineHome />,
  },
  {
    url: "#about",
    icon: <AiOutlineUser />,
  },
  {
    url: "#experience",
    icon: <AiOutlineBook />,
  },

  {
    url: "#services",
    icon: <RiServiceLine />,
  },
  {
    url: "#portfolio",
    icon: <VscFolderLibrary />,
  },
  {
    url: "#contact",
    icon: <AiOutlineContacts />,
  },
];

function Nav() {
  const [active, setActive] = useState(0);
  return (
    <nav>
      {_.map(icons, (icon, index) => {
        return (
          <a
            key={index}
            onClick={() => setActive(index)}
            href={_.get(icon, "url")}
            className={active === index ? "active" : ""}
          >
            {_.get(icon, "icon")}
          </a>
        );
      })}
    </nav>
  );
}

export default Nav;
