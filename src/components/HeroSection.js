import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="overlay"></div>
      {/* Update the video tag */}
      <video className="video-background" autoPlay loop muted playsInline>
        <source
          src={`${process.env.PUBLIC_URL}/video-file.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Horseback stunt shows Blizzard</h1>
        <p>
          <i>World-Class Horse Stunt Shows & Historical Reenactments</i>
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
