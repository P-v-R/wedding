import React from "react";
import HotelLogo from "./HotelLogo.js";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

// import StickyBox from "react-sticky-box";

function WhereAndWhen() {
  return (
    <div id="where" className="border-b-2 border-darkGreen bg-base pt-6">
      <div className="hidden md:block text-darkGreen">
        <Parallax speed={10}>
          <div className="border-2 mx-10 my-10">
            <div className="border-2 mx-4 my-4 bg-base">
              <HotelLogo />
            </div>
          </div>
          <motion.div
            className="mx-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-3xl pb-4">More information</p>
            <p className="text-2xl pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
          </motion.div>
        </Parallax>
      </div>
      <div className="md:hidden py-6">
          <div className="border-2 border-darkGreen mx-6">
            <div className="border-2 border-darkGreen mx-1 my-1 bg-base">
              <HotelLogo />
            </div>
          </div>
          <div className="mx-6 text-darkGreen">
            <p className="text-2xl py-4">More information</p>
            <p className="text-lg pb-10">
              The ceremony and reception will take place at the New Orleans
              classic Brennan's. Join us for a sit down dinner, second line
              around the quarter, and a night of music.
            </p>
          </div>
      </div>
    </div>
  );
}

export default WhereAndWhen;
