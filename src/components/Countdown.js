import React from "react";
import Timer from "./Timer";

function Countdown() {
  return (
    <div className="bg-gold py-24">
      <p className="text-2xl md:text-4xl py-4">October 21st, 2023 </p>
      <Timer deadline={"october, 21, 2023"} />
    </div>
  );
}

export default Countdown;
