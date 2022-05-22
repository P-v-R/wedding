import React from "react";
import { motion } from "framer-motion";

function Reunion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
      className=""
    >
      <p className="text-4xl pb-1">The Reunion - 2017</p>
      <p className="text-xl pb-1 md:w-2/5 mx-auto">
        Anne moved to Los Angeles after college, Perry already lived there.
        Michelle King made it happen.
      </p>
      <div className="w-full md:w-1/3 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3 }}
          className="border mr-auto w-2/3 p-2 rounded-xl my-2 bg-lightPink text-left"
        >
          Happy birthday honey! It's Michelle King. I'm moving Anne into LA in a
          few weeks and I would love to see you!
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 5 }}
          className="border ml-auto w-2/3 p-2 rounded-xl my-2 bg-skyBlue text-left"
        >
          I would love that! See you both then ❤️
        </motion.div>
      </div>

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

export default Reunion;
