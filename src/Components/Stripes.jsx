import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      ulr: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bb11b6479ac4aa8ce1_63aedb7c8792abd626a31e65_doxel-ai.svg",
      number: 48,
    },
    {
      ulr: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",
      number: 11,
    },
    {
      ulr: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg",
      number: 2,
    },
    {
      ulr: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",
      number: 48,
    },
    {
      ulr: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bb11b6479ac4aa8ce1_63aedb7c8792abd626a31e65_doxel-ai.svg",
      number: 11,
    },
    {
      ulr: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
      number: 2,
    },
  ];
  return (
    <div className="w-full flex mt-10 text-white font-semibold ">
      {data.map((elem, index) => (<Stripe key={index} val={elem} />
      ))}
    </div>
  );
}

export default Stripes;
