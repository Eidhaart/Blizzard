import React, { useState } from "react";
import "./Shows.css";
import ContactForm from "./ContactForm";

const ObslugaImprez = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="shows-section" id="obsluga-imprez">
      <div className="shows-container">
        <h2 className="shows-heading">Obsługa Imprez</h2>
        <p className="shows-intro">
          Oprócz pokazów oferujemy również kompleksową obsługę imprez
          historycznych, na którą składają się m.in. stoiska, koncerty, etc.
        </p>

        {/* Image Category */}
        <div className="show-category">
          <div className="show-image">
            <img
              src={`${process.env.PUBLIC_URL}/EventService.jpg`}
              alt="Event Service"
            />
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="cta-container">
          <button onClick={openModal} className="cta-button">
            Skontaktuj się z nami
          </button>
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

export default ObslugaImprez;
