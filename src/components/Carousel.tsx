import { useEffect, useRef, useState } from 'react';

const SLIDES = [
  '/images/gallery/herrasmies.jpg',
  '/images/gallery/korumalli.jpg',
  '/images/gallery/koskella.jpg',
  '/images/gallery/merella.jpg',
  '/images/gallery/anne-kalassa.jpg',
  '/images/gallery/avannossa.jpg',
  '/images/gallery/paljussa.jpg',
  '/images/gallery/tauolla.jpg',
  '/images/gallery/dinkilla.jpg',
];

const INTERVAL_MS = 4000;
const GAP = 16;

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const paused = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLImageElement>(null);

  const computeOffset = () => {
    if (!containerRef.current || !slideRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const slideWidth = slideRef.current.offsetWidth;
    setOffset((containerWidth - slideWidth) / 2);
  };

  useEffect(() => {
    computeOffset();
    window.addEventListener('resize', computeOffset);
    return () => window.removeEventListener('resize', computeOffset);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
      }
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const trackStyle = {
    transform: `translateX(${offset - current * ((slideRef.current?.offsetWidth ?? 0) + GAP)}px)`,
  };

  return (
    <div
      ref={containerRef}
      className="carousel"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <div className="carousel__track" style={trackStyle}>
        {SLIDES.map((src, index) => (
          <img
            key={src}
            ref={index === 0 ? slideRef : undefined}
            src={src}
            alt=""
            className={`carousel__slide${index === current ? ' carousel__slide--active' : ''}`}
          />
        ))}
      </div>
      <div className="carousel__dots">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`carousel__dot${index === current ? ' carousel__dot--active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
