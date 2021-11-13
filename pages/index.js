import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from "../components/Home";
import Loader from "../components/Loader.jsx";
import Contact from "../components/Contact";


  

export default function Home() {
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
        <title> Jquruvchi | home </title>
        <link rel="icon" href="/images/Jquruvchi.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap"
          rel="stylesheet"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js"></script>
      </Head>

      <div className="overflow-x-hidden overscroll-y-contain">
        {loading ? (
          <Loader />
        ) : (
          <div className="App">
            <Header />
            <HomePage />
            <Contact />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}
