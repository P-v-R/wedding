import React from "react";
import { Parallax } from "react-scroll-parallax";
import FoodGuide from "./FoodGuide";
import FunGuide from "./FunGuide";
import PlaceGuide from "./PlaceGuide";

function GuideNola() {
  return (
    <div className="bg-skyBlue p-10">
      <Parallax speed={10}>
        <p className="text-6xl py-6">A Guide To New Orleans</p>
        <div className="grid grid-cols-2 gap-4 pt-6">
          <div className="border-2 bg-base col-span-2 md:col-span-1 m-4">
            <PlaceGuide />
          </div>
          <div className="border-2 bg-base col-span-2 md:col-span-1 m-4">
            <FoodGuide />
          </div>
          <div className="border-2 bg-base col-span-2 m-4">
            <FunGuide />
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default GuideNola;
