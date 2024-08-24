import React from "react";

import { GoArrowRight } from "react-icons/go";

function Card({ start, para, width ,btn ,color,h1,heading}) {
  return (
    <div
      className={`text-white w-1/2 ${width} hover:px-6 cursor-pointer h-[30vw] hover:bg-white  hover:text-black  bg-violet-700 p-5 rounded-xl flex items-start justify-between flex-col transition-0.25 transition`}
    >
      <div className="w-full ">
        <div className="flex   items-center justify-between ">
          <h3 className="font-thin text-sm">{h1}</h3>
          <GoArrowRight />
        </div>
        <div className="mt-10">
          <h1 className="text-3xl">{heading}</h1>
        </div>
      </div>
      <div>
        {start && (
          <h1 className="text-8xl tracking-tighter font-serif font-light">
            Start a Project
          </h1>
        )}
        {btn && (
          <button className="px-5 border-black py-2 rounded-full border-[1px] mt-4">
            Contact Us
          </button>
        )}
        {para && (
          <p className="opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
