import React, { useState } from "react";
import "./Shows.css";
import ContactForm from "./ContactForm";

const Kaskaderka = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openExternalLink = () => {
    window.open("https://filmpolski.pl/fp/index.php?osoba=1170002", "_blank");
  };

  return (
    <section className="shows-section" id="kaskaderka-filmowa">
      <div className="shows-container">
        <h2 className="shows-heading">Kaskaderka Filmowa</h2>
        <p className="shows-intro">
          Moja przygoda z kaskaderką filmową zaczęła się w 1998 roku od filmu{" "}
          <em>Pan Tadeusz</em>, gdzie występowałem w grupie Jacka
          Kadłubowskiego. Następnie skończyłem szkołę kaskaderów filmowych IST
          Ryszarda Janikowskiego działającą przy Stowarzyszeniu Filmowców
          Polskich. Dzięki licznym produkcjom i szkoleniom zyskałem duże
          doświadczenie przy produkcjach polskich jak i zagranicznych, nie tylko
          jako kaskader, ale również jako koordynator kaskaderski czy
          koordynator scen z udziałem koni.
        </p>
        <p className="shows-intro">
          Specjalizujemy się w kaskaderce konnej, szermierce, paleniach, walkach
          wręcz, upadkach z wysokości. Nie obca jest nam również kaskaderka
          samochodowa czy motocyklowa.
        </p>

        {/* External Link Button */}
        <div className="cta-container">
          <button onClick={openExternalLink} className="cta-button">
            Więcej o moim doświadczeniu znajdziesz tu
          </button>
        </div>

        <br></br>
        <br></br>
        <br></br>
        {/* First Image Category */}
        <div className="show-category">
          <div className="show-text">
            <h3>Kaskaderka Konna</h3>
            <p>
              Jako koordynator scen z udziałem koni, nadzorowałem i wykonywałem
              różne kaskaderskie sceny z udziałem tych wspaniałych zwierząt,
              dbając jednocześnie o ich bezpieczeństwo na planie.
            </p>
          </div>
          <div className="show-image">
            <img
              src={`${process.env.PUBLIC_URL}/FilmStunts.jpg`}
              alt="Horse Stunt Show"
            />
          </div>
        </div>

        {/* Second Image Category */}
        <div className="show-category">
          <div className="show-image">
            <img
              src={`${process.env.PUBLIC_URL}/HorseStunts.jpg`}
              alt="Film Stunt Show"
            />
          </div>
          <div className="show-text">
            <h3>Koordynacja i Kaskaderka Filmowa</h3>
            <p>
              Specjalizujemy się w różnych technikach kaskaderskich, takich jak
              upadki z wysokości, szermierka, palenia i walki wręcz, a także
              kaskaderka samochodowa i motocyklowa.
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

export default Kaskaderka;
