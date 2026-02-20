import React from "react";
import "./App.css";

function App() {
  const events = [
    {
      title: "Weddings",
      image: "/weddings.jpg",
      description: "Elegant and unforgettable wedding experiences."
    },
    {
      title: "Birthdays",
      image: "/birthdays.jpg",
      description: "Memorable birthday celebrations for all ages."
    },
    {
      title: "Luxury Picnics",
      image: "/luxuriouspicnics.jpg",
      description: "Beautifully styled luxury picnic setups."
    },
    {
      title: "Corporate Events",
      image: "/corporateevents.jpg",
      description: "Professional and well-organized corporate gatherings."
    },
    {
      title: "Private Events",
      image: "/privateevents.jpg",
      description: "Exclusive and sophisticated private celebrations."
    }
  ];

  return (
    <div className="App">
      <header className="navbar">
        <h1>Velora Events</h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Creating Elegant & Memorable Events</h2>
        <p>Luxury event planning with style and perfection.</p>
        <button>Book Now</button>
      </section>

      <section id="services" className="services">
        <h2>Our Event Categories</h2>
        <div className="card-container">
          {events.map((event, index) => (
            <div className="card" key={index}>
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Tell us about your event"></textarea>
        <button>Submit</button>
      </section>

      <footer>
        <p>© 2026 Velora Events. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;