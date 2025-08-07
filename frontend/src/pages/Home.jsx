import React from "react";
import WelcomeCard from "../components/Cards/WelcomeCard";
import OurGymCard from "../components/Cards/OurGymCard";
import Footer from "../components/Footer/Footer";
import ContactCard from "../components/Cards/ContactCard";

import "./Home.css";

function Home() {
 
  return (
    <>
      <section className="home-section">
      </section>
      <div className="welcome-card-container" >
        <WelcomeCard />
      </div>
      <div className="button-container">
        <button className="routine-button">
          Armate tu rutina
        </button>
      </div>
      <div className="our-gym-card-container">
        <OurGymCard />
      </div>
      <ContactCard />
      <Footer />
    </>
  );
}

export default Home; 