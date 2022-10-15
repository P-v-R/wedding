import React from "react";
import { Parallax } from "react-scroll-parallax";
import GuideBlock from "./GuideBlock";

function GuideNola() {
  const hotels = [
    { name: "The Monteleone", url: "www.google.com", featured: true },
    { name: "Bienneville House", url: "www.google.com", featured: true },
    { name: "The Royal Orleans", url: "www.google.com" },
    { name: "The Wyndham", url: "www.google.com" },
  ];

  const food = [
    { name: "Irene's", url: "www.google.com" },
    { name: "Justine", url: "www.google.com" },
    { name: "Tableau", url: "www.google.com" },
    { name: "Mr B's", url: "www.google.com" },
  ];

  const things = [
    { name: "The Carousel Bar", url: "www.google.com" },
    { name: "thing", url: "www.google.com" },
    { name: "other thing", url: "www.google.com" },
    { name: "final thing", url: "www.google.com" },
  ];

  const guide = [{ name: "Full Guide", url: "www.google.com" }];

  return (
    <div className="bg-wallpaper bg-fixed p-10 z-20">
      <div className="absolute hidden md:block"></div>
      <Parallax speed={10} className="">
        <div className="grid grid-cols-2 md:gap-4 pt-6">
          <div className="border-2 bg-base col-span-2 md:col-span-1 my-4">
            <GuideBlock
              title="Places To Stay"
              items={hotels}
              footer="Reserved Block Discount"
            />
          </div>
          <div className="border-2 bg-base col-span-2 md:col-span-1 my-4">
            <GuideBlock title="Places To Eat" items={food} />
          </div>
          <div className="border-2 bg-base col-span-2 my-4">
            <GuideBlock
              title="Things To Do"
              items={things}
              footer="For the safety of our guests staying in the French Quarters we recommend when not passing Canal street."
            />
          </div>
          <div className="border-2 bg-base col-span-2 my-4">
            <GuideBlock title="Download The Full Guide" items={guide} />
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default GuideNola;
