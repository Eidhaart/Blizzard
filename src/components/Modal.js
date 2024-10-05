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
          <img
            src={`${process.env.PUBLIC_URL}/banner.jpg`}
            alt="Banner"
            className="modal-banner-img"
          />
        </div>
        <div className="modal-description">
          <h2>O mnie</h2>
          <br></br>

          <p>
            Nazywam się Bartosz Gadziomski. Z końmi i psami jestem związany od
            urodzenia. Zawsze w naszym domu obecne były psy i konie. Od
            najmłodszych lat jeździłem konno, a właściwie moja mama jeździła
            konno będąc w ciąży. Ja już tylko kontynuowałem tradycje rodzinne, a
            jest co kontynuować, gdyż jeden z moich pradziadków był ułanem, a
            drugi szwoleżerem.
            <br></br>
            <br></br>
            Przygoda z końmi szła równolegle ze sportem psich zaprzęgów w którym
            swój pierwszy start zaliczyłem w 1994 roku, a potem na przestrzeni
            lat sięgnąłem po kilka tytułów Mistrza Polski, V-ce Mistrza świata i
            Mistrza Europy w różnych dyscyplinach (od 6 psich zaprzęgów po
            canicross). Startowałem na trasach prawie w całej Europie jak w USA
            i Kanadzie Konie nauczyły mnie opanowania, dokładności i precyzji, a
            sport z psami dał mi wiarę w siebie siłę i niezłomność. Tak duże
            doświadczenie zobowiązuje mnie do stawiania na pierwszym miejscu
            dobrostanu zwierząt z którymi pracujemy. Dzięki temu są emocjonalnie
            z nami związane, ufają nam w pełni i stają się zaangażowanymi
            aktorami, a nie tylko odtwórcami w naszych spektaklach. Swoją
            karierę kaskadera konnego zacząłem jako młody chłopak w grupie Jacka
            Kadłubowskiego w filmie Andrzeja Wajdy “Pan Tadeusz”. Potem w 2000
            roku wyjechałem wraz z grupą Malinowscy Trick Riders do miasteczka
            High Chaparral w Szwecji i tam zaczęła się moja przygoda z pokazami
            konnymi, która trwa do dziś. Zdobywałem doświadczenie w najlepszych
            grupach w Polsce i za granicą.
            <br></br>
            <br></br>
            Poznałem wszystkie szczeble kariery od jeźdźca w parku rozrywki po
            organizatora imprez historycznych i koordynatora kaskaderskiego w
            dużych produkcjach filmowych polskich i zagranicznych. Dzięki temu
            udało mi się stworzyć najlepszą grupę konną w Polsce oraz najlepszy
            team kaskaderski. Każdy z nas jest specjalistą w swojej dziedzinie,
            dzięki temu uzupełniamy się i tworzymy fantastyczne spektakle i
            przedstawienia, a na planie filmowym gwarantujemy najwyższy
            profesjonalizm, doświadczenie i bezpieczeństwo.
            <br></br>
            <br></br>
            Zapoznaj się z naszą ofertą a z przyjemnością wprowadzimy Cię w nasz
            magiczny świat pełen ekstremalnych doznań oraz edukacji.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
