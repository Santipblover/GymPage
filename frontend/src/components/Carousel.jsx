import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={prevSlide}>&lt;</button>
      <div className="carousel-image-wrapper">
        <img src={images[current].src} alt={images[current].alt} className="carousel-image" />
      </div>
      <button className="carousel-arrow right" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default Carousel; 