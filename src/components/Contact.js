import React, { useState } from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-image-container">
            <img
              src={`${process.env.PUBLIC_URL}/piesioGrzesio.jpg`}
              alt="Event Service"
              className="contact-card-image"
            />
            <div className="contact-text-overlay">
              <h2 className="contact-heading">Skontaktuj się z nami!</h2>
              <p className="contact-text">
                Chcesz dodać magii do swojego wydarzenia dzięki pokazom
                kaskaderskim na koniach? Skontaktuj się z nami już dziś, aby
                otrzymać spersonalizowaną ofertę!
              </p>
              <button onClick={openModal} className="contact-cta-button">
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="contact-modal-overlay" onClick={closeModal}>
            <div
              className="contact-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="contact-close-button" onClick={closeModal}>
                &times;
              </span>
              <ContactForm />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
