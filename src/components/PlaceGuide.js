import React from "react";

function PlaceGuide() {
  return (
    <div className="pb-10">
      <p className="text-4xl py-4">Places to Stay</p>
      <div className="grid grid-cols-2 gap-4 px-4 text-olive text-2xl">
        <div className="py-6">The Monteleone*</div>
        <div className="py-6">Bienneville House*</div>
        <div className="">The Royal Orleans</div>
        <div className="">The Wyndham</div>
      </div>
        <div className="pt-10 text-md col-span-2 italic">* Reserved block rate</div>
    </div>
  );
}

export default PlaceGuide;
