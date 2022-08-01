import React from "react";
import Timer from "./Timer";

function Countdown() {
  return (
    <div className="bg-skyBlue md:py-24 mb-20">
      <p className="text-4xl md:text-5xl text-olive py-10">October 21st, 2023 </p>
      <Timer deadline={"october, 21, 2023"} />
    </div>
  );
}

export default Countdown;
