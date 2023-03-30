import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function SideNav({ scrollPosition }) {
  const [appearIn, setAppearIn] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (scrollPosition > windowDimensions.height) {
      setAppearIn(true);
    } else {
      setAppearIn(false);
    }
  }, [scrollPosition, windowDimensions.height]);

  if (!appearIn) {
    return (
      <div className="ml-auto z-20 bg-base grid grid-cols-1 text-darkGreen text-3xl h-screen z-10 text-base  border-darkGreen">
        <motion.a
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0, duration: 0.2 }}
          href="#where"
          className="hover:border-b-2 hover:border-darkGreen z-50 pb-2 cursor-pointer md:mx-14 border-b-2 border-base text-2xl my-auto pt-10 "
        >
          Where & When
        </motion.a>
        <motion.a
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          href="#weekend"
          className="hover:border-b-2 hover:border-darkGreen z-50 pb-2 cursor-pointer md:mx-14 border-b-2 border-base text-2xl my-auto "
        >
          The Weekend
        </motion.a>
        <motion.a
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          href="#registry"
          className="hover:border-b-2 hover:border-darkGreen z-50 pb-2 cursor-pointer md:mx-14 border-b-2 border-base text-2xl my-auto "
        >
          Registry
        </motion.a>
        <Link
          to="/us"
          className="hover:border-b-2 hover:border-darkGreen z-50 pb-2 cursor-pointer md:mx-14 border-b-2 border-base text-2xl my-auto "
        >
          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.2 }}
          >
            Us
          </motion.p>
        </Link>
        <Link
          to="/Lagniappe"
          className="hover:border-b-2 hover:border-darkGreen z-50 pb-2 cursor-pointer md:mx-14 border-b-2 border-base text-2xl my-auto "
        >
          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.2 }}
          >
            Lagniappe
          </motion.p>
        </Link>
        <div className="hover:border-b-2  my-auto"></div>
      </div>
    );
  } else {
    return (
      <div className="ml-auto z-10  w-1/5 bg-base grid grid-cols-1 text-darkGreen text-3xl h-screen text-base  border-darkGreen">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
          href="#where"
          className="hover:border-b-2 hover:border-darkGreen z-50 pb-2 cursor-pointer md:mx-14 border-b-2 border-base text-2xl my-auto pt-10 "
        >
          Where & When
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1 }}
          href="#weekend"
          className="hover:border-b-2 hover:border-darkGreen z-50 pb-2 cursor-pointer md:mx-14 border-b-2 border-base text-2xl my-auto "
        >
          The Weekend
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          href="#registry"
          className="hover:border-b-2 hover:border-darkGreen z-50 pb-2 cursor-pointer md:mx-14 border-b-2 border-base text-2xl my-auto "
        >
          Registry
        </motion.a>
        <Link
          to="/us"
          className="hover:border-b-2 hover:border-darkGreen z-50 pb-2 cursor-pointer md:mx-14 border-b-2 border-base text-2xl my-auto "
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 1 }}
          >
            Us
          </motion.p>
        </Link>
        <Link
          to="/Lagniappe"
          className="hover:border-b-2 hover:border-darkGreen z-50 pb-2 cursor-pointer md:mx-14 border-b-2 border-base text-2xl my-auto "
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Lagniappe
          </motion.p>
        </Link>
        <div className="hover:border-b-2  my-auto"></div>
      </div>
    );
  }
}

export default SideNav;
