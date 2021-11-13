import React, { useState, useEffect } from "react";
import { navItem } from "./Data";
import { IconButton } from "@material-ui/core";
import { BsChevronUp } from 'react-icons/bs'
import BurgerMenu from "./BurgerMenu";

function Navbar() {
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(true);
  // active button 
  const toggleTab = (index) => {
    setActive(index);
  };
  // scroll animation
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  // scroll animation
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
      <nav className={show ? "nav" : "nav another"}>
        <div className="flex items-center">
          
          <a href="/" className="ml-2">
            <img
              className="w-32"
              src={
                show
                  ? "images/logowhite.png"
                  : "images/logoblack.png"
              }
              alt="logo"
            />
          </a>
        </div>
        <ul className="flex text-white items-center">
          {navItem.map((item) => (
            <li className="nav-list">
              <a href={item.path}
                key={item.id}
                onClick={() => toggleTab(`${item.id}`)}
                className={
                  active === `${item.id}`
                    ? "nav-item active"
                    : "nav-item" && show
                    ? "nav-item"
                    : "nav-item change-color"
                }
              >
                {item.title}
              </a>
              <span className={show ? "text-white" : "text-[#252525]"}>
                {item.slash}
              </span>
            </li>
          ))}
          <BurgerMenu />
          
          <div className={show ? 'top top-hidden' : "top"}>
            <IconButton>
              <a href="#">
              <BsChevronUp className="text-white h-10 w-10 md:h-12 md:w-12 p-3 bg-[#252525] border-2 border-white rounded-lg" />
              </a>
            </IconButton>
          </div>
        </ul>
      </nav>
  );
}

export default Navbar;
