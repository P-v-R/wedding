import React from "react";
// import HotelLogo from "./HotelLogo.js";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

// import StickyBox from "react-sticky-box";

const doubleLine = (
  <div>
    <div className="border-b border-papaya md:mx-20 py-1"></div>
    <div className="border-b border-papaya md:mx-20 py-1"></div>
  </div>
);

function TheWeekend() {
  return (
    <div>
      <div id="weekend" className="text-olive border-t-2 sticky z-50">
        <Parallax speed={10}>
          <div className="border-2 border-papaya mx-4 md:mx-10 my-10 bg">
            <div className="border-2 border-papaya mx-1 md:m-2 my-1 px-10 bg-base">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <p className="text-3xl md:text-5xl pb-2 pt-10">Friday</p>
                <p className="text-lg md:text-2xl py-4 w-3/4 mx-auto">
                  Bienvenue! Welcome to New Orleans!
                  <div className="py-2" />
                  <div></div>
                  Please join us for a Welcome Party of beignets and cocktails
                  to kick off the weekend.
                </p>
                <p className="text-lg md:text-2xl pt-4 w-3/4 mx-auto font-bold">
                  The Bevolo Gas & Electric Lights Museum
                </p>
                <p className="text-xl">
                  316 Royal Street
                  <br />
                  New Orleans, LA, 70130
                  <br />
                  8-11pm
                </p>
                <p className="italic pb-4">Festive Chic Attire</p>
              </motion.div>
              {doubleLine}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75 }}
              >
                <p className="text-3xl md:text-5xl pb-2 pt-10">Saturday</p>
                <p className="text-lg md:text-2xl py-4 w-3/4 mx-auto">
                  Please join us for dinner and dancing! Our ceremony and
                  reception will both take place at Brennan's Restaurant.
                </p>
                <div className="py-2" />
                <p className="text-lg md:text-2xl pt-4 w-3/4 mx-auto font-bold">
                  Brennan's Restaurant
                </p>
                <p className="text-xl">
                  417 Royal Street
                  <br />
                  New Orleans, LA, 70130
                  <br />
                  6:00PM
                </p>
                <p className="italic pb-4">Formal Attire</p>
                <p className="italic py-4 w-2/4 mx-auto">
                  Please Note: Our stunning venue is within walking distance of
                  both hotels — make sure to accommodate for walking time!
                </p>
              </motion.div>
              {doubleLine}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.25 }}
              >
                <p className="text-3xl md:text-5xl pb-2 pt-10">Sunday</p>
                <p className="text-lg md:text-2xl py-4 w-3/4 mx-auto">
                  Thank you for joining us this weekend to celebrate our love!
                </p>
                <p className="text-lg md:text-2xl py-4 mb-10 w-3/4 mx-auto">
                  New Orleans is a magical city — we encourage you to extend
                  your stay and explore! If you’re staying on, check out our
                  guide of delicious places to eat and lots of fun things to do
                  on the Lagniappe page.
                </p>
              </motion.div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default TheWeekend;
