import React, { useState } from "react";
import "./Shows.css";
import ContactForm from "./ContactForm";

const Shows = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="shows-section" id="shows">
      <div className="shows-container">
        <h2 className="shows-heading">Nasze Pokazy</h2>
        <p className="shows-intro">
          Od 2000 roku organizuję pokazy kaskaderskie konne, historyczne, psich
          zaprzęgów i nie tylko. Jesteśmy grupą stawiająca nie tylko na efekt,
          ale i na edukację. Mam nadzieję, że nasza oferta zainteresuje Państwa
          i zechcecie nas obejrzeć na jednym z organizowanych przez Was eventów.
        </p>

        {/* Husaria Category */}
        <div className="show-category">
          <div className="show-text">
            <h3>Husaria</h3>
            <p>
              We have prepared a special offer: the largest show we have
              organized so far. A performance with 7 (minimum 5 horses) executed
              in the style of 17th-century hussars. This show is rich in
              equestrian skills, magnificent costumes, and includes stunt and
              pyrotechnic effects.
            </p>
          </div>
          <div className="show-image">
            <img
              src={`${process.env.PUBLIC_URL}/Husaria.jpg`}
              alt="Hussar Show"
            />
          </div>
        </div>

        {/* Rycerstwo Category */}
        <div className="show-category">
          <div className="show-image">
            <img
              src={`${process.env.PUBLIC_URL}/Rycerstwo.jpg`}
              alt="Knight Show"
            />
          </div>
          <div className="show-text">
            <h3>Rycerstwo</h3>
            <p>
              Our medieval knight shows are full of commentary, facts, and
              legends from the medieval era. The show includes knightly skills
              with weapons appropriate to the period, and as a grand finale, we
              present a real jousting tournament.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="cta-container">
          <button onClick={openModal} className="cta-button">
            Contact Us
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

export default Shows;
