import React from "react";
import StickyBox from "react-sticky-box";
import SideNav from './SideNav.js'

function HomePage() {
  return (
    <div className="grid grid-cols-4 sticky fixed">
      <div className="col-span-3 pt-64">
        <div className="py-64">body</div>
        <div className="py-64">body</div>
      </div>
      <div className="border-l">
      <StickyBox style={{backgroundColor: "#48704f" }}>
        <SideNav />
      </StickyBox>
      </div>
    </div>
  )
}

export default HomePage;