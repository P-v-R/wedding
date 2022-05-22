import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="grid grid-cols-1 text-base text-3xl h-screen z-10 bg-darkGreen">
      <a href="#where" className="hover:border-b-2 hover:border-base pb-2 cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto pt-10 ">
        Where & When
      </a>
      <a href="#weekend" className="hover:border-b-2 hover:border-base pb-2 cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto sticky">
        The Weekend
      </a>
      <a href="#registry" className="hover:border-b-2 hover:border-base pb-2 cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto sticky">
        Registry
      </a>
      <Link to="/us" className="hover:border-b-2 hover:border-base pb-2 cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto sticky">
        Us
      </Link>
      <div className="hover:border-b-2 hover:border-base pb-2 cursor-pointer md:mx-14 border-b-2 border-darkGreen my-auto sticky">
        Lagniappe
      </div>
      <div className="hover:border-b-2  my-auto"></div>
    </div>
  );
}

export default SideNav;
