import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Carousel";
import Loader from "./Loader";

function Header() {

  return (
    <div className="App relative">
      <div>
        <Navbar />
        <Slider />
      </div>
    </div>
  );
}

export default Header;
