import React, { useEffect } from "react";
import "./ImagePreview.css";

const ImagePreview = ({ images, selectedImageIndex, closePreview }) => {
  const [currentIndex, setCurrentIndex] = React.useState(selectedImageIndex);

  const showPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPreviousImage();
      if (e.key === "Escape") closePreview();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="image-preview-overlay">
      <div className="image-preview-content">
        <span className="close-preview-button" onClick={closePreview}>
          &times;
        </span>
        <img
          src={images[currentIndex]}
          alt={`Preview ${currentIndex + 1}`}
          className="preview-image"
        />
        <div className="navigation-buttons">
          <button className="prev-button" onClick={showPreviousImage}>
            &#10094;
          </button>
          <button className="next-button" onClick={showNextImage}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
