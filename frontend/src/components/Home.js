import React from "react";
import "./Home.css";
import bgImage from "../assets/background.jpeg";

const Home = ({ onGetStarted }) => {
  return (
    <section
      className="home"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <h1>Women first, Safe gigs, Trusted work</h1>

        <button className="cta-btn" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
