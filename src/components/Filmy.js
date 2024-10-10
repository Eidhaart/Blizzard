import React, { useState } from "react";
import "./Shows.css";
import ContactForm from "./ContactForm";

const Filmy = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openExternalLink = () => {
    window.open("https://filmpolski.pl/fp/index.php?osoba=11180823", "_blank");
  };

  return (
    <section className="shows-section" id="filmy-reklamy">
      <div className="shows-container">
        <h2 className="shows-heading">Filmy Reklamy i Sesje Zdjęciowe</h2>
        <p className="shows-intro">
          Ze zwierzętami mam kontakt od dziecka, dzięki temu doskonale nauczyłem
          się czytać ich emocje i nastroje. Wspólnie z grupą zaufanych trenerów
          zwierząt pracujemy z naszymi podopiecznymi na planach filmowych, w
          reklamach i sesjach zdjęciowych, zapewniając bezpieczne warunki pracy,
          zsocjalizowane zwierzęta, a przede wszystkim kładąc nacisk na
          dobrostan naszych aktorów.
        </p>
        <br></br>

        {/* External Link Button */}
        <div className="cta-container">
          <button onClick={openExternalLink} className="cta-button">
            Zobacz Realizacje Filmowe
          </button>
        </div>
        <br></br>

        {/* First Image Category */}
        <br></br>
        <br></br>

        <div className="show-category">
          <div className="show-text">
            <h3>Filmy z udziałem zwierząt</h3>
            <p>
              Pracowaliśmy nad wieloma filmami, w których nasi zwierzęcy aktorzy
              mieli kluczowe role. Zapewniamy, że każdy zwierzak jest
              przygotowany i zsocjalizowany do pracy na planie, co pozwala na
              bezproblemową współpracę.
            </p>
          </div>
          <div className="show-image">
            <img
              src={`${process.env.PUBLIC_URL}/AnimalsOnSet.jpg`}
              alt="Animals on Set"
            />
          </div>
        </div>

        {/* Second Image Category */}
        <div className="show-category">
          <div className="show-image">
            <img
              src={`${process.env.PUBLIC_URL}/AnimalTrainer.jpg`}
              alt="Animal Trainer"
            />
          </div>
          <div className="show-text">
            <h3>Trenerzy i Sesje Zdjęciowe</h3>
            <p>
              Nasze sesje zdjęciowe z udziałem zwierząt to nie tylko piękne
              ujęcia, ale i profesjonalne podejście. Zapewniamy, że zarówno
              zwierzęta, jak i ekipa na planie pracują w harmonii, co przekłada
              się na doskonałe efekty.
            </p>
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

export default Filmy;
