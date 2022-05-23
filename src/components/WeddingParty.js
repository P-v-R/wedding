import React from "react";
import { Parallax } from "react-scroll-parallax";

function WeddingParty() {
  return (
    <div className="bg-base py-4 md:py-20">
      <Parallax speed={10}>
        <p className="text-4xl md:text-5xl text-darkGreen py-10">
          The Wedding Party
        </p>
        <div className="border-2 border-clay mx-4 md:mx-44">
          <div className="border-2 border-clay m-1">
            <div className="grid grid-cols-2">
              <div className="col-span-2 md:col-span-1">
                <p className="text-3xl md:text-4xl my-4">Hers</p>
                <p className="text-2xl">Alden King</p>
                <p className="text-2xl">Jeanne-Marie King</p>
                <p className="text-2xl">Phoebe Meyers</p>
                <p className="text-2xl mb-4">Grayson Meyers</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-3xl md:text-4xl my-4">His</p>
                <p className="text-2xl mb-4">Peter von Rosenvinge</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default WeddingParty;
