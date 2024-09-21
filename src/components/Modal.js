import React from "react";
import "./Modal.css";

const Modal = ({ showModal, handleClose }) => {
  return (
    <div
      className={`modal-overlay ${showModal ? "visible" : ""}`}
      onClick={handleClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        <div className="modal-banner">
          <img src="banner.jpg" alt="Banner" className="modal-banner-img" />
        </div>
        <div className="modal-description">
          <h2>About Me</h2>
          <p>
            My name is Bartosz Gadziomski. I have been involved with horses and
            dogs since birth. Dogs and horses have always been present in our
            home. From a young age, I rode horses, and actually, my mother rode
            while pregnant with me. I just continued the family tradition, and
            there is much to continue, as one of my great-grandfathers was a
            lancer, and the other a cavalryman.
            <br />
            <br />
            My adventure with dog sledding ran parallel to my work with horses.
            I had my first start in dog sledding in 1994, and over the years, I
            have achieved several titles including Polish Champion, Vice World
            Champion, and European Champion in various disciplines (from 6-dog
            sleds to canicross). I have competed on tracks across almost all of
            Europe, as well as in the USA and Canada.
            <br />
            <br />
            Horses taught me composure, precision, and accuracy, while dog
            sports gave me self-belief, strength, and resilience. Such extensive
            experience obliges me to prioritize the well-being of the animals we
            work with. As a result, they are emotionally connected to us, trust
            us fully, and become engaged actors rather than mere performers in
            our shows.
            <br />
            <br />
            I began my career as a horse stunt performer as a young man with
            Jacek Kadłubowski's group in Andrzej Wajda’s film Pan Tadeusz. Then
            in 2000, I traveled with the Malinowscy Trick Riders to the town of
            High Chaparral in Sweden, where my adventure with horse shows began
            and continues to this day. I gained experience with the best groups
            in Poland and abroad. I have gone through all career levels, from a
            rider in a theme park to an organizer of historical events and a
            stunt coordinator for large film productions, both Polish and
            international. This experience allowed me to create the best horse
            group in Poland and the best stunt team. Each of us is a specialist
            in our field, allowing us to complement each other and create
            fantastic shows and performances, while on film sets, we guarantee
            the highest professionalism, experience, and safety.
            <br />
            <br />
            Explore our offer, and we will gladly introduce you to our magical
            world full of extreme experiences and education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
