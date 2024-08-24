import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2 ">
        <Card
          start={false}
          para={true}
          btn={false}
          width={"basis-1/3"}
          color={"bg-white"}
          h1={"Blog"}
          heading={"News & Insights"}
        />
        <Card
          h1={"Get in Touch"}
          start={true}
          para={false}
          btn={true}
          width={"basis-2/3"}
          color={"bg-white"}
          heading={"Lets get's to it. together."}

        />
      </div>
    </div>
  );
}

export default Cards;
