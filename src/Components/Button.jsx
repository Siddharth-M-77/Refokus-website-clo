import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function Button({ title = "Get started" }) {
  return (
    <div className="px-4 py-2 flex items-center justify-center gap-5 bg-white text-black rounded-full font-regular">
      <h4>{title}</h4>
      <span>
        <FaArrowRight />
      </span>
    </div>
  );
}

export default Button;
