import React from "react";
import HotelLogo from "./HotelLogo.js";
import { Parallax } from "react-scroll-parallax";

// import StickyBox from "react-sticky-box";

function WhereAndWhen() {
  return (
    <div>
      <Parallax speed={10}>
      <HotelLogo />
      <div className="mx-auto text-base">
          <div className="bg-base mt-12 pt-4 pb-20 z-20">
            <div className="text-4xl text-darkGreen">October 2023</div>
          </div>
      </div>
      </Parallax>
    </div>
  );
}

export default WhereAndWhen;
