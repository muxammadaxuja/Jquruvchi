import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { second_section_data } from "./Data";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { SRLWrapper } from "simple-react-lightbox";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
const icons = [
  HiOutlineOfficeBuilding,
  HiOutlineOfficeBuilding,
  HiOutlineOfficeBuilding,
  HiOutlineOfficeBuilding,
  HiOutlineOfficeBuilding,
  HiOutlineOfficeBuilding,
];

function SectionSec() {
  return (
    <div className="pt-10 pb-16">
      {/* jquruvchi qurgan obyectlar */}
      <div className="pb-12 sm:pb-20 md:pb-20">
        <div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold text-[#252525]">
            <span className="text-yellow-500"> #Jquruvchi </span>
            qurgan binolar.
          </h1>
          <p className="py-2 text-sm sm:text-lg text-gray-500 text-center">
            Orzuigizdagi uyni qurushimizga ruxsat bering!
          </p>
        </div>
      </div>

      {/* binolar rasmi */}
      <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4 mx-8 md:mx-16 lg:mx-32 xl:mx-42 pb-16 text-gray-200">
        <div className="card ">
          <SRLWrapper>
            <img className="card_img" src="/images/work/6.jpg" alt="" />
            <div className="card_overlay hidden md:block  bg-white bg-opacity-60">
              <div className="card_content text-[18px] md:text-lg lg:text-xl font-medium">
                <h3 className="text-gray-800">Jquruvchi</h3>
                <p className="text-yellow-500">Obyektlari</p>
              </div>
            </div>
          </SRLWrapper>
        </div>
        <div className="card ">
          <SRLWrapper>
            <img className="card_img" src="/images/work/3.jpg" alt="" />
            <div className="card_overlay hidden md:block  bg-white bg-opacity-60">
              <div className="card_content text-[18px] md:text-lg lg:text-xl font-medium">
                <h3 className="text-gray-800">Jquruvchi</h3>
                <p className="text-yellow-500">Obyektlari</p>
              </div>
            </div>
          </SRLWrapper>
        </div>
        <div className="card ">
          <SRLWrapper>
            <img className="card_img" src="/images/work/5.jpg" alt="" />
            <div className="card_overlay hidden md:block bg-white bg-opacity-60">
              <div className="card_content text-[18px] md:text-lg lg:text-xl font-medium">
                <h3 className="text-gray-800">Jquruvchi</h3>
                <p className="text-yellow-500">Obyektlari</p>
              </div>
            </div>
          </SRLWrapper>
        </div>
        <div className="card ">
          <SRLWrapper>
            <img className="card_img" src="/images/work/999.jpg" alt="" />
            <div className="card_overlay hidden md:block bg-white bg-opacity-60">
              <div className="card_content text-[18px] md:text-lg lg:text-xl font-medium">
                <h3 className="text-gray-800">Jquruvchi</h3>
                <p className="text-yellow-500">Obyektlari</p>
              </div>
            </div>
          </SRLWrapper>
        </div>
        <div className="card ">
          <SRLWrapper>
            <img className="card_img" src="/images/work/jajji.jpg" alt="" />
            <div className="card_overlay hidden md:block bg-white bg-opacity-60">
              <div className="card_content text-[18px] md:text-lg lg:text-xl font-medium">
                <h3 className="text-gray-800">Jquruvchi</h3>
                <p className="text-yellow-500">Obyektlari</p>
              </div>
            </div>
          </SRLWrapper>
        </div>
        <div className="card ">
          <SRLWrapper>
            <img className="card_img" src="/images/work/888.jpg" alt="" />
            <div className="card_overlay hidden md:block bg-white bg-opacity-60">
              <div className="card_content text-[18px] md:text-lg lg:text-xl font-medium">
                <h3 className="text-gray-800">Jquruvchi</h3>
                <p className="text-yellow-500">Obyektlari</p>
              </div>
            </div>
          </SRLWrapper>
        </div>
      </div>

      {/* button yellow */}
      <div className="flex items-center justify-center pb-10 lg:mb-16">
       <Link  href="/projects">
        <a className="px-8 py-4 lg:px-14 lg:py-6 text-white hover:bg-yellow-300 transition-all duration-300 rounded-md bg-yellow-400">
          Barcha obyektlar...
        </a>
        </Link>
      </div>

      {/* image background fixed and circle animation progress  */}
      <div className="relative">
        {/* lg image */}
        <Parallax
          className="h-[600px] blur-[2px] hidden lg:block"
          bgImage="/images/slider1.jpg"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
        {/* sm image  */}
        <img
          src="/images/slider1.jpg"
          className="h-[300px] md:h-[400px] lg:hidden w-full blur-[2px] bg-no-repeat bg-contain"
          alt=""
        />
        <div>
          {/* sectiom content  */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
            <div className="w-32 h-32 lg:w-56 lg:h-56 border-8 border-gray-400 border-opacity-50"></div>
          </div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-center text-white uppercase select-none font-roboto">
            <Fade bottom>
              <h1 className="lg:block font-medium lg:font-bold my-3 lg:my-6 text-[9px] lg:text-1xl">
              BIZNING VAZIFAMIZ
              </h1>
            </Fade>
            <Fade bottom>
              <h1 className="text-[10px] lg:text-2xl mt-3 mb-3 lg:mb-14 font-extrabold tracking-widest">
                Mijozlarimizga 
                <span className="text-yellow-400 mx-2">
                ishonchli mahsulot va xizmatlar
                </span>
                bilan ta'minlashga bag'ishlash, va turli xil ehtiyojlarni qondirish.
              </h1>
            </Fade>
          </div>
        </div>
        <div className="flex justify-around absolute bottom-10 left-0 right-0 mx-8 sm:mx-20 md:mx-32 xl:mx-42 lg:mx-24">
          <div className="flex flex-col">
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={5}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    className="h-16 w-16 md:h-28 md:w-28 lg:h-48 lg:w-48"
                    value={value}
                    text={`${roundedValue}%`}
                    style={{ width: 100, height: 100 }}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#fabe24",
                      trailColor: "#6b5a54",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <p className="text-white mt-2 text-center text-[7px] md:text-md lg:text-lg md:font-semibold">
              Sifatliyligi
            </p>
          </div>
          <div className="flex flex-col">
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={89}
              duration={5}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    className="h-16 w-16 md:h-28 md:w-28 lg:h-48 lg:w-48"
                    value={value}
                    text={`${roundedValue}%`}
                    style={{ width: 100, height: 100 }}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#fabe24",
                      trailColor: "#6b5a54",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <p className="text-white mt-2 text-center text-[7px] md:text-md font-semibold lg:text-lg">
              Zamonaviyligi
            </p>
          </div>
          <div className="flex flex-col">
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={99}
              duration={5}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    className="h-16 w-16 md:h-28 md:-w-28 lg:h-48 lg:w-48"
                    value={value}
                    text={`${roundedValue}%`}
                    style={{ width: 100, height: 100 }}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#fabe24",
                      trailColor: "#6b5a54",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <p className="text-white mt-2 text-center text-[7px] md:text-md font-semibold lg:text-lg">
              Mustahkamligi
            </p>
          </div>
          <div className="flex flex-col">
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={77}
              duration={5}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    className="h-16 w-16 md:h-28 md:w-28 lg:h-48 lg:w-48"
                    value={value}
                    text={`${roundedValue}%`}
                    style={{ width: 100, height: 100 }}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#fabe24",
                      trailColor: "#6b5a54",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <p className="text-white mt-2 text-center text-[7px] md:text-md font-semibold lg:text-lg">
              Tashqi ko'rinishi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSec;
