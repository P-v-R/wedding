import React from "react";
import HotelLogo from "./HotelLogo.js";
import StickyBox from "react-sticky-box";

function WhereAndWhen() {
  return (
    <div>
      <HotelLogo />
      <div className="mx-auto text-base pt-20">
        <StickyBox>
          <div className="bg-darkGreen py-4 -mx-3 z-20">
            <div className="text-4xl">October 2023</div>
            <div className="text-2xl">5:00pm-10:00pm</div>
          </div>
        </StickyBox>
      </div>
    </div>
  );
}

export default WhereAndWhen;
