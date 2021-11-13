import React from "react";
import { MdCall, MdOutlineApartment } from "react-icons/md";
import { BsClock, BsBuilding, BsHouse } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { first_section_data } from "./Data";
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Link from "next/link";


const icons = [
  BsBuilding,
  HiOutlineOfficeBuilding,
  MdOutlineApartment,
  BsHouse,
];

function SectionFirst() {
  return (
    <div>
      {/* position absoliute contanier */}
      <div className="xl:mx-42 lg:mx-24 relative -mt-2">
        <div className="items-center justify-around grid grid-cols-1 xl:grid-cols-2 bg-[#252525] p-10 sm:pb-6 lg:absolute lg:-top-16 lg:left-0 lg:right-0 rounded-md">
          <div className="sm:text-center lg:text-left">
            <p className="text-white mb-2">
              To'liq ma'lumot uchun telefon raqamimiz!
            </p>
            <div className="flex text-yellow-500 text-2xl lg:text-4xl hover:text-white transition-all duration-300 font-semibold sm:justify-center lg:justify-start">
             <div className="relative">
             <MdCall className="text-2xl mt-1 mr-3" /><span className="animate-ping absolute inline-flex h-4/5 w-4/5 rounded-full bg-yellow-400 opacity-75 top-1"></span>
             </div>
              <a href="tel:872-223-2876">+998 72 223 28 76 | 7/24</a>{" "}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:space-x-20 lg:text-left lg:pt-4">
            <div className="p-4 flex mt-4 lg:mt-0 md:justify-center lg:justify-start">
              <div className="flex items-center">
                <BsClock className="text-4xl text-gray-500 mr-5 md:ml-0 hover:text-white transition-all duration-300 " />
              </div>
              <div className="text-white">
                <p>Ish vaqtimiz</p>
                <p>Du, Shan 8.00 - 18.00</p>
                <p className="text-gray-500">Yakshanba dam</p>
              </div>
            </div>
            <div className="p-4 flex mt-4 lg:mt-0  md:justify-center lg:justify-start">
              <div className="flex items-center">
                <GoLocation className="text-4xl text-gray-500 mr-5 hover:text-white transition-all duration-300 " />
              </div>
              <div className="text-white">
                <p>Manzil</p>
                <Link href="https://www.google.com/maps/place/Jizzax+viloyati,+O%60zbekiston/@40.2754652,67.1838258,9z/data=!3m1!4b1!4m5!3m4!1s0x38b2ea58f711aca9:0xe18d916c84a0f4df!8m2!3d40.4706415!4d67.5708536">
                <p className="hover:text-yellow-300 cursor-pointer">Uzbekiston, Jizzax shahar, Toshkent ko'cha, 1A uy</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your camfort is our #1 perioryt */}
      <div className="pt-12 sm:pt20 md:pt-28 lg:pt-64">
        <div>
          <Flash>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold text-[#252525]">
              Nima uchun aynan
              <span className="text-yellow-500"> #Jquruvchi? </span>
            </h1>
          </Flash>
          <p className="py-2 text-sm sm:text-lg text-gray-500 text-center">
            Orzuigizdagi uyni qurushimizga ruxsat bering!
          </p>
        </div>
        <div></div>
      </div>

      {/* jquruvchi haqida icon malumot */}
      <div className="mx-8 sm:mx-20 md:mx-32 xl:mx-42 lg:mx-24 pt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {first_section_data.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={item.id}
              className="text-center flex flex-col justify-center items-center pt-4"
            >
              <Icon className="first_section-icon" />
              <h3 className="first_section_title">{item.title}</h3>
              <p className="w-5/6">{item.paragraph}</p>
            </div>
          );
        })}
      </div>
      {/* button yellow */}
      <div className="flex items-center justify-center my-16 lg:my-32">
      <Link href="/about">
        <a className="px-8 py-4 lg:px-14 lg:py-6 text-white hover:bg-yellow-300 transition-all duration-300 rounded-md bg-yellow-400">
          Barcha hizmatlar...
        </a>
        </Link>
      </div>

      <div className="relative mb-10">
        {/* lg image */}
        <Parallax
          className="h-[600px] blur-[2px] hidden lg:block bg-center"
          blur={{ min: -15, max: 15 }}
          bgImage="/images/brown.jpg"
          bgImageAlt="the cat"
          strength={200}
        ></Parallax>
        {/* sm image  */}
        <img
          src="/images/brown.jpg"
          className="h-[250px] md:h-[400px] lg:hidden w-full blur-[2px] bg-no-repeat bg-contain"
          alt=""
        />
        <div>
          {/* sectiom content  */}
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 lg:w-72 lg:h-72 border-8 border-gray-400 border-opacity-50"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white uppercase select-none font-roboto">
            <Fade bottom>
              <h1 className="lg:block font-medium lg:font-bold my-3 lg:my-6 text-[9px] lg:text-lg">
                Bizning maqsadimiz:
              </h1>
            </Fade>
            <Fade bottom>
              <h1 className="text-[10px] sm:text-md lg:text-3xl my-3 font-extrabold tracking-widest">
                Jizzax viloyatida bino va inshootlarni
                <span className="text-yellow-400 mx-2">
                  mustahkam, arzon va sifatli
                </span>
                qurib berib, shahrimiz ko'rkiga ko'rk qo'shish.
              </h1>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFirst;
