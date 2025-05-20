import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroCarousel.css';

import img9 from '../asset/image/img9.jpg';
import img7 from '../asset/image/img7.jpg';
import img8 from '../asset/image/img8.jpg';
import img4 from '../asset/image/img4.jpg';
const images = [img9, img7, img8,img4];

const HeroCarousel = () => {
  const carouselRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div className="hero-carousel" ref={carouselRef} style={{ fontFamily: "'Monsieur La Doulaise', cursive"}}>
      {visible && (
        <div className="carousel-overlay" > 
          <h1>RENUKA CHOUDHARY</h1>
          <p>Email: renuka@example.com | Phone: +91-9876543210</p>
        </div>
      )}

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={2000}
        stopOnHover={false}
        emulateTouch
        swipeable
        showArrows={false}
        animationHandler="fade"
      >
        {images.map((img, i) => (
          <div key={i} className="carousel-slide">
            <img src={img} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
