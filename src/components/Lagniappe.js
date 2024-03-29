import React from "react";
import GuideNola from "./GuideNola";
import WeddingParty from "./WeddingParty";
import { useEffect } from "react";
import DressCode from "./DressCode";
import WhereToStay from "./WhereToStay";
import Countdown from "./Countdown";
import Orange from "../assets/oranges.png";
import StarBgTwo from "./starbgtwo";
import Turtle from "./Turtle";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-olive bg-skyBlue md:bg-skyBlue">
      <div className="h-screen px-3">
        <div className="hidden lg:block md:pt-10 pt-4 bg-starpaper relative">
          <StarBgTwo />
          <p className="text-4xl pt-24 mx-auto">Lagniappe</p>
          <p className="text-3xl pt-2  mx-auto">
            <em>noun</em> | lan-YAP
          </p>
          <p className="text-2xl pt-6 mx-auto w-2/3">
            A Cajun-French inspired term that means “a little extra.” Often used
            to describe something good, or better yet, receiving something for
            free.
          </p>
          <Turtle />
        </div>
        <div className="lg:hidden ">
          <p className="text-3xl pt-24 mx-auto">Lagniappe</p>
          <p className="text-xl pt-2  mx-auto">
            <em>noun</em> | lan-YAP
          </p>
          <p className=" pt-6 mx-auto w-2/3">
            A Cajun-French inspired term that means “a little extra.” Often used
            to describe something good, or better yet, receiving something for
            free.
          </p>
          <img className="mx-auto w-32 pt-10" src={Orange} alt="orange" />
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
