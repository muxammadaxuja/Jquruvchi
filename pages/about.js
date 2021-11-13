import React, { useState, useEffect } from "react";
import Head from "next/head";
import Loader from "../components/AnotherPageLoading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/About/Header";
import Main from '../components/About/Main'
import Contact from "../components/Contact";

function About() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <Head>
        <title> Jquruvchi | about </title>
        <link rel="icon" href="/images/Jquruvchi.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="">
        {loading ? (
          <Loader />
        ) : (
          <div className="App">
            <Navbar />
            <Header />
            <Main />
            <Contact />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
