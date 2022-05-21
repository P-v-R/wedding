import React from "react";
import StickyBox from "react-sticky-box";
import SideNav from "./SideNav.js";
import WhereAndWhen from "./WhereAndWhen.js";
import BodyOne from "./BodyOne.js";
import Registry from "./Registry.js";
import LandingAnimation from "./LandingAnimation.js";
import TheWeekend from "./TheWeekend.js";
import PromoVideo from "./PromoVideo.js";

function HomePage() {
  return (
    <div className="grid grid-cols-5 sticky fixed">
      <div className="md:col-span-4 col-span-4">
        <LandingAnimation />
        <WhereAndWhen />
        <PromoVideo />
        <BodyOne />
        <TheWeekend />
        <Registry />
      </div>
      <div className="border-l hidden md:block">
        <StickyBox style={{ backgroundColor: "#48704f" }}>
          <SideNav />
        </StickyBox>
      </div>
    </div>
  );
}

export default HomePage;
