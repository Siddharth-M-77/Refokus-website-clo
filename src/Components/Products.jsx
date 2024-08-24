import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const data = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
      Case: false,
      color: "#5355EE",
    },
    {
      title: "Sevdesk",
      description:
        "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
      live: true,
      Case: true,
    },


    {
      title: "Showcase",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
      Case: false,
    },
    {
      title: "TTR AI",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
      Case: false,
    },
    {
      title: "Intenseye",
      description:
        "Intenseye enlisted our expertise to revamp their brand and position themselves as the industry leader in AI EHS (Environment, Health, and Safety).",
      live: true,
      Case: false,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      Case: false,
    },
    {
      title: "Rainfall",
      description:
        "We know venture capital is a highly competitive sector. For Rainfall we set them apart with a website that shows why they are a top tier fund. ",
      live: true,
      Case: false,
    },
    {
      title: "Umault",
      description:
        "Umault, a Chicago-based production company renowned for its bold and charismatic approach to B2B video production,",
      live: true,
      Case: false,
    },
  ];

  const [position, setPosition] = useState(0);

  const mover = (val) => {
    setPosition(val * 18);
  };

  return (
    <div className="mt-52 flex items-center flex-col justify-between relative ">
      {data.map((elem, index) => (
        <Product mover={mover} count={index} key={index} val={elem} />
      ))}
      <div className="absolute w-full h-full pointer-events-none top-0">
        <motion.div
          initial={{ y: position }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[25rem] overflow-hidden h-[18rem] bg-white left-[22%] "
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-blue-400"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-red-400"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-red-600"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-violet-800"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-orange-400"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-gray-400"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full bg-sky-600"
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          ></motion.div>
          
          
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
