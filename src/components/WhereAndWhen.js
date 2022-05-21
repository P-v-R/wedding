import React from "react";
import HotelLogo from "./HotelLogo.js";
import { Parallax } from "react-scroll-parallax";

// import StickyBox from "react-sticky-box";

function WhereAndWhen() {
  return (
    <div>
      <div className="hidden md:block text-darkGreen">
        <Parallax speed={10}>
          <div className="border-2 mx-10 my-10">
          <div className="border-2 mx-4 my-4 bg-base">
          <HotelLogo />
          </div>
          </div>
          <div className="mx-20">
            <p className="text-3xl pb-4">More information</p>
            <p className="text-2xl pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </Parallax>
      </div>
      <div className="md:hidden">
        <Parallax speed={5}>
          <HotelLogo />
          <div className="mx-auto text-base">
            <div className="bg-base mt-12 pt-4 pb-20 z-20">
              <div className="text-3xl md:text-4xl text-darkGreen">October 2023</div>
            </div>
          </div>
        </Parallax>
      </div>

    </div>
  );
}

export default WhereAndWhen;
