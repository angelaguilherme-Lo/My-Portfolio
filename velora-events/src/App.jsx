import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const events = [
    { title: "Weddings", image: "/weddings.jpg", description: "Elegant and timeless wedding experiences." },
    { title: "Birthdays", image: "/birthdays.jpg", description: "Memorable birthday celebrations for all ages." },
    { title: "Luxury Picnics", image: "/luxuriouspicnics.jpg", description: "Beautifully styled luxury picnic setups." },
    { title: "Corporate Events", image: "/corporateevents.jpg", description: "Professional and organized corporate gatherings." },
    { title: "Private Events", image: "/privateevents.jpg", description: "Exclusive and sophisticated private celebrations." },
    { title: "Events", image: "/events.jpg", description: "Luxurious events and Gourmet catering." }
  ];

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1>Velora Events</h1>
        <nav>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")}>Services</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>Contact</a>
        </nav>
      </header>

      {/* Hero Section with Parallax */}
      <section 
        className="hero" 
        style={{ backgroundPositionY: `${offsetY * 0.5}px` }}
      >
        <div className="hero-overlay"></div>
        <h2>Crafting Elegant & Memorable Experiences</h2>
        <p>Luxury event planning with style and perfection.</p>
        <button>Book Now</button>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Event Categories</h2>
        <div className="cards">
          {events.map((event, index) => (
            <div className="card" key={index}>
              <div className="card-image-wrapper">
                <img src={event.image} alt={event.title} />
                <div className="image-overlay"></div>
              </div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Tell us about your event" rows="4" required />
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Velora Events. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;