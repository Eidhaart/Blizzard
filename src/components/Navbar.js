import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Smooth scroll function for clicking navbar links
  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top for Home
    } else {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after clicking on a link in mobile view
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Navbar title */}
        <div
          className="navbar-logo-title"
          style={{ textAlign: windowWidth < 768 ? "center" : "left" }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            className="navbar-logo"
          />
          <a
            href="#"
            className="navbar-title"
            style={{ fontSize: windowWidth < 768 ? "1.2rem" : "1.5rem" }}
          >
            Bartosz Gadziomski
          </a>
        </div>

        {/* Hamburger menu for mobile */}
        {windowWidth < 768 ? (
          <button
            className="navbar-hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        ) : null}

        {/* Navbar links */}
        <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <button
            onClick={() => scrollToSection("home")}
            className="navbar-link"
          >
            Strona główna
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="navbar-link"
          >
            O mnie
          </button>

          {/* Usługi Dropdown */}
          <div
            className="navbar-link dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            Usługi
            <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
              <button
                onClick={() => scrollToSection("shows")}
                className="dropdown-item"
              >
                Pokazy
              </button>
              <button
                onClick={() => scrollToSection("filmy-reklamy")}
                className="dropdown-item"
              >
                Filmy Reklamy i Sesje Zdjęciowe
              </button>
              <button
                onClick={() => scrollToSection("kaskaderka-filmowa")}
                className="dropdown-item"
              >
                Kaskaderka Filmowa
              </button>
              <button
                onClick={() => scrollToSection("obsluga-imprez")}
                className="dropdown-item"
              >
                Obsługa imprez
              </button>
            </div>
          </div>

          {/* Gallery Section */}
          <button
            onClick={() => scrollToSection("gallery")}
            className="navbar-link"
          >
            Galeria
          </button>

          {/* Opinie Section */}
          {/* <button
            onClick={() => scrollToSection("opinie")}
            className="navbar-link"
          >
            Opinie
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
