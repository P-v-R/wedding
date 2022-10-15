import React from "react";
import { Parallax } from "react-scroll-parallax";
import Drink from "../assets/drink.png";


function HotelLogo() {
  return (
    <Parallax speed={0}>
      <div className="mx-auto text-darkGreen pt-4 md:pt-10">
      <a className="text-2xl md:text-5xl hover:font-bold" target="#" href="https://www.brennansneworleans.com/">
            Brennan's
          </a>
        {/* <p className="text-2xl md:text-5xl">Brennan's</p> */}
        <p className="text-lg md:text-2xl pb-10 pt-2">New Orleans, Louisiana</p>
        <img className="w-32 mx-auto pb-10 " src={Drink} alt="hotel-logo" />
      </div>
      <p className="text-xl md:text-2xl py-10">October 21st, 2023</p>
    </Parallax>
  );
}

export default HotelLogo;
