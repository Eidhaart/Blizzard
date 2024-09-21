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
      <h2 className="contact-heading">Let's Work Together</h2>
      <p className="contact-text">
        Ready to bring the magic of horse stunt shows to your event? Contact us
        today for a personalized offer!
      </p>
      <button onClick={openModal} className="contact-cta-button">
        Get in Touch
      </button>

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
    </section>
  );
};

export default Contact;
