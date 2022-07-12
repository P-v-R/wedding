import React from "react";
import movie from "../assets/AP.mp4";

function PromoVideo() {
  return (
    <div className="hidden md:block xl:hidden">
      <video loop autoPlay muted>
        <source src={movie} type="video/mp4" />
      </video>
    </div>
  );
}
export default PromoVideo;
