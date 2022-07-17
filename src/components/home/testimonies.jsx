import React from "react";
import Description from "../common/Description";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { brands } from "../../../data/brands";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { slides } from "@/data/testimonials";

const Pagination = ({ activeIndex }) => {
  const swiper = useSwiper();
  return (
    <span className="mt-10 flex button text-[1.3vw] justify-center space-x-2">
      {slides.map((e, index) => (
        <span
          key={"sadashjgjhd" + e.id}
          onClick={() => swiper.slideTo(index)}
          className={`w-4 h-4 ${
            activeIndex % slides.length === index
              ? "bg-transparent"
              : "bg-white"
          } border border-white rounded-full cursor-pointer`}
        />
      ))}
    </span>
  );
};

export default function Testimonies() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <>
      <div
        id="testimonies"
        className="flex flex-col w-full px-6 mt-10 text-white bg-[#1F1D1D] lg:h-[25vw]"
      >
        <div className="flex flex-1"></div>
        <div className="flex flex-1 justify-center items-center flex-col">
          <div className="flex px-5 py-2 text-5xl mt-16 lg:mt-0 lg:text-[4vw] text-center font-[PPNeueMontreal] rounded-full tracking-wider">
            <h1 className="uppercase">TESTIMONIES</h1>
          </div>
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <Description
              text={
                "Its truly gratifying when our customers find our\n work valuable and purposeful."
              }
            />
          </div>
          <div className="lg:hidden flex flex-1 justify-center items-center">
            <Description
              text={
                "Its truly gratifying when our customers find our work valuable and purposeful."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap flex-col justify-around items-center font-[PPNeueMontreal] p-4 sm:h-[50vh] lg:h-[100vh] bg-[#1F1D1D]">
        <div className="flex w-32 h-32 lg:w-[15vw] lg:h-[15vw] border border-[#FDFDFD] rounded-full p-2 lg:p-[1vw]">
          <div
            id="test_profile_pic"
            className="w-full h-full rounded-full bg-cover "
          ></div>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop
          className="w-full px-10 sm:px-20 sm:w-1/2 flex flex-col"
          onSlideChange={(e) => {
            setActiveIndex(e.activeIndex);
            document.getElementById(
              "test_profile_pic"
            ).style.backgroundImage = `url(${
              slides[e.activeIndex % slides.length].backgroundImage
            })`;
          }}
        >
          {slides.map((_, index) => (
            <SwiperSlide
              key={"sadasd" + index}
              className="w-full h-full flex flex-col justify-center items-center"
            >
              <div className=" text-white tracking-widest flex flex-col mt-5 items-center">
                <h1 className=" font-bold text-xl lg:text-[1.7vw]">
                  {slides[activeIndex % slides.length].name}
                </h1>
                <span className="lg:text-[1.3vw]">{slides[activeIndex % slides.length].description}</span>
                <span className="mt-8 hidden lg:flex flex-col text-center lg:text-[1.3vw] items-center">
                  {slides[activeIndex % slides.length].text.split("\n").map((text) => (
                    <span key={text} className="text-white">
                      {text}
                    </span>
                  ))}
                </span>
                <span className="mt-8 flex lg:hidden flex-col text-center items-center">
                  {slides[activeIndex % slides.length].text.split("\n").map((text, index) => (
                    <span key={text + index} className="text-white">
                      {text}
                    </span>
                  ))}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <Pagination activeIndex={activeIndex} />
        </Swiper>
      </div>

      <div className="w-full sm:h-[20vh] lg:h-[22vw] items-center bg-[#1F1D1D]">
        <Marquee
          gradient={false}
          speed={60}
          direction={"left"}
          className="w-full flex items-center overflow-x-auto"
        >
          {brands.map((items) => (
            <span key={items.src} className="flex-none -mr-48 sm:-mr-20 lg:mr-0">
              <Image key={items.src} src={items} />
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
}
