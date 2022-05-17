import React from "react";
import StickyBox from "react-sticky-box";
import SideNav from './SideNav.js'
import homeImage from '../assets/homeImage.jpg'
import WhereAndWhen from "./WhereAndWhen.js";
import BodyOne from "./BodyOne.js";
import BodyTwo from "./BodyTwo.js";

function HomePage() {
  return (
    <div className="grid grid-cols-4 sticky fixed">
      <div className="md:col-span-3 col-span-4">
        <img className="hidden md:flex object-fill" src={homeImage} alt="hotel logo"/>
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