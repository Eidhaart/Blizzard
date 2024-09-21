import React from "react";
import "./App.css"; // Global CSS
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Shows from "./components/Shows";
import Gallery from "./components/Gallery"; // Ensure this matches the export

import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Shows />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
