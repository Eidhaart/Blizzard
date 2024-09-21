import React, { useState } from "react";
import "./ModalGallery.css";
import ImagePreview from "./ImagePreview";

const ModalGallery = ({ images, closeModal }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openPreview = (index) => {
    setSelectedImageIndex(index);
  };

  const closePreview = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="modal-gallery-overlay">
      <div className="modal-gallery-content">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-grid-item"
              onClick={() => openPreview(index)}
            />
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImageIndex !== null && (
        <ImagePreview
          images={images}
          selectedImageIndex={selectedImageIndex}
          closePreview={closePreview}
        />
      )}
    </div>
  );
};

export default ModalGallery;
