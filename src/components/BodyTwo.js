import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Orange from "../assets/oranges.png";

function BodyTwo() {
  return (
    <div>
      <div className="bg-lightPink pt-24 h-screen text-base text-3xl md:text-5xl hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75 }}
        >
          <Parallax speed={10}>
            <img className="w-1/5 my-10 mx-auto" src={Orange} alt="orange" />
          </Parallax>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <Link
            to="/Lagniappe"
            className="z-40 hover:border-b-2 hover:border-base cursor-pointer md:mx-14 border-b-2 border-lightPink my-auto text-base text-4xl transition duration-500"
          >
            Places to stay. Things to do.
          </Link>
        </motion.div>
      </div>
      <div className="bg-lightPink py-10 md:hidden ">
        <img
          className="w-1/2  mt-40 mb-20  mx-auto"
          src={Orange}
          alt="orange"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="pb-10"
        >
          <Link
            to="/Lagniappe"
            className="hover:border-b-2 hover:border-base cursor-pointer border-b-2 border-base text-base text-2xl transition duration-500"
          >
            Places to stay. Things to do.
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default BodyTwo;
