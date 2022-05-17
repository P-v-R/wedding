import React from "react";

function SideNav() {
  return (
        <div className="grid grid-cols-1 text-base text-3xl h-screen z-10">
          <div className="hover:border-b-2 hover:border-base pb-2 cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto pt-10 ">Where & When</div>
          <div className="hover:border-b-2 hover:border-base pb-2 cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto sticky">The Weekend</div>
          <div className="hover:border-b-2 hover:border-base pb-2 cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto sticky">Registry</div>
          <div className="hover:border-b-2 hover:border-base pb-2 cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto sticky">Us</div>
          <div className="hover:border-b-2 hover:border-base pb-2 cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto sticky">Lagniappe</div>
          <div className="hover:border-b-2  my-auto sticky"></div>
        </div>
  )
}

export default SideNav;