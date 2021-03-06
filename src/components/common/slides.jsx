import Link from "next/link";
import React from "react";
import { buttonMouseEnter, onmouseleave } from "../../custom-cursor";

export default function Slides({ data, index, total }) {
  const onMouseEnter = () => {
    const customCursor = document.querySelector(".cursor");
    customCursor.style.width = "10rem";
    customCursor.style.height = "10rem";
    customCursor.classList.replace("bg-black", "bg-white");
    customCursor.classList.replace("bg-opacity-25", "bg-opacity-100");
    customCursor.innerHTML = `
    <img src="/right.svg" width="70px" />
    <span className="font-bold pt-10 font-[PPNeueMontreal] tracking-wider">scroll</span>`;
  };
  return (
    <section
      style={{
        backgroundImage: `url("${data.image}")`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onmouseleave}
      className="flex-none mr-4 h-[60%] lg:h-full font-[PPNeueMontreal] w-full lg:w-[90%] bg-cover "
    >
      <div className="flex text-white tracking-widest flex-1 h-full bg-gradient-to-t from-black to-transparent w-full p-10 2xl:p-16">
        <div className="flex flex-[2] flex-col justify-end">
          <h1 className="font-bold text-[1.5vw]">
            . 0{index} -0{total}
          </h1>
          <h1 className="font-bold tracking-widest text-[4.3vw]">
            {data.title}
          </h1>
          <span className=" font-bold text-[1.3vw]">{data.description}</span>
          <span className="font-bold mt-5">{data.clb_1}</span>
          <span className="font-bold ">{data.clb_2}</span>
          <span className="font-bold ">{data.clb_3}</span>
        </div>
        <div className="flex flex-1 flex-col h-full items-end justify-end">
          <Link href={"/work"}>
            <button
              onMouseMove={buttonMouseEnter}
              onMouseLeave={onMouseEnter}
              className=" transition-colors duration-200 ease-in-out hover:border-[#F0C808] hover:bg-[#F0C808] hover:text-[#000] hover:shadow-md flex-none lg:w-[17vw] px-5 py-3 text-xl lg:text-[1.2vw] font-bold font-[PPNeueMontreal] border border-white rounded-full tracking-wider"
            >
              VIEW CASE STUDIES
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export const MobileSlide = ({ data, index, total }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${data.image}")`,
      }}
      className="  mt-4 bg-cover overflow-hidden bg-center text-white mix-blend-difference sm:mt-2 sm:mr-2 bg-[#F9F4F2] rounded-xl w-full sm:w-[48%]"
    >
      <div className="p-5 py-7 flex flex-col backdrop-filter filter  bg-black bg-opacity-50">
        <div className="flex ">
          {/* <h1 className="font-bold text-md font-[PPNeueMontreal] flex-[0.8]">
          . 0{index} -0{total}
        </h1> */}
        </div>
        <div className="flex h-[70vw] mt-5 rounded-lg p-3 bg-cover w-full ">
          <div className="flex flex-1 flex-col h-full items-center justify-end">
            <div className=" flex flex-[2] flex-col items-center ">
              <h1 className="font-[600] text-center leading-[8vw] font-[PPNeueMontreal] tracking-widest text-[9vw]">
                {data.title}
              </h1>
              <span className=" font-[600] text-center font-[PPNeueMontreal] mt-[4vw] text-[3vw] tracking-widest">
                {data.description}
              </span>
            </div>
            <Link href={"/work"}>
              <button className=" text-white transition-colors duration-200 ease-in-out hover:border-[#F0C808] hover:bg-[#F0C808] hover:text-[#fff] hover:shadow-md flex-none  px-3 py-2 text-[3.5vw] font-bold font-[PPNeueMontreal] border border-white rounded-full tracking-wider">
                VIEW CASE STUDIES
              </button>
            </Link>
          </div>
        </div>
        <div className="flex space-x-[1vw] font-[500] text-[3.5vw] justify-center py-2 font-[PPNeueMontreal]">
          <span className=" mt-1 ">Web Dev.</span>
          <span className=" mt-1 ">{data.clb_2}.</span>
          <span className=" mt-1 ">{data.clb_3}</span>
        </div>
      </div>
    </div>
  );
};
