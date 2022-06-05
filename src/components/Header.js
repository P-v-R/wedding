import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed sticky z-40 md:border-b md:border-black pt-2 pb-4 bg-base text-darkGreen">
      <Link to="/" className="text-4xl md:text-6xl text-darkGreen pb-2">
        Anne & Perry
      </Link>
    </div>
  );
}

export default Header;
