import React from "react";
import "../styles/HeroSection.css";
import { IoSearch } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="hero-main">
      <div className="hero-img"></div>
      <div className="hero-texts">
        <h1>
          Meet your <span className="text-danger">cravings</span> anytime!
        </h1>
        <input type="text" className="hero-input" placeholder="Search for restaurants , locations.." />
        <div className="hero-search-bar">
        <div className="hero-icon text-danger"><IoSearch/></div>
        <div className="hero-btn btn text-light">Search</div>
        </div>
       
      </div>
    </div>
  );
};

export default HeroSection;
