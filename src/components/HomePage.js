import React from "react";
import StickyBox from "react-sticky-box";
import SideNav from './SideNav.js'
import WhereAndWhen from "./WhereAndWhen.js";
import BodyOne from "./BodyOne.js";
import BodyTwo from "./BodyTwo.js";
import LandingAnimation from "./LandingAnimation.js";

function HomePage() {
  return (
    <div className="grid grid-cols-4 sticky fixed">
      <div className="md:col-span-3 col-span-4">
        <LandingAnimation/>
        <WhereAndWhen/>
        <BodyOne/>
        <BodyTwo/>
      </div>
      <div className="border-l hidden md:block">
      <StickyBox style={{backgroundColor: "#48704f" }}>
        <SideNav />
      </StickyBox>
      </div>
    </div>
  )
}

export default HomePage;