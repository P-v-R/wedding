import React from "react";
import GuideNola from "./GuideNola";
import WeddingParty from "./WeddingParty";
import { useEffect } from "react";
import DressCode from "./DressCode";
import WhereToStay from "./WhereToStay";
import Countdown from "./Countdown";
import TurtleBg from "./TurtleBg";
import Orange from "../assets/oranges.png";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-olive bg-skyBlue md:bg-skyBlue">
      <div className="h-screen px-3">
        <div className="hidden md:flex pt-4">
          <TurtleBg />
          <p className="text-4xl pt-44  mx-auto">
            Langiappe - Some helpful things to know!
          </p>
        </div>
        <div className="md:hidden ">
          <p className="text-4xl pt-44 mx-auto">
            Langiappe - Some helpful things to know!
            <img className="mx-auto w-32 pt-10" src={Orange} alt="orange" />
          </p>
        </div>
      </div>
      <div>
        <DressCode />
        <WhereToStay />
        <GuideNola />
        <WeddingParty />
        <Countdown />
      </div>
    </div>
  );
}

export default HomePage;
