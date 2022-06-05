import React from "react";
import SideNav from "./SideNav.js";
import WhereAndWhen from "./WhereAndWhen.js";
import BodyOne from "./BodyOne.js";
import Registry from "./Registry.js";
import LandingAnimation from "./LandingAnimation.js";
import TheWeekend from "./TheWeekend.js";
import PromoVideo from "./PromoVideo.js";
import BodyTwo from "./BodyTwo.js";
import Countdown from "./Countdown.js";

function HomePage() {
  return (
    <div>
      <div className="hidden md:flex bg-base">
        <div className="wrapper">
          <div className="main">
            <LandingAnimation />
            <WhereAndWhen />
            <PromoVideo />
            <BodyOne />
            <TheWeekend />
            <BodyTwo />
            <Registry />
          </div>
          <div className="sidebar hidden md:flex">
            <SideNav />
          </div>
        </div>
      </div>
      <div className="md:hidden bg-base">
        <LandingAnimation />
        <WhereAndWhen />
        <BodyOne />
        <TheWeekend />
        <BodyTwo />
        <Registry />
        <Countdown />
      </div>
    </div>
  );
}

export default HomePage;
