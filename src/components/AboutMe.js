import React, { useState } from "react";
import "./AboutMe.css";
import Modal from "./Modal";

const AboutMe = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="about-me" id="about">
      <div className="about-me-container">
        <div className="about-me-content">
          <div className="about-me-image">
            <img
              src={`${process.env.PUBLIC_URL}/your-image.jpg`}
              alt="Bartosz Gadziomski"
            />
          </div>
          <div className="about-me-text">
            <h2>O Mnie</h2>
            <p>
              I’m Bartosz Gadziomski, a lifelong horse rider and champion dog
              sledder. With over two decades of experience in stunt coordination
              for film and live shows, I lead Poland’s top horse stunt team,
              combining passion, professionalism, and safety in every
              performance.
            </p>
            <button onClick={handleOpenModal} className="cta-button">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Modal for full About Me text */}
      <Modal showModal={showModal} handleClose={handleCloseModal} />
    </section>
  );
};

export default AboutMe;
