import React from "react";
import movie from "../assets/AP.mp4";

function PromoVideo() {
  return (
    <div className="">
      <video loop autoPlay="" muted>
        <source src={movie} type="video/mp4" />
      </video>
    </div>
  );
}
export default PromoVideo;
