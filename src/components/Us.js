import React from "react";
import Prom from "./Prom";
import PromTwo from "./PromTwo";
import Reunion from "./Reunion";
import TheBand from "./TheBand";

function Us() {
  return (
    <div className="pt-10 text-darkGreen">
      <p className="text-4xl pb-1">Prom - 2011</p>
      <p className="text-xl pb-4">It all started here!</p>
      <Prom />
      <TheBand />
      <PromTwo />
      <Reunion />
    </div>
  );
}

export default Us;
