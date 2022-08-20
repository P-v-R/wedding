import React from "react";
import { Parallax } from "react-scroll-parallax";

function Registry() {
  return (
    <div id="registry" className="bg-base py-20 text-olive mx-4 md:mx-10">
      <Parallax speed={-5}>
        <div className="border-2 bg-base border-olive w-2/3 ml-auto">
          <div className="flex-col m-2 border-2 border-olive bg-base">
            <p className="py-10 text-4xl underline">Registry 1</p>
          </div>
        </div>
      </Parallax>
      <Parallax speed={5}>
        <div className="border-2 bg-base border-olive mt-20 w-2/3">
          <div className="flex-col m-2 border-2 border-olive bg-base">
            <p className="py-10 text-4xl underline">Registry 1</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Registry;
