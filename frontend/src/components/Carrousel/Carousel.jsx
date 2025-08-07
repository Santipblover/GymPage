import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const total = images.length;

  const changeSlide = (direction) => {
    if (isFading) return; // Evitar múltiples clics durante la animación
    
    setIsFading(true);
    setTimeout(() => {
      if (direction === 'prev') {
        setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
      } else {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
      }
      setIsFading(false);
    }, 200); 
  };

  const prevSlide = () => changeSlide('prev');
  const nextSlide = () => changeSlide('next');

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={prevSlide}>&lt;</button>
      <div className="carousel-image-wrapper">
        <img 
          src={images[current].src} 
          alt={images[current].alt} 
          className={`carousel-image ${isFading ? 'fade-out' : ''}`} 
        />
      </div>
      <button className="carousel-arrow right" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default Carousel; 