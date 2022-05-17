import React, { useState } from "react";
// import {motion} from "framer-motion"

function Header() {
  const [menuToggled, setMenuToggled] = useState(false);

  function menuClicked() {
    setMenuToggled(!menuToggled);
    console.log(menuToggled);
  }

  return (
    <div className="md:border-b md:border-black top-0 top-0 pt-2 pb-6 bg-base text-darkGreen">
      <p onClick={menuClicked} className="text-4xl md:text-6xl text-darkGreen">
        Anne & Perry
      </p>
      <div className="bg-darkGreen mt-3">
        <div className="grid grid-cols-2 md:hidden pt-6 text-xl bg-darkGreen text-base">
          <div className="">Where & When</div>
          <div className="">The Weekend</div>
          <div className="">Registry</div>
          <div className="">Lagniappe</div>
          <div className="col-span-2 pb-4">Us</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
