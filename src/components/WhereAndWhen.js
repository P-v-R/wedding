import React from "react";
import HotelLogo from "./HotelLogo.js";
import { Parallax } from "react-scroll-parallax";

// import StickyBox from "react-sticky-box";

function WhereAndWhen() {
  return (
    <div
      id="where"
      className="z-40 sticky border-b-2 border-darkGreen bg-base md:boobs"
    >
      <div className="hidden md:block text-olive">
        <Parallax speed={10}>
          <div className="border-2 mx-10 my-24">
            <div className="border-2 m-2 bg-base">
              <HotelLogo />
            </div>
          </div>
        </Parallax>
      </div>
      <div className="md:hidden py-6">
        <div className="border-2 border-darkGreen mx-6">
          <div className="border-2 border-darkGreen mx-1 my-1 bg-base">
            <HotelLogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereAndWhen;
