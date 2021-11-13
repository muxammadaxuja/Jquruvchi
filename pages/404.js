import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function NotFoundPage() {
  return (
    <div className="relative">
      <Head>
        <link rel="icon" href="/images/Jquruvchi.png" />
        <title> Jquruvchi | 404 </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <div className="grid place-items-center h-screen">
        <img className="w-3/5 lg:w-2/4" src="/images/404.png" alt="" />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default NotFoundPage;
