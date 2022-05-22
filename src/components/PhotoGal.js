import React from "react";

function PhotoGal() {
  return (
    <section className="overflow-hidden">
      <div className="container px-5 py-2 mx-auto  lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src="https://i.imgur.com/hJ8zyG3.png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src="https://i.imgur.com/yg8W3kw.png"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src="https://i.imgur.com/E4dcIzG.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src="https://i.imgur.com/DnH1JuQ.jpg"
              />
            </div>
            <div className=" p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src="https://i.imgur.com/N0Y6vTC.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoGal;
