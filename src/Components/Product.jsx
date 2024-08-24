import React from "react";
import Button from "./Button";

function Product({ val, count, mover }) {
  return (
    <div className="w-full h-[23rem] ">
      <div
        onMouseEnter={() => mover(count)}
        className="max-w-screen-2xl mx-auto   text-white flex items-center justify-between p-4"
      >
        <h1 className="text-6xl">{val.title}</h1>
        <div className="flex flex-col items-start gap-4 ">
          <p className="w-[40vw]">{val.description}</p>
          <div className="flex gap-10">
            {val.live && <Button title="Get Started" />}
            {val.Case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
