import React from "react";
// import HotelLogo from "./HotelLogo.js";
import { Parallax } from "react-scroll-parallax";

// import StickyBox from "react-sticky-box";

const doubleLine = (
  <div>
    <div className="border-b border-pink mx-20 py-1"></div>
    <div className="border-b border-pink mx-20 py-1"></div>
  </div>
);

function TheWeekend() {
  return (
    <div>
      <div className="hidden md:block text-darkGreen">
        <Parallax speed={10}>
          <div className="border-2 border-pink mx-10 my-10">
            <div className="border-2 border-pink mx-4 my-4  px-10 bg-base">
              <p className="text-5xl pb-2 pt-10">Friday</p>
              <p className="text-2xl pb-4">
                Lorem ipsum dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.{" "}
              </p>
              {doubleLine}
              <p className="text-5xl pb-2 pt-6">Saturday</p>
              <p className="text-2xl pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
              {doubleLine}
              <p className="text-5xl pb-2 pt-6">Sunday</p>
              <p className="text-2xl pb-4 mb-10">
                Lorem ipsum dolor sit amet, in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.{" "}
              </p>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default TheWeekend;
