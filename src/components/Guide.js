import React from "react";

const Guide = () => {
  return (
    <div className="bg-base">
      <div className="bg-flowers py-10">
        <div className="h-16"></div>
        {/* main section */}
        <div className="bg-chartreuse border-2 p-2 w-11/12 md:w-3/5 mx-auto mb-10">
          <div className="bg-base border-2 mx-auto">
            <p className="pt-4 text-3xl text-darkGreen font-bold">
              Places to Stay
            </p>
            <p className="w-1/2 mx-auto pt-2 italic text-olive">
              Though we reccomend staying downtown in order to keep the weekend
              walking distance, here are some other reccomendations of lovely
              places to stay across the city!
            </p>
            <div className="grid grid-cols-1 text-xl px-3 my-6 gap-4 text-olive">
              <p className="mt-2 font-bold underline">French Quarter/CBD</p>
              <p>The Wyndam</p>
              <p>Ace Hotel</p>
              <p>Virgin Hotel</p>
              <p>Nopsi Hotel</p>
              <p>Maison de la Luz</p>
              <p>Roosevelt Hotel</p>
              <p>Omni Royal Orleans</p>
              <p className="mt-2 font-bold underline">
                Garden District/Irish Channel
              </p>
              <p>Saint Vincent Hotel</p>
              <p>Henry Howard Hotel</p>
              <p className="mt-2 font-bold underline">Uptown</p>
              <p>The Chloe Hotel</p>
              <p className="mt-2 font-bold underline">Bywater</p>
              <p>The Peter & Paul Hotel</p>
            </div>
          </div>
        </div>
        <div className="bg-skyBlue border-2 p-2 w-11/12 md:w-3/5 mx-auto mb-10">
          <div className="bg-base border-2 mx-auto">
            <p className="pt-4 text-3xl text-darkGreen font-bold">
              Things to Do
            </p>
            <div className="grid grid-cols-1 text-xl px-3 md:mx-10 my-6 gap-4 text-olive">
              <p className="font-bold underline">French Quarter/CBD</p>
              <p>Ogden Museum of Southern Art</p>
              <p>WWII Museum</p>
              <p>French Quarter Ghost Tour</p>
              <p className="mt-2 font-bold underline">
                Garden District/Irish Channel
              </p>
              <p>Garden District Walking Architecture Tour</p>
              <p>Mardi Gras World Tour</p>
              <p className="mt-2 font-bold underline">Uptown</p>
              <p>Audubon Park & Zoo</p>
            </div>
          </div>
        </div>
        {/* 2nd two sections */}
        <div className="bg-lightPink border-2 p-2 w-11/12 md:w-3/5 mx-auto mb-10">
          <div className="bg-base border-2 mx-auto">
            <p className="pt-4 text-3xl text-darkGreen font-bold">
              Places to Eat
            </p>
            <div className="grid grid-cols-1 text-xl px-3 my-6 gap-4 text-olive">
              <p className="font-bold underline">French Quarter/CBD</p>
              <p>Sylvain*</p>
              <p>Justine*</p>
              <p>Tableau*</p>
              <p>Compere Lapin</p>
              <p>Cafe Du Monde*</p>
              <p>Josephine Estelle</p>
              <p>French Truck Coffee</p>
              <p>Irene's</p>
              <p className="mt-2 font-bold underline">
                Garden District/Irish Channel
              </p>
              <p>Turkey & the Wolf</p>
              <p>Superior Seafood</p>
              <p>Molly's Rise & Shine</p>
              <p className="mt-2 font-bold underline">Uptown</p>
              <p>Saba</p>
              <p>Camellia Grill</p>
              <p>La Petite Grocery</p>
              <p>Domilese's Po Boys</p>
              <p>French Truck Coffee</p>
              <p className="mt-2 font-bold underline">Bywater</p>
              <p>N7</p>
            </div>
          </div>
        </div>
        <div className="bg-gold border-2 p-2 w-11/12 md:w-3/5 mx-auto mb-10">
          <div className="bg-base border-2 mx-auto">
            <p className="pt-4 text-3xl text-darkGreen font-bold">
              Places to Drink
            </p>
            <div className="grid grid-cols-1 text-xl px-3 my-6 gap-4 text-olive">
              <p className="font-bold underline">French Quarter/CBD</p>
              <p>Bar Marilou</p>
              <p>The Sazerac Bar*</p>
              <p>The Napoleon House*</p>
              <p>Pat O'Briens</p>
              <p>Carousel Bar at The Monteleone</p>
              <p className="mt-2 font-bold underline">
                Garden District/Irish Channel
              </p>
              <p>Hot Tin</p>
              <p>Columns</p>
              <p>Bouligny Tavern</p>
              <p className="mt-2 font-bold underline">Uptown</p>
              <p>Tchop Yard</p>
              <p className="mt-2 font-bold underline">Bywater</p>
              <p>Elysian Bar</p>
              <p>Bacchanal*</p>
            </div>
          </div>
        </div>
        <div className="bg-chartreuse border-2 p-2 w-11/12 md:w-3/5 mx-auto mb-10">
          <div className="bg-base border-2 mx-auto">
            <p className="pt-4 text-3xl text-darkGreen font-bold">
              Places to Shop
            </p>
            <div className="grid grid-cols-1 text-xl px-3 my-6 gap-4 text-olive">
              <p className="mt-2 font-bold underline">
                Garden District/Irish Channel
              </p>
              <p>Elle Boutique</p>
              <p>The Sunday Shop</p>
              <p>Defend New Orleans</p>
              <p className="mt-2 font-bold underline">Uptown</p>
              <p>Pied Nu</p>
              <p>Scriptura</p>
              <p>Pilot and Powell</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
