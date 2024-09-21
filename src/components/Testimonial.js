import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    quote: "Cytat",
    name: "Imie ",
    role: "Stanowisko",
  },
  {
    quote: "Cytat",
    name: "Imie ",
    role: "Stanowisko",
  },
  {
    quote: "Cytat",
    name: "Imie ",
    role: "Stanowisko",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      <h2 className="testimonial-heading">What People Are Saying</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            {testimonial.role && (
              <p className="testimonial-role">{testimonial.role}</p>
            )}
          </div>
        ))}
      </div>
      <div className="testimonial-cta-container">
        {/* <button className="testimonial-cta-button">Hear More Stories</button> */}
      </div>
    </section>
  );
};

export default Testimonial;
