import React, { useState } from "react";
import { data_accardion } from "./Data";
import { FaQuoteLeft } from "react-icons/fa";
import Accardion from "./Accardion";
import { Parallax } from "react-parallax";
import Slider from "react-slick";

function SectionThird() {
  const [questions, setQuestions] = useState(data_accardion);
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div>
      {/* worker */}
      <div>
        {/* introduction */}
        <div className="py-12">
          <div>
            <p className="py-2 text-sm sm:text-lg text-gray-500 text-center">
              Bizning Jamoa
            </p>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold text-[#252525]">
              Bizning jamoa a'zolari
            </h1>
          </div>
          <div></div>
        </div>

        {/* tashkilot azolari */}
        <div className="xl:mx-56 lg:mx-32 pb-20 lg:pb-32 grid grid-cols-1 md:grid-cols-3 text-center text-white font-semibold">
          <div className="flex flex-col text-[#252525] items-center">
            <img
              className="w-64 rounded-full overflow-hidden"
              src="images/akbar.jpg"
              alt=""
            />
            <h4 className="font-semibold py-4">RAHMONQULOV AKBAR</h4>
            <p className="font-mediumtext-sm">
              Lavozimi: "JQuruvchi" Jamiyati Ta`Sischisi
            </p>
            <p>Tel: +998 99 577-08-08</p>
          </div>
          <div className="items-center text-[#252525] flex flex-col text-center">
            <img
              className="w-64 rounded-full overflow-hidden"
              src="images/alisher.jpg"
              alt=""
            />
            <h4 className="font-semibold py-4">MUSURMONQULOV ALISHER</h4>
            <p className="font-medium">
              Lavozimi: "JQuruvchi" Jamiyati Ta`Sischisi
            </p>
            <p className="">Tel: +998 72 223-28-76</p>
          </div>
          <div className="flex flex-col text-[#252525] items-center text-center">
            <img
              className="w-[17rem] rounded-full overflow-hidden"
              src="images/islom.jpg"
              alt=""
            />
            <h4 className="font-semibold py-4">OLIMOV ISLOM</h4>
            <p className="font-medium">
              Lavozimi: "JQuruvchi" Jamiyati Ta`Sischisi
            </p>
            Tel: +998 72 223-28-76
          </div>
        </div>
      </div>

      {/* accardion secthird */}
      <div className="relative">
        <Parallax
          className="h-[600px] blur-[2px] hidden md:block bg-center "
          blur={{ min: -15, max: 15 }}
          bgImage="/images/worker.jpg"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
        <div className="">
          <h1 className="mx-4 md:absolute left-7 md:left-24 text-center md:text-left top-0 my-7 sm:top-5 lg:top-8 text-[#252525] uppercase text-lg font-semibold">
            Eng ko'p beriladigan savollar
          </h1>
          <div className="accardion mx-4 md:absolute left-7 md:left-24 top-0 sm:top-24 lg:top-28 bg-white">
            <main>
              <div className="container">
                <section className="">
                  {questions.map((question) => (
                    <Accardion key={question.id} {...question} />
                  ))}
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* slider clients */}
      <div className="my-24">
        <h3 className="text-center pb-10 text-xl uppercase font-medium">
          Mijozlarimiz fikri
        </h3>
        <Slider {...settings}>
          <div className="py-32 relative">
            <div>
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center">
                <div className="w-48 h-48 lg:w-56 lg:h-56 border-8 border-yellow-400 border-opacity-90"></div>
              </div>
              <img
                className="rounded-full w-14 sm:w-16 absolute bottom-3 md:bottom-0 left-1/2 transform -translate-x-1/2"
                src="https://prohauz.bold-themes.com/heating/wp-content/uploads/sites/3/2018/09/customer_reviews_02.jpg"
                alt="second"
              />
              <div className="carousel_heading">
                <FaQuoteLeft className="text-2xl md:3xl text-center mx-auto text-[#252525]" />
                <h1 className="text-md md:text-2xl my-3 font-extrabold text-black tracking-widest">
                  <span className="text-yellow-400">
                    Lorem ipsum dolor sit amet,{" "}
                  </span>{" "}
                  consectetur adipisicing <br /> elit. Dolorum, illo.
                </h1>
              </div>
            </div>
          </div>
          <div className="py-32 relative">
            <div>
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center">
                <div className="w-48 h-48 lg:w-56 lg:h-56 border-8 border-yellow-400 border-opacity-90"></div>
              </div>
              <img
                className="rounded-full w-14 sm:w-16 absolute bottom-3 md:bottom-0 left-1/2 transform -translate-x-1/2"
                src="https://prohauz.bold-themes.com/heating/wp-content/uploads/sites/3/2018/09/customer_reviews_03.jpg"
                alt="second"
              />
              <div className="carousel_heading max-w-4/5">
                <FaQuoteLeft className="text-2xl md:3xl text-center mx-auto text-[#252525]" />
                <h1 className="text-md md:text-2xl my-3 font-extrabold text-black tracking-widest">
                  <span className="text-yellow-400">
                    Lorem ipsum dolor sit amet,{" "}
                  </span>{" "}
                  consectetur adipisicing <br /> elit. Dolorum, illo.
                </h1>
              </div>
            </div>
          </div>
          <div className="py-32 relative">
            <div>
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center">
                <div className="w-48 h-48 lg:w-56 lg:h-56 border-8 border-yellow-400 border-opacity-90"></div>
              </div>
              <img
                className="rounded-full w-14 sm:w-16 absolute bottom-3 md:bottom-0 left-1/2 transform -translate-x-1/2"
                src="https://prohauz.bold-themes.com/heating/wp-content/uploads/sites/3/2018/09/customer_reviews_01.jpg"
                alt="second"
              />
              <div className="carousel_heading">
                <FaQuoteLeft className="text-2xl md:3xl text-center mx-auto text-[#252525]" />
                <h1 className="text-md md:text-2xl my-3 font-extrabold text-black tracking-widest">
                  <span className="text-yellow-400">
                    Lorem ipsum dolor sit amet,{" "}
                  </span>{" "}
                  consectetur adipisicing <br /> elit. Dolorum, illo.
                </h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SectionThird;
