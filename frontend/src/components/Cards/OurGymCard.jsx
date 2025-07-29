import React from "react";
import Carousel from "../Carousel";
import SanGymLogo from "../../assets/SanGym.png";
import OutGym from "../../assets/OutGym.png";
import IntoGym from "../../assets/IntoGym.png";
import "./OurGymCard.css";

function OurGymCard() {
  // Images for the gym carousel
  const gymImages = [
    { src: SanGymLogo, alt: "SanGym Logo" },
    { src: OutGym, alt: "OutGym Logo" },
    { src: IntoGym, alt: "IntoGym Logo" },
  ];

  return (
    <div className="our-gym-card">
      <h2 className="our-gym-card__title">Nuestro gimnasio</h2>
      <div className="our-gym-card__carousel">
        <Carousel images={gymImages} />
      </div>
    </div>
  );
}

export default OurGymCard;
