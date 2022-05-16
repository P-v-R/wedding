import React from "react";
import StickyBox from "react-sticky-box";

function HomePage() {
  return (
    <div className="grid grid-cols-4 sticky fixed">
      <div className="col-span-3 pt-64">
        <div className="py-64">body</div>
        <div className="py-64">body</div>
      </div>
      <div className="border-l">
      <StickyBox style={{backgroundColor: "#48704f" }}>
        <div className="grid grid-cols-1 text-base text-3xl h-screen">
          <div className="hover:underline my-auto pt-10 ">menu</div>
          <div className="hover:underline my-auto sticky">menu</div>
          <div className="hover:underline my-auto sticky">menu</div>
          <div className="hover:underline my-auto sticky">menu</div>
          <div className="hover:underline my-auto sticky">menu</div>
          <div className="hover:underline my-auto sticky"></div>
        </div>
      </StickyBox>
      </div>
    </div>
  )
}

export default HomePage;