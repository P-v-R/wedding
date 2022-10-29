import React from "react";

function PhotoGal() {
  return (
    <section className="overflow-hidden">
      <div className="container px-5 py-2 mx-auto  lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src="https://i.imgur.com/SrP6Iud.png"
              /> 
            </div>
            {/* <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src="https://i.imgur.com/yg8W3kw.png"
              />
            </div> */}
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src="https://i.imgur.com/QojXind.jpg"
                />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src="https://i.imgur.com/FHVpA73.png"
              />
            </div>
            <div className=" p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src="https://i.imgur.com/qBU0Mpo.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoGal;
