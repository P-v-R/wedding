import React, { useState, useEffect } from "react";
import SideNav from "./SideNav.js";
import WhereAndWhen from "./WhereAndWhen.js";
import BodyOne from "./BodyOne.js";
import Registry from "./Registry.js";
import LandingAnimation from "./LandingAnimation.js";
import TheWeekend from "./TheWeekend.js";
import BodyTwo from "./BodyTwo.js";
import Countdown from "./Countdown.js";
import StickyBox from "react-sticky-box";

function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="hidden lg:flex bg-base ">
        <div className="">
          <LandingAnimation />
          <StickyBox>
            <SideNav scrollPosition={scrollPosition} />
          </StickyBox>
          <div className="w-4/5 z-50">
            <WhereAndWhen />
            <BodyOne />
            <TheWeekend />
          </div>
          <div className="w-screen absolute">
            <BodyTwo />
            <Registry />
            <Countdown />
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-base">
        {/* <MobileHeader /> */}
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
