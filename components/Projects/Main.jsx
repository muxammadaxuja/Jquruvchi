import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";

const images = [
  { id: "1", image: "/images/work/8.jpg", tag: "Sport" },
  { id: "2", image: "/images/work/bogcha.jpg", tag: "Bolalar uchun" },
  { id: "3", image: "/images/work/777.jpg", tag: "Sport" },
  { id: "4", image: "/images/work/6.jpg", tag: "Tashkilotlar" },
  { id: "5", image: "/images/work/11.jpg", tag: "Tashkilotlar" },
  { id: "6", image: "/images/work/4.jpg", tag: "Sport" },
  { id: "7", image: "/images/work/888.jpg", tag: "Tashkilotlar" },
  { id: "8", image: "/images/work/bogcha2.jpg", tag: "Bolalar uchun" },
  { id: "9", image: "/images/work/5.jpg", tag: "Tashkilotlar" },
];

function Main() {
  const [tag, setTag] = useState("Barchasi");
  const [filteImage, setFilterimage] = useState([]);

  useEffect(() => {
    tag === "Barchasi"
      ? setFilterimage(images)
      : setFilterimage(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="py-10 mx-6 sm:mx-24 md:mx-28 lg:mx-32 xl:mx-56 flex justify-center">
      <div>
        <div className="text-center">
          <h1 className="text-yellow-400 font-bold text-2xl md:text-3xl py-8">
            Bizning Proyektlar
          </h1>
          <div className="py-8">
            <TagBtn className="" name="Barchasi" handleSetTag={setTag} />
            <TagBtn className="" name="Tashkilotlar" handleSetTag={setTag} />
            <TagBtn className="" name="Sport" handleSetTag={setTag} />
            <TagBtn className="" name="Bolalar uchun" handleSetTag={setTag} />
          </div>
        </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 place-content-center">
            {filteImage.map((image) => {
              return (
                <div>
                  <SRLWrapper>
                    <img
                      className="w-[400px] h-[250px] cursor-pointer rounded-md relative"
                      src={image.image}
                      alt=""
                    />
                  </SRLWrapper>
                  <span></span>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
}

const TagBtn = ({ name, handleSetTag }) => {
  return (
    <button
      className="text-[#252525] mx-3 md:mx-6 font-medium text-lg hover:text-opacity-80 transition-all duration-200"
      onClick={() => handleSetTag(name)}
    >
      {" "}
      {name}{" "}
    </button>
  );
};

export default Main;
