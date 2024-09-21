import React, { useState } from "react";
import "./Gallery.css";
import ModalGallery from "./ModalGallery";
import ImagePreview from "./ImagePreview";

// Dynamically import all images from the gallery folder
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../images/gallery", false, /\.(png|jpe?g|svg)$/)
);

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Function to open the image preview
  const openPreview = (index) => {
    setSelectedImageIndex(index);
  };

  const closePreview = () => {
    setSelectedImageIndex(null);
  };

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="gallery-preview">
        {images.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Preview ${index + 1}`}
            className="gallery-thumbnail"
            onClick={() => openPreview(index)} // Opens preview when image is clicked
          />
        ))}
      </div>

      <div className="gallery-cta-container">
        <button onClick={openModal} className="gallery-cta-button">
          See More
        </button>
      </div>

      {/* Image Preview Modal */}
      {selectedImageIndex !== null && (
        <ImagePreview
          images={images}
          selectedImageIndex={selectedImageIndex}
          closePreview={closePreview}
        />
      )}

      {/* Modal Gallery */}
      {showModal && <ModalGallery images={images} closeModal={closeModal} />}
    </section>
  );
};

export default Gallery;
