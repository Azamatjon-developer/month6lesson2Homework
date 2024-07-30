import React from "react";
import "./hero.css"

import heroRight from "../../assets/images/hero-left.png"
const Hero = () => {
  return (
    <>
      <div className="container text-red-600">
        <div className="global-hero">
          <div className="hero-left">
            <h1 className="text-red-500"> Good Food Us Good Mood </h1>
            <p>
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>
            <div className="hero-btn">
              <button className="hero-btn-left bg-slate-500"> Daftar Sekarang </button>
              <button className="hero-btn-right"> About Us </button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-right-img">
                <img src={heroRight} alt="img"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
