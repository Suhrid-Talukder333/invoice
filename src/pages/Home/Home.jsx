import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import heroImg from "../../assets/undraw_Notebook_re_id0r.svg";
import "./Home_styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-header">Invoice, Easy and Free</h1>
          <h2 className="hero-description">Its simple, Its free.</h2>
          <a href="#home" className="hero-btn">
            Start Using For Free
          </a>
        </div>
        <div className="hero-decoration">
          <img
            className="hero-decoration-img"
            src={heroImg}
            alt="hero decoration"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
