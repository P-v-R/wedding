import React from "react";
import { motion } from "framer-motion";
import PromPicTwo from "../assets/PromTwoPic.png";

function PromTwo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
      className=""
    >
      <p className="text-4xl pb-1">Prom...again - 2013</p>
      <p className="text-xl pb-1">
        Anne took Perry to prom again, but still wouldn't date him.{" "}
      </p>
      <img
        className="w-3/4 md:w-1/3 mx-auto pt-2"
        src={PromPicTwo}
        alt="prom pic"
      />
      <svg
        className="mx-auto py-2"
        width="1"
        height="200"
        viewBox="0 0 2 252"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V251.5" stroke="#48704f" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}

export default PromTwo;
