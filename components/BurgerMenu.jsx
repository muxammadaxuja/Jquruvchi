import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Fade as Hamburger } from "hamburger-react";

function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <div isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
      <Hamburger color={isOpen ? "#fabe24" : "#fff"} color={show ? "#fff" : "#252525"} />
      <Sidebar isOpen={isOpen} />
    </div>
  );
}

export default BurgerMenu;
