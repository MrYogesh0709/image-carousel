import React, { useEffect, useState } from "react";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  CircleDot,
  Circle,
} from "lucide-react";

const ImageSlider = ({ imageUrl }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrl.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrl.length - 1) return 0;
      return index + 1;
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      showNextImage();
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {React.useMemo(() => {
          return imageUrl.map((item, index) => (
            <img
              key={item.name}
              src={item.src}
              alt={item.name}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
              aria-hidden={imageIndex !== index}
            />
          ));
        }, [imageIndex, imageUrl])}
      </div>
      <button
        className="img-slider-btn"
        style={{ left: 0 }}
        onClick={showPrevImage}
        aria-label="view previous image"
        aria-hidden
      >
        <ChevronLeftCircle />
      </button>
      <button
        className="img-slider-btn"
        style={{ right: 0 }}
        onClick={showNextImage}
        aria-label="view next image"
        aria-hidden
      >
        <ChevronRightCircle />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          display: "flex",
          gap: ".25rem",
          left: "50%",
          translate: "-50%",
        }}
      >
        {React.useMemo(() => {
          return imageUrl.map((_, index) => (
            <button
              key={index}
              onClick={() => setImageIndex(index)}
              className="img-slider-dot-btn"
              aria-hidden
              aria-label={`view image ${index + 1}`}
            >
              {index === imageIndex ? <CircleDot /> : <Circle />}
            </button>
          ));
        }, [imageIndex, imageUrl])}
      </div>
    </section>
  );
};

export default ImageSlider;
