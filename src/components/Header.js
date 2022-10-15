import React from "react";
import { Link } from "react-router-dom";
// import StickyBox from "react-sticky-box";

function Header() {
  return (
    <div className="hidden md:block fixed sticky z-50 md:border-b md:border-black pt-2 pb-4 bg-base text-olive">
      <Link to="/" className="text-4xl md:text-6xl text-olive pb-2 ">
        Anne & Perry
      </Link>
    </div>
  );
}

export default Header;
