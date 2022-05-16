import React from "react";

function SideNav() {
  return (
        <div className="grid grid-cols-1 text-base text-3xl h-screen">
          <div className="hover:underline my-auto pt-10 ">menu</div>
          <div className="hover:underline my-auto sticky">menu</div>
          <div className="hover:underline my-auto sticky">menu</div>
          <div className="hover:underline my-auto sticky">menu</div>
          <div className="hover:underline my-auto sticky">menu</div>
          <div className="hover:underline my-auto sticky"></div>
        </div>
  )
}

export default SideNav;