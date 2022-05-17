import React, { useState } from "react";

function Header() {
  const [menuToggled, setMenuToggled] = useState(false);

  function menuClicked() {
    setMenuToggled(!menuToggled);
    console.log(menuToggled);
  }

  return (
    <div className="md:border-b md:border-black pt-2 md:pb-4 bg-base text-darkGreen">
      <p onClick={menuClicked} className="text-4xl md:text-6xl text-darkGreen pb-2">
        Anne & Perry
      </p>
    </div>
  );
}

export default Header;
