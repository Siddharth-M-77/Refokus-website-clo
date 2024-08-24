import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl justify-between mx-auto p-5 flex gap-10 border-b-2 border-zinc-700">
      <div className="flex items-center justify-center">
      <img className="mr-10 h-8"
        src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />

      <div className="flex gap-10">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span key={index} className=" inline-block w-[2px] h-7 bg-gray-700"></span>
          ) : (
            <a key={index} className="font-regular text-white flex items-center justify-center gap-1">
              {index === 1 && (
                <span key={index}
                  style={{ boxShadow: "0 0 0.25em #00FF19" }}
                  className="w-2 h-2 inline-block bg-green-500 rounded-full"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
        
      </div>
      
      </div>
      <Button title="Start Project"/>
    </div>

  );
}

export default Navbar;
