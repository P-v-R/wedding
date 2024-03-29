import React from "react";
import { Parallax } from "react-scroll-parallax";

function WeddingParty() {
  return (
    <div className="bg-base py-4 pb-10 md:py-20 text-olive ">
      <Parallax speed={5}>
        <p className="text-4xl md:text-5xl  py-10">The Wedding Party</p>
        <div className="border-2 border-papaya mx-4 md:mx-44">
          <div className="border-2 border-papaya m-1 text-xl md:text-2xl ">
            <div className="grid grid-cols-2">
              <div className="col-span-2 md:col-span-1">
                <p className="text-2xl md:text-3xl md:text-4xl my-4">Hers</p>
                <p className="">Alden Chapman</p>
                <p className="">Jeanne Marie King</p>
                <p className="">Phoebe Myers</p>
                <p className="mb-4">Grayson Myers</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-2xl md:text-3xl md:text-4xl my-4">His</p>
                <p className="mb-4">Peter von Rosenvinge</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default WeddingParty;
