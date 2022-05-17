import React from "react";
import { Parallax } from "react-scroll-parallax";

function BodyTwo() {
  return (
    <div className="bg-base py-20">
        <div className="grid grid-cols-2 text-3xl bg-base text-darkGreen">
          <div className="py-10">
            Registry Link One
          </div>
          <div className="py-10">
            Registry Link Two
          </div>
          <div className="py-10 col-span-2">
            Registry Link Three
          </div>
        </div>
    </div>
  )
}

export default BodyTwo;