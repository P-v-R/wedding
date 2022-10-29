import React from "react";

function DressCode() {
  return (
    <div className="bg-lightPink p-6 md:p-10">
      <div className="border-2 border-darkGreen bg-base">
        <div className="border-2 border-darkGreen bg-base m-2">
          <p className="text-4xl md:text-5xl  py-10">What to Wear</p>
          <p className="text-xl md:text-2xl md:mx-40 pb-8 px-3">
            New Orleans weather can be unpredictable! Though it may be October,
            make sure to check the temperatures before leaving and pack
            accordingly. Hurricane season may be over, but New Orleans loves to
            surprise it’s guests with a quick afternoon shower.
          </p>
          <p className="text-xl md:text-2xl md:mx-40 pb-4 px-3 font-bold">
            Friday Night
          </p>
          <p className="text-xl md:text-2xl md:mx-40 pb-8 px-3 ">
            Festive Attire - Please feel free to come however you feel
            comfortable, suit & tie are not required.
          </p>
          <p className="text-xl md:text-2xl md:mx-40 pb-4 px-3 font-bold">
            Saturday Night
          </p>
          <p className="text-xl md:text-2xl md:mx-40 pb-12 px-3 ">
            Formal Attire - Tuxedos and gowns not required.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DressCode;
