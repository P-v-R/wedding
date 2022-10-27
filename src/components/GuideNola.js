import React from "react";
import { Parallax } from "react-scroll-parallax";
import GuideBlock from "./GuideBlock";

function GuideNola() {
  // const hotels = [
  //   { name: "The Monteleone", url: "www.google.com", featured: true },
  //   { name: "Bienneville House", url: "www.google.com", featured: true },
  //   { name: "The Royal Orleans", url: "www.google.com" },
  //   { name: "The Wyndham", url: "www.google.com" },
  // ];

  const food = [
    { name: "Sylvain", url: "https://www.sylvainnola.com/" },
    { name: "Justine", url: "https://www.justinenola.com/" },
    { name: "Tableau", url: "https://www.tableaufrenchquarter.com/" },
    { name: "Cafe Du Monde", url: "https://shop.cafedumonde.com/" },
  ];

  const drinks = [
    {
      name: "The Sazerac Bar",
      url: "https://www.neworleans.com/listing/the-sazerac-restaurant/32153/",
    },
    { name: "The Napoleon House", url: "https://www.napoleonhouse.com/" },
    {
      name: "Carousel Bar",
      url: "https://hotelmonteleone.com/entertainment/carousel-bar/",
    },
    { name: "Bacchanal", url: "http://www.bacchanalwine.com/" },
  ];

  const guide = [{ name: "Full Guide", url: "https://www.google.com" }];

  return (
    <div className="bg-wallpaper bg-fixed p-10 z-20">
      <div className="absolute hidden md:block"></div>
      <Parallax speed={10} className="">
        <div className="grid grid-cols-2 md:gap-4 pt-6">
          <div className="border-2 bg-base col-span-2 md:col-span-1 my-4">
            <GuideBlock
              title="Places To Eat"
              items={food}
              footer="More in our full guide."
            />
          </div>
          <div className="border-2 bg-base col-span-2 md:col-span-1 my-4">
            <GuideBlock
              title="Places To Drink"
              items={drinks}
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
